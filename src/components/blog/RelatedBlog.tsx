import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image'; 
import Link from 'next/link'; 
import { motion } from "framer-motion";


// Utility function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (!text) return '';
  return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
};

// Utility function to create a slug
const createSlug = (title: string) => {
  return title
    ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : 'untitled';
};

interface RelatedBlogProps {
  excludeBlogId?: string; 
}

const RelatedBlog: React.FC<RelatedBlogProps> = ({ excludeBlogId }) => {
  // Fetch blogs from Redux state
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const [loadingBlogId, setLoadingBlogId] = useState<string | null>(null);

  // Filter blogs to exclude the current blog
  const relatedBlogs = blogs?.filter((blog: any) => blog._id !== excludeBlogId).slice(0, 3) || [];

  return (
    <div className="max-w-[1450px] mb-10 mt-10 mx-auto  grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
    {relatedBlogs.map((blog: any) => (
      <div key={blog._id || Math.random()} >


        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:h-[450px]">
          <Image
            src={blog.image?.imageUrl || '/path/to/default-image.jpg'}
            alt={blog.image?.altDescription || blog.title || 'Blog Image'}
            width={350}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-2">
            <div className="line-clamp-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-2 ">
                  {blog.title || 'Untitled Blog'}
                </h2>
            
              <p className="text-gray-600 ">{truncateText(blog.description, 200)}</p>
            </div>
          </div>
           
   <Link href={`/blog/${createSlug(blog.slug || 'Untitled')}`}
    onClick={() => setLoadingBlogId(blog._id)}
   >

<motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loadingBlogId === blog._id}
                        className={`mt-6 w-full py-3 text-sm font-semibold text-white rounded-xl transition duration-300 ${
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
    ))}
  </div>
  
  

  );
};

export default RelatedBlog;
