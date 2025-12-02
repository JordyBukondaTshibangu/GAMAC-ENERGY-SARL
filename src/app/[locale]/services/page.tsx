"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";

import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import ScrollNav from "@/components/common/gmc-scroll-into-view";
import GMCPrestationServiceCard from "@/components/molecules/services/gmc-prestation-card";

interface SectionRef {
  current: HTMLElement | null;
}

interface SmoothScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

export default function GMCServicesPage() {
  const t = useTranslations("Services");

  const intellectuelsRef = useRef<HTMLElement | null>(null);
  const physiquesRef = useRef<HTMLElement | null>(null);
  const equipementsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections = [
    { label: t("navigation.service"), ref: intellectuelsRef },
    { label: t("navigation.travaux"), ref: physiquesRef },
    { label: t("navigation.fournitures"), ref: equipementsRef },
    { label: t("navigation.contact"), ref: contactRef },
  ];

  const scrollToSection = (
    ref: SectionRef | null,
    options: SmoothScrollOptions = { behavior: "smooth" }
  ): void => {
    ref?.current?.scrollIntoView(options);
  };

  const prestations = [
    {
      title: t("services.0.title"),
      link: "prestataires-des-services-intellectuels",
      description: t("services.0.description"),
      image: "/assets/images/mission-2.jpg",
    },
    {
      title: t("services.1.title"),
      link: "prestataires-des-travaux-physiques",
      description: t("services.1.description"),
      image: "/assets/images/manual-service.jpg",
    },
    {
      title: t("services.2.title"),
      link: "fournisseurs-d-equipements-electriques",
      description: t("services.2.description"),
      image: "/assets/images/solar-equipment.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20">
      <Hero
        title={t("hero.title")}
        videos={["assets/videos/service.mp4"]}
        subtitle={t("hero.title_description_1")}
        description={t("hero.description")}
        buttonText={t("hero.button")}
        buttonLink="/contact"
        overlayOpacity={0.7}
      />

      {/* Scroll Navigation */}
      <ScrollNav sections={sections} scrollToSection={scrollToSection} />

      {/* Sections */}
      <section className="px-5 lg:my-20" ref={intellectuelsRef}>
        <GMCPrestationServiceCard
          order={0}
          link={prestations[0].link}
          title={prestations[0].title}
          image={prestations[0].image}
          description={prestations[0].description}
        />
      </section>

      <section className="px-5 lg:my-20" ref={physiquesRef}>
        <GMCPrestationServiceCard
          order={1}
          link={prestations[1].link}
          title={prestations[1].title}
          image={prestations[1].image}
          description={prestations[1].description}
        />
      </section>

      <section className="px-5 lg:my-20" ref={equipementsRef}>
        <GMCPrestationServiceCard
          order={2}
          link={prestations[2].link}
          title={prestations[2].title}
          image={prestations[2].image}
          description={prestations[2].description}
        />
      </section>

      <section ref={contactRef} className="mt-20">
        <GMCGetInTouch />
      </section>
    </div>
  );
}
