"use client";

import { CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GMCSpecializedEquipment() {
  const t = useTranslations("Fournisseurs.Section");

  const items = t.raw("items") as string[];

  return (
    <section className="max-w-7xl mx-auto w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a02c0f]">
          {t("title")}
        </h2>

        <p className="text-lg leading-10 text-gray-700">{t("description")}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <CheckIcon size={24} className="text-amber-500 min-w-10" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
