"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import AppointmentSection from "../shared/AppointmentSection";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-14 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center  gap-8 border-t border-gray-700 pt-8">
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-5">
          {[
            { href: "https://www.facebook.com/techcreatorfb/", icon: faFacebookF, bg: "bg-blue-600" },
            { href: "https://www.linkedin.com/company/techcreator", icon: faLinkedinIn, bg: "bg-blue-700" },
            { href: "https://www.youtube.com/@techcreator9512", icon: faYoutube, bg: "bg-red-600" },
            { href: "https://www.instagram.com/techcreatorco/", icon: faInstagram, bg: "bg-pink-600" },
          ].map(({ href, icon, bg }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 flex items-center justify-center rounded-full ${bg} transition-transform duration-300 hover:scale-110 shadow-lg shadow-gray-800`}
              aria-label="Social Media"
            >
              <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="space-y-2  flex flex-wrap md:items-center items-start lg:gap-12 gap-4 text-gray-400">
          
          {/* Email */}
          <div className="flex items-center gap-4 mt-3.5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 shadow-md shadow-purple-500">
              <AiOutlineMail size={24} className="text-white" />
            </div>
            <Link href="mailto:contact@techcreator.co" className="hover:text-white transition text-lg">
              contact@techcreator.co
            </Link>
          </div>

          {/* WhatsApp */}
          <Link href="https://wa.me/923119265290" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition text-nowrap text-lg">
            <div className="w-12 h-12 text-nowrap flex items-center justify-center rounded-full bg-green-600 shadow-md shadow-green-500">
              <FaWhatsapp size={24} className="text-white" />
            </div>
            <span>+923119265290</span>
          </Link>

          {/* Phone Call */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 shadow-md shadow-purple-500">
              <PhoneCall size={24} className="text-white" />
            </div>
            <a href="tel:+13213646803" className="hover:text-white text-nowrap transition text-lg">
              +1(321)364-6803
            </a>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="mt-6">
          <AppointmentSection />
        </div>

        {/* Copyright Section */}
        <p className="text-base border-t border-gray-700 pt-4 text-gray-400 text-center w-full">
          © 2025 <span className="text-[#9A00FF] font-semibold">TechCreator</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
