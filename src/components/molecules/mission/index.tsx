"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Mission = { title: string; description: string };

const images = [
  "/assets/images/high-voltage-substation.jpg",
  "/assets/images/mission-1.jpg",
  "/assets/images/materials.jpg",
];

/** The three missions, in the order the company states them (first, second, third). */
function GMCMission() {
  const t = useTranslations("Mision");
  const missions = t.raw("missions") as Mission[];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <h2 className="display max-w-[40rem] text-[clamp(2rem,3.8vw,3.2rem)] text-ink">
          {t("intro")}
        </h2>

        <ol className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
          {missions.map((m, i) => (
            <li
              key={m.title}
              className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-paper lg:col-span-7 ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={images[i]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="flex items-baseline gap-3 text-ink">
                  <span className="display text-[64px] leading-none text-flame">{i + 1}</span>
                  <span className="text-[15px] font-medium text-muted">{t("label")}</span>
                </p>
                <h3 className="heading mt-5 text-[28px] text-ink">{m.title}</h3>
                <p className="mt-5 text-[17px] leading-[1.75] text-muted">{m.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default GMCMission;
