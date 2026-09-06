"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import tclogo from "../../../public/assets/icons/Tclogo1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? "bg-[#0A0E17]/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Image
          src={tclogo}
          alt="TechBeside logo"
          width={150}
          height={60}
          className="md:w-[160px] md:h-[65px] w-[120px] h-[45px]"
        />
      </div>

      <a
        href="tel:+13213646803"
        className="flex items-center gap-2.5 border border-[#6366F1]/40 hover:border-[#6366F1] hover:bg-[#6366F1]/10 text-white px-5 py-2.5 rounded-md transition-colors"
      >
        <PhoneCall size={18} className="text-[#6366F1]" />
        <span className="text-sm font-medium hidden md:block">+923178261618</span>
      </a>
    </nav>
  );
};

export default Navbar;