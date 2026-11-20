"use client";

import { telHref } from "@/utils/site";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import GMCForm from "./gmc-form";
import GMCMap from "./gmc-map";

const GMCContact = () => {
  const t = useTranslations("Contact.form_section");
  const f = useTranslations("Footer");

  const details = [
    {
      icon: Phone,
      label: f("contact.phone_label"),
      value: f("contact.phone_number"),
      href: telHref(f("contact.phone_number")),
    },
    {
      icon: Mail,
      label: f("contact.email_label"),
      value: f("contact.email_address"),
      href: `mailto:${f("contact.email_address")}`,
    },
    {
      icon: MapPin,
      label: f("contact.address_label"),
      value: f("address_text"),
      hint: t("address_hint"),
    },
  ];

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <h2 className="heading border-t-2 border-ink pt-5 text-[26px] text-ink">
              {t("info_title")}
            </h2>
            <ul className="mt-8 space-y-7">
              {details.map(({ icon: Icon, label, value, href, hint }) => (
                <li key={label} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-ink text-sun">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[14px] text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[17px] font-semibold text-ink hover:text-flame"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[17px] font-semibold text-ink">{value}</p>
                    )}
                    {hint && <p className="mt-1 text-[14px] text-muted">{hint}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="lg:col-span-8">
            <GMCForm recipient={f("contact.email_address")} />
          </div>
        </div>
      </section>
      <GMCMap title={t("map_title")} />
    </>
  );
};

export default GMCContact;
