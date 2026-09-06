"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

interface Service {
  id: number;
  title: string;
  des: string;
  image: string;
  link: string;
  altText: string;
}

const servicesArr: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    des: "We build websites that help your business stand out in the digital world — through implementation, team extension, or research.",
    image: "/assets/homepage/webdesignicon.webp",
    link: "/services/web-development",
    altText: "Web design services",
  },
  {
    id: 2,
    title: "Mobile App Development",
    des: "Using an agile development methodology, we build Android and iOS apps for businesses of every scale.",
    image: "/assets/homepage/appdevicon.webp",
    link: "/services/app-development",
    altText: "Mobile app development",
  },
  {
    id: 3,
    title: "DevOps",
    des: "We bridge development and operations with CI/CD pipelines and real-time monitoring for faster, more reliable releases.",
    image: "/assets/homepage/devops.webp",
    link: "/services/devops",
    altText: "DevOps services",
  },
  {
    id: 4,
    title: "Software Testing Service",
    des: "Comprehensive bug detection, security testing, and performance evaluation before your software reaches users.",
    image: "/assets/homepage/webdevicon.webp",
    link: "/services/qa-testing",
    altText: "Software testing",
  },
  {
    id: 5,
    title: "UI/UX Designing",
    des: "Our designers follow proven systems and rigorous review processes to create interfaces your brand actually needs.",
    image: "/assets/homepage/uiuxdesign.webp",
    link: "/services/ui-ux-design",
    altText: "UI/UX design",
  },
  {
    id: 6,
    title: "Graphic Designing",
    des: "A global team of creatives matched to your project, with quality control built into every deliverable.",
    image: "/assets/homepage/softwaremaintanence.webp",
    link: "/services/graphic-designing",
    altText: "Graphic design",
  },
  {
    id: 7,
    title: "Project Management",
    des: "Clear coordination and accountability — we've managed projects across many businesses and can handle yours.",
    image: "/assets/homepage/projectmanagement.webp",
    link: "/services/project-management",
    altText: "Project management",
  },
  {
    id: 8,
    title: "SEO & Content Writing",
    des: "We build platforms that meet search engine requirements and rank on Google, turning visibility into revenue.",
    image: "/assets/homepage/seo.webp",
    link: "/services/seo-content-writing",
    altText: "SEO services",
  },
  {
    id: 9,
    title: "Software Maintenance",
    des: "Regular updates, proactive bug fixes, and seamless integrations that keep your applications secure and optimized.",
    image: "/assets/homepage/softwaremaintanence.webp",
    link: "/services/software-maintenance",
    altText: "Software maintenance",
  },
  {
    id: 10,
    title: "Digital Marketing",
    des: "Targeted campaigns across Facebook, Instagram, LinkedIn, and Google Ads, backed by data-driven analytics.",
    image: "/assets/homepage/digitalmarketing.webp",
    link: "/services/digital-marketing-for-software-companies",
    altText: "Digital marketing",
  },
];

const ServicesSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);

  const scrollByCard = (dir: 2 | -2) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.clientWidth ?? 120;
    const max = el.scrollWidth - el.clientWidth;

    // Loop past either end instead of stopping.
    if (dir === 2 && el.scrollLeft >= max - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -2 && el.scrollLeft <= 4) {
      el.scrollTo({ left: max, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  // Autoplay: advance one card at a time, looping the last back to the first.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) scrollByCard(1);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <section className="bg-[#0A0E17] py-20 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-[#F3F5F9]`}>
              Our premium services
            </h2>
            <p className="text-[#8993A8] mt-3 max-w-md">
              Ten disciplines, one team — drag or use the arrows to browse what we do.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                scrollByCard(-1);
                pause();
                setTimeout(resume, 4000);
              }}
              aria-label="Scroll left"
              className="w-11 h-11 flex items-center justify-center rounded-md border border-white/10 text-[#D5D9E2] hover:text-white hover:border-[#6366F1] transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => {
                scrollByCard(1);
                pause();
                setTimeout(resume, 4000);
              }}
              aria-label="Scroll right"
              className="w-11 h-11 flex items-center justify-center rounded-md border border-white/10 text-[#D5D9E2] hover:text-white hover:border-[#6366F1] transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* scroll-snap track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {servicesArr.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.4 }}
              className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[23%]"
            >
              <Link
                href={item.link}
                className="group block h-full bg-white/[0.03] border border-white/10 border-t-2 border-t-transparent hover:border-t-[#6366F1] rounded-md p-6 transition-colors"
              >
                <div className="w-14 h-14 rounded-md bg-[#6366F1]/10 flex items-center justify-center mb-6">
                  <Image src={item.image} alt={item.altText} width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-[#F3F5F9] mb-2 flex items-center gap-1.5">
                  {item.title}
                  <ArrowUpRight
                    size={16}
                    className="text-[#6366F1] opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                  />
                </h3>
                <p className="text-sm text-[#8993A8] leading-relaxed">{item.des}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* progress line instead of dot pagination */}
        <div className="mt-8 h-[2px] bg-white/10 rounded-full overflow-hidden max-w-xs mx-auto">
          <div
            className="h-full bg-[#6366F1] rounded-full transition-[width] duration-150"
            style={{ width: `${Math.max(progress * 100, 8)}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;