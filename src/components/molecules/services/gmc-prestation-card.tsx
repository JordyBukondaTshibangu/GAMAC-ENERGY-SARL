import { ButtonLink } from "@/components/atoms/button";
import Image from "next/image";

type PrestationCardProps = {
  id: string;
  link: string;
  title: string;
  image: string;
  reverse?: boolean;
  tinted?: boolean;
  description: string;
  highlights: string[];
  linkLabel: string;
};

export default function GMCPrestationServiceCard({
  id,
  link,
  title,
  image,
  reverse,
  tinted,
  description,
  highlights,
  linkLabel,
}: PrestationCardProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${tinted ? "bg-paper" : ""}`}>
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div
          className={`relative aspect-[4/3] overflow-hidden bg-line lg:col-span-6 ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-6">
          <h2 className="display text-[clamp(1.9rem,3.2vw,2.7rem)] text-ink">{title}</h2>
          <p className="mt-6 text-[18px] leading-relaxed text-muted">{description}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="border border-ink/15 bg-white px-3 py-1.5 text-[14px] font-medium text-ink"
              >
                {h}
              </li>
            ))}
          </ul>
          <ButtonLink href={`/services/${link}`} className="mt-10">
            {linkLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
