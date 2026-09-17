import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const GetQoute = () => {
  return (
    <section className="md:mt-16 mt-9 mb-9 md:mb-16 border rounded-full bg-gradient-to-r from-green-50 to-green-100 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 space-y-4 md:space-y-0 shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
        Ready to Start Your <span className="text-green-600">Project</span>?
      </h2>
      <Link 
        href="https://wa.me/923178261618" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-3 border-2 border-green-600 p-4 px-8 rounded-full bg-green-600 hover:bg-green-700 hover:border-green-700 text-white cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          <FaWhatsapp size={24} />
          <span>Chat on WhatsApp</span>
        </button>
      </Link>
    </section>  
  );
};

export default GetQoute;
