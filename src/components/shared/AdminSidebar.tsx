"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; 
import { GrProjects } from "react-icons/gr";
import { FiBriefcase } from "react-icons/fi";
import { FaNoteSticky } from "react-icons/fa6";
import { FaClipboardList, FaUserTie } from 'react-icons/fa';


import { FaPlus, FaRegFileAlt, FaUsers, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const AdminSidebar: React.FC = () => {
  const pathname = usePathname(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { href: "/admin/all-projects", label: "All Projects", icon: <GrProjects className="w-6 h-6" /> },
    { href: "/admin/all-blogs", label: "All Blogs", icon: <FiBriefcase className="w-6 h-6" /> },
    { href: "/admin/all-jobs", label: "All Jobs", icon: <FaRegFileAlt className="w-6 h-6" /> },
    { href: "/admin/testimonials", label: "Testimonials", icon: <FaNoteSticky className="w-6 h-6" /> },
    { href: "/admin/all-applicants", label: "Applicants", icon: <FaUsers className="w-6 h-6" /> },
    { href: "/admin/contact", label: "Contact", icon: <FaPhoneAlt className="w-6 h-6" /> },
    { href: "/admin/pricing-form", label: "PricingForm", icon: <FaClipboardList className="w-6 h-6" /> },
    { href: "/admin/resume", label: "Resume", icon: <FaUserTie className="w-6 h-6" /> },
    { href: "/admin/all-subscribers", label: "Subscribers", icon: <FaUserTie className="w-6 h-6" /> },
  ];

  return (
    <div className="relative mt-16 ">
      {/* Button to toggle sidebar on small screens */}
      <button 
        className="sm:hidden p-2 bg-[#0f080a] text-white absolute   left-0 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div 
        className={`w-fit h-full border-r bg-black text-white 
          ${isSidebarOpen ? 'block' : 'hidden'} sm:block transition-all duration-300 ease-in-out`}
      >
        <div className='py-12 flex flex-col gap-4'>
          {links.map(link => (
            <Link key={link.label} href={link.href} passHref>
              <div 
                className={`flex gap-2 items-center  sm:ml-4 p-2 hover:text-purple-600 md:px-16
                  ${pathname === link.href ? 'text-purple-600 ' : ''} 
                `}
              >
                <div className="block">{link.icon}</div>
                <p className='hidden md:block text-nowrap'>{link.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(AdminSidebar);
