"use client";

import { useTranslations } from "next-intl";

function GMCTeamDescription() {
  const t = useTranslations("Team.team");

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="w-full flex flex-col gap-6 text-5xl mb-16 leading-16">
        <span>{t("subtitle")}</span>
        <span className="font-bold uppercase">{t("title")}</span>
      </h2>

      <p className="text-lg leading-10 font-normal">
        {t("description_1")}
        <span className="font-bold">{t("description_2")}</span>
        {t("description_3")}
      </p>
    </section>
  );
}

export default GMCTeamDescription;
