"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useGetAllProjects from "@/hooks/useGetAllProjects";
import Link from "next/link";

interface IndustryProjectsProps {
  slug: string;
}
const IndustryRelatedProjects: React.FC<IndustryProjectsProps> = ({ slug }) => {
  useGetAllProjects();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const { projects } = useSelector((state: RootState) => state.projects);

  const filteredProjects = projects.filter((project) =>
    project.industry.includes(slug)
  );

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProjects.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const showPagination = filteredProjects.length > itemsPerPage;

  return (
    <div>
      

      {/* Projects section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 my-10">
  {currentProjects.length > 0 ? (
    currentProjects.map((project) => (
      <div
        key={project._id}
        className="relative flex flex-col bg-white/20 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        {/* Project Image */}
        <div className="relative w-full h-56">
          <Image
            src={project.projectScreenshot || "/path/to/fallback-image.jpg"}
            alt={project.title}
            layout="fill"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Project Details */}
        <div className="flex flex-col md:p-6 p-2 flex-grow">
          <h2 className="text-2xl font-bold text-black">{project.title}</h2>
          <p className="text-gray-600 text-base mb-4">{project.description}</p>

          {/* 🟢 Bottom Buttons Always at Same Position */}
          <div className="mt-auto pt-4 flex gap-3">
            {project.websiteLink && (
              <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:bg-blue-600 transition">
                🌍 Website
              </Link>
            )}
            {project.figmaLink && (
              <Link href={project.figmaLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                🎨 Figma
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                🖥 GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-400 text-lg text-center">
      Sorry, no projects are available right now. Please check back later!
    </p>
  )}
</div>


      {/* Pagination */}
      {showPagination && (
        <div className="flex justify-center items-center gap-4 my-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`p-1 px-3 ${
                  currentPage === number
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                } rounded-md hover:bg-gray-400 transition-all`}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredProjects.length / itemsPerPage)}
            className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default IndustryRelatedProjects;
