"use client";

import { ButtonLink } from "@/components/atoms/button";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { navLinks } from "@/utils/site";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";

const locales = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={30}
        height={33}
        priority
        className="h-8 w-auto"
      />
      <span className="heading text-[19px] leading-none text-white">
        GAMAC <span className="font-normal text-white/75">Energy</span>
      </span>
    </span>
  );
}

function LocaleSwitch({
  size = "sm",
  locale,
  label,
  disabled,
  onSwitch,
}: {
  size?: "sm" | "lg";
  locale: string;
  label: string;
  disabled: boolean;
  onSwitch: (code: string) => void;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex items-center ${size === "lg" ? "gap-3 text-lg" : "gap-1 text-[13px]"}`}
    >
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          {i > 0 && (
            <span className="text-white/30" aria-hidden>
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => onSwitch(l.code)}
            disabled={disabled}
            aria-pressed={locale === l.code}
            title={l.name}
            className={`cursor-pointer px-1 font-semibold transition-colors ${
              locale === l.code
                ? "text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPending, startTransition] = useTransition();

  const t = useTranslations("Navigation");
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const switchLocale = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled || menuOpen
            ? "bg-ink-deep/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
            : "bg-gradient-to-b from-ink-deep/70 to-transparent"
        }`}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="GAMAC Energy"
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map(({ key, href }) => {
                const active = isActive(pathname, href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-2 text-[15px] font-medium transition-colors ${
                        active ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {t(key)}
                      {active && (
                        <span className="energy-gradient absolute -bottom-0.5 left-0 h-[2px] w-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LocaleSwitch
              locale={locale}
              label={t("language")}
              disabled={isPending}
              onSwitch={switchLocale}
            />
            <ButtonLink href="/contact" className="h-10 px-5 text-[14px]">
              {t("cta")}
            </ButtonLink>
          </div>

          <button
            className="-mr-2 p-2 text-white lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? t("close") : t("menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 flex flex-col overflow-y-auto bg-ink-deep px-6 pb-10 pt-6 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map(({ key, href }) => {
                const active = isActive(pathname, href);
                return (
                  <li key={href} className="border-b border-white/10">
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`heading flex items-center gap-3 py-4 text-[28px] ${
                        active ? "text-white" : "text-white/70"
                      }`}
                    >
                      {active && (
                        <span className="energy-gradient h-2 w-2 rounded-full" />
                      )}
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-6 pt-10">
            <LocaleSwitch
              size="lg"
              locale={locale}
              label={t("language")}
              disabled={isPending}
              onSwitch={switchLocale}
            />
            <ButtonLink href="/contact" className="w-full">
              {t("cta")}
            </ButtonLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
