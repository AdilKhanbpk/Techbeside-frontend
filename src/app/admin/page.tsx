"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminLayout from "@/components/shared/AdminLayout";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Star, Edit, Trash } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { deleteTestimonial } from "@/redux/testimonialSlice";
import { FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

// Interface for Testimonial
interface Testimonial {
  id: string;
  clientName: string;
  profilePicture: string;
  rating: number;
  review: string;
  reviewScreenshot?: string;
  createdAt: string;
  updatedAt: string;
  websiteLink: string;
}



const Testimonial = () => {
  const { testimonials } = useSelector((state: RootState) => state.testimonials);
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  // Filter testimonials based on search query
  const filteredTestimonials = testimonials?.filter(
    (testimonial) =>
      testimonial.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.review.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current testimonials for the current page
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = filteredTestimonials?.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  // Handle delete action
  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`${backend_url}/api/v1/testimonial/delete/${id}`);
      if (res.data.success) {
        dispatch(deleteTestimonial(id))
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.error("Error deleting testimonial:", error);
      toast.error(error?.response?.data?.message || "Error deleting testimonial.");
    }
  };

  // Update Placeholder
  const handleUpdate = (id: string) => {
    console.log(`Update testimonial with ID: ${id}`);
  };

  // Handle pagination
  const totalPages = Math.ceil((filteredTestimonials?.length || 0) / testimonialsPerPage);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="flex md:flex-row flex-col gap-4 mt-20 justify-between items-center mb-4">
          <Link href="/admin/testimonials/add-testimonial">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              Add Testimonial
            </button>
          </Link>
         <div className="flex items-center  rounded-md p-2  border-2 w-[300px]  border-black">
         <input
            type="text"
            placeholder="Search testimonials..."
            className=" outline-none w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch size={20} />
         </div>
        </div>

        {/* Testimonial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTestimonials?.length ? (
            currentTestimonials.map((testimonial) => (
              <div key={testimonial._id} className="border p-4 rounded-lg shadow-lg bg-white relative group">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.profilePicture || "/default-avatar.png"}
                      alt={testimonial.clientName}
                      width={50}
                      height={50}
                      className="rounded-full object-contain"
                    />
                    <div className="ml-3">
                      <h3 className="font-bold">{testimonial.clientName || "No Name"}</h3>
                      <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < Math.round(testimonial.rating) ? "#FFB800" : "#ccc"} // Highlight stars based on rating
          size={18} // Adjust size as needed
        />
      ))}
    </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {/* <button
                      onClick={() => handleUpdate(testimonial._id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit size={20} />
                    </button> */}
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash size={20} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.review || "No Review"}</p>
                   {/* Review Screenshot */}
                {/* {testimonial.reviewScreenshot && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Image
                        src={testimonial.reviewScreenshot}
                        alt="Review Screenshot"
                        width={300}
                        height={200}
                        className="rounded-md"
                      />
                    </div>
                  )} */}
              
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No testimonials available.</div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 space-x-4">
  {/* Previous Button */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="text-gray-500 hover:text-purple-600 disabled:text-gray-300"
  >
    <FaArrowLeft size={20} />
  </button>

  {/* Page Numbers */}
  <div className="flex space-x-2">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === index + 1
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="text-gray-500 hover:text-purple-600 disabled:text-gray-300"
  >
    <FaArrowRight size={20} />
  </button>
</div>


      </AdminLayout>
    </ProtectedRoute>
  );
};

export default Testimonial;
