"use client";

import { useTranslations } from "next-intl";

/** The full supply catalogue as a two-column list. */
export default function GMCSpecializedEquipment() {
  const t = useTranslations("Fournisseurs");
  const items = t.raw("Section.items") as string[];

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-16">
        <h2 className="heading border-t-2 border-ink pt-5 text-[28px] text-ink lg:col-span-4">
          {t("catalogue_title")}
        </h2>
        <ul className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-4 border-b border-line py-4 text-[17px] leading-relaxed text-text/85"
            >
              <span className="mt-[0.7em] h-[2px] w-3 shrink-0 bg-flame" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
