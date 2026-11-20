"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type Step = { title: string; text: string };

/**
 * The value chain drawn like a single-line electrical diagram:
 * one bus line, five stages connected in order. The line energises
 * once when it scrolls into view — the page's one scroll-triggered moment.
 */
export default function GMCValueChain() {
  const t = useTranslations("HomePage.value_chain");
  const steps = t.raw("steps") as Step[];
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-ink py-24 text-white md:py-32">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="display text-[clamp(2.1rem,4.4vw,3.6rem)]">{t("title")}</h2>
          <p className="max-w-[32rem] text-[18px] leading-relaxed text-white/75 md:justify-self-end">
            {t("description")}
          </p>
        </div>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* Bus line — horizontal on desktop, vertical on mobile */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-white/15 md:left-0 md:right-0 md:top-[9px] md:bottom-auto md:h-[2px] md:w-auto" />
          <div
            className={`[--dir:180deg] md:[--dir:90deg] absolute left-[9px] top-2 bottom-2 w-[2px] origin-top transition-transform duration-[1600ms] ease-out-soft md:left-0 md:right-0 md:top-[9px] md:bottom-auto md:h-[2px] md:w-auto md:origin-left ${
              on ? "scale-100" : "scale-y-0 md:scale-y-100 md:scale-x-0"
            }`}
            style={{
              background:
                "linear-gradient(var(--dir, 180deg), var(--color-flame), var(--color-ember) 55%, var(--color-sun))",
            }}
          />

          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-10 md:pl-0 md:pt-12">
                <span
                  className={`absolute left-0 top-0 grid h-5 w-5 place-items-center rounded-full border-2 transition-colors duration-500 ${
                    on ? "border-sun bg-ink" : "border-white/30 bg-ink"
                  }`}
                  style={{ transitionDelay: on ? `${300 + i * 260}ms` : "0ms" }}
                  aria-hidden
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                      on ? "bg-sun" : "bg-white/30"
                    }`}
                    style={{ transitionDelay: on ? `${300 + i * 260}ms` : "0ms" }}
                  />
                </span>
                <span className="text-[14px] font-semibold tabular-nums text-sun">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading mt-2 text-[21px]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
