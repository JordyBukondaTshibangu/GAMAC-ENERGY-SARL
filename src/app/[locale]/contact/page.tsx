"use client";

import { useTranslations } from "next-intl";

import Hero from "@/components/common/gmc-hero";
import GMCContact from "@/components/molecules/contact";

function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <>
      <Hero
        videos={["/assets/videos/contact.mp4"]}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        overlayOpacity={0.7}
      />

      <GMCContact />
    </>
  );
}

export default ContactPage;
