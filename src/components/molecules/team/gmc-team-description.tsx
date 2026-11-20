"use client";

import { useTranslations } from "next-intl";

function GMCTeamDescription() {
  const t = useTranslations("Team.team");

  return (
    <section className="pt-24 md:pt-32">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-16">
        <h2 className="display text-[clamp(2rem,3.8vw,3.2rem)] text-ink lg:col-span-6">
          {t("title")}
        </h2>
        <p className="text-[18px] leading-relaxed text-muted lg:col-span-6 lg:pt-2">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

export default GMCTeamDescription;
