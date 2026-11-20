"use client";

import { useEffect, useState } from "react";

interface SectionItem {
  label: string;
  id: string;
}

/** Sticky in-page navigation that highlights the section being read. */
export default function ScrollNav({ sections }: { sections: SectionItem[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-[var(--header-h)] z-30 border-b border-line bg-white/95 backdrop-blur"
    >
      <ul className="container-x flex gap-8 overflow-x-auto [scrollbar-width:none]">
        {sections.map(({ label, id }) => (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative block py-4 text-[15px] font-medium transition-colors ${
                active === id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {label}
              {active === id && (
                <span className="energy-gradient absolute inset-x-0 bottom-0 h-[2px]" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
