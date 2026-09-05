"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const SaaSStickyCta = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 md:w-80 w-auto transition-all duration-500 transform ${
        showStickyCta ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 border border-indigo-250 rounded-2xl p-4 shadow-[0_10px_30px_rgba(154,0,255,0.15)] backdrop-blur-md">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">SaaS MVP Consultation</p>
            <h4 className="text-sm font-bold text-gray-800">Book Free Strategy Call</h4>
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-4 font-light leading-snug">Get a custom roadmap scope & budget estimate in under 30 mins.</p>
        <div className="flex gap-2">
          <a 
            href="#book-call-bottom"
            className="flex-1 py-2.5 bg-[#6366F1] hover:bg-[#7a00cc] text-white font-bold rounded-lg text-xs text-center transition duration-300"
          >
            📅 Book Call
          </a>
          <a 
            href="https://wa.me/923178261618"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-xs text-center transition duration-300 flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaaSStickyCta;
