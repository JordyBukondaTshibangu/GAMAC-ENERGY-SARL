"use client";

import { useTranslations } from "next-intl";

import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import GMCOurPartners from "@/components/molecules/home/gmc-our-partners";
import GMCOurPortfolio from "@/components/molecules/home/gmc-our-portfolio";
import GMCTestimonies from "@/components/molecules/home/gmc-testimony";
import GMCWelcome from "@/components/molecules/home/gmc-welcome";
import GMCWhatWeDo from "@/components/molecules/home/gmc-what-we-do";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col gap-20">
      <Hero
        videos={["/assets/videos/hero-2.mp4", "/assets/videos/hero-1.mp4"]}
        title={t("hero.title")}
        subtitle={t("hero.title_description_1")}
        description={t("hero.description")}
        buttonText={t("hero.button")}
        buttonLink="/contact"
        overlayOpacity={0.7}
      />
      <GMCWelcome />
      <GMCWhatWeDo />
      <GMCOurPortfolio />
      <GMCOurPartners />
      <GMCTestimonies />
      <GMCGetInTouch />
    </div>
  );
}
