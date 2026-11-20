"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import PageHero from "@/components/common/page-hero";
import GMCOurPartners from "@/components/molecules/home/gmc-our-partners";
import GMCOurPortfolio from "@/components/molecules/home/gmc-our-portfolio";
import GMCValueChain from "@/components/molecules/home/gmc-value-chain";
import GMCWelcome from "@/components/molecules/home/gmc-welcome";
import GMCWhatWeDo from "@/components/molecules/home/gmc-what-we-do";

export default function Home() {
  const t = useTranslations("HomePage");
  const common = useTranslations("Common");

  const roles = [
    t("welcome_to_gamac.metrics.metric_1"),
    t("welcome_to_gamac.metrics.metric_2"),
    t("welcome_to_gamac.metrics.metric_3"),
  ];

  return (
    <>
      <PageHero
        size="home"
        media={{
          type: "video",
          sources: ["/assets/videos/hero-2.mp4", "/assets/videos/hero-1.mp4"],
          poster: "/assets/images/mission-2.jpg",
        }}
        kicker={`${common("company")}, Kinshasa`}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={
          <>
            <ButtonLink href="/contact">{t("hero.button")}</ButtonLink>
            <ButtonLink href="/services" variant="outline-light">
              {t("hero.secondary_button")}
            </ButtonLink>
          </>
        }
      >
        <div className="mt-16 border-t border-white/15 pt-6 md:mt-24">
          <p className="text-[14px] text-white/55">{t("hero.roles_label")}</p>
          <ul className="mt-3 grid gap-3 md:grid-cols-3 md:gap-8">
            {roles.map((role) => (
              <li key={role} className="text-[16px] font-medium leading-snug text-white/90">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <GMCWelcome />
      <GMCValueChain />
      <GMCOurPortfolio />
      <GMCWhatWeDo />
      <GMCOurPartners />
      <GMCGetInTouch />
    </>
  );
}
