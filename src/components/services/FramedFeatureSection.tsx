// import Image, { StaticImageData } from 'next/image';
// import React from 'react';

// interface FramedFeatureSectionProps {
//     image: string | StaticImageData;
//   alt: string;
//   title: string;
//   content: React.ReactNode;
// }

// const FramedFeatureSection: React.FC<FramedFeatureSectionProps> = ({ image, alt, title, content }) => {
//   return (
//     <div className="lg:relative bg-[#9A00FF] lg:h-[450px] mx-auto md:mt-32 mt-9">
//       <div className="lg:relative px-5 flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-10">
//         {/* Text Content */}
//         <div className="lg:relative z-10 lg:max-w-[600px] xl:max-w-[800px] xl:p-10 text-center lg:text-left">
//           <h2 className="text-3xl md:text-4xl mt-2 font-bold text-white mb-4">
//             {title}
//           </h2>
//           <p className="text-base md:text-lg xl:text-lg text-white">
//             {content}
//           </p>
//         </div>

//         {/* Image */}
//         <div className="relative lg:absolute lg:top-52 xl:top-52 lg:right-5 lg:transform lg:-translate-y-1/2">
//           <Image
//             src={image}
//             alt={alt}
//             width={400}
//             height={500}
//             className="rounded-lg mx-auto mb-2 md:mx-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FramedFeatureSection;

import Image, { StaticImageData } from "next/image";
import React from "react";

interface FramedFeatureSectionProps {
  image: string | StaticImageData;
  alt: string;
  title: string;
  content: React.ReactNode;
}

const FramedFeatureSection: React.FC<FramedFeatureSectionProps> = ({
  image,
  alt,
  title,
  content,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-[#9A00FF] to-[#6200EA] py-12 px-6 sm:px-12 lg:px-16 rounded-lg shadow-xl mx-auto md:mt-32 mt-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* 📝 Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed">
            {content}
          </p>
        </div>

        {/* 🖼️ Image with Frame */}
        <div className="relative lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] md:w-[400px] lg:w-[450px] mx-auto">
            {/* 📌 Frame Behind Image */}
         

            {/* 📸 Actual Image */}
            <Image
              src={image}
              alt={alt}
              width={450}
              height={550}
              className="relative rounded-lg mx-auto object-cover shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramedFeatureSection;
