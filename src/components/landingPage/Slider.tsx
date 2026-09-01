'use client';
import React, { useMemo } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import Link from 'next/link';
import Image from 'next/image';

const Slider: React.FC<{ slides: any[] }> = ({ slides }) => {
  const slidesContent = useMemo(() => {
    return slides.map((slide, index) => (
      <div key={index} className="relative h-screen">

        {/* Mobile: always image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src={slide.imageSrc}
            alt={slide.alt || "Slide Thumbnail"}
            fill
           priority={index === 0}
loading={index === 0 ? "eager" : "lazy"}
sizes="(max-width: 768px) 450px, 100vw"
quality={60}
            className="object-cover"
          />
        </div>

        {/* Desktop: video if available, else image */}
        <div className="hidden md:block absolute inset-0">
          {slide.videoSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={slide.videoSrc} type="video/webm" />
            </video>
          ) : (
            <Image
              src={slide.imageSrc}
              alt={slide.alt || "Slide Thumbnail"}
              fill
              priority={index === 0}
loading={index === 0 ? "eager" : "lazy"}
sizes="(max-width: 768px) 450px, 100vw"
quality={60}
              className="object-cover"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center max-w-4xl leading-[1.5]">
            {slide.heading.split(slide.highlight).map((part: string, i: number) =>
              i === 1
                ? <span key={i} className={slide.highlightColor}> {slide.highlight} </span>
                : part
            )}
          </h2>
          <p className="md:text-2xl text-lg mt-4 md:max-w-4xl text-center">{slide.description}</p>
          <Link href="/contact" rel="noopener noreferrer">
            <button className={`mt-4 px-6 py-3 ${slide.buttonColor} text-white font-semibold rounded-full transition`}>
              {slide.buttonText}
            </button>
          </Link>
        </div>

      </div>
    ));
  }, [slides]);

  return (
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
  );
};

export default Slider;