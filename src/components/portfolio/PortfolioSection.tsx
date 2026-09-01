import React from "react";
import Image from "next/image";
import portfolioImage from "../../../public/assets/portfoliopage/portfolioImage.jpg";

const PortfolioSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Image Section */}
      <div className="">
        <Image
          src={portfolioImage}
          alt="TechCreator storing your vision into impactful and scalable secured solutions"
          width={500}
          height={500}
          className="object-cover lg:w-[1800px] md:w-[1900px] "
        />
      </div>

      {/* Text Section */}
      <div className=" flex flex-col    ">
        <h2 style={{lineHeight:1.2}} className="text-2xl md:text-4xl  font-semibold lg:max-w-4xl mb-1 text-gray-900">
        With TechCreator, Make a lasting impression of your Brand
        </h2>
        <p className="text-gray-700 md:text-lg text-sm leading-relaxed">
        Ready to take your business to the next level? Join the list of satisfied clients showcased in our portfolio. Contact TechCreator today and let’s turn your vision into reality. From intuitive mobile apps to dynamic web platforms, our portfolio showcases a wide range of successful projects. In transforming ideas into impactful realities, we are your partner with a talented team dedicated to quality and innovation.
        </p>
        <ul className="text-gray-700 md:text-lg text-sm space-y-2">
          <li>• Cutting-edge technology</li>
          <li>• Seamless user experiences</li>
          <li>• Scalable and secure solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioSection;
