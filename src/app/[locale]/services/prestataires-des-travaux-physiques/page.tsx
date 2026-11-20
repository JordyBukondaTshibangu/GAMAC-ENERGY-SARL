"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components/atoms/button";
import GMCGetInTouch from "@/components/common/gmc-get-in-touch";
import PageHero from "@/components/common/page-hero";
import GMCServiceList, {
  type ServiceCategory,
} from "@/components/molecules/services/gmc-service-list";

export default function GMCSPhysicalService() {
  const t = useTranslations("TravauxPhysique");
  const common = useTranslations("Common");

  return (
    <>
      <PageHero
        media={{ type: "image", src: "/assets/images/solar-panels.jpg" }}
        breadcrumb={{ label: common("all_services"), href: "/services" }}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={<ButtonLink href="/contact">{t("hero.button")}</ButtonLink>}
      />
      <GMCServiceList categories={t.raw("services") as ServiceCategory[]} />
      <GMCGetInTouch />
    </>
  );
}
