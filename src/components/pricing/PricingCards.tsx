import Image from "next/image";
import backgroundImage from "../../../public/assets/pricingpage/pricing.webp";
import React from "react";
import frontImage from "../../../public/assets/pricingpage/List → Listitem.webp";
import pricing2 from "../../../public/assets/pricingpage/pricing1 (1).webp";
import pricing1 from "../../../public/assets/pricingpage/pricing1 (2).webp";
import PricingForm from "./PricingForm";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";



const PricingCards = () => {
  return (
    <>
      {/* ✅ Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center text-white text-center px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage} 
          alt="Competitive pricing for high-quality services"
          fill
          priority
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Pricing to Your Success
        </h1>
        <p className="text-lg sm:text-lg md:text-xl font-normal">
          At TechCreator, we believe in providing clear and competitive pricing
          for all our services. Our packages are designed to deliver maximum
          value without compromising quality.
        </p>
        <Link
          href="#pricing-form"
          className="inline-flex items-center gap-2 bg-[#9A00FF] text-lg md:p-4 p-3 rounded-md hover:bg-[#734bdf] shadow-lg transition duration-300"
        >
          Share Your Requirements <FaArrowDown size={15} />
        </Link>
      </div>
    </section>


      {/* ✅ Pricing Sections */}
      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        
        {/* First Pricing Section */}
      <div className="flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-3">
       <div className="">
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:max-w-4xl">Affordable Solutions Without Sacrificing Quality</h2>
       <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-2 md:max-w-5xl">Our pricing is structured to suit diverse business needs. From basic plans to premium solutions, we ensure that every client gets high-quality service, whether it's web development, digital marketing, or app development.We know every business has different and unique requirements, which provoke us to offer flexible options that cater to different budgets.We have a team of expertise committed to deliver exceptional results and add values to your investment.</p>
       </div>

        <Image src={frontImage} alt="Flexible pricing for high-quality services" width={300} height={200} loading="lazy"
        className="md:h-[50vh] md:w-[25vw] sm:w-[55vw] w-full sm:h-[60vh] h-[50vh] mx-auto md:mx-0 lg:object-cover object-contain rounded-lg"
         />
      </div>
        {/* Second Pricing Section */}
        <div className="flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-3 md:mt-16 mt-9 md:mb-16 mb-9">
        <Image src={pricing2} alt="Custom pricing to fit business needs" width={300} height={200} loading="lazy"
        className="md:h-[50vh] md:w-[25vw] sm:w-[55vw] w-full sm:h-[60vh] h-[50vh] mx-auto md:mx-0 lg:object-cover object-contain rounded-lg"
         />
       <div className="">
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:max-w-4xl">Flexible Packages for All Businesses</h2>
       <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-2 md:max-w-5xl">We offer customizable pricing plans to align with your goals. Whether you need comprehensive solutions or specific services, our packages are built to scale with your business as it grows.Our different packages ensure you pay for what you need, also providing with the option of upgradation or adjustment as we all know requirements evolve as time passes. We have a range of options that is suitable to any budget or project size. Our pricing is transparent and there is no hidden fees.</p>
       </div>

        
      </div>

        {/* ✅ Pricing Form Section */}
        <div id="pricing-form" className="mt-16">
          <PricingForm />
        </div>

        {/* Third Pricing Section */}
        <div className="flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-3 md:mt-16 mt-9 md:mb-16 mb-9">
       <div className="">
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:max-w-4xl">Why Choose TechCreator for Your Next Project?</h2>
       <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-2 md:max-w-5xl">With TechCreator, you get more than just a service—you get a partner committed to your success. Our pricing reflects our dedication to delivering the best results while staying within your budget.Understanding the market and business requirements make you to do something great. This is where TechCreator excels. We first understand your business goals and then deliver solution to tackle the challenges that come your way. We bring expertise and innovation to every project whether it is web development or app development.</p>
       </div>

        <Image src={pricing1} alt="TechCreator: A partner focused on your success" width={300} height={200} loading="lazy"
        className="md:h-[50vh] md:w-[25vw] sm:w-[55vw] w-full sm:h-[60vh] h-[50vh] mx-auto md:mx-0 lg:object-cover object-contain rounded-lg"
         />
      </div>
      </div>
    </>
  );
};

export default PricingCards;
