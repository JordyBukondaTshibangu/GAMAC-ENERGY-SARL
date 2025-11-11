"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type HeroImageProps = {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonLink?: string;
  overlayOpacity?: number; // 0.0 - 1.0
};

export default function HeroImage({
  image,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  buttonLink,
  overlayOpacity = 0.7,
}: HeroImageProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="relative w-full h-[90vh] flex items-center justify-center bg-center bg-cover"
    >
      <div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      <div className="relative z-10 max-w-6xl text-center text-white px-6 space-y-5">
        {subtitle && (
          <motion.h3
            transition={{ delay: 0.2 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="text-lg md:text-xl font-semibold text-white/80 uppercase tracking-wide"
          >
            {subtitle}
          </motion.h3>
        )}

        <motion.h1
          transition={{ delay: 0.4 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          className="text-4xl md:text-7xl font-extrabold my-2 leading-16 md:leading-24"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            transition={{ delay: 0.6 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto my-4"
          >
            {description}
          </motion.p>
        )}

        {buttonText && (
          <motion.div
            className="my-8"
            transition={{ delay: 0.8 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
          >
            {buttonLink ? (
              <Link href={buttonLink}>
                <button className="bg-[#B71C1C] hover:bg-[#D32F2F] text-white px-10 py-4 rounded-md font-medium transition-all min-w-64 cursor-pointer">
                  {buttonText}
                </button>
              </Link>
            ) : (
              <button
                onClick={onButtonClick}
                className="bg-[#B71C1C] hover:bg-[#D32F2F] text-white px-10 py-4 rounded-md font-medium transition-all min-w-64 cursor-pointer"
              >
                {buttonText}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
