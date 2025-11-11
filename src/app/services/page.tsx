"use client";

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
  const intellectuelsRef = useRef<HTMLElement | null>(null);
  const physiquesRef = useRef<HTMLElement | null>(null);
  const equipementsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections = [
    { label: "Services Intellectuels", ref: intellectuelsRef },
    { label: "Travaux Physiques", ref: physiquesRef },
    { label: "Fournitures Électriques", ref: equipementsRef },
    { label: "Contact", ref: contactRef },
  ];

  const scrollToSection = (
    ref: SectionRef | null,
    options: SmoothScrollOptions = { behavior: "smooth" }
  ): void => {
    ref?.current?.scrollIntoView(options);
  };

  const prestations = [
    {
      title: "Prestataires des services intellectuels",
      link: "prestataires-des-services-intellectuels",
      description:
        "Nous accompagnons nos clients et partenaires dans la réussite de leurs projets énergétiques en électricité, hydraulique et aval pétrolier. Notre expertise couvre toutes les étapes clés : de la conception à la mise en service, avec un accompagnement technique et stratégique de bout en bout.",
      image: "/assets/images/mission-2.jpg",
    },
    {
      title: "Prestataires des travaux physiques",
      link: "prestataires-des-travaux-physiques",
      description:
        "Nous accompagnons nos clients et partenaires dans la réussite de leurs projets énergétiques en électricité, hydraulique et aval pétrolier. Notre expertise couvre le cycle de vie de vos infrastructures énergétiques.",
      image: "/assets/images/manual-service.jpg",
    },
    {
      title: "Fournisseurs d’équipements électriques",
      link: "fournisseurs-d-equipements-electriques",
      description:
        "Nous accompagnons nos clients dans l’approvisionnement des matériels et équipements spécialisés.",
      image: "/assets/images/solar-equipment.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20">
      <Hero
        title="NOTRE SERVICES"
        videos={["assets/videos/service.mp4"]}
        subtitle="Pour un futur plus vert, dès maintenant."
        description="Nous accompagnons nos clients et partenaires dans la réussite de leurs projets énergétiques en électricité, hydraulique et aval pétrolier. Notre expertise couvre toutes les étapes clés : de la conception à la mise en service, avec un accompagnement technique et stratégique de bout en bout."
        buttonText="ENTREZ EN CONTACT"
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
