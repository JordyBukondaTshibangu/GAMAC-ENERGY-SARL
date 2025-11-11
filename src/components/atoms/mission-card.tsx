import Image from "next/image";
import React from "react";

interface MissionCardProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
  title: string;
  image: string;
  reverse?: boolean;
  description: string;
}

function MissionCard({
  image,
  // sectionRef,
  title,
  reverse,
  description,
}: MissionCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 lg:gap-20 lg:items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        // ref={sectionRef}
        className="w-full lg:min-w-[63%] lg:w-[700px] lg:h-[700px] flex-1"
      >
        <Image
          src={image}
          alt={title}
          width={900}
          height={900}
          className="h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-[37%] flex flex-col gap-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg leading-10 font-normal">{description}</p>
      </div>
    </div>
  );
}

export default MissionCard;
