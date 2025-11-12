"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

function GMCOurPartners() {
  const partners = [
    {
      image: "/assets/images/partenaires/geosigmoid-group.png",
      name: "Geosigmoid Group",
      alt: "Geosigmoid Group",
    },
    {
      image: "/assets/images/partenaires/Geoscan-soft.png",
      name: "Geoscan Soft",
      alt: "Geoscan Soft",
    },
    {
      image: "/assets/images/partenaires/gamac-energy.png",
      name: "Gamac Energy",
      alt: "Gamac Energy",
    },
  ];

  return (
    <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 py-10 lg:py-20">
      <div className="lg:max-w-7xl w-full lg:mx-auto flex flex-col gap-20">
        <h2 className="w-full lg:w-1/3 h-full flex flex-col gap-20 text-3xl leading-12 uppercase font-bold">
          Nos Partenaires
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex h-full  flex-col md:grid md:grid-cols-3 gap-14 md:gap-10 overflow-auto flex-nowrap"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-20"
            >
              <Image
                src={partner?.image}
                alt={partner?.alt}
                className="w-full h-full object-contain"
                width={500}
                height={500}
              />
              <h4 className="text-2xl font-semibold uppercase text-[#1e2236] tracking-widest">
                {partner?.name}
              </h4>
              <hr className="w-20 border-t-2 border-amber-500 md:hidden" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default GMCOurPartners;
