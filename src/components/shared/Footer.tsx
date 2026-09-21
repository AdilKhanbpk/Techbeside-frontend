// "use client";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faLinkedinIn,
//   faYoutube,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import Footerbg from "../../../public/assets/footerImages/footer_bg_image.svg";
// import { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { FaWhatsapp } from "react-icons/fa";
// import { PhoneCall, ArrowRight } from "lucide-react";
// import axios from "axios";
// import { backend_url } from "@/newLayout";
// import { setUser } from "@/redux/authSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { RootState } from "@/redux/store";
// import { AiOutlineMail } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { Space_Grotesk } from "next/font/google";
// import AppointmentSection from "./AppointmentSection";

// const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

// const socials = [
//   { href: "https://www.facebook.com/techbesideofficial/", icon: faFacebookF, label: "Facebook" },
//   { href: "https://www.linkedin.com/company/techbeside", icon: faLinkedinIn, label: "LinkedIn" },
//   { href: "https://www.youtube.com/@techbeside", icon: faYoutube, label: "YouTube" },
//   { href: "https://www.instagram.com/techbesideofficial/", icon: faInstagram, label: "Instagram" },
// ];

// const quickLinks = ["Home", "About", "Contact", "Blog", "Pricing", "Portfolio", "Career"];

// const services = [
//   { name: "Web Development", link: "/services/web-development" },
//   { name: "Graphic Designing", link: "/services/affordable-graphic-design-services" },
//   { name: "Mobile App Development", link: "/services/mobile-app-development-company" },
//   { name: "DevOps Services & Optimization", link: "/services/devops" },
//   { name: "UI/UX Designing", link: "/services/ui-ux-design-agency" },
//   { name: "Software Maintenance", link: "/services/software-maintenance-services" },
//   { name: "SEO & Content Writing", link: "/services/seo-services-for-small-business" },
//   { name: "Project Management", link: "/services/project-management" },
//   { name: "QA Testing", link: "/services/web-qa-tester" },
//   { name: "Digital Marketing", link: "/services/digital-marketing-for-software-companies" },
//   { name: "SaaS MVP Development", link: "/services/saas-mvp-development" },
// ];

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { user } = useSelector((store: RootState) => store.auth);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const footerBackground = document.querySelector(".footer-bg") as HTMLElement | null;

//     if (footerBackground && "IntersectionObserver" in window) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
//               observer.unobserve(entry.target);
//             }
//           });
//         },
//         { rootMargin: "0px 0px 200px 0px" }
//       );
//       observer.observe(footerBackground);
//       return () => observer.disconnect();
//     } else if (footerBackground) {
//       footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
//     }
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const res = await axios.get(`${backend_url}/api/v1/user/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         router.push("/");
//         localStorage.removeItem("token");
//         toast.success(res.data.message);
//       }
//     } catch (error: any) {
//       toast.error(error?.response?.data?.message || error?.message || "Failed to logout");
//     }
//   };

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Email is required!");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `${backend_url}/api/v1/subscribeuser`,
//         { email },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       if (res.data.success) {
//         toast.success(res.data.message);
//         setEmail("");
//       } else {
//         toast.error(res.data.message || "Subscription failed!");
//       }
//     } catch (error: any) {
//       toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const currentYear = new Date().getFullYear();

//   const isActive = (href: string) => pathname === href;
//   const linkClass = (href: string) =>
//     `text-[15px] transition-colors ${isActive(href) ? "text-[#6366F1]" : "text-gray-400 hover:text-white"}`;

//   return (
//     <footer className="relative bg-[#0A0A0F] text-white overflow-hidden">
//       <div className="absolute inset-0 bg-cover bg-center opacity-10 footer-bg pointer-events-none" />
//       <div className="pointer-events-none absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full bg-[#6366F1]/10 blur-[140px]" />

//       <div className="relative max-w-[90rem] mx-auto px-6 md:px-10 pt-16 pb-8">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.7fr_1.5fr_1fr] gap-12 lg:gap-6 xl:gap-10">
//           {/* Brand + subscribe */}
//           <div>
//             <h2 className={`${display.className} text-2xl font-bold`}>
//               Tech<span className="text-[#6366F1]">Beside</span>
//             </h2>
//             <p className="text-gray-400 mt-3 max-w-xs text-[15px] leading-relaxed">
//               Custom web, mobile app, and AI agent development for businesses that want to move fast.
//             </p>

//             <div className="flex gap-3 mt-6">
//               {socials.map(({ href, icon, label }) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#6366F1] transition-colors"
//                 >
//                   <FontAwesomeIcon icon={icon} className="text-base" />
//                 </Link>
//               ))}
//             </div>

//             <div className="mt-8">
//               <h3 className="font-semibold">Subscribe to our newsletter</h3>
//               <p className="text-gray-400 mt-1.5 text-sm">Stay updated with the latest in tech.</p>
//               <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   disabled={loading}
//                   required
//                   className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6366F1] transition-colors"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.96 }}
//                   type="submit"
//                   disabled={loading}
//                   aria-label="Subscribe"
//                   className="shrink-0 bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-md px-4 py-2.5 transition-colors disabled:opacity-60"
//                 >
//                   {loading ? "..." : <ArrowRight size={18} />}
//                 </motion.button>
//               </form>
//             </div>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="font-semibold mb-5">Links</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((item) => {
//                 const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//                 return (
//                   <li key={item}>
//                     <Link href={href} className={linkClass(href)}>
//                       {item}
//                     </Link>
//                   </li>
//                 );
//               })}

//               {user ? (
//                 <>
//                   {user.role === "admin" && (
//                     <li>
//                       <Link href="/admin" className={linkClass("/admin")}>
//                         Admin
//                       </Link>
//                     </li>
//                   )}
//                   <li>
//                     <button onClick={handleLogout} className="text-[15px] text-gray-400 hover:text-white transition-colors">
//                       Logout
//                     </button>
//                   </li>
//                 </>
//               ) : (
//                 mounted && (
//                   <li>
//                     <Link href="/login" className={linkClass("/login")}>
//                       Admin
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-semibold mb-5">Services</h3>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
//               {services.map((service) => (
//                 <li key={service.name}>
//                   <Link href={service.link} className={linkClass(service.link)}>
//                     {service.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-semibold mb-5">Contact</h3>
//             <div className="space-y-4">
//               <Link href="mailto:contact@techbeside.dev" className="flex items-center gap-3 text-[15px] text-gray-400 hover:text-white transition-colors">
//                 <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6366F1]/15 text-[#6366F1] shrink-0">
//                   <AiOutlineMail size={17} />
//                 </span>
//                 contact@techbeside.dev
//               </Link>

//               <Link
//                 href="https://wa.me/923178261618"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-[15px] text-gray-400 hover:text-white transition-colors"
//               >
//                 <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500/15 text-green-400 shrink-0">
//                   <FaWhatsapp size={17} />
//                 </span>
//                 +92 317 8261618
//               </Link>

//               <a href="tel:+13213646803" className="flex items-center gap-3 text-[15px] text-gray-400 hover:text-white transition-colors">
//                 <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6366F1]/15 text-[#6366F1] shrink-0">
//                   <PhoneCall size={17} />
//                 </span>
//                 +923178261618
//               </a>

//               <div className="pt-2">
//                 <AppointmentSection />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-gray-500 order-2 md:order-1">
//             © {currentYear} <span className="text-[#6366F1]">TechBeside</span>. All rights reserved.
//           </p>
//           <div className="flex gap-6 order-1 md:order-2">
//             {[
//               { href: "/terms-conditions", label: "Terms & Conditions" },
//               { href: "/privacy-policy", label: "Privacy Policy" },
//             ].map((link) => (
//               <Link key={link.href} href={link.href} className={`text-sm ${linkClass(link.href)}`}>
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import Link from "next/link";
import TechBesideLogo from "../../../public/logo.png";

const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-4 h-4"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.73 3 4.65S3.65 6.3 4.75 6.3s1.75-.73 1.75-1.65S5.85 3 4.75 3ZM21 13.85c0-3.76-2-5.52-4.67-5.52-2.14 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.32V21H21v-7.15Z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.5h1.73L8.28 4.38H6.43L17.8 19.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#0b0b1f] text-white">

      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[180px] bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="relative w-full px-5 md:px-10 lg:px-16">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">

          {/* Brand */}
          <div className="text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start">
              <Link href="/" className="inline-block">
                <Image
                  src={TechBesideLogo}
                  alt="TechBeside logo"
                  width={160}
                  height={36}
                  className="w-36 sm:w-40 h-auto"
                />
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-3 max-w-sm">
              Building modern digital experiences and solutions that
              make businesses move forward.
            </p>
          </div>

          {/* Social Area */}
          <div className="flex flex-col items-center md:items-end gap-3">

            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
              Follow us
            </span>

            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-gray-300 hover:border-indigo-500/40 hover:bg-indigo-600/10 hover:text-white transition-all duration-200"
                >
                  <span className="group-hover:text-indigo-400 transition-colors">
                    {social.icon}
                  </span>

                  <span className="text-xs font-medium">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.08] py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TechBeside. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/terms-conditions"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
