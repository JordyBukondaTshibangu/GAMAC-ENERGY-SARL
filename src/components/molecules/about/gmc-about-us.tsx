"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function GMCAboutUs({ id }: { id?: string }) {
  const t = useTranslations("AboutUs.historic");
  const home = useTranslations("HomePage");

  const roles = [
    home("welcome_to_gamac.metrics.metric_1"),
    home("welcome_to_gamac.metrics.metric_2"),
    home("welcome_to_gamac.metrics.metric_3"),
  ];

  return (
    <section id={id} className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-[15px] font-medium text-flame">{t("subtitle")}</p>
          <h2 className="display mt-4 text-[clamp(2rem,3.8vw,3.2rem)] text-ink">
            {t("statement")}
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-10">
          <p className="text-[18px] leading-relaxed text-muted">
            {t("description_1")}{" "}
            <strong className="font-semibold text-text">{t("description_2").trim()}</strong>{" "}
            {t("description_3")}
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li key={role} className="flex items-center gap-4 py-4 text-[17px] font-medium text-ink">
                <span className="energy-gradient h-2 w-2 shrink-0 rounded-full" aria-hidden />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 md:mt-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-paper">
          <Image
            src="/assets/images/manual-service.jpg"
            alt=""
            fill
            sizes="(min-width: 1240px) 1160px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default GMCAboutUs;
