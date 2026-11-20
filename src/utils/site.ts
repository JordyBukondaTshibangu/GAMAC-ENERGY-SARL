/** Site-wide structure shared by the navigation bar and the footer. */
export const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "mission", href: "/mission" },
  { key: "services", href: "/services" },
  { key: "equipe", href: "/team" },
  { key: "contact", href: "/contact" },
] as const;

export const serviceLinks = [
  { index: 0, href: "/services/prestataires-des-services-intellectuels" },
  { index: 1, href: "/services/prestataires-des-travaux-physiques" },
  { index: 2, href: "/services/fournisseurs-d-equipements-electriques" },
] as const;

/** Turns a display phone number like "(+243) 834 585 397" into a tel: link. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
