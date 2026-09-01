import { createReader } from '@keystatic/core/reader';
import config from '../../keystatic.config';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync, readdirSync, readFileSync } from 'fs';

// Resolve the repo path - handle both dev and prerender contexts
function getRepoPath() {
  // Try multiple possible base paths
  const possiblePaths = [
    // When running from src/lib
    join(dirname(fileURLToPath(import.meta.url)), '..', '..'),
    // When running from dist
    process.cwd(),
  ];

  for (const basePath of possiblePaths) {
    const contentPath = join(basePath, 'src', 'content');
    if (existsSync(contentPath)) {
      return basePath;
    }
  }

  // Fallback to cwd
  return process.cwd();
}

const repoPath = getRepoPath();

// Create a local reader for build-time content access
let reader: ReturnType<typeof createReader> | null = null;
try {
  reader = createReader(repoPath, config);
} catch (e) {
  console.warn('Failed to create Keystatic reader:', e);
}

// Fallback: Read content directly from file system
function parseFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: content };

  const frontmatter = match[1];
  const body = match[2] || '';

  // Simple YAML-like parser for frontmatter (handles nested objects)
  const data: Record<string, unknown> = {};
  const stack: Array<{ key: string; obj: Record<string, unknown>; indent: number }> = [];
  let currentObj = data;
  let currentIndent = 0;

  for (const line of frontmatter.split('\n')) {
    if (line.trim() === '') continue;

    const indent = line.length - line.trimStart().length;
    const trimmed = line.trim();

    // Handle array items
    if (trimmed.startsWith('- ')) {
      // This is an array item - for simplicity, skip complex array handling
      continue;
    }

    if (!trimmed.includes(':')) continue;

    const colonIndex = trimmed.indexOf(':');
    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    // Pop stack if we're at same or lower indent
    while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }

    currentObj = stack.length > 0 ? stack[stack.length - 1].obj : data;

    if (value === '') {
      // This is a nested object
      const newObj: Record<string, unknown> = {};
      currentObj[key] = newObj;
      stack.push({ key, obj: newObj, indent });
    } else {
      currentObj[key] = parseValue(value);
    }
  }

  return { data, content: body };
}

function parseValue(value: string): unknown {
  if (value === 'null') return null;
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^\d+$/.test(value)) return parseInt(value, 10);
  if (/^\d+\.\d+$/.test(value)) return parseFloat(value);
  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1);
    if (inner.trim() === '') return [];
    return inner.split(',').map(v => parseValue(v.trim()));
  }
  return value;
}

function getFilesInDir(dir: string): string[] {
  try {
    const fullPath = join(repoPath, dir);
    if (!existsSync(fullPath)) return [];
    return readdirSync(fullPath)
      .filter(f => f.endsWith('.mdoc') || f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => f.replace(/\.(mdoc|mdx|md)$/, ''));
  } catch {
    return [];
  }
}

function readFileContent(dir: string, slug: string): { data: Record<string, unknown>; content: string } | null {
  const fullPath = join(repoPath, dir);
  if (!existsSync(fullPath)) return null;

  for (const ext of ['.mdoc', '.mdx', '.md']) {
    const filePath = join(fullPath, `${slug}${ext}`);
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, 'utf-8');
      return parseFrontmatter(content);
    }
  }
  return null;
}

// Helper: Get all posts sorted by date descending
export async function getAllPosts(): Promise<Array<{ slug: string; data: Record<string, unknown> }>> {
  try {
    if (reader) {
      const slugs = await reader.collections.posts.list();
      const posts = await Promise.all(
        slugs.map(async (slug) => {
          const entry = await reader!.collections.posts.read(slug);
          return { slug, data: entry as Record<string, unknown> };
        })
      );
      return posts
        .filter(p => p.data !== null)
        .sort((a, b) => {
          const dateA = new Date(a.data.date as string || 0).getTime();
          const dateB = new Date(b.data.date as string || 0).getTime();
          return dateB - dateA;
        });
    }
  } catch (e) {
    console.warn('Using fallback for getAllPosts:', e);
  }

  // Fallback: read from file system
  const slugs = getFilesInDir('src/content/articles');
  return slugs
    .map(slug => {
      const result = readFileContent('src/content/articles', slug);
      return result ? { slug, data: result.data } : null;
    })
    .filter(Boolean) as Array<{ slug: string; data: Record<string, unknown> }>;
}

// Helper: Get a single post by slug
export async function getPostBySlug(slug: string): Promise<{ slug: string; data: Record<string, unknown> } | null> {
  try {
    if (reader) {
      const entry = await reader.collections.posts.read(slug);
      return entry ? { slug, data: entry as Record<string, unknown> } : null;
    }
  } catch (e) {
    console.warn('Using fallback for getPostBySlug:', e);
  }

  // Fallback: read from file system
  const result = readFileContent('src/content/articles', slug);
  return result ? { slug, data: result.data } : null;
}

// Helper: Get all categories
export async function getAllCategories(): Promise<Array<{ slug: string; data: Record<string, unknown> }>> {
  try {
    if (reader) {
      const slugs = await reader.collections.categories.list();
      const categories = await Promise.all(
        slugs.map(async (slug) => {
          const entry = await reader!.collections.categories.read(slug);
          return { slug, data: entry as Record<string, unknown> };
        })
      );
      return categories
        .filter(c => c.data !== null)
        .sort((a, b) => ((a.data.order as number) || 0) - ((b.data.order as number) || 0));
    }
  } catch (e) {
    console.warn('Using fallback for getAllCategories:', e);
  }

  // Fallback: read from file system
  const slugs = getFilesInDir('src/content/categories');
  return slugs
    .map(slug => {
      const result = readFileContent('src/content/categories', slug);
      return result ? { slug, data: result.data } : null;
    })
    .filter(Boolean) as Array<{ slug: string; data: Record<string, unknown> }>;
}

// Helper: Get category by slug
export async function getCategoryBySlug(slug: string): Promise<{ slug: string; data: Record<string, unknown> } | null> {
  try {
    if (reader) {
      const entry = await reader.collections.categories.read(slug);
      return entry ? { slug, data: entry as Record<string, unknown> } : null;
    }
  } catch (e) {
    console.warn('Using fallback for getCategoryBySlug:', e);
  }

  // Fallback: read from file system
  const result = readFileContent('src/content/categories', slug);
  return result ? { slug, data: result.data } : null;
}

// Helper: Get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<Array<{ slug: string; data: Record<string, unknown> }>> {
  const allPosts = await getAllPosts();
  return allPosts.filter(p => p.data.category === categorySlug);
}

// Helper: Get all published pages
export async function getAllPages(): Promise<Array<{ slug: string; data: Record<string, unknown> }>> {
  try {
    if (reader) {
      const slugs = await reader.collections.pages.list();
      const pages = await Promise.all(
        slugs.map(async (slug) => {
          const entry = await reader!.collections.pages.read(slug);
          return { slug, data: entry as Record<string, unknown> };
        })
      );
      return pages.filter(p => p.data !== null && p.data.status !== 'draft');
    }
  } catch (e) {
    console.warn('Using fallback for getAllPages:', e);
  }

  // Fallback: read from file system
  const slugs = getFilesInDir('src/content/pages');
  return slugs
    .map(slug => {
      const result = readFileContent('src/content/pages', slug);
      return result ? { slug, data: result.data } : null;
    })
    .filter(Boolean) as Array<{ slug: string; data: Record<string, unknown> }>;
}

// Helper: Get site settings
export async function getSiteSettings(): Promise<Record<string, unknown> | null> {
  try {
    if (reader) {
      const settings = await reader.singletons.settings.read();
      return settings as Record<string, unknown> | null;
    }
  } catch (e) {
    console.warn('Using fallback for getSiteSettings:', e);
  }

  // Fallback: read from file system
  const result = readFileContent('src/content/settings', 'site');
  return result?.data || null;
}

// Helper: Get redirects
export async function getRedirects(): Promise<Array<Record<string, unknown>>> {
  try {
    if (reader) {
      const redirects = await reader.singletons.redirects.read();
      return (redirects?.items as Array<Record<string, unknown>>) || [];
    }
  } catch (e) {
    console.warn('Using fallback for getRedirects:', e);
  }

  // Fallback: read from file system
  const result = readFileContent('src/content/settings', 'redirects');
  return (result?.data?.items as Array<Record<string, unknown>>) || [];
}

// Export the reader for direct access if needed
export { reader };
