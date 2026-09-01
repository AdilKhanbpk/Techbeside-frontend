import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  backgroundImage: string | StaticImageData;
  title: string;
  description: React.ReactNode;  // 🔥 Fix: string ki jagah React.ReactNode
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,  
  buttonText = "Get Started Today",
  buttonLink = "/contact",
}) => {
  return (
    <div className="relative bg-black text-white h-auto md:min-h-screen xl:h-0">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-25"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative md:max-w-[1440px] w-full mx-auto pt-32 md:pb-0 pb-10 px-4 sm:px-8 md:px-12 h-full flex flex-col justify-center items-center">
        <div className="w-full text-center md:max-w-4xl flex flex-col justify-center gap-6 md:mx-auto">
          <h1 style={{ lineHeight: 1.2 }} className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
            {description}  {/* 🟢 JSX bhi support karega */}
          </p>

          {/* CTA Button (Optional) */}
          {buttonLink && (
            <Link
              href={buttonLink}
              className="px-6 py-3 w-fit mx-auto bg-[#9A00FF] text-white rounded-md text-lg font-medium transition-all duration-300 hover:bg-[#6f00b5] focus:outline-none mb-4"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
