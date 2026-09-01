"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import { motion } from "framer-motion";

interface BlogCardsProps {
  /** Blogs pre-fetched server-side for SEO — visible to Googlebot on first load */
  initialBlogs?: any[];
}


// Function to create a slug from the title
const createSlug = (title: string | undefined): string =>
  title
    ? title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    : "untitled";


const BlogCards: React.FC<BlogCardsProps> = ({ initialBlogs = [] }) => {
  useGetAllBlogs();
  const reduxBlogs = useSelector((state: RootState) => state.blogs.blogs);
  // Use Redux blogs once loaded (client), fall back to server-fetched blogs (for SEO/SSR)
  const blogs = reduxBlogs.length > 0 ? reduxBlogs : initialBlogs;
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;
  const [loadingBlogId, setLoadingBlogId] = useState<string | null>(null);

  // Calculate the index of the last and first blog on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Get the current blogs for the page
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to paginate
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className='max-w-[1450px] mx-auto px-4 md:mt-16 mt-9'>
    {blogs.length === 0 ? (
      <p className="text-center text-gray-600 mt-10">
        Sorry, no blogs are available at the moment. Please check back later!
      </p>
    ) : (
      <>
    
        <div className="container mb-10 mt-10 max-w-[1450px] mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {currentBlogs.map((blog: any) => (
  <div key={blog._id}>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:h-[450px]">
      <Image
        src={blog.image?.imageUrl || "/path/to/default-image.jpg"}
        alt={blog.image?.altDescription || blog.title}
        width={300}
        height={150}
        className="w-full h-48 object-cover"
      />
    <div className="md:p-3 p-1">
  <div className="line-clamp-6">
      <h2 className="text-xl font-semibold text-blue-600 mb-2 cursor-pointer">
        {blog.title}
      </h2>
  
    <p className="text-gray-600 mb-4">
      {blog.description}
    </p>
  </div>
   
   <Link href={`/blog/${createSlug(blog.slug)}`}
    onClick={() => setLoadingBlogId(blog._id)}
   >

<motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loadingBlogId === blog._id}
                        className={`mt-6 w-full py-3 text-sm font-semibold text-white rounded-xl transition duration-300 mb-2 ${
                          loadingBlogId === blog._id
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                        }`}
                      >
                        {loadingBlogId === blog._id ? (
                          <span className="flex justify-center items-center">
                            <svg
                              className="animate-spin h-5 w-5 mr-2 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4l3.293-3.293a1 1 0 011.414 0L20 8V4a8 8 0 00-16 8z"
                              ></path>
                            </svg>
                            please wait...
                          </span>
                        ) : (
                          "Learn More →"
                        )}
                      </motion.button>
     
    </Link>

</div>

    </div>
  </div>
))}

        </div>
        
        {/* Pagination Controls */}
        {blogs.length > blogsPerPage && (
          <div className="flex justify-center mb-6 items-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-gray-800 text-white rounded-full disabled:opacity-50 hover:bg-gray-700 transition duration-300"
            >
              <AiOutlineArrowLeft size={20} />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center mx-4 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`p-3 px-5 rounded-full ${
                    currentPage === index + 1
                      ? "bg-[#9A00FF] text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-gray-800 text-white rounded-full disabled:opacity-50 hover:bg-gray-700 transition duration-300"
            >
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
        )}
      </>
    )}
  </div>
);
};
 

export default BlogCards;
