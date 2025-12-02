"use client";

import { useTranslations } from "next-intl";

import HeroImage from "@/components/common/gmc-hero-image";
import GMCServiceList from "@/components/molecules/services/gmc-service-list";

export default function GMCSIntellectualService() {
  const tHero = useTranslations("ServicesIntellectuels.hero");
  const tServices = useTranslations("ServicesIntellectuels");

  // services: [{ title: string; items: string[] }]
  const services = tServices.raw("services") as {
    title: string;
    items: string[];
  }[];

  // Adapt to GMCServiceList props: { category, items }
  const cases = services.map((service) => ({
    category: service.title,
    items: service.items,
  }));

  return (
    <div className="w-full flex flex-col gap-20">
      <HeroImage
        title={tHero("title")}
        image="/assets/images/mission-2.jpg"
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
