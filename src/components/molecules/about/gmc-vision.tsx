"use client";

import { useLocale, useTranslations } from "next-intl";

function GMCVision({ id }: { id?: string }) {
  const t = useTranslations("AboutUs.vision");
  const [open, close] = useLocale() === "fr" ? ["« ", " »"] : ["“", "”"];

  return (
    <section id={id} className="bg-ink py-24 text-white md:py-32">
      <div className="container-x">
        <p className="flex items-center gap-3 text-[15px] font-medium text-white/70">
          <span className="energy-gradient h-[2px] w-10" aria-hidden />
          {t("title")}
        </p>
        <h2 className="display mt-6 max-w-[60rem] text-[clamp(2rem,4.2vw,3.5rem)]">
          {t("lead")}
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <p className="text-[18px] leading-relaxed text-white/75">{t("description_1")}</p>
          <p className="text-[18px] leading-relaxed text-white/75">{t("description_2")}</p>
        </div>

        <blockquote className="mt-16 border-t border-white/15 pt-10">
          <p className="heading max-w-[44rem] text-[24px] font-medium leading-snug text-sun">
            {open}
            {t("quote")}
            {close}
          </p>
        </blockquote>
      </div>
    </section>
  );
}

export default GMCVision;
