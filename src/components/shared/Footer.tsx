"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Footerbg from "../../../public/assets/footerImages/footer_bg_image.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { setUser } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import AppointmentSection from "./AppointmentSection";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const footerBackground = document.querySelector(
      ".footer-bg"
    ) as HTMLElement | null;

    if (footerBackground && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px 200px 0px" }
      );

      observer.observe(footerBackground);
      return () => observer.disconnect();
    } else if (footerBackground) {
      footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
    }
  }, []);

  const dispatch = useDispatch();
  const { user } = useSelector((store: RootState) => store.auth);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${backend_url}/api/v1/user/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        router.push("/");
        localStorage.removeItem("token");
        toast.success(res.data.message);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || error?.message || "Failed to logout";
      toast.error(message);
    }
  };

  // Handle form submission
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/subscribeuser`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setEmail("");
      } else {
        toast.error(res.data.message || "Subscription failed!");
      }
    } catch (error: any) {
      console.error("Error during subscription:", error);

      // Fallback error message
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-white py-2 w-full">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 footer-bg"></div>
      <div className="relative mx-auto  px-3 mt-6">
        <div className="flex flex-wrap md:gap-10 gap-9 justify-between px-5">
          <div className="flex flex-col">
            <div className="flex gap-5 ">
              {[
                {
                  href: "https://www.facebook.com/techbesideofficial/",
                  icon: faFacebookF,
                  bg: "bg-blue-600",
                },
                {
                  href: "https://www.linkedin.com/company/techbeside",
                  icon: faLinkedinIn,
                  bg: "bg-blue-700",
                },
                {
                  href: "https://www.youtube.com/@techbeside",
                  icon: faYoutube,
                  bg: "bg-red-600",
                },
                {
                  href: "https://www.instagram.com/techbesideofficial/",
                  icon: faInstagram,
                  bg: "bg-pink-600",
                },
              ].map(({ href, icon, bg }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${bg} transition duration-300 hover:opacity-80`}
                  aria-label="Social Media"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-white text-lg md:text-xl"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold">Subscribe</h2>
              <p className="mt-2 mb-2">Stay updated with the latest in tech.</p>
              <div className="flex flex-col gap-2">
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={loading}
                    required
                    className="text-black p-2 outline-none rounded-md  "
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="bg-[#6366F1] text-white rounded-md p-2 w-fit shadow-[0_4px_16px_-4px_#3b71ca]"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-lg font-semibold">
              Industries We Serve
            </h2>
            <ul className="flex flex-col gap-2 ">
              {[
                { href: "/healthcare", label: "HealthCare" },
                { href: "/e-commerce", label: "E-Commerce" },
                { href: "/hospitality", label: "Hospitality" },
                { href: "/real-estate", label: "Real Estate" },
                { href: "/restaurants", label: "Restaurants" },
                { href: "/green-energy", label: "Green Energy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={` text-base ${
                      pathname === item.href
                        ? "text-[#6366F1]"
                        : "hover:text-[#6366F1]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="text-base md:text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Contact",
                "Blog",
                "Pricing",
                "Portfolio",
                "Career",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`text-base  transition-colors ${
                      pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "text-[#6366F1]"
                        : "hover:text-[#6366F1]"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}

              {user ? (
                <>
                  {user.role === "admin" && (
                    <li>
                      <Link
                        href="/admin"
                        className={`flex items-center gap-2 text-xs md:text-sm transition-colors ${
                          pathname === "/admin"
                            ? "text-[#6366F1]"
                            : "hover:text-[#6366F1]"
                        }`}
                      >
                        Admin
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-xs md:text-sm hover:text-[#6366F1] transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                mounted && (
                  <li>
                    <Link
                      href="/login"
                      className={`flex items-center text-sm gap-2 transition-colors ${
                        pathname === "/login"
                          ? "text-[#6366F1]"
                          : "hover:text-[#6366F1]"
                      }`}
                    >
                      Admin
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Web Development", link: "/services/web-development" },
                {
                  name: "Graphic Designing",
                  link: "/services/affordable-graphic-design-services",
                },
                {
                  name: "Mobile App Development",
                  link: "/services/mobile-app-development-company",
                },
                {
                  name: "DevOps Services & Optimization",
                  link: "/services/devops",
                },
                {
                  name: "UI/UX Designing",
                  link: "/services/ui-ux-design-agency",
                },
                {
                  name: "Software Maintenance",
                  link: "/services/software-maintenance-services",
                },
                {
                  name: "SEO & Content Writing",
                  link: "/services/seo-services-for-small-business",
                },
                {
                  name: "Project Management",
                  link: "/services/project-management",
                },
                { name: "QA Testing", link: "/services/web-qa-tester" },
                {
                  name: "Digital Marketing",
                  link: "/services/digital-marketing-for-software-companies",
                },
                {
                  name: "SaaS MVP Development",
                  link: "/services/saas-mvp-development",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.link}
                    className={` text-base ${ 
                      pathname === service.link
                        ? "text-[#6366F1]"
                        : "hover:text-[#6366F1]"
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className=" flex items-center gap-2 text-base">
                <div className="iconContainer bg-indigo-600">
                  <AiOutlineMail size={20} className="text-white" />
                </div>
                <Link
                  href="mailto:contact@techbeside.dev"
                  className="hover:underline"
                >
                  contact@techbeside.dev
                </Link>
              </div>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/923119265290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base hover:underline"
              >
                <div className="iconContainer bg-green-600">
                  <FaWhatsapp size={20} className="text-white" />
                </div>
                <span>+92 311 9265290</span>
              </Link>

              {/* Phone Call (Mobile) */}
              <div className="md:hidden flex items-center gap-3 text-base">
                <div className="iconContainer bg-indigo-600">
                  <PhoneCall size={20} className="text-white" />
                </div>
                <a href="tel:+13213646803" className="hover:underline">
                  +1(321)364-6803
                </a>
              </div>

              {/* Phone Call (Desktop) */}
              <div className="hidden md:flex items-center gap-3 text-base">
                <div className="iconContainer bg-indigo-600">
                  <PhoneCall size={20} className="text-white" />
                </div>
                <a href="tel:+13213646803" className="hover:underline">
                  +1(321)364-6803
                </a>
              </div>

              {/* Appointment Section */}
              <div>
                <AppointmentSection />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700  flex flex-col md:flex-row items-center md:p-0 p-4 justify-around px-10 ">
          <div className="flex gap-5">
            {[
              { href: "/terms-conditions", label: "Terms & Conditions" },
              { href: "/privacy-policy", label: "Privacy Policy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base cursor-pointer md:mt-3 transition-colors ${
                  pathname === link.href
                    ? "text-indigo-600 "
                    : "text-gray-400 hover:text-indigo-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-base text-gray-400 mt-3 ">
            © 2025 <span className="text-[#6366F1]">TechBeside</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
