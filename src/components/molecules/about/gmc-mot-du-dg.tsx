"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function GMCMotDuDG({ id }: { id?: string }) {
  const t = useTranslations("AboutUs.mot_du_dg");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id={id} className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+5rem)]">
            <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden bg-paper">
              <Image
                src="/assets/images/dg.png"
                alt={t("name")}
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <article className="lg:col-span-7">
          <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-ink">{t("title")}</h2>
          <div className="prose-measure mt-10 space-y-6 text-[18px] leading-[1.75] text-text/85">
            <p className="font-semibold text-ink">{t("salutation")}</p>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 border-t border-line pt-6">
            <p className="heading text-[20px] text-ink">{t("name")}</p>
            <p className="text-[15px] text-muted">{t("role")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default GMCMotDuDG;
