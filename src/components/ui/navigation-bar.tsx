"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinksLeft = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Vision", href: "/vision" },
    { label: "Mission", href: "/mission" },
  ];

  const navLinksRight = [
    { label: "Services", href: "/services" },
    { label: "Projets", href: "/projects" },
    { label: "Équipe", href: "/team" },
    { label: "Contacts", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#F4F4F4] border-b border-[#E5E7EB] shadow-sm fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
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

        <div className="hidden md:block text-sm font-medium text-[#1B1B1B] hover:text-[#B71C1C] cursor-pointer transition-all duration-300">
          <span className="relative group">
            FR | EN
            <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#B71C1C] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        <button
          className="md:hidden text-[#1B1B1B] transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white fixed top-0 left-0 w-full min-h-screen overflow-hidden border-t border-[#E5E7EB] animate-fadeIn">
          <nav className="flex flex-col space-y-2 px-6 py-4 text-[#1B1B1B] font-medium">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative uppercase py-2 text-sm group"
              >
                <span className="transition-colors duration-300 group-hover:text-[#B71C1C]">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#B71C1C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="mt-3 text-sm text-[#1B1B1B] hover:text-[#B71C1C] cursor-pointer transition-all">
              FR | EN
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
