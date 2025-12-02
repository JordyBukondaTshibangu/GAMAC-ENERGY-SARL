"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function GMCWelcome() {
  const t = useTranslations("HomePage");

  return (
    <section className="max-w-7xl mx-auto py-10 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-14">
      {/* Image */}
      <div className="w-full h-full min-h-[600px] overflow-hidden bg-red-300">
        <Image
          src="/assets/images/mission-1.jpg"
          alt="GAMAC ENERGY SARL"
          width={400}
          height={800}
          className="object-cover w-full min-h-[600px] h-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col gap-3">
        <h2 className="w-full flex flex-col gap-2 text-3xl leading-12">
          <span className="text-[16px]">{t("welcome_to_gamac.title")}</span>
          <span className="font-bold uppercase">
            {t("welcome_to_gamac.subtitle")}
          </span>
        </h2>

        <p className="text-lg leading-10 font-normal">
          <span className="font-bold">
            {t("welcome_to_gamac.description_1")}
          </span>
          {t("welcome_to_gamac.description_2")}
          <span className="font-bold">
            {t("welcome_to_gamac.description_3").split("welcome_to_gamac.,")[0]}
          </span>
        </p>

        <p className="text-lg leading-10 font-normal">
          {t("welcome_to_gamac.description_4")}
        </p>

        <ul className="flex flex-col gap-2 px-10 list-disc">
          <li className="text-md font-medium italic leading-normal">
            {t("welcome_to_gamac.metrics.metric_1")}
          </li>
          <li className="text-md font-medium italic leading-normal">
            {t("welcome_to_gamac.metrics.metric_2")}
          </li>
          <li className="text-md font-medium italic leading-normal">
            {t("welcome_to_gamac.metrics.metric_3")}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GMCWelcome;
