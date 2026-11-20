import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navigation-bar";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GAMAC Energy SARL",
    template: "%s | GAMAC Energy SARL",
  },
  description:
    "Ingénierie et solutions énergétiques en RDC : études, construction EPC et fourniture d’équipements pour l’électricité, l’hydraulique et l’aval pétrolier.",
  icons: { icon: "/logo-mark.png" },
};

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

  return (
    <html lang={locale} className={archivo.variable}>
      <head>
        <meta name="grammarly" content="false" />
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
