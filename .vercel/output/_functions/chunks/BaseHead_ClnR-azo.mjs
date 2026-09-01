import { f as addAttribute, l as renderTemplate, y as createAstro } from "./server__ZtmPF9E.mjs";
import { t as createComponent } from "./compiler_WfqD8lKz.mjs";
//#region src/components/BaseHead.astro
createAstro("https://fata-eyqblsquc-fata3.vercel.app");
var $$BaseHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseHead;
	const { title, description = "مرجع تخصصی معرفی بهترین کسب‌وکارهای ایران با بررسی‌های دقیق و واقعی. رستوران‌ها، هتل‌ها، خدمات پزشکی و بیشتر.", canonicalURL, ogImage = "/og-image.png", ogType = "website", noindex = false } = Astro.props;
	const siteTitle = "Best-of Iran";
	const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
	const url = canonicalURL || new URL(Astro.url.pathname, Astro.site).href;
	const ogImageUrl = new URL(ogImage, Astro.site).href;
	return renderTemplate`<!-- Primary Meta Tags --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Best-of Iran"><meta name="robots"${addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content")}><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImageUrl, "content")}><meta property="og:locale" content="fa_IR"><meta property="og:site_name"${addAttribute(siteTitle, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(url, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImageUrl, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Font Preload (Critical for LCP) --><link rel="preload" href="/fonts/Vazirmatn-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="preload" href="/fonts/Vazirmatn-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="preload" href="/fonts/MaterialSymbolsOutlined.ttf" as="font" type="font/ttf" crossorigin="anonymous"><!-- Font Stylesheets --><link rel="stylesheet" href="/fonts/vazirmatn.css"><link rel="stylesheet" href="/fonts/material-symbols.css"><!-- Theme Color --><meta name="theme-color" content="#131315"><meta name="color-scheme" content="dark">`;
}, "D:/best/fata/src/components/BaseHead.astro", void 0);
//#endregion
export { $$BaseHead as t };
