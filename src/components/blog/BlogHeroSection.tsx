import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/assets/homepage/blog.webp";

const BlogHeroSection: React.FC = () => {
  return (
    <section className="relative flex justify-center items-center h-screen bg-black text-white">

      <div className="absolute inset-0 opacity-25">
        <Image
          src={backgroundImage}
          alt="Background"
          priority
          quality={80}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-[-0.04em]">
          Our latest news and updates
        </h1>
      </div>
    </section>
  );
};

export default BlogHeroSection;
