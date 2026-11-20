import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { languageAlternates, localizedUrl, pages } from "@/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages
    .filter((page) => page.index)
    .flatMap((page) =>
      routing.locales.map((locale) => ({
        url: localizedUrl(locale, page.path),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: page.priority,
        alternates: { languages: languageAlternates(page.path) },
      }))
    );
}
