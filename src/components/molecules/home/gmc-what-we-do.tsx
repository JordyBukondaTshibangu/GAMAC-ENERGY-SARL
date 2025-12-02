"use client";

import { useTranslations } from "next-intl";

function GMCWhatWeDo() {
  const t = useTranslations("HomePage.que_fait_gamac");

  return (
    <div className="relative bg-[url('/assets/images/mission-1.jpg')] bg-cover bg-center w-full min-h-[700px] flex flex-col text-white gap-8">
      <div className="flex flex-col items-center w-full h-full bg-black/70 gap-24 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-32">
          {/* Title */}
          <h2 className="w-full lg:w-1/3 h-full flex flex-col gap-20 text-3xl leading-12">
            <span className="font-bold uppercase">{t("title")}</span>
            <span className="text-2xl leading-10">{t("description")}</span>
          </h2>

          {/* Content */}
          <div className="w-full lg:w-1/2 self-end flex flex-col gap-6 h-full">
            {/* First paragraph */}
            <p className="text-xl leading-10 font-normal">
              {t("description_1")}
              <span className="font-bold italic">{t("description_1_1")}</span>
            </p>

            {/* Chain of value */}
            <p className="text-xl leading-10 font-normal">
              {t("description_2")}
            </p>

            {/* Metrics List */}
            <ul className="flex flex-col gap-2 px-10 list-disc">
              <li className="text-xl font-medium leading-normal">
                {t("metrics.metric_1")}
              </li>
              <li className="text-xl font-medium leading-normal">
                {t("metrics.metric_2")}
              </li>
              <li className="text-xl font-medium leading-normal">
                {t("metrics.metric_3")}
              </li>
              <li className="text-xl font-medium leading-normal">
                {t("metrics.metric_4")}
              </li>
              <li className="text-xl font-medium leading-normal">
                {t("metrics.metric_5")}
              </li>
            </ul>

            {/* Final paragraph */}
            <p className="text-xl leading-10 font-normal">
              {t("description_3")}
              <span className="font-bold italic">{t("description_3_1")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GMCWhatWeDo;
