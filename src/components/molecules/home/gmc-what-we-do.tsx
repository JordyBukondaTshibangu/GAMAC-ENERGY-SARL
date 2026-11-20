"use client";

import { useLocale, useTranslations } from "next-intl";

type Item = { title: string; text: string };

/** "What sets us apart" — the four differentiators from the company profile. */
function GMCWhatWeDo() {
  const t = useTranslations("HomePage.why");
  const items = t.raw("items") as Item[];
  const [open, close] = useLocale() === "fr" ? ["« ", " »"] : ["“", "”"];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">{t("title")}</h2>
          <blockquote className="mt-10 border-l-[3px] border-flame pl-6">
            <p className="heading text-[22px] font-medium leading-snug text-ink">
              {open}
              {t("quote")}
              {close}
            </p>
          </blockquote>
        </div>

        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:pt-3">
          {items.map((item) => (
            <li key={item.title} className="border-t-2 border-ink pt-5">
              <h3 className="heading text-[22px] text-ink">{item.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GMCWhatWeDo;
