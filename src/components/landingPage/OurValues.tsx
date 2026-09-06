"use client";
import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { FaHeart, FaUserCheck, FaLightbulb, FaRocket, FaBook, FaUsers } from "react-icons/fa";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

const values = [
  {
    title: "Cultivate compassion",
    description:
      "Honesty, dependability, empathy, and respect toward others — that's what goodness looks like to us.",
    icon: FaHeart,
  },
  {
    title: "Keep it real",
    description:
      "We thrive by being authentic, engaged, humble, and direct about what we can and can't do.",
    icon: FaUserCheck,
  },
  {
    title: "Think innovatively",
    description:
      "Curiosity, creativity, and a willingness to take risks on the way to solving hard problems.",
    icon: FaLightbulb,
  },
  {
    title: "Empower & grow",
    description:
      "At TechBeside, your skills and experience keep expanding — personally and professionally.",
    icon: FaRocket,
  },
  {
    title: "Share knowledge",
    description:
      "We succeed by sharing insight and expertise with each other and with the people we work for.",
    icon: FaBook,
  },
  {
    title: "Unified teamwork",
    description:
      "One team, working diligently and intelligently to serve our clients and each other.",
    icon: FaUsers,
  },
];

const OurValues: React.FC = () => {
  const [left, right] = [values.slice(0, 3), values.slice(3)];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span className="text-sm text-gray-500">What we stand for</span>
          </div>
          <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-gray-900 leading-tight`}>
            Our core values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12">
          {[left, right].map((column, colIndex) => (
            <div key={colIndex} className="divide-y divide-gray-200">
              {column.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`py-7 flex gap-5 ${index === 0 ? "pt-0" : ""}`}
                  >
                    <Icon className="text-indigo-600 text-xl mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-gray-500 mt-1.5 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;