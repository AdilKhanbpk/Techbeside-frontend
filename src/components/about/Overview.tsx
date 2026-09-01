import React from "react";
import Image from "next/image";
import ouTeamImage from "../../../public/assets/aboutpage/teamimage.png"

import Link from "next/link";

const Overview: React.FC = () => {
  return (
  
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10">
        {/* Images Section */}
       
        <div className="w-full lg:w-1/2 flex justify-center">
      <Image src ={ouTeamImage} alt="our team"  width={500} height={400} className="rounded-lg object-contain" />
    </div>
      

        {/* Text Section */}
        <div className="w-full px-2">
          <h2 className="text-[#9A00FF] font-inter text-3xl md:text-4xl lg:text-5xl  font-semibold mb-6">
            About TechCreator
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8">
            TechCreator is a <Link href="/" className="cursor-pointer text-blue-600">software company</Link>, passionate about crafting
            innovative solutions that help businesses thrive in an ever-evolving
            technological landscape. Our team of expertise is dedicated to
            deliver high-quality, scalable and user-friendly solutions that meet
            unique needs of your business.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
            You are launching startup or scaling an enterprise, TechCreator is
            here to boost your business online by serving you in <Link href="/services/web-development" className="cursor-pointer text-blue-600">web development</Link>, <Link href="/services/mobile-app-development-company" className="cursor-pointer text-blue-600">app development</Link> , <Link href="/services/devops" className="cursor-pointer text-blue-600">Devops</Link> and <Link href="/services/affordable-graphic-design-services " className="cursor-pointer text-blue-600">graphic design</Link>. We provide
            end-to-end services that bring your ideas to life. We have a team
            focusing on innovative solutions, customized approach and commitment
            to quality.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-700 text-justify font-inter leading-7 md:leading-8 mt-6">
            Bless us with the opportunity to serve and build the future
            together.
          </p>
        </div>
      </div>
  );
};

export default Overview;
