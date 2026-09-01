"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

// Importing Images
import healthcareImage from "../../../public/assets/portfoliopage/healthcare.webp";
import restaurantImage from "../../../public/assets/portfoliopage/restaurant.webp";
import realstateImage from "../../../public/assets/portfoliopage/realstate.webp";
import ecommerceImage from "../../../public/assets/portfoliopage/eccommerce.webp";
import hospitalityImage from "../../../public/assets/portfoliopage/hospitality.webp";
import greenEnergyImage from "../../../public/assets/portfoliopage/greenenergy.webp";

const OurImpressiveProject = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  // Project Data
  const projects = [
    {
      image: healthcareImage,
      title: "Healthcare",
      link: "/healthcare",
      description:
        "We have developed cutting-edge healthcare solutions, including patient management systems, telemedicine platforms, and hospital automation software.",
    },
    {
      image: restaurantImage,
      title: "Restaurant",
      link: "/restaurants",
      description:
        "Our restaurant industry projects include online food ordering systems, table reservation platforms, and digital menu solutions.",
    },
    {
      image: realstateImage,
      title: "Real Estate",
      link: "/real-estate",
      description:
        "We have built real estate listing platforms, property management systems, and virtual tour websites for top real estate businesses.",
    },
    {
      image: ecommerceImage,
      title: "E-commerce",
      link: "/e-commerce",
      description:
        "Our e-commerce solutions include feature-rich online stores, custom shopping experiences, and seamless payment integrations.",
    },
    {
      image: hospitalityImage,
      title: "Hospitality",
      link: "/hospitality",
      description:
        "We have designed hotel booking systems, customer loyalty programs, and property management tools for the hospitality industry.",
    },
    {
      image: greenEnergyImage,
      title: "Green Energy",
      link: "/green-energy",
      description:
        "Our projects in the green energy sector include solar panel monitoring platforms, energy efficiency apps, and smart grid solutions.",
    },
  ];

  // Handle Navigation
  const handleNavigation = (link: string) => {
    setLoading(link);
    router.push(link);
  };

  return (
    <div className=" ">
      {/* Heading */}
     <div className="text-center max-w-4xl mx-auto">
     <h2 style={{lineHeight:1.2}} className="text-3xl md:text-4xl lg:text-5xl font-bold">
  Transforming <span className="text-[#9A00FF]">Industries</span> with Innovation & Excellence
</h2>
<p className="text-gray-500 mt-4 text-base md:text-lg lg:text-xl">
  We proudly serve diverse industries by delivering innovative and high-quality solutions.  
  From healthcare to e-commerce, our projects are designed to enhance efficiency,  
  streamline operations, and drive success.
</p>
</div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} Project`}
                width={400}
                height={400}
                className="w-full h-full object-cover  transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 md:px-3 md:py-6 py-2 text-center">
              <h2 className="font-semibold text-lg md:text-2xl text-gray-800">
                {project.title}
              </h2>
              <p className="text-base md:text-lg mt-2 text-gray-600 flex-1">
                {project.description}
              </p>
            </div>

            {/* View Project Button */}
            <div className="px-6 pb-6">
              <button
                onClick={() => handleNavigation(project.link)}
                className="w-full px-6 py-2 bg-[#9A00FF] text-white font-semibold rounded-md hover:bg-[#7a00cc] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading === project.link ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  "View Projects"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpressiveProject;
