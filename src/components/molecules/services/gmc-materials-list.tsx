"use client";

import { containImages, equipmentImages } from "@/utils/services-data";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GMCMaterialsList() {
  const t = useTranslations("Fournisseurs");
  const captions = t.raw("gallery") as string[];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="display text-[clamp(2rem,3.8vw,3.2rem)] text-ink">
            {t("Section.title")}
          </h2>
          <p className="max-w-[32rem] text-[18px] leading-relaxed text-muted md:justify-self-end">
            {t("Section.description")}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentImages.map((src, i) => {
            const contain = containImages.has(src);
            return (
              <li key={src}>
                <figure>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      contain ? "border border-line bg-white" : "bg-paper"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={captions[i] ?? ""}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={contain ? "object-contain p-6" : "object-cover"}
                    />
                  </div>
                  <figcaption className="heading mt-4 text-[19px] text-ink">
                    {captions[i]}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
