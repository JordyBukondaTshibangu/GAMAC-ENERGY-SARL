import { FC, RefObject } from "react";

interface SectionItem {
  label: string;
  ref: RefObject<HTMLElement | null>;
}

interface ScrollNavProps {
  sections: SectionItem[];
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void;
}

const ScrollNav: FC<ScrollNavProps> = ({ sections, scrollToSection }) => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 items-center py-8 flex md:justify-center gap-4 md:gap-20 -mt-20 overflow-auto">
      {sections.map(({ label, ref }, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(ref)}
          className="text-[#a02c0f] min-w-max hover:text-[#7a210b] transition-colors duration-200 cursor-pointer"
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default ScrollNav;
