"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import tclogo from "../../../public/assets/icons/Tclogo1.png";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-b from-black via-gray-900 to-black" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src={tclogo} 
          alt="Techcreator Logo" 
          width={150} 
          height={60} 
          className="md:w-[160px]  md:h-[65px] w-[120px] h-[45px] transition-all duration-300"
        />
      </div>

      {/* Contact Info */}
      <a
        href="tel:+13213646803"
        className="flex items-center gap-3 bg-[#9A00FF] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#7a00cc] transition-all duration-300 transform hover:scale-105"
      >
        <PhoneCall size={20} className="animate-pulse" />
        <span className="text-sm font-semibold hidden md:block">+1(321)364-6803</span>
      </a>
    </nav>
  );
};

export default Navbar;
