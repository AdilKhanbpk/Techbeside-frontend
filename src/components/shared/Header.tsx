"use client";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaDesktop,
  FaMobileAlt,
  FaPaintBrush,
  FaCogs,
  FaBullhorn,
  FaRocket,
  FaTasks,
  FaSearch,
  FaWrench,
  FaPencilRuler,
  FaCheck,
} from "react-icons/fa";
import TechBesideLogo from "../../../public/logo.png";

const services = [
  { name: "Web Development", href: "/services/web-development", icon: <FaDesktop /> },
  { name: "Mobile App Development", href: "/services/mobile-app-development-company", icon: <FaMobileAlt /> },
  { name: "UI & UX Designing", href: "/services/ui-ux-design-agency", icon: <FaPaintBrush /> },
  { name: "DevOps", href: "/services/devops", icon: <FaCogs /> },
  { name: "SaaS MVP Development", href: "/services/saas-mvp-development", icon: <FaRocket /> },
  { name: "Project Management", href: "/services/project-management", icon: <FaTasks /> },
  { name: "Software Maintenance", href: "/services/software-maintenance-services", icon: <FaWrench /> },
  { name: "QA Testing", href: "/services/web-qa-tester", icon: <FaCheck /> },
];

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-[#0A0E17]/95 backdrop-blur border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="max-w-[93rem] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={TechBesideLogo}
            alt="TechBeside logo"
            width={170}
            height={38}
            priority
            className="w-32 sm:w-36 lg:w-40 h-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${!scrolled && isHomePage
                  ? "text-slate-700 hover:text-slate-950 font-semibold"
                  : "text-[#D5D9E2] hover:text-white"
                }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[300px]"
                >
                  <div className="bg-[#0D1420] border border-white/10 rounded-lg shadow-2xl p-5">
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${isActive(s.href)
                            ? "bg-[#6366F1]/10 text-[#6366F1]"
                            : "text-[#D5D9E2] hover:bg-white/5 hover:text-white"
                          }`}
                      >
                        <span className="text-[#6366F1]">{s.icon}</span>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((item) => {
            const isLinkActive = isActive(item.href);
            const linkTextColor = !scrolled && isHomePage
              ? isLinkActive ? "text-[#5B50E6] font-semibold" : "text-slate-700 hover:text-slate-950 font-medium"
              : isLinkActive ? "text-white font-semibold" : "text-[#D5D9E2] hover:text-white";

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm transition-colors ${linkTextColor}`}
              >
                {item.name}
                {isLinkActive && (
                  <span className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-[#6366F1] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu icon button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className={`p-2 -mr-2 transition-colors ${!scrolled && isHomePage ? "text-slate-800 hover:text-slate-950" : "text-white"
              }`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0A0E17] border-l border-white/10 z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/10">
                <Image src={TechBesideLogo} alt="TechBeside logo" width={140} height={32} className="w-32 h-auto" />
                <button onClick={() => setDrawerOpen(false)} aria-label="Close menu" className="text-white p-2">
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center justify-between w-full py-3 text-white font-medium"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-2"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            onClick={() => setDrawerOpen(false)}
                            className="flex items-center gap-3 py-2.5 text-sm text-[#D5D9E2] hover:text-white"
                          >
                            <span className="text-[#6366F1]">{s.icon}</span>
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block py-3 text-white font-medium border-t border-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="px-5 py-6 border-t border-white/10 space-y-4">
                <a href="tel:+13213646803" className="flex items-center gap-2 text-[#D5D9E2] text-sm">
                  <PhoneCall size={16} className="text-[#6366F1]" />
                  +923178261618
                </a>
                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="block text-center bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold py-3 rounded-md transition-colors"
                >
                  Get a quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;