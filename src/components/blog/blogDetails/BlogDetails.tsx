"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import RelatedBlog from "../RelatedBlog";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";


interface Post {
  _id: string;
  title: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  readTime: string;
  image: { imageUrl: string; altDescription: string };
  content: string;
  description: string;
  tags: string[];
  publish: boolean;
  slug: string;  
}

interface DetailPostProps {
  params: {
    slug: string;
  };
}

const BlogDetails: React.FC<DetailPostProps> = ({ params }) => {
  useGetAllBlogs()
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const { slug } = params;


  // const post = (blogs as Post[]).find((p) => p.slug === slug);
  const post = (blogs as unknown as Post[]).find((p) => p.slug === slug);


  if (!post) {
    return (
      <div className="text-center font-bold text-3xl mx-auto">
        Post not found.
      </div>
    );
  }


  return (
    <>
    <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-600">
          {post.title}
        </h2>
      </div>

      {/* Post Meta Info */}
      <div className="flex justify-center items-center space-x-4 text-sm sm:text-base text-gray-600 mb-8">
        <span className="font-semibold">Created At: </span>
        <span>{new Date(post.createdAt).toLocaleString()}</span>
      </div>

      {/* Main Content Section */}
      <div className="w-full mb-12">
        {/* Image Section */}
        <div className="max-w-7xl mx-auto h-[400px] lg:h-[650px] relative mb-8">
  {post.image?.imageUrl && (
   <Image
   src={post.image.imageUrl}
   alt={post.image.altDescription || 'Image'}
   fill
   className="rounded-lg border  sm:object-cover object-fill"
 />
 
  )}
</div>


        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-sm sm:text-base px-4 py-2 rounded-full shadow-md hover:bg-blue-200 transition duration-200"
            >
              #{tag.replace(/[\[\]"]+/g, "")}
            </span>
          ))}
        </div>

        {/* Content Text */}
        
        {/* Content Text */}
        <div className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-12">
          <p
            className="text-sm sm:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        
      </div>

    </div>

<div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
<h2 className="text-center md:text-5xl text-3xl font-bold text-purple-600 ">Related Blogs</h2>
<div>
<RelatedBlog excludeBlogId={post._id} />
</div>
</div>
</>
  );
};

export default BlogDetails;
