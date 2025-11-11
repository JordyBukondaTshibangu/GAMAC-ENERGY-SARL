"use client";

import { equipmentAndMaterials } from "@/utils/services-data";
import Image from "next/image";

export default function GMCMaterialsList() {
  return (
    <section className="max-w-7xl w-full mx-auto py-10 md:py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
      {equipmentAndMaterials.map((item, index) => (
        <div key={index} className="w-full flex flex-col gap-10">
          <h4 className="text-2xl font-medium leading-10 is-style-underlined-heading">
            {item.title}
          </h4>

          <div className="xl:w-[500px] xl:h-[400px]">
            <Image
              width={800}
              height={600}
              alt={item.title}
              src={item.image}
              className="xl:rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
