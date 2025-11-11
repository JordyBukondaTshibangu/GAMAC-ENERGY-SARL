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
    { label: "Mission", href: "/mission" },
  ];

  const navLinksRight = [
    { label: "Services", href: "/services" },
    { label: "Équipe", href: "/team" },
    { label: "Contacts", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#F4F4F4] border-b border-[#E5E7EB] shadow-sm fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
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

            <div className="flex justify-start items-center gap-2 text-sm text-[#1B1B1B] hover:text-[#a02c0f] cursor-pointer transition-all">
              FR | EN
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
