"use client";

import { useTranslations } from "next-intl";

import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import Hero from "@/components/common/gmc-hero";
import GMCTeamDescription from "@/components/molecules/team/gmc-team-description";
import GMCTeamList from "@/components/molecules/team/gmc-team-list";

function TeamPage() {
  const t = useTranslations("Team");

  return (
    <div className="flex flex-col gap-20">
      <Hero
        title={t("hero.title")}
        videos={["/assets/videos/team.mp4"]}
        subtitle={t("hero.title_description_1")}
        description={t("hero.description")}
        buttonText={t("hero.button")}
        buttonLink="/about"
        overlayOpacity={0.7}
      />

      <GMCTeamDescription />
      <GMCTeamList />
      <GMCGetInTouch />
    </div>
  );
}

export default TeamPage;
