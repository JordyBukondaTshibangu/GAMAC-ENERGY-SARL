"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import PageHero from "@/components/common/page-hero";
import GMCMission from "@/components/molecules/mission";

function MissionPage() {
  const t = useTranslations("Mision");

  return (
    <>
      <PageHero
        media={{
          type: "video",
          sources: ["/assets/videos/mission.mp4"],
          poster: "/assets/images/mission-1.jpg",
        }}
        kicker={t("hero.title_description_1")}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={<ButtonLink href="/contact">{t("hero.button")}</ButtonLink>}
      />
      <GMCMission />
      <GMCGetInTouch />
    </>
  );
}

export default MissionPage;
