"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Member = { name: string; role: string };

const images = [
  "/assets/images/membres/dg.png",
  "/assets/images/membres/coordonatrice.png",
  "/assets/images/membres/coordonateur.png",
  "/assets/images/membres/ingenieur.png",
  "/assets/images/membres/analiste.png",
  "/assets/images/membres/manager.jpg",
];

function GMCTeamList() {
  const t = useTranslations("Team");
  const members = t.raw("members") as Member[];

  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <li key={m.name}>
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <Image
                  src={images[i] ?? images[images.length - 1]}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="heading mt-5 text-[22px] text-ink">{m.name}</h3>
              <p className="mt-1 text-[15px] text-muted">{m.role}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 border-t-2 border-ink pt-8 md:grid-cols-12 md:items-baseline">
          <h2 className="heading text-[26px] text-ink md:col-span-4">{t("team.join_title")}</h2>
          <p className="text-[17px] leading-relaxed text-muted md:col-span-5">
            {t("team.join_text")}
          </p>
          <a
            href={`mailto:${t("team.join_email")}`}
            className="text-[17px] font-semibold text-ink underline decoration-flame decoration-2 underline-offset-[6px] hover:text-flame md:col-span-3 md:justify-self-end"
          >
            {t("team.join_email")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default GMCTeamList;
