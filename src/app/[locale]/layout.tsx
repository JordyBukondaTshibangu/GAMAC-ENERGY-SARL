import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navigation-bar";
import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import { OrganizationJsonLd } from "@/components/common/json-ld";
import { routing } from "@/i18n/routing";
import { SITE_URL, pageMetadata } from "@/utils/seo";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#061626",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const home = await pageMetadata(params, "home");
  return {
    ...home,
    metadataBase: new URL(SITE_URL),
    applicationName: "GAMAC Energy SARL",
    authors: [{ name: "GAMAC Energy SARL", url: SITE_URL }],
    creator: "GAMAC Energy SARL",
    formatDetection: { telephone: false },
    icons: { icon: "/logo-mark.png", apple: "/logo-mark.png" },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={archivo.variable}>
      <head>
        <meta name="grammarly" content="false" />
        <OrganizationJsonLd locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
          >
            {locale === "fr" ? "Aller au contenu" : "Skip to content"}
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
