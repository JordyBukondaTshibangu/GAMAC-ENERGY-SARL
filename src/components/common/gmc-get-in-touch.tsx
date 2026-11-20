"use client";

import { ButtonLink } from "@/components/atoms/button";
import { telHref } from "@/utils/site";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GMCGetInTouch({ id }: { id?: string }) {
  const t = useTranslations("GetInTouch");
  const f = useTranslations("Footer.contact");

  return (
    <section id={id} className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/assets/images/high-voltage-substation.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-bottom opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />

      <div className="container-x grid gap-12 py-24 md:grid-cols-[1.4fr_1fr] md:items-end md:py-32">
        <div>
          <h2 className="display text-[clamp(2.2rem,4.6vw,3.8rem)]">{t("title")}</h2>
          <p className="mt-6 max-w-[36rem] text-[18px] leading-relaxed text-white/80">
            {t("description")}
          </p>
          <ButtonLink href="/contact" className="mt-10">
            {t("button")}
          </ButtonLink>
        </div>

        <div className="border-l border-white/20 pl-6 md:pl-8">
          <p className="text-[15px] text-white/60">{t("or")}</p>
          <a
            href={telHref(f("phone_number"))}
            className="heading mt-2 block text-[26px] transition-colors hover:text-sun"
          >
            {f("phone_number")}
          </a>
          <a
            href={`mailto:${f("email_address")}`}
            className="mt-3 inline-block text-[17px] text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {f("email_address")}
          </a>
        </div>
      </div>
    </section>
  );
}
