import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderHead, f as addAttribute, i as renderComponent, l as renderTemplate, u as maybeRenderHead } from "./server__ZtmPF9E.mjs";
import { t as createComponent } from "./compiler_WfqD8lKz.mjs";
import { t as keystatic_config_default } from "./keystatic.config_CH_eZE-2.mjs";
import { t as $$BaseHead } from "./BaseHead_ClnR-azo.mjs";
import { createReader } from "@keystatic/core/reader";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync, readFileSync, readdirSync } from "fs";
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="glass-card border-b border-surface-variant/50 docked full-width top-0 sticky z-50"><div class="flex flex-row-reverse justify-between items-center w-full px-margin-desktop py-base max-w-screen-2xl mx-auto"><!-- Brand --><a class="font-headline-lg text-headline-lg font-bold gradient-text shrink-0" href="#">Best-of Iran</a><!-- Navigation Links (Desktop) --><nav class="hidden md:flex gap-gutter items-center"><a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200 font-label-md text-label-md scale-102 transition-transform duration-200 hover:brightness-110" href="#">شهرها</a><a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200 font-label-md text-label-md scale-102 transition-transform duration-200 hover:brightness-110" href="#">دسته‌بندی‌ها</a><a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200 font-label-md text-label-md scale-102 transition-transform duration-200 hover:brightness-110" href="#">متدولوژی</a><a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200 font-label-md text-label-md scale-102 transition-transform duration-200 hover:brightness-110" href="#">ثبت کسب و کار</a></nav><!-- Search Bar --><div class="hidden lg:flex items-center bg-surface-container rounded-full px-sm py-xs border border-outline-variant focus-within:border-primary-container transition-colors"><span class="material-symbols-outlined text-on-surface-variant ml-xs">search</span><input class="bg-transparent border-none outline-none text-body-md text-on-surface placeholder-on-surface-variant w-48" placeholder="جستجو در کسب‌وکارها..." type="text"></div><!-- Primary Action --><button class="bg-primary-container text-on-primary-container px-md py-sm rounded-lg font-label-md text-label-md hover:brightness-110 transition-all shrink-0">ورود / عضویت</button></div></header>`;
}, "D:/best/fata/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative w-full min-h-[614px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-xl overflow-hidden grid-pattern"><!-- Gradient Orbs --><div class="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div><div class="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div><div class="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQsR_I50lHqfoVu5EU6-UzEJPp1G0KNtAv-FsdrBzW4BzWs22ZOtp80Lm_wn1aRtqkrvILRAr0LLDY4VMK7K-032ypGgfEQcbllGHEbjvsMu-ZrfxIQBJj5vzBBiA8bYwrm7sLAhiA1Z5ThaCqRHHUczMciufxpvCusJ-ufXsz2NWiMOkM2qTuD7ktC4HVqDBxlUyle5rkAr-KEw1heTZTH7h5czjAI64RDQ3GyBtHddoFN0hXYJujpw');"></div><div class="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-md"><h1 class="font-headline-xl text-headline-xl gradient-text">کشف بهترین‌های ایران</h1><p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">ما به شما کمک می‌کنیم تا معتبرترین و با کیفیت‌ترین کسب‌وکارهای ایران را پیدا کنید. بر اساس بررسی‌های میدانی و نظرات واقعی کاربران.</p><!-- Geolocation Hint --><div class="bg-surface-container border border-primary-container/30 px-md py-sm rounded-full flex items-center gap-sm mt-md animate-pulse"><span class="material-symbols-outlined text-primary-container">my_location</span><span class="font-label-md text-label-md text-primary-fixed">به نظر می‌رسد شما در اصفهان هستید — بهترین‌های اصفهان را کاوش کنید</span></div><!-- Dual Smart Search --><div class="w-full mt-lg glass-card p-sm rounded-xl flex flex-col md:flex-row gap-sm items-stretch"><div class="flex-1 flex items-center bg-surface-container rounded-lg px-sm border border-outline-variant focus-within:border-primary-container transition-colors"><span class="material-symbols-outlined text-on-surface-variant ml-xs">location_on</span><select class="w-full bg-transparent border-none text-body-md text-on-surface p-sm outline-none appearance-none"><option disabled selected value="">انتخاب شهر</option><option value="tehran">تهران</option><option value="isfahan">اصفهان</option><option value="shiraz">شیراز</option></select></div><div class="flex-1 flex items-center bg-surface-container rounded-lg px-sm border border-outline-variant focus-within:border-primary-container transition-colors"><span class="material-symbols-outlined text-on-surface-variant ml-xs">category</span><select class="w-full bg-transparent border-none text-body-md text-on-surface p-sm outline-none appearance-none"><option disabled selected value="">انتخاب دسته‌بندی</option><option value="restaurant">رستوران</option><option value="hotel">هتل</option><option value="services">خدمات پزشکی</option></select></div><button class="bg-primary-container text-on-primary-container px-xl py-sm rounded-lg font-label-md text-label-md hover:brightness-110 transition-all flex items-center justify-center gap-xs"><span class="material-symbols-outlined">search</span>جستجو</button></div></div></section>`;
}, "D:/best/fata/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/TrustStats.astro
var $$TrustStats = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="bg-surface-container-high py-md px-margin-mobile md:px-margin-desktop border-b border-surface-variant"><div class="max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-md"><div class="flex flex-col items-center text-center"><span class="font-headline-lg text-headline-lg text-primary">۱۵۰۰+</span><span class="font-label-md text-label-md text-on-surface-variant">کسب‌وکار بررسی شده</span></div><div class="w-px h-12 bg-surface-variant hidden md:block"></div><div class="flex flex-col items-center text-center"><span class="font-headline-lg text-headline-lg text-primary">۳۱</span><span class="font-label-md text-label-md text-on-surface-variant">استان پوشش داده شده</span></div><div class="w-px h-12 bg-surface-variant hidden md:block"></div><div class="flex flex-col items-center text-center"><span class="font-headline-lg text-headline-lg text-primary">۵۰۰+</span><span class="font-label-md text-label-md text-on-surface-variant">مقاله منتشر شده</span></div></div></section>`;
}, "D:/best/fata/src/components/TrustStats.astro", void 0);
//#endregion
//#region src/components/PopularCities.astro
var $$PopularCities = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full"><div class="text-center mb-8"><h2 class="font-headline-md text-headline-md text-on-surface mb-2">شهرهای محبوب</h2><p class="font-body-md text-body-md text-on-surface-variant">بهترین کسب‌وکارها را در شهرهای برتر ایران پیدا کنید.</p></div><div class="flex flex-wrap justify-center gap-4"><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">تهران</a><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">اصفهان</a><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">شیراز</a><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">مشهد</a><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">تبریز</a><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">کرج</a><a class="px-6 py-3 rounded-full bg-surface-container border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all font-label-md" href="#">اهواز</a></div></section>`;
}, "D:/best/fata/src/components/PopularCities.astro", void 0);
//#endregion
//#region src/lib/keystatic-content.ts
function getRepoPath() {
	const possiblePaths = [join(dirname(fileURLToPath(import.meta.url)), "..", ".."), process.cwd()];
	for (const basePath of possiblePaths) {
		const contentPath = join(basePath, "src", "content");
		if (existsSync(contentPath)) return basePath;
	}
	return process.cwd();
}
var repoPath = getRepoPath();
var reader = null;
try {
	reader = createReader(repoPath, keystatic_config_default);
} catch (e) {
	console.warn("Failed to create Keystatic reader:", e);
}
function parseFrontmatter(content) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return {
		data: {},
		content
	};
	const frontmatter = match[1];
	const body = match[2] || "";
	const data = {};
	const lines = frontmatter.split("\n");
	let i = 0;
	while (i < lines.length) {
		const line = lines[i];
		if (line.trim() === "") {
			i++;
			continue;
		}
		const indent = line.length - line.trimStart().length;
		const trimmed = line.trim();
		if (trimmed.startsWith("- ")) {
			const arrayKey = Object.keys(data).pop();
			if (arrayKey && Array.isArray(data[arrayKey])) data[arrayKey].push(parseValue(trimmed.slice(2)));
			i++;
			continue;
		}
		if (!trimmed.includes(":")) {
			i++;
			continue;
		}
		const colonIndex = trimmed.indexOf(":");
		const key = trimmed.slice(0, colonIndex).trim();
		const value = trimmed.slice(colonIndex + 1).trim();
		if (value === "|") {
			i++;
			const blockLines = [];
			while (i < lines.length) {
				const nextLine = lines[i];
				if (nextLine.trim() === "") {
					blockLines.push("");
					i++;
					continue;
				}
				if (nextLine.length - nextLine.trimStart().length <= indent) break;
				blockLines.push(nextLine.slice(indent + 2));
				i++;
			}
			data[key] = blockLines.join("\n");
			continue;
		} else if (value === "") {
			const newObj = {};
			data[key] = newObj;
			i++;
			while (i < lines.length) {
				const nestedLine = lines[i];
				if (nestedLine.trim() === "") {
					i++;
					continue;
				}
				if (nestedLine.length - nestedLine.trimStart().length <= indent) break;
				const nestedTrimmed = nestedLine.trim();
				if (nestedTrimmed.includes(":")) {
					const nestedColonIndex = nestedTrimmed.indexOf(":");
					const nestedKey = nestedTrimmed.slice(0, nestedColonIndex).trim();
					newObj[nestedKey] = parseValue(nestedTrimmed.slice(nestedColonIndex + 1).trim());
				}
				i++;
			}
			continue;
		} else data[key] = parseValue(value);
		i++;
	}
	return {
		data,
		content: typeof data.content === "string" ? data.content : body
	};
}
function parseValue(value) {
	if (value === "null") return null;
	if (value === "true") return true;
	if (value === "false") return false;
	if (/^\d+$/.test(value)) return parseInt(value, 10);
	if (/^\d+\.\d+$/.test(value)) return parseFloat(value);
	if (value.startsWith("[") && value.endsWith("]")) {
		const inner = value.slice(1, -1);
		if (inner.trim() === "") return [];
		return inner.split(",").map((v) => parseValue(v.trim()));
	}
	return value;
}
function getFilesInDir(dir) {
	try {
		const fullPath = join(repoPath, dir);
		if (!existsSync(fullPath)) return [];
		return readdirSync(fullPath).filter((f) => f.endsWith(".mdoc") || f.endsWith(".mdx") || f.endsWith(".md")).map((f) => f.replace(/\.(mdoc|mdx|md)$/, ""));
	} catch {
		return [];
	}
}
function readFileContent(dir, slug) {
	const fullPath = join(repoPath, dir);
	if (!existsSync(fullPath)) return null;
	for (const ext of [
		".mdoc",
		".mdx",
		".md"
	]) {
		const filePath = join(fullPath, `${slug}${ext}`);
		if (existsSync(filePath)) return parseFrontmatter(readFileSync(filePath, "utf-8"));
	}
	return null;
}
async function getAllPosts() {
	try {
		if (reader) {
			const slugs = await reader.collections.posts.list();
			return (await Promise.all(slugs.map(async (slug) => {
				return {
					slug,
					data: await reader.collections.posts.read(slug)
				};
			}))).filter((p) => p.data !== null).sort((a, b) => {
				const dateA = new Date(a.data.date || 0).getTime();
				return new Date(b.data.date || 0).getTime() - dateA;
			});
		}
	} catch (e) {
		console.warn("Using fallback for getAllPosts:", e);
	}
	return getFilesInDir("src/content/articles").map((slug) => {
		const result = readFileContent("src/content/articles", slug);
		if (!result) return null;
		return {
			slug,
			data: {
				...result.data,
				content: result.content
			}
		};
	}).filter(Boolean);
}
async function getAllCategories() {
	try {
		if (reader) {
			const slugs = await reader.collections.categories.list();
			return (await Promise.all(slugs.map(async (slug) => {
				return {
					slug,
					data: await reader.collections.categories.read(slug)
				};
			}))).filter((c) => c.data !== null).sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
		}
	} catch (e) {
		console.warn("Using fallback for getAllCategories:", e);
	}
	return getFilesInDir("src/content/categories").map((slug) => {
		const result = readFileContent("src/content/categories", slug);
		return result ? {
			slug,
			data: result.data
		} : null;
	}).filter(Boolean);
}
async function getSiteSettings() {
	try {
		if (reader) return await reader.singletons.settings.read();
	} catch (e) {
		console.warn("Using fallback for getSiteSettings:", e);
	}
	return readFileContent("src/content/settings", "site")?.data || null;
}
//#endregion
//#region src/components/Categories.astro
var $$Categories = createComponent(async ($$result, $$props, $$slots) => {
	const categories = await getAllCategories();
	function getTitle(data) {
		if (!data.title) return "";
		if (typeof data.title === "string") return data.title;
		return data.title.name || "";
	}
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop"><div class="max-w-screen-2xl mx-auto w-full"><div class="text-center mb-8"><h2 class="font-headline-md text-headline-md text-on-surface mb-2">دسته‌بندی‌های پرطرفدار</h2><p class="font-body-md text-body-md text-on-surface-variant">در میان محبوب‌ترین خدمات جستجو کنید.</p></div>${categories.length === 0 ? renderTemplate`<div class="text-center py-12 text-on-surface-variant"><span class="material-symbols-outlined text-4xl mb-4">category</span><p>هنوز دسته‌بندی‌ای اضافه نشده است.</p></div>` : renderTemplate`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">${categories.map((category) => renderTemplate`<a class="flex flex-col items-center justify-center p-6 bg-surface rounded-xl border border-surface-variant/50 hover:border-primary/50 hover:bg-surface-container transition-all group hover:shadow-[0_0_25px_rgba(232,184,74,0.1)]"${addAttribute(`/categories/${category.slug}`, "href")}><div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all"${addAttribute(category.data.color ? `background-color: ${category.data.color}20;` : "", "style")}><span class="material-symbols-outlined text-3xl text-primary"${addAttribute(category.data.color ? `color: ${category.data.color};` : "", "style")}>${category.data.icon || "category"}</span></div><span class="font-label-md text-on-surface">${getTitle(category.data)}</span></a>`)}</div>`}</div></section>`;
}, "D:/best/fata/src/components/Categories.astro", void 0);
//#endregion
//#region src/components/LatestArticles.astro
var $$LatestArticles = createComponent(async ($$result, $$props, $$slots) => {
	const posts = await getAllPosts();
	const categories = await getAllCategories();
	const latestPosts = posts.slice(0, 3);
	function getCategoryInfo(categorySlug) {
		if (!categorySlug) return null;
		return categories.find((c) => c.slug === categorySlug)?.data || null;
	}
	function getTitle(data) {
		if (!data.title) return "";
		if (typeof data.title === "string") return data.title;
		return data.title.name || "";
	}
	function formatDate(dateStr) {
		if (!dateStr) return "";
		try {
			const date = new Date(dateStr);
			return new Intl.DateTimeFormat("fa-IR", {
				year: "numeric",
				month: "long",
				day: "numeric"
			}).format(date);
		} catch {
			return dateStr;
		}
	}
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full"><div class="flex justify-between items-end mb-8"><div><h2 class="font-headline-md text-headline-md text-on-surface mb-2">جدیدترین بررسی‌ها</h2><p class="font-body-md text-body-md text-on-surface-variant">مقالات و بررسی‌های تخصصی تیم ما.</p></div><a class="hidden md:flex items-center gap-1 text-primary font-label-md hover:underline" href="#">مشاهده همه<span class="material-symbols-outlined text-sm">arrow_back</span></a></div>${latestPosts.length === 0 ? renderTemplate`<div class="text-center py-12 text-on-surface-variant"><span class="material-symbols-outlined text-4xl mb-4">article</span><p>هنوز مقاله‌ای منتشر نشده است.</p></div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${latestPosts.map((post) => {
		const category = getCategoryInfo(post.data.category);
		return renderTemplate`<article class="bg-surface-container rounded-2xl overflow-hidden border border-surface-variant/50 hover:border-primary/50 transition-all flex flex-col group hover:shadow-[0_0_30px_rgba(232,184,74,0.1)]"><div class="h-48 bg-surface-container-high relative overflow-hidden">${post.data.featuredImage ? renderTemplate`<img${addAttribute(post.data.featuredImage, "src")}${addAttribute(getTitle(post.data), "alt")} class="w-full h-full object-cover" loading="lazy">` : renderTemplate`<div class="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-variant"></div>`}<div class="absolute top-4 right-4 flex gap-2">${category && renderTemplate`<span class="bg-primary text-on-primary px-2 py-1 rounded-md text-xs font-bold">${getTitle(category)}</span>`}</div></div><div class="p-6 flex flex-col flex-grow">${post.data.date && renderTemplate`<div class="flex items-center gap-2 mb-3 text-on-surface-variant"><span class="material-symbols-outlined text-sm">calendar_month</span><span class="text-xs font-label-sm">${formatDate(post.data.date)}</span></div>`}<h3 class="font-headline-md text-lg text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"><a${addAttribute(`/articles/${post.slug}`, "href")}>${getTitle(post.data)}</a></h3>${post.data.excerpt && renderTemplate`<p class="text-on-surface-variant text-sm line-clamp-3 mb-4 flex-grow">${post.data.excerpt}</p>`}<a class="text-primary font-label-md flex items-center gap-1 mt-auto hover:underline w-fit"${addAttribute(`/articles/${post.slug}`, "href")}>ادامه مطلب<span class="material-symbols-outlined text-sm">arrow_back</span></a></div></article>`;
	})}</div>`}<div class="mt-6 text-center md:hidden"><a class="inline-flex items-center gap-2 text-primary border border-primary px-6 py-2 rounded-full font-label-md" href="#">مشاهده همه مقالات</a></div></section>`;
}, "D:/best/fata/src/components/LatestArticles.astro", void 0);
//#endregion
//#region src/components/Trending.astro
var $$Trending = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop"><div class="max-w-screen-2xl mx-auto w-full"><div class="flex items-center gap-3 mb-8"><span class="material-symbols-outlined text-3xl text-tertiary-fixed">trending_up</span><div><h2 class="font-headline-md text-headline-md text-on-surface">پربازدیدترین‌های هفته</h2><p class="font-body-md text-body-md text-on-surface-variant">کسب‌وکارهایی که بیشترین تماس و رزرو را داشته‌اند.</p></div></div><div class="bg-surface rounded-2xl border border-surface-variant/50 overflow-hidden"><div class="divide-y divide-surface-variant"><!-- List Item 1 --><div class="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-surface-container-lowest transition-colors"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold text-lg text-primary">۱</div><div class="flex-grow"><div class="flex items-center gap-2 mb-1"><h3 class="font-headline-md text-lg text-on-surface">رستوران شاندیز گالریا</h3><span class="material-symbols-outlined text-tertiary-fixed text-sm" title="تایید شده">verified</span></div><div class="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant"><span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">restaurant</span>رستوران ایرانی</span><span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>تهران، ولنجک</span><span class="flex items-center gap-1 text-primary"><span class="material-symbols-outlined text-sm">star</span>۴.۸ (۳۴۲ نظر)</span></div></div><button class="w-full sm:w-auto mt-3 sm:mt-0 px-6 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md flex items-center justify-center gap-2 hover:brightness-110"><span class="material-symbols-outlined text-sm">call</span>تماس</button></div><!-- List Item 2 --><div class="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-surface-container-lowest transition-colors"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-lg text-secondary">۲</div><div class="flex-grow"><div class="flex items-center gap-2 mb-1"><h3 class="font-headline-md text-lg text-on-surface">هتل عباسی</h3><span class="material-symbols-outlined text-tertiary-fixed text-sm" title="تایید شده">verified</span></div><div class="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant"><span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">hotel</span>هتل ۵ ستاره</span><span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>اصفهان، چهارباغ عباسی</span><span class="flex items-center gap-1 text-primary"><span class="material-symbols-outlined text-sm">star</span>۴.۹ (۸۹۰ نظر)</span></div></div><button class="w-full sm:w-auto mt-3 sm:mt-0 px-6 py-2 border border-outline-variant text-on-surface rounded-lg font-label-md flex items-center justify-center gap-2 hover:bg-surface-container"><span class="material-symbols-outlined text-sm">visibility</span>مشاهده</button></div><!-- List Item 3 --><div class="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-surface-container-lowest transition-colors"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center font-bold text-lg text-tertiary">۳</div><div class="flex-grow"><div class="flex items-center gap-2 mb-1"><h3 class="font-headline-md text-lg text-on-surface">کلینیک دندانپزشکی مهرگان</h3></div><div class="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant"><span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">dentistry</span>خدمات پزشکی</span><span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>شیراز، قصردشت</span><span class="flex items-center gap-1 text-primary"><span class="material-symbols-outlined text-sm">star</span>۴.۷ (۱۵۶ نظر)</span></div></div><button class="w-full sm:w-auto mt-3 sm:mt-0 px-6 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md flex items-center justify-center gap-2 hover:brightness-110"><span class="material-symbols-outlined text-sm">call</span>تماس</button></div></div><div class="p-4 bg-surface-container-lowest text-center border-t border-surface-variant"><a class="text-primary font-label-md hover:underline" href="#">مشاهده لیست کامل پربازدیدها</a></div></div></div></section>`;
}, "D:/best/fata/src/components/Trending.astro", void 0);
//#endregion
//#region src/components/TrustSection.astro
var $$TrustSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full"><div class="flex flex-col lg:flex-row gap-12 items-center"><div class="lg:w-1/2 space-y-6"><h2 class="font-headline-xl text-3xl md:text-4xl text-on-surface">ما چگونه بهترین‌ها را انتخاب می‌کنیم؟</h2><p class="text-on-surface-variant leading-relaxed">در بست آف ایران، ما به تبلیغات و ادعاها بسنده نمی‌کنیم. تیم ارزیاب ما با حضور میدانی و بررسی دقیق ده‌ها معیار استاندارد، کیفیت واقعی خدمات را می‌سنجد.</p><ul class="space-y-4 mt-6"><li class="flex items-start gap-3"><div class="mt-1 w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-tertiary-fixed text-sm">verified_user</span></div><div><h4 class="font-headline-md text-base text-on-surface">بازدید میدانی ناشناس (مشتری پنهان)</h4><p class="text-sm text-on-surface-variant mt-1">ارزیابان ما مانند مشتریان عادی و بدون اطلاع قبلی از کسب‌وکارها بازدید می‌کنند.</p></div></li><li class="flex items-start gap-3"><div class="mt-1 w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-tertiary-fixed text-sm">fact_check</span></div><div><h4 class="font-headline-md text-base text-on-surface">بررسی بیش از ۵۰ شاخص کیفیت</h4><p class="text-sm text-on-surface-variant mt-1">از بهداشت و برخورد پرسنل گرفته تا کیفیت خدمات و تناسب قیمت.</p></div></li><li class="flex items-start gap-3"><div class="mt-1 w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center flex-shrink-0"><span class="material-symbols-outlined text-tertiary-fixed text-sm">forum</span></div><div><h4 class="font-headline-md text-base text-on-surface">تحلیل نظرات واقعی مشتریان</h4><p class="text-sm text-on-surface-variant mt-1">فیلتر کردن نظرات فیک و تمرکز بر بازخوردهای اثبات شده کاربران.</p></div></li></ul><div class="pt-4"><a class="inline-flex items-center gap-2 text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors font-label-md" href="#">مطالعه کامل متدولوژی ما<span class="material-symbols-outlined text-sm">arrow_back</span></a></div></div><div class="lg:w-1/2 w-full grid grid-cols-2 gap-4"><div class="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center justify-center h-48 border border-surface-variant/50 hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(232,184,74,0.1)]"><span class="material-symbols-outlined text-4xl text-primary mb-3">speed</span><h5 class="font-headline-md text-lg text-on-surface">سرعت در خدمات</h5></div><div class="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center justify-center h-48 border border-surface-variant/50 mt-8 hover:border-secondary/30 transition-all hover:shadow-[0_0_20px_rgba(92,200,160,0.1)]"><span class="material-symbols-outlined text-4xl text-secondary mb-3">price_check</span><h5 class="font-headline-md text-lg text-on-surface">تناسب قیمت و کیفیت</h5></div><div class="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center justify-center h-48 border border-surface-variant/50 -mt-8 hover:border-tertiary/30 transition-all hover:shadow-[0_0_20px_rgba(106,216,144,0.1)]"><span class="material-symbols-outlined text-4xl text-tertiary mb-3">clean_hands</span><h5 class="font-headline-md text-lg text-on-surface">بهداشت و محیط</h5></div><div class="bg-surface-container rounded-2xl p-6 flex flex-col items-center text-center justify-center h-48 border border-surface-variant/50 hover:border-primary-fixed/30 transition-all hover:shadow-[0_0_20px_rgba(245,212,138,0.1)]"><span class="material-symbols-outlined text-4xl text-primary-fixed mb-3">support_agent</span><h5 class="font-headline-md text-lg text-on-surface">برخورد پرسنل</h5></div></div></div></section>`;
}, "D:/best/fata/src/components/TrustSection.astro", void 0);
//#endregion
//#region src/components/BusinessOwnerCTA.astro
var $$BusinessOwnerCTA = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-12 px-margin-mobile md:px-margin-desktop"><div class="max-w-screen-2xl mx-auto w-full glass-card rounded-3xl overflow-hidden relative"><div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div><div class="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"><div class="text-center md:text-right flex-grow"><h2 class="font-headline-xl text-2xl md:text-3xl gradient-text mb-3">صاحب کسب‌وکار هستید؟</h2><p class="font-body-lg text-on-surface-variant max-w-xl">اگر فکر می‌کنید کیفیت خدمات شما در سطح بهترین‌های شهر است، برای حضور در لیست ما درخواست بررسی دهید.</p><div class="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6"><div class="flex items-center gap-1 text-sm text-on-surface-variant"><span class="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>افزایش اعتبار</div><div class="flex items-center gap-1 text-sm text-on-surface-variant"><span class="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>جذب مشتریان هدفمند</div><div class="flex items-center gap-1 text-sm text-on-surface-variant"><span class="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>گزارش تحلیلی رقبا</div></div></div><div class="flex-shrink-0"><a class="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-md text-base hover:brightness-110 transition-all glow-primary flex items-center gap-2" href="/register-business">درخواست ثبت کسب‌وکار<span class="material-symbols-outlined">add_business</span></a></div></div></div></section>`;
}, "D:/best/fata/src/components/BusinessOwnerCTA.astro", void 0);
//#endregion
//#region src/components/Newsletter.astro
var $$Newsletter = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-surface-variant"><div class="max-w-3xl mx-auto text-center space-y-6"><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-variant mb-2"><span class="material-symbols-outlined text-3xl text-on-surface">mark_email_read</span></div><h2 class="font-headline-md text-2xl text-on-surface">از جدیدترین بررسی‌ها مطلع شوید</h2><p class="text-on-surface-variant">با عضویت در خبرنامه یا کانال تلگرام ما، هر هفته لیستی از بهترین کسب‌وکارهای تازه بررسی شده را دریافت کنید. بدون اسپم.</p><div class="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mt-6"><input class="flex-grow bg-surface rounded-lg px-4 py-3 border border-outline-variant focus:border-primary-container outline-none text-on-surface text-left dir-ltr placeholder:text-right placeholder:dir-rtl" placeholder="ایمیل خود را وارد کنید..." type="email"><button class="bg-surface-variant text-on-surface px-6 py-3 rounded-lg font-label-md hover:bg-surface-container-high transition-colors">عضویت در خبرنامه</button></div><div class="pt-4 flex items-center justify-center gap-2"><span class="text-sm text-on-surface-variant">یا ما را در شبکه‌های اجتماعی دنبال کنید:</span><a class="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1 text-sm bg-primary/10 px-3 py-1 rounded-full" href="#">کانال تلگرام<span class="material-symbols-outlined text-sm">send</span></a></div></div></section>`;
}, "D:/best/fata/src/components/Newsletter.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="glass-card border-t border-surface-variant/50 full-width mt-auto"><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop py-xl w-full text-right rtl max-w-screen-2xl mx-auto"><div class="col-span-2 md:col-span-4 lg:col-span-2 mb-md lg:mb-0"><h3 class="font-headline-lg text-headline-lg font-bold gradient-text mb-sm">Best-of Iran</h3><p class="font-body-md text-body-md text-on-surface-variant">مرجع تخصصی معرفی بهترین کسب‌وکارهای ایران با بررسی‌های دقیق و واقعی.</p></div><div><h4 class="font-label-md text-label-md text-on-surface mb-sm">شهرها</h4><ul class="space-y-xs"><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">تهران</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">اصفهان</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">شیراز</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">تبریز</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">مشهد</a></li></ul></div><div><h4 class="font-label-md text-label-md text-on-surface mb-sm">دسته‌بندی‌ها</h4><ul class="space-y-xs"><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">رستوران‌ها</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">هتل‌ها</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">خدمات پزشکی</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">وکلای پایه یک</a></li></ul></div><div><h4 class="font-label-md text-label-md text-on-surface mb-sm">اطلاعات</h4><ul class="space-y-xs"><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">درباره ما</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">تماس با ما</a></li><li><a class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-all" href="#">قوانین و مقررات</a></li></ul></div></div><div class="text-center py-md border-t border-surface-variant mt-md"><span class="font-label-sm text-label-sm text-on-surface-variant">© ۲۰۲۴ بست آف ایران. تمامی حقوق محفوظ است.</span></div></footer>`;
}, "D:/best/fata/src/components/Footer.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const settings = await getSiteSettings();
	const seoTitle = settings?.defaultSeoTitle || "Best-of Iran - بهترین کسب‌وکارهای ایران";
	const seoDescription = settings?.defaultSeoDescription || "مرجع تخصصی معرفی بهترین کسب‌وکارهای ایران با بررسی‌های دقیق و واقعی کاربران.";
	return renderTemplate`<html class="dark" dir="rtl" lang="fa"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": seoTitle,
		"description": seoDescription
	})}${renderHead($$result)}</head><body class="bg-background text-on-surface flex flex-col min-h-screen rtl">${renderComponent($$result, "Header", $$Header, {})}<main class="flex-grow flex flex-col pb-20 md:pb-0">${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "TrustStats", $$TrustStats, {})}${renderComponent($$result, "PopularCities", $$PopularCities, {})}${renderComponent($$result, "Categories", $$Categories, {})}${renderComponent($$result, "LatestArticles", $$LatestArticles, {})}${renderComponent($$result, "Trending", $$Trending, {})}${renderComponent($$result, "TrustSection", $$TrustSection, {})}${renderComponent($$result, "BusinessOwnerCTA", $$BusinessOwnerCTA, {})}${renderComponent($$result, "Newsletter", $$Newsletter, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/best/fata/src/pages/index.astro", void 0);
var $$file = "D:/best/fata/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
