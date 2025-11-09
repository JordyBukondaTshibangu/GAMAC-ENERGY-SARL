"use client";

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
  const aboutRef = useRef(null);
  const ourVision = useRef(null);
  const motDuDgRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { label: "À propos de Nous", ref: aboutRef },
    { label: "Notre Vision", ref: ourVision },
    { label: "Un mot du Directeur Général", ref: motDuDgRef },
    { label: "Entrez en contact", ref: contactRef },
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
        title="A PROPOS DE NOUS"
        subtitle="L’énergie verte à portée de tous."
        description="GAMAC ENERGY est née d’une conviction : l’avenir appartient à l’énergie renouvelable. Nous innovons chaque jour pour rendre l’énergie propre accessible et performante. Notre mission : bâtir un futur durable, pour les générations d’aujourd’hui et de demain."
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
