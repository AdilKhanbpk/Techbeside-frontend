import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | TechBeside",
  description: "The page you are looking for does not exist or has been moved. Return to TechBeside homepage.",
  robots: {
    index: false,
    follow: false,
  },
};


const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-800 px-4">
      {/* 404 Header */}
      <h1 className="text-7xl font-extrabold text-[#6366F1] mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-white">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-white text-center max-w-lg mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
        Please check the URL or return to the homepage.
      </p>

      {/* Go Back Home Button */}
      <Link
        href="/"
        className="px-8 py-3 bg-[#6366F1] text-white text-lg font-medium rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-transform transform hover:scale-105"
      >
        Go Back Home
      </Link>

     
    </div>
  );
};

export default Custom404;
