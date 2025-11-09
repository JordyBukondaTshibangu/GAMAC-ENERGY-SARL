"use client";

import { RefObject, useRef } from "react";

import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import ScrollNav from "@/components/common/gmc-scroll-into-view";
import GMCMission from "@/components/molecules/mission";

interface SectionItem {
  label: string;
  ref: RefObject<HTMLElement | null>;
}

function MissionPage() {
  const fournirRef = useRef<HTMLElement | null>(null);
  const valoriserRef = useRef<HTMLElement | null>(null);
  const innoverRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections: SectionItem[] = [
    { label: "Entrez en contact", ref: contactRef },
    { label: "Valoriser les talents", ref: valoriserRef },
    { label: "Innover pour un développement durable", ref: innoverRef },
    { label: "Fournir des solutions locales", ref: fournirRef },
  ];

  const scrollToSection = (
    ref: RefObject<HTMLElement | null>,
    options: ScrollIntoViewOptions = { behavior: "smooth" }
  ): void => {
    ref.current?.scrollIntoView(options);
  };

  return (
    <div className="flex flex-col gap-20">
      <Hero
        title="NOTRE MISSION"
        videos={["assets/videos/mission.mp4"]}
        subtitle="L’innovation au service d’une énergie propre."
        description="Nous sommes fiers de bâtir des solutions locales qui participent à la souveraineté énergétique de notre pays."
        buttonText="ENTREZ EN CONTACT"
        buttonLink="/contact"
        overlayOpacity={0.7}
      />

      <ScrollNav sections={sections} scrollToSection={scrollToSection} />

      <GMCMission
        fournirRef={fournirRef}
        innoverRef={innoverRef}
        valoriserRef={valoriserRef}
      />

      <GMCGetInTouch />
    </div>
  );
}

export default MissionPage;
