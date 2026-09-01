"use client";
import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { IoMdAdd, IoMdArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "@/newLayout";
import axios from "axios";
import { toast } from "react-toastify";
import { deleteblog } from "@/redux/blogSlice";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import { useRouter } from "next/navigation";

// Utility function to generate a slug from a title
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

interface Blog {
  _id: string;
  slug: string;  
  image: string | { imageUrl: string };
  content: string;
  tags: string[];
  createdAt: any;
  publish: boolean;
  title: string;
}

const AllBlogs: React.FC = () => {
  useGetAllBlogs();
  const { blogs } = useSelector((state: any) => state.blogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 5;

  const filteredBlogs = Array.isArray(blogs)
    ? blogs.filter((blog: Blog) =>
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const dispatch = useDispatch();
  const router = useRouter();

  
  const handleEdit = (slug: string) => {
    router.push(`/admin/create-blog?slug=${slug}`);
  };

  const [isDeleting, setIsDeleting] = useState(false);

  
  const deletedblogHandler = async (slug: string) => {
    setIsDeleting(true);
    try {
      const res = await axios.delete(
        `${backend_url}/api/v1/blogs/delete/${slug}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        dispatch(deleteblog(slug));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.error("Error while deleting blog:", error);
      toast.error("Error deleting blog");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto bg-inline lg:p-6 mt-20">
    <header className="flex flex-col md:flex-row justify-between md:items-center mb-8 space-y-4 md:space-y-0">
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <Link href="/admin/create-blog" passHref>
          <button
            aria-label="Add Blog"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-500 transition duration-300"
          >
            <IoMdAdd className="mr-2 text-xl" /> Add Blog
          </button>
        </Link>
      </div>
      <div className="relative w-full md:w-72">
        <input
          className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
          type="text"
          aria-label="Search Blogs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch size={20} className="absolute right-3 top-3 text-gray-500" />
      </div>
    </header>

    <section className="overflow-x-auto shadow-lg rounded-lg bg-white">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-sm text-gray-600">
            <th className="px-6 py-3 border-b border-gray-200 text-left">Image</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left">Title</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left">Tags</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left">Publish Date</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {displayedBlogs.map((blog: Blog, index: number) => (
            <tr key={`${blog.slug}-${index}`} className="hover:bg-gray-50 transition duration-300">
              <td className="px-6 py-4 border-b border-gray-200">
                <Image
                  alt="Blog preview"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded object-cover"
                  src={typeof blog.image === "string" ? blog.image : blog.image.imageUrl}
                />
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-900">{blog.title}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                {Array.isArray(blog.tags) ? (
                  blog.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 mr-1"
                    >
                      {tag.replace(/[\[\]"]+/g, "")}
                    </span>
                  ))
                ) : (
                  <span className="text-red-500">Invalid tags</span>
                )}
              </td>

              <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <button
                  aria-label="Delete Blog"
                  className="text-red-600 hover:text-red-800"
                  onClick={() => deletedblogHandler(blog.slug)}
                  disabled={isDeleting}
                >
                  <FaRegTrashCan size={18} />
                </button>
                <button
                  onClick={() => handleEdit(blog.slug)}
                  aria-label="Edit Blog"
                  className="ml-4 text-blue-600 hover:text-blue-800"
                >
                  <FiEdit2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-100">
          <tr>
            <td colSpan={7} className="py-2 px-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-500" : "bg-purple-600 text-white"}`}
                >
                  Previous
                </button>
                <span className="text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-500" : "bg-purple-600 text-white"}`}
                >
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table> 
    </section>
  </main>
);
};

export default AllBlogs;
