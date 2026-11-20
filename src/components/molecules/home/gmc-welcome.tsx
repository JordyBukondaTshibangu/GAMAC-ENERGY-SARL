"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

function GMCWelcome() {
  const t = useTranslations("HomePage");
  const about = useTranslations("AboutUs");

  const facts = [
    { value: t("facts.founded_value"), label: t("facts.founded_label") },
    { value: t("facts.roles_value"), label: t("facts.roles_label") },
    { value: t("facts.sectors_value"), label: t("facts.sectors_label"), small: true },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-[15px] font-medium text-flame">
            {t("welcome_to_gamac.subtitle")}
          </p>
          <h2 className="display mt-4 text-[clamp(2rem,3.8vw,3.2rem)] text-ink">
            {about("historic.statement")}
          </h2>
          <p className="prose-measure mt-8 text-[18px] leading-relaxed text-muted">
            <strong className="font-semibold text-text">
              {t("welcome_to_gamac.description_1")}
            </strong>{" "}
            {t("welcome_to_gamac.description_2")}{" "}
            {t("welcome_to_gamac.description_3")}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 md:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className={f.small ? "col-span-2 md:col-span-1" : ""}>
                <dt className="sr-only">{f.label}</dt>
                <dd
                  className={`heading text-ink ${
                    f.small ? "text-[20px] leading-tight" : "text-[44px] leading-none"
                  }`}
                >
                  {f.value}
                </dd>
                <dd className="mt-2 text-[14px] text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="mt-10 inline-block text-[16px] font-semibold text-ink underline decoration-flame decoration-2 underline-offset-[6px] transition-colors hover:text-flame"
          >
            {t("welcome_to_gamac.link")}
          </Link>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper">
            <Image
              src="/assets/images/materials.jpg"
              alt={t("welcome_to_gamac.metrics.metric_2")}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-[46%] border-[6px] border-white bg-paper md:block lg:-left-12">
            <div className="relative aspect-square">
              <Image
                src="/assets/images/mission-3.jpg"
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GMCWelcome;
