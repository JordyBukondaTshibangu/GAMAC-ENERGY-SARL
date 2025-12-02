"use client";

import MissionCard from "@/components/atoms/mission-card";
import { useTranslations } from "next-intl";

type GMCMissionProps = {
  fournirRef: React.RefObject<HTMLElement | null>;
  valoriserRef: React.RefObject<HTMLElement | null>;
  innoverRef: React.RefObject<HTMLElement | null>;
};

function GMCMission({ fournirRef, valoriserRef, innoverRef }: GMCMissionProps) {
  const t = useTranslations("Mision");

  const missions = [
    {
      title: t("missions.0.title"),
      description: t("missions.0.description"),
      image: "/assets/images/mission-1.jpg",
      ref: fournirRef,
    },
    {
      title: t("missions.1.title"),
      description: t("missions.1.description"),
      image: "/assets/images/mission-3.jpg",
      ref: valoriserRef,
    },
    {
      title: t("missions.2.title"),
      description: t("missions.2.description"),
      image: "/assets/images/mission-2.jpg",
      ref: innoverRef,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py:10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-20 md:gap-64">
        {missions.map(({ title, description, image, ref }, index) => (
          <div key={index} ref={ref as React.RefObject<HTMLDivElement>}>
            <MissionCard
              title={title}
              reverse={index % 2 === 1}
              description={description}
              image={image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GMCMission;
