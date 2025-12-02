"use client";

import { useTranslations } from "next-intl";

import HeroImage from "@/components/common/gmc-hero-image";
import GMCServiceList from "@/components/molecules/services/gmc-service-list";

export default function GMCSPhysicalService() {
  const tHero = useTranslations("TravauxPhysique.hero");
  const tServices = useTranslations("TravauxPhysique");

  const rawServices = tServices.raw("services") as {
    title: string;
    items: string | string[];
  }[];

  const cases = rawServices.map((service) => {
    const title: string = service.title;
    const itemsRaw = service.items;

    let items: string[] = [];

    if (
      title === "Électricité et Hydrauliques" &&
      Array.isArray(itemsRaw) &&
      itemsRaw.length > 0 &&
      typeof itemsRaw[0] === "object" &&
      !Array.isArray(itemsRaw[0])
    ) {
      const grouped = itemsRaw[0] as Record<string, string[]>;

      items = Object.entries(grouped).map(([sectionLabel, sectionItems]) => {
        const joined = sectionItems.join(", ");
        return `${sectionLabel} : ${joined}`;
      });
    } else if (Array.isArray(itemsRaw)) {
      // For "Pétrole & Gaz" it's already a string[]
      items = itemsRaw as string[];
    }

    return {
      category: title,
      items,
    };
  });

  return (
    <div className="w-full flex flex-col gap-20">
      <HeroImage
        title={tHero("title")}
        image="/assets/images/manual-service.jpg"
        subtitle={tHero("subtitle")}
        description={tHero("description")}
        buttonText={tHero("button")}
        buttonLink="/contact"
        overlayOpacity={0.7}
      />

      <GMCServiceList cases={cases} />
    </div>
  );
}
