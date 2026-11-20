import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

/**
 * Public address of the site. Set NEXT_PUBLIC_SITE_URL in production
 * if the domain differs (no trailing slash).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gamac-energy.com"
).replace(/\/$/, "");

export type PageKey =
  | "home"
  | "about"
  | "mission"
  | "services"
  | "intellectual"
  | "physical"
  | "equipment"
  | "team"
  | "contact"
  | "projects";

/** Every indexable page, with its path (without locale). Used by the sitemap too. */
export const pages: { key: PageKey; path: string; priority: number; index: boolean }[] = [
  { key: "home", path: "", priority: 1, index: true },
  { key: "services", path: "/services", priority: 0.9, index: true },
  {
    key: "intellectual",
    path: "/services/prestataires-des-services-intellectuels",
    priority: 0.8,
    index: true,
  },
  {
    key: "physical",
    path: "/services/prestataires-des-travaux-physiques",
    priority: 0.8,
    index: true,
  },
  {
    key: "equipment",
    path: "/services/fournisseurs-d-equipements-electriques",
    priority: 0.8,
    index: true,
  },
  { key: "about", path: "/about", priority: 0.7, index: true },
  { key: "mission", path: "/mission", priority: 0.6, index: true },
  { key: "team", path: "/team", priority: 0.5, index: true },
  { key: "contact", path: "/contact", priority: 0.7, index: true },
  // Placeholder page with no content of its own yet: kept out of search results.
  { key: "projects", path: "/projects", priority: 0.1, index: false },
];

const ogLocale: Record<string, string> = { fr: "fr_CD", en: "en_US" };

export function localizedUrl(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(l, path)])),
    "x-default": localizedUrl(routing.defaultLocale, path),
  };
}

/** Builds localized metadata (title, description, canonical, hreflang, Open Graph, Twitter). */
export async function pageMetadata(
  params: Promise<{ locale: string }>,
  key: PageKey
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const page = pages.find((p) => p.key === key)!;

  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  const url = localizedUrl(locale, page.path);
  const image = {
    url: `${SITE_URL}/og/og-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: t("site_name"),
  };

  return {
    // The home title already contains the brand; other pages get " | GAMAC Energy SARL".
    title: { absolute: key === "home" ? title : `${title} | ${t("site_name")}` },
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(page.path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: t("site_name"),
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    robots: page.index ? undefined : { index: false, follow: true },
  };
}
