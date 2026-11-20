"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import PageHero from "@/components/common/page-hero";
import GMCTeamDescription from "@/components/molecules/team/gmc-team-description";
import GMCTeamList from "@/components/molecules/team/gmc-team-list";

function TeamPage() {
  const t = useTranslations("Team");

  return (
    <>
      <PageHero
        media={{
          type: "video",
          sources: ["/assets/videos/team.mp4"],
          poster: "/assets/images/posters/manual-services.jpg",
        }}
        kicker={t("hero.title_description_1")}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={
          <ButtonLink href="/about" variant="outline-light">
            {t("hero.button")}
          </ButtonLink>
        }
      />
      <GMCTeamDescription />
      <GMCTeamList />
      <GMCGetInTouch />
    </>
  );
}

export default TeamPage;
