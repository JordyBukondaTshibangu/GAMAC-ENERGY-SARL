"use client";

import { useTranslations } from "next-intl";

import PageHero from "@/components/common/page-hero";
import GMCContact from "@/components/molecules/contact";

function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <>
      <PageHero
        media={{
          type: "video",
          sources: ["/assets/videos/contact.mp4"],
          poster: "/assets/images/mission-3.jpg",
        }}
        kicker={t("hero.subtitle")}
        title={t("hero.title")}
        description={t("hero.description")}
      />
      <GMCContact />
    </>
  );
}

export default ContactPage;
