"use client";

import React, { useMemo } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface SlideData {
  imageSrc: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Slider: React.FC<{ slides: SlideData[] }> = ({ slides }) => {
  const slidesContent = useMemo(() => {
    return slides.map((slide, index) => (
      <div
        key={index}
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8 md:pb-28 md:pt-36 lg:px-12 lg:pb-32 lg:pt-40"
      >
        {/* Top Lavender Pill Badge (optional) */}
        {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-[#E0E7FF]/90 px-4 py-2 text-xs font-semibold text-[#5B50E6] shadow-sm backdrop-blur-md sm:text-sm">
          <Sparkles size={16} className="text-[#5B50E6]" />
          <span>{slide.badge}</span>
        </div> */}

        {/* Main Dual-Tone Title */}
        <h1 className="max-w-5xl text-2xl font-extrabold leading-[1.22] tracking-[-0.03em] sm:text-3xl md:text-4xl lg:text-[56px]">
          <span className="block text-[#090D16] mb-2 sm:mb-3">{slide.titleLine1}</span>
          <span className="block text-[#5B50E6]">{slide.titleLine2}</span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg md:text-xl">
          {slide.description}
        </p>

        {/* Primary Action Button */}
        <Link href={slide.buttonLink || "/contact"} className="mt-8 sm:mt-10">
          <button className="group inline-flex items-center gap-2.5 rounded-full bg-[#5B50E6] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-[#4c42d9] hover:shadow-indigo-500/40 hover:scale-[1.02] sm:text-lg">
            <span>{slide.buttonText}</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Link>
      </div>
    ));
  }, [slides]);

  return (
    <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-slate-50 md:min-h-screen">
      {/* STATIC Single Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mainbg.png"
          alt="Main Page Hero Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft Overlay */}
      <div className="absolute inset-0 z-10 bg-white/20 backdrop-blur-[1px]" />

      {/* Content Carousel - Only Text Content Slides */}
      <div className="relative z-20 w-full">
        <ResponsiveCarousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          swipeable={false}
          showIndicators={false}
          emulateTouch={true}
          transitionTime={1000}
          interval={7000}
        >
          {slidesContent}
        </ResponsiveCarousel>
      </div>
    </div>
  );
};

export default Slider;
