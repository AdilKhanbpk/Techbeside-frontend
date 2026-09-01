import Link from "next/link";
import React from "react";

const GetQoute = () => {
  return (
    <section className="md:mt-16 mt-9 mb-9 md:mb-16 border rounded-full bg-gray-100 flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
    Let’s Build Your Next <span className="text-purple-600">Software</span> Solution
    </h2>
    <Link href="/contact">
      <button className="border p-3 px-7 rounded-full bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
        Get a Quote
      </button>
    </Link>
  </section>  
  );
};

export default GetQoute;
