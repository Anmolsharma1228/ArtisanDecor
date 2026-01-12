"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

export default function SwiperSlides({ slides }) {
  return (
    <div className="w-full md:max-w-2xl">
      <Swiper
        modules={[Navigation, Autoplay, EffectCube]}
        effect="cube" // ⭐ REQUIRED
        grabCursor
        loop
        speed={700}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 25,
          shadowScale: 0.85,
        }}
        breakpoints={{
          0: {
            effect: "cube", // 📱 mobile fallback
          },
          768: {
            effect: "cube", // 🖥 desktop cube
          },
        }}
        navigation
        className="w-full md:w-120"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-62.5 md:h-92 overflow-hidden rounded-xl">
              <Image
                src={slide.image}
                alt={slide.alt || "Slide image"}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

