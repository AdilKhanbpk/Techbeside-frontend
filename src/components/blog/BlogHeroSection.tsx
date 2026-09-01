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
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
          Our latest news and updates
        </h1>
      </div>
    </section>
  );
};

export default BlogHeroSection;