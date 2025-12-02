"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useTransition } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const t = useTranslations("Navigation");
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const locales = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const navLinksLeft = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("mission"), href: "/mission" },
  ];

  const navLinksRight = [
    { label: t("services"), href: "/services" },
    { label: t("equipe"), href: "/team" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#F4F4F4] border-b border-[#E5E7EB] shadow-sm fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Left nav (desktop) */}
        <nav className="hidden md:flex space-x-8 text-[#1B1B1B] font-medium">
          {navLinksLeft.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative uppercase tracking-wide text-sm font-semibold cursor-pointer group"
            >
              <span className="transition-colors duration-300 group-hover:text-[#B71C1C]">
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B71C1C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="GAMAC Energy"
            width={120}
            height={40}
            priority
            className="transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {/* Right nav (desktop) */}
        <nav className="hidden md:flex space-x-8 text-[#1B1B1B] font-medium">
          {navLinksRight.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative uppercase tracking-wide text-sm font-semibold cursor-pointer group"
            >
              <span className="transition-colors duration-300 group-hover:text-[#B71C1C]">
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B71C1C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Locale switcher (desktop) */}
        <div className="hidden md:block">
          <select
            value={locale}
            onChange={handleChange}
            disabled={isPending}
            className="border border-[#B71C1C] rounded-md px-3 py-1 text-sm text-[#1B1B1B] bg-white shadow-sm hover:shadow-md transition"
          >
            {locales.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1B1B1B] transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full min-h-screen bg-white z-50 animate-fadeIn flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="font-semibold text-lg text-[#1B1B1B]">
              <span className="text-[#a02c0f]">Gamac</span> Energy
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2">
              <X className="w-6 h-6 text-[#1B1B1B]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 py-6 space-y-2 font-medium text-[#1B1B1B]">
            {[...navLinksLeft, ...navLinksRight].map((link, index) => (
              <div key={link.href}>
                {(index === 2 || index === 4) && (
                  <hr className="border-gray-200 mb-2" />
                )}
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-base hover:text-[#a02c0f] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-gray-400">{">"}</span>
                </Link>
              </div>
            ))}

            <hr className="border-gray-200 mt-2 mb-4" />

            {/* Locale switcher (mobile) */}
            <div className="flex justify-start items-center gap-2">
              <select
                value={locale}
                onChange={(e) => {
                  handleChange(e);
                  setMenuOpen(false);
                }}
                disabled={isPending}
                className="border border-[#B71C1C] rounded-md px-3 py-2 text-sm text-[#1B1B1B] bg-white shadow-sm hover:shadow-md transition"
              >
                {locales.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
