import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

// Define TypeScript type for props (Optional, but recommended)
interface Service {
  title: string;
  description: string;
  icon: string | StaticImageData;
  link: string;
}

interface RelatedServicesProps {
  services: Service[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => {
  return (
    <div className="md:mt-20 mt-12 ">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#9A00FF] mb-12">
       Related Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        {services.map((service, index) => (
          <Link href={service.link} key={index} className="group">
            <div className="relative p-8 bg-white w-full h-[260px] rounded-[20px] border-2 border-gray-300 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03]">
              {/* Icon with Background */}
              <div className="absolute -top-8 left-6 p-4 bg-gray-100 rounded-xl shadow-lg transition-all duration-300 group-hover:bg-gray-200">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain"
                />
              </div>

              {/* Service Content */}
              <div className="mt-10 sm:mt-14">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Arrow Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-blue-500 text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
