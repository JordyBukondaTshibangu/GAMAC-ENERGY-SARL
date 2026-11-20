import { getTranslations } from "next-intl/server";
import { SITE_URL, localizedUrl, pages, type PageKey } from "@/utils/seo";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; "<" is escaped to avoid closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Company + website structured data, rendered once per page from the root layout. */
export async function OrganizationJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const m = await getTranslations({ locale, namespace: "Metadata" });
  const phone = t("contact.phone_number").replace(/[^\d+]/g, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "GAMAC Energy SARL",
    alternateName: "GAMAC Energy",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-mark.png`,
    image: `${SITE_URL}/og/og-${locale}.jpg`,
    description: m("home.description"),
    foundingDate: "2023-03",
    telephone: phone,
    email: t("contact.email_address"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "9, avenue du Port",
      addressLocality: "Kinshasa",
      addressRegion: "Gombe",
      addressCountry: "CD",
    },
    areaServed: [
      { "@type": "Country", name: "République démocratique du Congo" },
      { "@type": "Continent", name: "Africa" },
    ],
    knowsAbout: [
      "Solar power plants",
      "HV/MV/LV electrical networks",
      "Hydropower",
      "Water boreholes and pumping",
      "Downstream oil infrastructure",
      "EPC",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "GAMAC Energy SARL",
    inLanguage: ["fr", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}

/** Home > Services > [service] breadcrumb for the service detail pages. */
export async function ServiceBreadcrumbJsonLd({
  locale,
  page,
}: {
  locale: string;
  page: PageKey;
}) {
  const nav = await getTranslations({ locale, namespace: "Navigation" });
  const m = await getTranslations({ locale, namespace: "Metadata" });
  const path = pages.find((p) => p.key === page)!.path;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: nav("home"), item: localizedUrl(locale, "") },
          {
            "@type": "ListItem",
            position: 2,
            name: nav("services"),
            item: localizedUrl(locale, "/services"),
          },
          { "@type": "ListItem", position: 3, name: m(`${page}.title`), item: localizedUrl(locale, path) },
        ],
      }}
    />
  );
}
