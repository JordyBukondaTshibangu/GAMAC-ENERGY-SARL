"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import PageHero from "@/components/common/page-hero";

function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <>
      <PageHero
        media={{
          type: "video",
          sources: ["/assets/videos/projets.mp4"],
          poster: "/assets/images/posters/solar-equipment.jpg",
        }}
        title={t("title")}
        description={t("description")}
        actions={<ButtonLink href="/contact">{t("button")}</ButtonLink>}
      />
      <GMCGetInTouch />
    </>
  );
}

export default ProjectsPage;
