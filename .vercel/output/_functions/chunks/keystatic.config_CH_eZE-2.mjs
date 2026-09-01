import { collection, config, fields, singleton } from "@keystatic/core";
//#region keystatic.config.ts
var keystatic_config_default = config({
	storage: {
		kind: "github",
		repo: "Fatah791/fata",
		branch: "main",
		workingTreeBranch: "keystatic",
		commitMessage: "Keystatic: {type} {path}"
	},
	schema: {
		posts: collection({
			label: "مقالات",
			path: "src/content/articles/*",
			format: { contentField: "content" },
			slugField: "slug",
			schema: {
				title: fields.slug({ name: {
					label: "عنوان",
					validation: { length: { min: 1 } }
				} }),
				date: fields.date({
					label: "تاریخ انتشار",
					validation: { isRequired: true }
				}),
				author: fields.text({
					label: "نویسنده",
					defaultValue: "تیم Best-of Iran"
				}),
				excerpt: fields.text({
					label: "خلاصه (Excerpt)",
					description: "توصیف کوتاه مقاله (حداکثر ۱۶۰ کاراکتر)",
					validation: { length: { max: 160 } }
				}),
				content: fields.document({
					label: "محتوا",
					formatting: true,
					dividers: true,
					links: true,
					images: true
				}),
				featuredImage: fields.image({
					label: "تصویر شاخص",
					directory: "public/images/posts",
					publicPath: "/images/posts/"
				}),
				category: fields.relationship({
					label: "دسته‌بندی",
					collection: "categories",
					validation: { isRequired: true }
				}),
				tags: fields.array(fields.relationship({
					label: "تگ",
					collection: "tags"
				}), {
					label: "تگ‌ها",
					itemLabel: (props) => props.value || "تگ"
				}),
				seoTitle: fields.text({
					label: "عنوان سئو (SEO Title)",
					description: "حداکثر ۶۰ کاراکتر",
					validation: { length: { max: 60 } }
				}),
				seoDescription: fields.text({
					label: "توضیحات سئو (Meta Description)",
					description: "حداکثر ۱۶۰ کاراکتر",
					validation: { length: { max: 160 } }
				}),
				keywords: fields.array(fields.text({ label: "کلمه کلیدی" }), { label: "کلمات کلیدی" }),
				canonicalUrl: fields.url({ label: "URL Canonical" }),
				ogTitle: fields.text({ label: "عنوان Open Graph" }),
				ogDescription: fields.text({ label: "توضیحات Open Graph" }),
				ogImage: fields.image({
					label: "تصویر Open Graph",
					directory: "public/images/og",
					publicPath: "/images/og/"
				}),
				twitterCardType: fields.select({
					label: "نوع Twitter Card",
					options: [{
						label: "Summary",
						value: "summary"
					}, {
						label: "Summary Large Image",
						value: "summary_large_image"
					}],
					defaultValue: "summary_large_image"
				}),
				twitterTitle: fields.text({ label: "عنوان Twitter" }),
				twitterDescription: fields.text({ label: "توضیحات Twitter" }),
				twitterImage: fields.image({
					label: "تصویر Twitter",
					directory: "public/images/twitter",
					publicPath: "/images/twitter/"
				}),
				schemaType: fields.select({
					label: "نوع Schema Markup",
					options: [
						{
							label: "مقاله (Article)",
							value: "Article"
						},
						{
							label: "محصول (Product)",
							value: "Product"
						},
						{
							label: "BreadcrumbList",
							value: "BreadcrumbList"
						},
						{
							label: "FAQPage",
							value: "FAQPage"
						},
						{
							label: "هیچ‌کدام",
							value: "None"
						}
					],
					defaultValue: "Article"
				}),
				status: fields.select({
					label: "وضعیت",
					options: [
						{
							label: "پیش‌نویس",
							value: "draft"
						},
						{
							label: "برنامه‌ریزی شده",
							value: "scheduled"
						},
						{
							label: "منتشر شده",
							value: "published"
						}
					],
					defaultValue: "published"
				}),
				publishDate: fields.date({ label: "تاریخ انتشار (برای برنامه‌ریزی)" }),
				readingTime: fields.text({
					label: "زمان خواندن",
					defaultValue: "۵ دقیقه"
				})
			},
			previewUrl: "/posts/{slug}"
		}),
		pages: collection({
			label: "صفحات",
			path: "src/content/pages/*",
			format: { contentField: "content" },
			slugField: "slug",
			schema: {
				title: fields.slug({ name: {
					label: "عنوان صفحه",
					validation: { length: { min: 1 } }
				} }),
				content: fields.document({
					label: "محتوا",
					formatting: true,
					dividers: true,
					links: true,
					images: true
				}),
				seoTitle: fields.text({
					label: "عنوان سئو",
					validation: { length: { max: 60 } }
				}),
				seoDescription: fields.text({
					label: "توضیحات سئو",
					validation: { length: { max: 160 } }
				}),
				keywords: fields.array(fields.text({ label: "کلمه کلیدی" }), { label: "کلمات کلیدی" }),
				canonicalUrl: fields.url({ label: "URL Canonical" }),
				ogTitle: fields.text({ label: "عنوان Open Graph" }),
				ogDescription: fields.text({ label: "توضیحات Open Graph" }),
				ogImage: fields.image({
					label: "تصویر Open Graph",
					directory: "public/images/og",
					publicPath: "/images/og/"
				}),
				status: fields.select({
					label: "وضعیت",
					options: [{
						label: "پیش‌نویس",
						value: "draft"
					}, {
						label: "منتشر شده",
						value: "published"
					}],
					defaultValue: "published"
				})
			}
		}),
		categories: collection({
			label: "دسته‌بندی‌ها",
			path: "src/content/categories/*",
			slugField: "slug",
			schema: {
				title: fields.slug({ name: {
					label: "نام دسته‌بندی",
					validation: { length: { min: 1 } }
				} }),
				description: fields.text({ label: "توضیحات" }),
				icon: fields.text({
					label: "آیکون Material Symbols",
					description: "نام آیکون مثلاً restaurant, local_cafe"
				}),
				color: fields.text({
					label: "رنگ هایلایت",
					defaultValue: "#e8b84a"
				}),
				order: fields.integer({
					label: "ترتیب نمایش",
					defaultValue: 0
				}),
				seoTitle: fields.text({
					label: "عنوان سئو",
					validation: { length: { max: 60 } }
				}),
				seoDescription: fields.text({
					label: "توضیحات سئو",
					validation: { length: { max: 160 } }
				})
			}
		}),
		tags: collection({
			label: "تگ‌ها",
			path: "src/content/tags/*",
			slugField: "slug",
			schema: {
				title: fields.slug({ name: {
					label: "نام تگ",
					validation: { length: { min: 1 } }
				} }),
				color: fields.text({
					label: "رنگ تگ",
					defaultValue: "#5cc8a0"
				}),
				order: fields.integer({
					label: "ترتیب نمایش",
					defaultValue: 0
				})
			}
		}),
		settings: singleton({
			label: "تنظیمات سایت",
			path: "src/content/settings/site",
			schema: {
				siteName: fields.text({
					label: "نام سایت",
					defaultValue: "Best-of Iran"
				}),
				siteDescription: fields.text({
					label: "توضیحات سایت",
					defaultValue: "بهترین کسب‌وکارهای ایران"
				}),
				logo: fields.image({
					label: "لوگو",
					directory: "public/images",
					publicPath: "/images/"
				}),
				logoDark: fields.image({
					label: "لوگو تیره",
					directory: "public/images",
					publicPath: "/images/"
				}),
				favicon: fields.image({
					label: "فاویکون",
					directory: "public/images",
					publicPath: "/images/"
				}),
				ogImage: fields.image({
					label: "تصویر پیش‌فرض Open Graph",
					directory: "public/images",
					publicPath: "/images/"
				}),
				socialLinks: fields.object({
					telegram: fields.url({ label: "تلگرام" }),
					instagram: fields.url({ label: "اینستاگرام" }),
					twitter: fields.url({ label: "توییتر" }),
					whatsapp: fields.url({ label: "واتساپ" })
				}, { label: "لینک‌های شبکه‌های اجتماعی" }),
				analyticsCode: fields.text({
					label: "کد تحلیل گوگل (GA4)",
					description: "G-XXXXXXXXXX"
				}),
				defaultLocale: fields.select({
					label: "زبان پیش‌فرض",
					options: [{
						label: "فارسی",
						value: "fa"
					}, {
						label: "انگلیسی",
						value: "en"
					}],
					defaultValue: "fa"
				}),
				supportEmail: fields.text({ label: "ایمیل پشتیبانی" }),
				defaultSeoTitle: fields.text({
					label: "عنوان سئو پیش‌فرض",
					defaultValue: "Best-of Iran - بهترین کسب‌وکارهای ایران"
				}),
				defaultSeoDescription: fields.text({
					label: "توضیحات سئو پیش‌فرض",
					defaultValue: "مرجع تخصصی معرفی بهترین کسب‌وکارهای ایران با بررسی‌های دقیق و واقعی کاربران."
				}),
				defaultOgImage: fields.image({
					label: "تصویر OG پیش‌فرض",
					directory: "public/images",
					publicPath: "/images/"
				})
			}
		}),
		redirects: singleton({
			label: "ریدایرکت‌ها",
			path: "src/content/settings/redirects",
			schema: { items: fields.array(fields.object({
				from: fields.text({ label: "مسیر منبع" }),
				to: fields.text({ label: "مسیر مقصد" }),
				type: fields.select({
					label: "نوع ریدایرکت",
					options: [{
						label: "۳۰۱ - دائمی",
						value: "301"
					}, {
						label: "۳۰۲ - موقت",
						value: "302"
					}],
					defaultValue: "301"
				})
			}), {
				label: "ریدایرکت",
				itemLabel: (props) => `${props.value?.from || ""} → ${props.value?.to || ""}`
			}) }
		})
	}
});
//#endregion
export { keystatic_config_default as t };
