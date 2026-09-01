import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  item: {
    title: string;
    image: string;
    description: string;
    authorImage: string;
    authorName: string;
    date: string; // Add date if needed
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  return (
    <div className="p-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image src={item.image} alt={item.title} width={400} height={192} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <div className="flex items-center">
            <Image src={item.authorImage} alt={item.authorName} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.authorName}</p>
              <p className="text-sm text-gray-500">{item.date}</p> {/* Add date display if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
