"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import AppointmentSection from "../shared/AppointmentSection";

const socials = [
  { href: "https://www.facebook.com/TechBesidefb/", icon: faFacebookF, label: "Facebook" },
  { href: "https://www.linkedin.com/company/TechBeside", icon: faLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@TechBeside9512", icon: faYoutube, label: "YouTube" },
  { href: "https://www.instagram.com/TechBesideco/", icon: faInstagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A0E17] text-white px-6 md:px-14 py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        <div className="flex justify-center gap-3">
          {socials.map(({ href, icon, label }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-md border border-white/10 text-[#8993A8] hover:text-white hover:border-[#6366F1] transition-colors"
            >
              <FontAwesomeIcon icon={icon} className="text-lg" />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#8993A8]">
          <Link href="mailto:contact@techbeside.dev" className="flex items-center gap-2.5 hover:text-white transition-colors">
            <AiOutlineMail size={20} />
            <span>contact@techbeside.dev</span>
          </Link>

          <Link
            href="https://wa.me/923119265290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-white transition-colors"
          >
            <FaWhatsapp size={20} />
            <span>+92 317 8261618</span>
          </Link>

          <a href="tel:+13213646803" className="flex items-center gap-2.5 hover:text-white transition-colors">
            <PhoneCall size={20} />
            <span>+92 317 8261618</span>
          </a>
        </div>

        <AppointmentSection />

        <p className="text-sm text-[#8993A8] border-t border-white/10 pt-6 w-full text-center">
          © 2025 <span className="text-[#6366F1] font-semibold">TechBeside</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;