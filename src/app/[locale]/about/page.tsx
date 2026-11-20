"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import ScrollNav from "@/components/common/gmc-scroll-into-view";
import PageHero from "@/components/common/page-hero";
import GMCAboutUs from "@/components/molecules/about/gmc-about-us";
import GMCMotDuDG from "@/components/molecules/about/gmc-mot-du-dg";
import GMCVision from "@/components/molecules/about/gmc-vision";

function AboutUsPage() {
  const t = useTranslations("AboutUs");
  const nav = useTranslations("Navigation");

  const sections = [
    { label: t("navigation.about"), id: "qui-sommes-nous" },
    { label: t("navigation.vision"), id: "vision" },
    { label: t("navigation.mot_du_dg"), id: "mot-du-dg" },
    { label: t("navigation.contact"), id: "contact" },
  ];

  return (
    <>
      <PageHero
        media={{
          type: "video",
          sources: ["/assets/videos/about.mp4"],
          poster: "/assets/images/posters/mission-3.jpg",
        }}
        kicker={t("hero.title_description_1")}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={<ButtonLink href="/contact">{nav("cta")}</ButtonLink>}
      />
      <ScrollNav sections={sections} />
      <GMCAboutUs id="qui-sommes-nous" />
      <GMCVision id="vision" />
      <GMCMotDuDG id="mot-du-dg" />
      <GMCGetInTouch id="contact" />
    </>
  );
}

export default AboutUsPage;
