import { useState } from "react";
import {
  FaTrash,
  FaEdit,
  FaEye,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { deleteProject } from "@/redux/projectSlice"; // Assuming you have delete functionality
// import useGetAllProjects from '@/hooks/useGetAllProjects';
import { backend_url } from "@/newLayout";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import useGetAllProjects from "@/hooks/useGetAllProjects";

interface OurProjectsGridProps {
  searchTerm: string;
}

const OurProjectsGrid = ({ searchTerm }: OurProjectsGridProps) => {
  useGetAllProjects();
  const { projects } = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();
  const router = useRouter();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Number of projects per page

  // Filtered projects based on the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get projects for the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Pagination Handlers
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // ProjectCard Functionality
  const handleDelete = async (projectId: string) => {
    try {
      const res = await axios.delete(
        `${backend_url}/api/v1/project/delete/${projectId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        dispatch(deleteProject(projectId));
        toast.success(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleEdit = (projectId: string) => {
    router.push(`/admin/all-projects/addproject?projectId=${projectId}`);
  };

  const handleOpenWebsite = (websiteLink: string | undefined) => {
    if (websiteLink) {
      window.open(websiteLink, "_blank");
    }
  };

  return (
    <div>
      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 max-w-6xl mt-6 sm:ml-11">
        {currentProjects.map((project) => (
          <div
            key={project._id}
            className="relative max-w-6xl mx-auto rounded-xl overflow-hidden cursor-pointer border border-gray-600 group"
          >
            <Image
              src={project.projectScreenshot || "/default-image.jpg"} // Fallback image if no screenshot is available
              alt="Project"
              className="sm:w-full w-[300px] h-[300px] object-cover"
              width={300}
              height={300}
            />
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <div className="flex space-x-4">
                {/* Eye Icon */}
                <div
                  className="bg-black bg-opacity-75 rounded-full p-2"
                  onClick={() => handleOpenWebsite(project.websiteLink)}
                >
                  <FaEye className="text-purple-600 w-6 h-6" />
                </div>
                {/* Edit Icon (for Update) */}
                <div className="bg-black bg-opacity-75 rounded-full p-2">
                  <FaEdit
                    className="text-yellow-400 w-6 h-6"
                    onClick={() => handleEdit(project._id)}
                  />
                </div>
                {/* Trash Icon (for Delete) */}
                <div
                  className="bg-black bg-opacity-75 rounded-full p-2"
                  onClick={() => handleDelete(project._id)}
                >
                  <FaTrash className="text-red-600 w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Title always visible */}
            <div className="absolute bottom-4 left-4 bg-[#9A00FF] bg-opacity-75 text-white p-2 rounded">
              <p className="text-sm font-semibold">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1 ? "text-gray-400" : "text-purple-600"
          }`}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages ? "text-gray-400" : "text-purple-600"
          }`}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OurProjectsGrid;
