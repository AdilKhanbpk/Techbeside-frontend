"use client";
import { useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const AdminHeader: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
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
          name: "Digital Marketing",
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
        {
          name: "digital-marketing",
          href: "/services/digital-marketing-for-",
          icon: <FaBullhorn />,
        },
        {
          name: "SaaS MVP Development",
          href: "/services/saas-mvp-development",
          icon: <FaRocket />,
        },
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

  const toggleDropdowns = () => {
    setIsDropdownOpens(!isDropdownOpens);
  };

  return (
    <nav className="text-white  z-20 w-full fixed bg-black   text-nowrap">
      <div className="md:px-9 px-2 ">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link href="/">
              <div className="flex-shrink-0 flex justify-center gap-2 items-center   ">
                <Image
                  src={TechcreatorLogo}
                  alt="techcreartor_logo"
                  width={158}
                  height={10}
                />
                {/* <span className="text-[#FFFFFF] md:text-xl font-semibold">TechCreator</span> */}
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-9">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <span
                        className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF] text-white ${
                          pathname === item.href
                            ? "bg-[#9A00FF] text-white"
                            : ""
                        }`}
                      >
                        {item.name}
                      </span>
                      {isDropdownOpen && (
                        <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 z-20 w-full md:w-auto">
                          <div className="flex flex-col md:flex-row  justify-between p-4 gap-4 md:w-[450px] text-wrap ">
                            {/* Left Column */}
                            <ul className="flex flex-col gap-2  ">
                              {item.dropdown.slice(0, 5).map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className={`px-4 py-2 ${
                                    pathname === subItem.href
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
                            <ul className="flex flex-col gap-2 ">
                              {item.dropdown.slice(5).map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className={`px-4 py-2 ${
                                    pathname === subItem.href
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
                      className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF] text-white ${
                        pathname === item.href ? "bg-[#9A00FF] text-white" : ""
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
                <span>+1(321)364-6803</span>
              </p>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
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
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
                        pathname === item.href ? "bg-[#0c080f] text-white" : ""
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon} {item.name}
                      </span>
                      <span>{isDropdownOpen ? "-" : "+"}</span>
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-6">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
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
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
                      pathname === item.href ? "bg-[#0c080f] text-white" : ""
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

export default AdminHeader;
