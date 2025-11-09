"use client";

import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const contactInfo = [
    {
      icon: <Phone size={22} className="text-[#B71C1C]" />,
      label: "Téléphone",
      value: "(+243) 818 354 186",
    },
    {
      icon: <Mail size={22} className="text-[#B71C1C]" />,
      label: "Email",
      value: "contact@gamacenergy.com",
    },
    {
      icon: <MapPin size={22} className="text-[#B71C1C]" />,
      label: "Adresse",
      value: "9, Avenue du Port, Gombe, Kinshasa, RDC",
    },
  ];

  const quickLinks = [
    { label: "À propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projets", href: "/projects" },
    { label: "Contacts", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Politique de confidentialité", href: "/privacy-policy" },
    { label: "Conditions d’utilisation", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-[#F4F4F4] text-[#444444] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Top Section: Brand + Social */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-200 pb-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-[#B71C1C]">
              GAMAC ENERGY SARL
            </h2>
            <p className="mt-3 text-[#555555] leading-relaxed">
              Nous accompagnons nos clients dans l’approvisionnement des
              matériels et équipements spécialisés. Notre expertise garantit des
              solutions fiables et durables.
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
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#B71C1C] mb-2">
              Contact
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
              Liens rapides
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

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#B71C1C] mb-2">
              Liens juridiques
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
            Newsletter
          </h3>
          <p className="text-sm text-[#555555] mb-4">
            Abonnez-vous à notre newsletter pour recevoir les dernières
            actualités et offres.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-2 rounded-md border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-[#B71C1C]"
            />
            <button className="bg-[#B71C1C] hover:bg-[#D32F2F] text-white px-6 py-2 rounded-md font-medium transition-all">
              S’abonner
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#777777] gap-3">
          <p>© 2025 GAMAC ENERGY SARL. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#B71C1C]">
              Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#B71C1C]">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
