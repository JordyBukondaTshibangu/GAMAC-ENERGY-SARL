"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("Mision");

  const fournirRef = useRef<HTMLElement | null>(null);
  const valoriserRef = useRef<HTMLElement | null>(null);
  const innoverRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections: SectionItem[] = [
    { label: t("navigation.fournir"), ref: fournirRef },
    { label: t("navigation.valoriser"), ref: valoriserRef },
    { label: t("navigation.innover"), ref: innoverRef },
    { label: t("navigation.contact"), ref: contactRef },
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
        title={t("hero.title")}
        videos={["assets/videos/mission.mp4"]}
        subtitle={t("hero.title_description_1")}
        description={t("hero.description")}
        buttonText={t("hero.button")}
        buttonLink="/contact"
        overlayOpacity={0.7}
      />

      <ScrollNav sections={sections} scrollToSection={scrollToSection} />

      <GMCMission
        fournirRef={fournirRef}
        innoverRef={innoverRef}
        valoriserRef={valoriserRef}
      />

      <section ref={contactRef}>
        <GMCGetInTouch />
      </section>
    </div>
  );
}

export default MissionPage;
