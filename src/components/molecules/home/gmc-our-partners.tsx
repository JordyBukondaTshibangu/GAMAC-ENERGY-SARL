"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const partners = [
  { image: "/assets/images/partenaires/geosigmoid-group.png", name: "Geosigmoid Group" },
  { image: "/assets/images/partenaires/Geoscan-soft.png", name: "Geoscan Soft" },
];

function GMCOurPartners() {
  const t = useTranslations("HomePage.partenaires");

  return (
    <section className="border-y border-line bg-paper">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <h2 className="heading text-[22px] text-ink">{t("title")}</h2>
        <ul className="flex flex-wrap items-center gap-x-14 gap-y-6">
          {partners.map((p) => (
            <li key={p.name} className="bg-white px-6 py-4">
              <Image
                src={p.image}
                alt={p.name}
                width={200}
                height={100}
                className="h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GMCOurPartners;
