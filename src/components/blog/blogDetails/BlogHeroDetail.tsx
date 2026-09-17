import React from 'react'
import backgroundImage from "../../../../public/assets/homepage/blog.webp"
import Image from 'next/image';

const BlogHeroDetail = () => {
  return (
    <div>
      <div className="relative bg-gray-900 text-white h-[300px]">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src={backgroundImage}
            alt="Background"
            width={300}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-[-0.04em] text-center mb-6">
              our latest news and updates
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeroDetail
