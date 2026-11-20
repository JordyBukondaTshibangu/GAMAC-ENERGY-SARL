"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

type Media =
  | { type: "video"; sources: string[]; poster: string }
  | { type: "image"; src: string };

type PageHeroProps = {
  media: Media;
  title: string;
  kicker?: string;
  description?: string;
  actions?: ReactNode;
  /** "home" is full height; "page" is the shorter inner-page hero. */
  size?: "home" | "page";
  breadcrumb?: { label: string; href: string };
  children?: ReactNode;
};

/** Plays a list of videos one after another, looping the list. */
function HeroVideo({ sources, poster }: { sources: string[]; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    if (sources.length < 2) return;
    let current = 0;
    const next = () => {
      current = (current + 1) % sources.length;
      video.src = sources[current];
      video.play().catch(() => {});
    };
    video.addEventListener("ended", next);
    return () => video.removeEventListener("ended", next);
  }, [sources]);

  return (
    <video
      ref={ref}
      src={sources[0]}
      poster={poster}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      playsInline
      loop={sources.length === 1}
      preload="metadata"
      aria-hidden
    />
  );
}

export default function PageHero({
  media,
  title,
  kicker,
  description,
  actions,
  size = "page",
  breadcrumb,
  children,
}: PageHeroProps) {
  const isHome = size === "home";

  return (
    <section
      className={`relative isolate flex flex-col overflow-hidden bg-ink-deep text-white ${
        isHome ? "min-h-[100svh]" : "min-h-[68svh] md:min-h-[72vh]"
      }`}
    >
      <div className="absolute inset-0 -z-10">
        {media.type === "video" ? (
          <HeroVideo sources={media.sources} poster={media.poster} />
        ) : (
          <Image
            src={media.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Navy wash: dense on the reading side, open on the image side */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/95 via-ink-deep/70 to-ink-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/10 to-transparent" />
      </div>

      <div
        className={`container-x flex flex-1 flex-col justify-end pt-[calc(var(--header-h)+3rem)] ${
          isHome ? "pb-14 md:pb-16" : "pb-14 md:pb-20"
        }`}
      >
        <div className="max-w-[54rem]">
          {breadcrumb && (
            <Link
              href={breadcrumb.href}
              className="rise rise-1 mb-6 inline-flex items-center gap-2 text-[15px] text-white/70 transition-colors hover:text-white"
            >
              <span aria-hidden>←</span> {breadcrumb.label}
            </Link>
          )}
          {kicker && (
            <p className="rise rise-1 mb-5 flex items-center gap-3 text-[15px] font-medium text-white/80">
              <span className="energy-gradient h-[2px] w-10" aria-hidden />
              {kicker}
            </p>
          )}
          <h1
            className={`display rise rise-2 ${
              isHome
                ? "text-[clamp(2.6rem,7vw,5.6rem)]"
                : "text-[clamp(2.3rem,5.4vw,4.4rem)]"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p className="rise rise-3 mt-6 max-w-[40rem] text-[17px] leading-relaxed text-white/80 md:text-[19px]">
              {description}
            </p>
          )}
          {actions && (
            <div className="rise rise-4 mt-9 flex flex-wrap gap-3">{actions}</div>
          )}
        </div>
        {children && <div className="rise rise-4">{children}</div>}
      </div>
    </section>
  );
}
