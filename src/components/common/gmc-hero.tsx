"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

type HeroProps = {
  videos: string[];
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonLink?: string;
  overlayOpacity?: number; // 0.0 - 1.0
};

export default function Hero({
  videos,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  buttonLink,
  overlayOpacity = 0.9,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    if (videos.length > 1) {
      let current = 0;
      const handleEnded = () => {
        current = (current + 1) % videos.length;
        const nextVideo = videoRef.current[current];
        if (nextVideo) {
          nextVideo.play();
        }
      };
      videoRef.current.forEach((video, idx) => {
        video.addEventListener("ended", handleEnded);
        if (idx !== 0) video.pause();
      });
      return () => {
        videoRef.current.forEach((video) =>
          video.removeEventListener("ended", handleEnded)
        );
      };
    }
  }, [videos]);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => {
              if (el) videoRef.current[index] = el;
            }}
            src={video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === 0 ? "opacity-100" : "opacity-0"
            }`}
            autoPlay={index === 0}
            muted
            loop={videos.length === 1}
            playsInline
          />
        ))}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl text-center text-white px-6 space-y-5">
        {subtitle && (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-semibold text-white/80 uppercase tracking-wide"
          >
            {subtitle}
          </motion.h3>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold my-2"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto my-4"
          >
            {description}
          </motion.p>
        )}

        {buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="my-8"
          >
            {buttonLink ? (
              <Link href={buttonLink} className="bg-yellow">
                <button className="bg-[#B71C1C] hover:bg-[#D32F2F] text-white px-10 py-4 rounded-md font-medium transition-all min-w-64 cursor-pointer">
                  {buttonText}
                </button>
              </Link>
            ) : (
              <button
                onClick={onButtonClick}
                className="mt-4 bg-primary text-white hover:bg-primary/80"
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
