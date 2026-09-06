"use client";
import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/assets/homepage/homeheroimage.webp";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

const scrollToContact = (event: React.MouseEvent) => {
  event.preventDefault();
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const valueProps = ["No upfront payment", "100% money back", "Mobile first", "24/7 support"];
const stack = ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "Tailwind", "Express.js", "Angular"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Herosection = () => {
  return (
    <section className="relative bg-[#0A0E17] min-h-screen flex items-center px-6 md:px-10 pt-28 pb-16 overflow-hidden">
      {/* single quiet backdrop accent, not a haze over everything */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[36rem] h-[36rem] rounded-full bg-[#6366F1]/10 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center w-full"
      >
        {/* Left: content */}
        <div>
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            <span className="text-sm text-[#8993A8]">Web &amp; app development studio</span>
          </motion.div>

          <motion.h1
            variants={item}
            className={`${display.className} text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] text-[#F3F5F9]`}
          >
            Your website, live
            <br />
            in 58 hours.
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-[#8993A8] max-w-xl leading-relaxed">
            We plan, design, and ship production-ready sites and apps fast —
            without cutting corners on quality or support.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-7 py-3.5 rounded-md transition-colors"
            >
              Start your project
            </button>
            <a
              href="#services"
              className="text-[#F3F5F9] font-medium underline decoration-[#6366F1]/50 underline-offset-4 hover:decoration-[#6366F1] transition-colors"
            >
              See what we build
            </a>
          </motion.div>

          {/* value props as a quiet divided row, not a card grid */}
          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10"
          >
            {valueProps.map((text, i) => (
              <div
                key={i}
                className={`py-4 pr-4 text-sm text-[#8993A8] ${i > 0 ? "sm:border-l border-white/10 sm:pl-4" : ""}`}
              >
                {text}
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(3)].map((_, i) => (
                <Image
                  key={i}
                  src={`/assets/homepage/client${i + 1}.jpg`}
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full border-2 border-[#0A0E17]"
                  alt={`Happy client ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-sm text-[#8993A8]">Trusted by 190+ clients worldwide</span>
          </motion.div>
        </div>

        {/* Right: framed visual, code-corner motif ties to the subject matter */}
        <motion.div variants={item} className="relative">
          <div className="relative rounded-lg overflow-hidden border border-white/10">
            <Image
              src={backgroundImage}
              alt="TechBeside project preview"
              width={900}
              height={720}
              priority
              className="w-full h-[420px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent" />
          </div>
          <span className="absolute -top-3 -left-3 text-[#6366F1] text-2xl font-mono select-none">{"<"}</span>
          <span className="absolute -bottom-3 -right-3 text-[#6366F1] text-2xl font-mono select-none">{"/>"}</span>
        </motion.div>
      </motion.div>

      {/* quiet auto-scrolling stack marquee instead of bouncing tags */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap opacity-40 text-sm text-[#8993A8]">
          {[...stack, ...stack].map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Herosection;