import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/content/projects";
import { LOCALES, localizedHref } from "@/i18n/config";
import { NAV_ITEMS, SITE } from "@/lib/site";

const PATHS = [...NAV_ITEMS.map((item) => item.path), ...PROJECT_SLUGS.map((slug) => `/projects/${slug}`)];

/** One entry per page and language, each listing its translation so Google pairs them. */
export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => new URL(path, SITE.url).toString();

  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absolute(localizedHref(locale, path)),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((lang) => [lang, absolute(localizedHref(lang, path))])),
      },
    })),
  );
}
