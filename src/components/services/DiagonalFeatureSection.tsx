import Image, { StaticImageData } from "next/image";
import React from "react";

interface Section {
  image: string | StaticImageData;
  alt: string;
  title: string;
  content: React.ReactNode;
}

interface DiagonalFeatureSectionProps {
  sections: Section[];
}

const DiagonalFeatureSection: React.FC<DiagonalFeatureSectionProps> = ({
  sections,
}) => {
  return (
    <div className="md:mt-20 mt-14 space-y-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex justify-between flex-col-reverse ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center `}
        >
          {/* Text Section */}
          <div className="w-full md:w-3/5 text-center md:text-left ">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#9A00FF] mb-4 md:mt-0 mt-3">
              {section.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-3">
              {section.content}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <Image
              src={section.image}
              alt={section.alt}
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              layout="responsive"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagonalFeatureSection;
