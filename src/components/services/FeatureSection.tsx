"use client"

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface FeatureSectionProps {
  title: string;
  description: React.ReactNode;
  image: string | StaticImageData; 
}


const FeatureSection: React.FC<FeatureSectionProps> = ({title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center xl:px-0 lg:px-4 lg:mt-12 my-6 relative">
    <div className="relative lg:static lg:flex-shrink-0 lg:w-[200px] lg:h-[300px] z-10 overflow-hidden rounded-lg">
    <Image
      src={image}
      alt={title}
      width={400} 
      height={450} 
      quality={90} 
      className={`lg:w-[400px] h-auto sm:h-[400px] lg:h-[450px] sm:w-[400px] object-cover lg:absolute lg:top-16 xl:top-10 shadow-xl transition-transform duration-300 cursor-pointer ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
    </div>
    <div className="bg-[#6366F1] w-full h-auto p-6 mt-3 lg:mt-0">
      <div className="text-white xl:py-20 lg:pl-52 lg:h-[400px]">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed w-full text-wrap">
         {description}
        </p>
    </div>
  </div>
</div>
  )
}

export default FeatureSection
