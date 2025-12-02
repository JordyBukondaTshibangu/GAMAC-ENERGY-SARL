"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";

import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import ScrollNav from "@/components/common/gmc-scroll-into-view";
import GMCAboutUs from "@/components/molecules/about/gmc-about-us";
import GMCMotDuDG from "@/components/molecules/about/gmc-mot-du-dg";
import GMCVision from "@/components/molecules/about/gmc-vision";

interface SectionRef {
  current: HTMLElement | null;
}

interface SmoothScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

function AboutUsPage() {
  const t = useTranslations("AboutUs");

  const aboutRef = useRef<HTMLElement | null>(null);
  const ourVision = useRef<HTMLElement | null>(null);
  const motDuDgRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections = [
    { label: t("navigation.about"), ref: aboutRef },
    { label: t("navigation.vision"), ref: ourVision },
    { label: t("navigation.mot_du_dg"), ref: motDuDgRef },
    { label: t("navigation.contact"), ref: contactRef },
  ];

  const scrollToSection = (
    ref: SectionRef | null,
    options: SmoothScrollOptions = { behavior: "smooth" }
  ): void => {
    ref?.current?.scrollIntoView(options);
  };

  return (
    <div className="w-full flex flex-col gap-20">
      <Hero
        videos={["assets/videos/about.mp4"]}
        title={t("hero.title")}
        subtitle={t("hero.title_description_1")}
        description={t("hero.description")}
        overlayOpacity={0.7}
      />

      <ScrollNav sections={sections} scrollToSection={scrollToSection} />

      <section ref={aboutRef}>
        <GMCAboutUs />
      </section>

      <section ref={ourVision}>
        <GMCVision />
      </section>

      <section ref={motDuDgRef}>
        <GMCMotDuDG />
      </section>

      <section ref={contactRef} className="-mt-20">
        <GMCGetInTouch />
      </section>
    </div>
  );
}

export default AboutUsPage;
