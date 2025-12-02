"use client";

import { useTranslations } from "next-intl";

function GMCVision() {
  const t = useTranslations("AboutUs.vision");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-lg leading-10 font-normal">
        <span className="font-bold text-4xl">{t("title")}</span>{" "}
        {t("description_1")}
      </p>
    </section>
  );
}

export default GMCVision;
