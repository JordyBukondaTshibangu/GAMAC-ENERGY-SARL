"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import PageHero from "@/components/common/page-hero";
import GMCMaterialsList from "@/components/molecules/services/gmc-materials-list";
import GMCSpecializedEquipment from "@/components/molecules/services/gmc-special-equipment-lit";

export default function GMCEquipmentSupply() {
  const t = useTranslations("Fournisseurs.hero");
  const services = useTranslations("Services");
  const common = useTranslations("Common");

  return (
    <>
      <PageHero
        media={{ type: "image", src: "/assets/images/solar-equipment.jpg" }}
        breadcrumb={{ label: common("all_services"), href: "/services" }}
        title={t("title")}
        description={services("services.2.description")}
        actions={<ButtonLink href="/contact">{t("button")}</ButtonLink>}
      />
      <GMCMaterialsList />
      <GMCSpecializedEquipment />
      <GMCGetInTouch />
    </>
  );
}
