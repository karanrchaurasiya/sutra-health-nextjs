"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/retreat/rooftop.avif",
    alt: "Home at Sutra Health Retreat",
    label: "Home",
  },
  {
    src: "/images/retreat/living-room.avif",
    alt: "Living Room at Sutra Health Retreat",
    label: "Living Room",

  },
  {
    src: "/images/retreat/bedroom.avif",
    alt: "Bedroom at Sutra Health Retreat",
    label: "Bedroom",

  },
  {
    src: "/images/retreat/yoga.webp",
    alt: "Yoga practice at Sutra Health Retreat",
    label: "Yoga Practice Hall",

  },
  {
    src: "/images/retreat/kitchen.webp",
    alt: "Kitchen at Sutra Health Retreat",
    label: "Kitchen",
  },
];

export default function RetreatHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Bottom label */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 pb-5 pt-12">
          <p
            key={current}
            className="animate-fade-in text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            {slides[current].label}
          </p>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-5 right-5 flex gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.label}`}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 bg-white"
                : "w-1.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
