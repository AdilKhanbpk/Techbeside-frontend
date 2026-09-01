"use client";
import React from "react";
import Image from "next/image";
// import backgroundImage from "../../../public/assets/aboutpage/backgroundImage.webp";
import backgroundImage from "../../../public/assets/homepage/homeheroimage.webp";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

const scrollToContact = (event: React.MouseEvent) => {
  event.preventDefault(); // Stop default anchor behavior
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};


const Herosection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br bg-black min-h-screen flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden text-center">
        {/* Animated Background  */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4a1b6d33_0%,transparent_70%)] animate-pulse-slow" />
          <Image
            src={backgroundImage}
            alt="Background"
            width={1920}
            height={1080}
            priority
            className="opacity-20 w-full h-full object-cover scale-125"
          />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl space-y-6 z-10">
          {/* Animated Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            <span className="block">Launch Your Website</span>
            <span className="block mt-2">in <span className="text-stroke-white">58 Hours</span> ⚡</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl font-medium text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your digital presence with our {" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
              lightning-fast development
            </span>{" "}
            and guaranteed results
          </motion.p>

          {/* Value Propositions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mt-10">
            {["No Upfront Payment", "100% Money Back", "Mobile First", "24/7 Support"].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/40 transition-all text-center"
              >
                <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-300">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 sm:mt-14 space-y-4"
          >
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-all duration-300" />
              <button onClick={scrollToContact} className="relative text-sm sm:text-lg font-bold px-8 sm:px-12 py-3 sm:py-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                <span className="flex items-center gap-2">
                  Start Your Project Now
                  <ArrowDownIcon className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 animate-pulse-slow" />
                </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 opacity-90">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <Image
                      key={i}
                      src={`/assets/homepage/client${i + 1}.jpg`}
                      width={32}
                      height={32}
                      className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white"
                      alt={`Happy client ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-400">
                  190+ Happy Clients
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 sm:bottom-20 left-0 right-0 flex justify-center space-x-6 sm:space-x-8 opacity-35 text-xs sm:text-base">
          {["Next.js", "React", "Tailwind", "TypeScript", "Node.js", "Express.js", "MongoDB", "Angular"].map((tech, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="font-bold text-gray-400"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Herosection;