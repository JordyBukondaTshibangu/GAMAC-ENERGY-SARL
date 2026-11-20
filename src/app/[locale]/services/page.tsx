"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import ScrollNav from "@/components/common/gmc-scroll-into-view";
import PageHero from "@/components/common/page-hero";
import { serviceImages } from "@/components/molecules/home/gmc-our-portfolio";
import GMCPrestationServiceCard from "@/components/molecules/services/gmc-prestation-card";

const slugs = [
  "prestataires-des-services-intellectuels",
  "prestataires-des-travaux-physiques",
  "fournisseurs-d-equipements-electriques",
];
const anchors = ["services-intellectuels", "travaux-physiques", "equipements"];

export default function GMCServicesPage() {
  const t = useTranslations("Services");
  const common = useTranslations("Common");

  const sections = [
    { label: t("navigation.service"), id: anchors[0] },
    { label: t("navigation.travaux"), id: anchors[1] },
    { label: t("navigation.fournitures"), id: anchors[2] },
    { label: t("navigation.contact"), id: "contact" },
  ];

  const highlights = t.raw("highlights") as string[][];

  return (
    <>
      <PageHero
        media={{
          type: "video",
          sources: ["/assets/videos/service.mp4"],
          poster: "/assets/images/posters/solar-equipment.jpg",
        }}
        kicker={t("hero.title_description_1")}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={<ButtonLink href="/contact">{t("hero.button")}</ButtonLink>}
      />

      <ScrollNav sections={sections} />

      {slugs.map((slug, i) => (
        <GMCPrestationServiceCard
          key={slug}
          id={anchors[i]}
          link={slug}
          reverse={i % 2 === 1}
          tinted={i % 2 === 1}
          title={t(`services.${i}.title`)}
          image={serviceImages[i]}
          description={t(`services.${i}.description`)}
          highlights={highlights[i]}
          linkLabel={common("learn_more")}
        />
      ))}

      <GMCGetInTouch id="contact" />
    </>
  );
}
