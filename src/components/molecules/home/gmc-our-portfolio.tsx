"use client";

import { Link } from "@/i18n/navigation";
import { serviceLinks } from "@/utils/site";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const serviceImages = [
  "/assets/images/manual-service.jpg",
  "/assets/images/solar-panels.jpg",
  "/assets/images/solar-equipment.jpg",
];

function GMCOurPortfolio() {
  const t = useTranslations("HomePage.services_section");
  const s = useTranslations("Services");
  const common = useTranslations("Common");

  const items = serviceLinks.map(({ index, href }) => ({
    href,
    image: serviceImages[index],
    title: s(`services.${index}.title`),
    text: s(`services_short.${index}`),
  }));

  const [feature, ...rest] = items;

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="display text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">{t("title")}</h2>
          <p className="max-w-[32rem] text-[18px] leading-relaxed text-muted md:justify-self-end">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Lead service: large */}
          <Link href={feature.href} className="group lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-line">
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="heading mt-6 text-[28px] text-ink">{feature.title}</h3>
            <p className="mt-3 max-w-[36rem] text-[17px] leading-relaxed text-muted">
              {feature.text}
            </p>
            <span className="mt-5 inline-block text-[15px] font-semibold text-ink underline decoration-flame decoration-2 underline-offset-[6px] group-hover:text-flame">
              {common("learn_more")}
            </span>
          </Link>

          {/* The other two: stacked */}
          <div className="flex flex-col gap-8 lg:col-span-5 lg:gap-10">
            {rest.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-5 border-t border-ink/15 pt-8 lg:grid-cols-1 lg:border-t-0 lg:pt-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-line lg:aspect-[16/8]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <h3 className="heading text-[21px] text-ink lg:text-[23px]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                  <span className="mt-3 inline-block text-[15px] font-semibold text-ink underline decoration-flame decoration-2 underline-offset-[6px] group-hover:text-flame">
                    {common("learn_more")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GMCOurPortfolio;
