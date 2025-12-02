"use client";

import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");

  const contactInfo = [
    {
      icon: <Phone size={22} className="text-[#B71C1C]" />,
      label: t("contact.phone_label"),
      value: t("contact.phone_number"),
    },
    {
      icon: <Mail size={22} className="text-[#B71C1C]" />,
      label: t("contact.email_label"),
      value: t("contact.email_address"),
    },
    {
      icon: <MapPin size={22} className="text-[#B71C1C]" />,
      label: t("contact.address_label"),
      value: t("contact.address_text"),
    },
  ];

  const quickLinks = [
    { label: t("quick_links.about"), href: "/about" },
    { label: t("quick_links.services"), href: "/services" },
    { label: t("quick_links.projects"), href: "/projects" },
    { label: t("quick_links.contacts"), href: "/contact" },
  ];

  const legalLinks = [
    { label: t("legalLinks.privacy"), href: "/privacy-policy" },
    { label: t("legalLinks.terms"), href: "/terms" },
    { label: t("legalLinks.faq"), href: "/faq" },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-[#F4F4F4] text-[#444444] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Brand + Social */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-200 pb-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-[#B71C1C]">
              GAMAC ENERGY SARL
            </h2>
            <p className="mt-3 text-[#555555] leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="w-10 h-10 rounded-full bg-[#B71C1C] text-white flex items-center justify-center hover:bg-[#D32F2F] transition-colors"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#B71C1C] mb-2">
              {t("contact.title")}
            </h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-[#666666]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#B71C1C] mb-2">
              {t("quick_links.title")}
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#555555] hover:text-[#B71C1C] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-[#B71C1C] mb-2">
              {t("legalLinks.title")}
            </h3>
            <ul className="flex flex-col gap-2">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#555555] hover:text-[#B71C1C] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-[#B71C1C] mb-3">
            {t("newsletter.title")}
          </h3>
          <p className="text-sm text-[#555555] mb-4">
            {t("newsletter.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="px-4 py-2 rounded-md border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-[#B71C1C]"
            />
            <button className="bg-[#B71C1C] hover:bg-[#D32F2F] text-white px-6 py-2 rounded-md font-medium transition-all">
              {t("newsletter.button")}
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#777777] gap-3">
          <p>{t("copyright")}</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#B71C1C]">
              {t("footer_bottom_links.conditions")}
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#B71C1C]">
              {t("footer_bottom_links.confidentiality")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
