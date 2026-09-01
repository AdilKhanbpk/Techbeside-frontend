"use client";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

import {
  FaHome,
  FaInfoCircle,
  FaTags,
  FaBlog,
  FaProjectDiagram,
  FaWrench,
  FaPencilRuler,
  FaBriefcase,
  FaEnvelope,
  FaDesktop,
  FaMobileAlt,
  FaPaintBrush,
  FaCogs,
  FaTasks,
  FaSearch,
  FaCheck,
  FaBullhorn,
  FaRocket,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import TechcreatorLogo from "../../../public/assets/icons/Tclogo1.png";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  let timer: NodeJS.Timeout;
  const [scrolling, setScrolling] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navItems = [
    // { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
    {
      name: "Services",
      href: "#",
      icon: <FaDesktop />,
      dropdown: [
        {
          name: "Web Development",
          href: "/services/web-development",
          icon: <FaDesktop />,
        },
        {
          name: "Mobile App Development",
          href: "/services/mobile-app-development-company",
          icon: <FaMobileAlt />,
        },
        {
          name: "UI & UX Designing",
          href: "/services/ui-ux-design-agency",
          icon: <FaPaintBrush />,
        },
        { name: "DevOps", href: "/services/devops", icon: <FaCogs /> },
        {
          name: "Digital Marketing ",
          href: "/services/digital-marketing-for-software-companies",
          icon: <FaBullhorn />,
        },
        {
          name: "SaaS MVP Development",
          href: "/services/saas-mvp-development",
          icon: <FaRocket />,
        },
        {
          name: "Project Management",
          href: "/services/project-management",
          icon: <FaTasks />,
        },
        {
          name: "SEO & Content Writing",
          href: "/services/seo-services-for-small-business",
          icon: <FaSearch />,
        },
        {
          name: "Software Maintenance",
          href: "/services/software-maintenance-services",
          icon: <FaWrench />,
        },
        {
          name: "Graphic Designing",
          href: "/services/affordable-graphic-design-services",
          icon: <FaPencilRuler />,
        },
        { name: "QA Testing", href: "/services/web-qa-tester", icon: <FaCheck /> },
      ],
    },
    { name: "Pricing", href: "/pricing", icon: <FaTags /> },
    { name: "Blog", href: "/blog", icon: <FaBlog /> },
    { name: "Portfolio", href: "/portfolio", icon: <FaProjectDiagram /> },
    { name: "Career", href: "/career", icon: <FaBriefcase /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };



  const handleMouseEnter = (name: string) => {
    clearTimeout(timer);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };



  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-3 ${scrolling
      ? "bg-black backdrop-blur-lg shadow-lg"
      : "bg-transparent"
      }`}>
      <div className="md:px-9 px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}

          className="flex items-center justify-between h-14">

          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src={TechcreatorLogo}
                alt="techcreator_logo"
                width={180}
                height={40}
                className="w-36 sm:w-40 lg:w-44 h-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </Link>



          <div className="flex items-center gap-9">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span
                        className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF]  text-white ${pathname === item.href
                          ? "bg-[#9A00FF] text-white"
                          : ""
                          }`}
                      >
                        {item.name}
                      </span>
                      {activeDropdown === item.name && (
                        <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 z-20 w-full md:w-auto">
                          <div className="flex flex-row p-4 gap-0 w-[500px] items-start">
                            {/* Left Column */}
                            <ul className="flex flex-col gap-2 w-[230px] shrink-0">
                              {item.dropdown.slice(0, 5).map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className={`px-4 py-2 ${pathname === subItem.href
                                    ? "text-[#9A00FF] font-semibold "
                                    : "hover:text-[#9A00FF]"
                                    }`}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-[#9A00FF]">
                                      {subItem.icon}
                                    </span>{" "}
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {/* Right Column */}
                            <ul className="flex flex-col gap-2 w-[230px] shrink-0">
                              {item.dropdown.slice(5).map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className={`px-4 py-2 ${pathname === subItem.href
                                    ? "text-[#9A00FF] font-semibold"
                                    : "hover:text-[#9A00FF] "
                                    }`}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-[#9A00FF]">
                                      {subItem.icon}
                                    </span>{" "}
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF] text-white ${pathname === item.href ? "bg-[#9A00FF] text-white" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="hide-at-1119">
              <p className="flex gap-2 items-center text-base">
                <PhoneCall color="#9A00FF" />
                <span className="text-white">
                  <a href="tel:+13213646803" className="hover:underline">
                    +1(321)364-6803
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="md:hidden block">
            <p className=" flex gap-2 items-center text-sm ">
              <PhoneCall color="#9A00FF" size={15} />
              <span className="text-white">
                <a href="tel:+13213646803" className="hover:underline">
                  +1(321)364-6803
                </a>
              </span>
            </p>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>

          </div>
        </motion.div>

      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#9A00FF] z-20 rounded-md mb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  // Dropdown menu for Services
                  <div className="flex flex-col">
                    <button
                      onClick={() => {
                        setActiveDropdown(item.name === activeDropdown ? null : item.name);
                      }}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${pathname === item.href ? "bg-[#0c080f] text-white" : ""
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon} {item.name}
                      </span>
                      <span>{activeDropdown === item.name ? "-" : "+"}</span>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-6">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsOpen(false);
                            }}
                            className="flex items-center gap-3 text-wrap px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600"
                          >
                            {subItem.icon} {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular menu items
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${pathname === item.href ? "bg-[#0c080f] text-white" : ""
                      }`}
                  >
                    {item.icon} {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
};

export default Header;
