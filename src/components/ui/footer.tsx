"use client";

import { Link } from "@/i18n/navigation";
import { navLinks, serviceLinks, telHref } from "@/utils/site";
import { useTranslations } from "next-intl";
import { Logo } from "./navigation-bar";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");
  const services = useTranslations("Services");

  return (
    <footer className="bg-ink-deep text-white/70">
      <div className="energy-gradient h-[3px]" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" aria-label="GAMAC Energy">
            <Logo />
          </Link>
          <p className="mt-6 max-w-[26rem] text-[15px] leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-[14px] font-semibold text-white">{t("nav_title")}</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {navLinks.map(({ key, href }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-white">
                  {nav(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-[14px] font-semibold text-white">{t("services_title")}</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {serviceLinks.map(({ index, href }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-white">
                  {services(`services.${index}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-[14px] font-semibold text-white">{t("contact.title")}</h2>
          <address className="mt-4 space-y-2.5 text-[15px] not-italic">
            <a
              href={telHref(t("contact.phone_number"))}
              className="block transition-colors hover:text-white"
            >
              {t("contact.phone_number")}
            </a>
            <a
              href={`mailto:${t("contact.email_address")}`}
              className="block transition-colors hover:text-white"
            >
              {t("contact.email_address")}
            </a>
            <p>{t("address_text")}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-[13px] text-white/50">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
