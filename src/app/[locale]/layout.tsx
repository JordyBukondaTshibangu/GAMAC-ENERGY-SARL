import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navigation-bar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GAMAC ENERGY SARL",
  description: "Ensemble, donnons vie à une énergie durable.",
};

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
    <html lang="en">
      <NextIntlClientProvider>
        <head>
          <meta name="grammarly" content="false" />
        </head>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
