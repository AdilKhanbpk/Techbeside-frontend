// import React from 'react';
// import Buttons from './Buttons';
// import Image, { StaticImageData } from 'next/image';

// interface HeroSectionProps {
//   title: string;
//   description: React.ReactNode; 
//   links?: { href: string; text: string }[];
//   image: string | StaticImageData;
// }

// const Herosection: React.FC<HeroSectionProps> = ({ title, description, image }) => {
//   return (
//     <div>
//       {/* Hero Section Start */}
//       <div className="bg-black w-full md:px-0 px-3 pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row md:p-4 lg:p-0 justify-around items-center text-white">
//         {/* Left Section */}
//         <div className="w-full md:w-[50vw] text-center md:text-left">
//           <h1 style={{ lineHeight: 1.2 }} className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
//             {title}
//           </h1>
//           <p className="text-base lg:text-lg mt-3 leading-relaxed">
//             {description} 
//           </p>
//           <Buttons />
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-auto flex justify-center">
//           <Image
//             src={image}
//             alt={title}
//             width={300}
//             height={200}
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
//             className="rounded-lg shadow-md object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;


import React from "react";
import Buttons from "./Buttons";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string | React.ReactNode;
  description: React.ReactNode;
  image: string | StaticImageData;
}

const Herosection: React.FC<HeroSectionProps> = ({ title, description, image }) => {
  return (
    <div className="bg-black w-full text-white py-20 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg lg:text-xl opacity-80 leading-relaxed">{description}</p>
          <div className="flex justify-center md:justify-start">
            <Buttons />
          </div>
        </div>

        {/* Right Section - Image equal to left content height */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 min-h-[300px] md:min-h-[380px] relative">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={image}
              alt={typeof title === "string" ? title : "Hero Image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
