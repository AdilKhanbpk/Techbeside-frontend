import React from 'react';
import Image from 'next/image';
import backgroundImage from "../../../public/assets/aboutpage/backgroundImage.webp";

const AboutHeroSection: React.FC = () => {
  return (
    <div className="relative bg-black text-white h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          src={backgroundImage}
          alt="Background"
          width={1920}  
          height={1080}     
          priority             
          className="opacity-25 w-full h-screen "
          style={{ objectFit: 'cover' }}  
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full text-center">
          <h1 className="font-semibold text-3xl md:text-5xl lg:text-6xl font-poppins leading-[1.2] mb-0">
            Together, We Drive Your Success
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
