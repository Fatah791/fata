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

  // Simple YAML-like parser for frontmatter (handles nested objects and block scalars)
  const data: Record<string, unknown> = {};
  const lines = frontmatter.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') {
      i++;
      continue;
    }

    const indent = line.length - line.trimStart().length;
    const trimmed = line.trim();

    // Handle array items
    if (trimmed.startsWith('- ')) {
      // Simple array handling - collect all array items
      const arrayKey = Object.keys(data).pop();
      if (arrayKey && Array.isArray(data[arrayKey])) {
        (data[arrayKey] as unknown[]).push(parseValue(trimmed.slice(2)));
      }
      i++;
      continue;
    }

    if (!trimmed.includes(':')) {
      i++;
      continue;
    }

    const colonIndex = trimmed.indexOf(':');
    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    if (value === '|') {
      // Block scalar - collect all indented lines
      i++;
      const blockLines: string[] = [];
      while (i < lines.length) {
        const nextLine = lines[i];
        if (nextLine.trim() === '') {
          blockLines.push('');
          i++;
          continue;
        }
        const nextIndent = nextLine.length - nextLine.trimStart().length;
        if (nextIndent <= indent) break;
        blockLines.push(nextLine.slice(indent + 2)); // Remove the extra indentation
        i++;
      }
      data[key] = blockLines.join('\n');
      continue;
    } else if (value === '') {
      // This is a nested object
      const newObj: Record<string, unknown> = {};
      data[key] = newObj;
      i++;

      // Parse nested object
      while (i < lines.length) {
        const nestedLine = lines[i];
        if (nestedLine.trim() === '') {
          i++;
          continue;
        }
        const nestedIndent = nestedLine.length - nestedLine.trimStart().length;
        if (nestedIndent <= indent) break;

        const nestedTrimmed = nestedLine.trim();
        if (nestedTrimmed.includes(':')) {
          const nestedColonIndex = nestedTrimmed.indexOf(':');
          const nestedKey = nestedTrimmed.slice(0, nestedColonIndex).trim();
          const nestedValue = nestedTrimmed.slice(nestedColonIndex + 1).trim();
          newObj[nestedKey] = parseValue(nestedValue);
        }
        i++;
      }
      continue;
    } else {
      data[key] = parseValue(value);
    }
    i++;
  }

  // If there's a 'content' field from the block scalar, use it as the body
  // This handles Keystatic's format where content is stored in the frontmatter
  const contentBody = typeof data.content === 'string' ? data.content : body;

  return { data, content: contentBody };
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
      const fileContent = readFileSync(filePath, 'utf-8');
      return parseFrontmatter(fileContent);
    }
  }
  return null;
}

// Simple markdown to HTML renderer
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Paragraphs - wrap lines that aren't already HTML tags
  html = html.replace(/^(?!<[a-z/])(.+)$/gm, '<p>$1</p>');

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
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
      if (!result) return null;
      return {
        slug,
        data: {
          ...result.data,
          content: result.content, // Include raw markdown content for fallback rendering
        }
      };
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
  if (!result) return null;
  return {
    slug,
    data: {
      ...result.data,
      content: result.content, // Include raw markdown content for fallback rendering
    }
  };
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
