"use client";
import React from "react";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import useGetAllProjects from "@/hooks/useGetAllProjects";

type Project = {
  _id: string;
  title: string;
  description: string;
  category: string[];
  projectScreenshot?: string;
  createdAt: string;
  updatedAt: string;
  figmaLink: string;
  githubLink: string;
  websiteLink?: string;
};

interface IndustryProjectsProps {
  slug: string;
}

const ServicesRelatedProjects: React.FC<IndustryProjectsProps> = ({ slug }) => {
  useGetAllProjects();

  const { projects } = useSelector((state: RootState) => state.projects);

  // Filter and limit projects
  const filteredProjects = projects
    ?.filter((project) => project.category.includes(slug))
    .slice(0, 6);

   

  const handleRedirect = (websiteLink?: string) => {
    if (websiteLink) {
      window.open(websiteLink, "_blank");
    } else {
      alert("Website link is not available for this project.");
    }
  };

  return (
    <div>
      {/* RecentWorks section start */}
      
          <div className=" mx-auto md:mt-16 mt-9 ">
            {/* Heading Section */}
            <div className="text-center ">
              <h2 className="text-3xl md:text-5xl font-bold text-purple-600">Recent Work</h2>
              <p className="mt-4 text-lg text-gray-600   mx-auto">
              Explore our related work that highlights our commitment to innovation, seamless functionality, and delivering solutions tailored to meet diverse business needs. We specialize in creating responsive and user-friendly designs that yield measurable results.
Want to bring your ideas to life? Let us help you achieve your goals with precision and creativity. Get in touch with us today to start your project!
              </p>
            </div>

            {/* Works Section */}
            <div className="w-full mt-6">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <div
                      key={project._id}
                      className="relative group overflow-hidden rounded-lg border w-full border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Main Feature Image */}
                      <Image
            src={project.projectScreenshot || "/path/to/fallback-image.jpg"}
            alt={project.title}
            className="w-full h-[230px] object-cover rounded-t-lg"
            width={600} 
            height={400} 
            quality={75} 
          />
                   <div className='pt-20'>
                   <p className="absolute bottom-0 left-0 w-full  bg-purple-600 text-white text-center md:p-2 p-1 text-lg font-semibold">
    {project.title}
  </p>
                   </div>

                      {/* Eye Icon on Hover */}
                      <div
                        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 cursor-pointer"
                        onClick={() => handleRedirect(project.websiteLink)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && handleRedirect(project.websiteLink)}
                        aria-label={`View project: ${project.title}`}
                      >
                        <FaEye className=" text-4xl text-purple-600" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // No projects found message
                <p className="text-center text-xl text-gray-500 mt-6">
                  No related projects available at the moment. Check back later!
                </p>
              )}
            </div>
          </div>
        </div>
  );
};

export default ServicesRelatedProjects;