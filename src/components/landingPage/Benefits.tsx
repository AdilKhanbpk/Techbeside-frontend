"use client";
import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { FaBolt, FaBrain, FaChartLine, FaClock, FaCogs, FaRocket, FaLightbulb } from "react-icons/fa";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

const features = [
  {
    icon: FaBrain,
    title: "AI-first development",
    description:
      "A fully AI-powered team — using AI to automate development, optimize workflows, and ship faster than traditional agencies.",
  },
  {
    icon: FaBolt,
    title: "Lightning-fast execution",
    description: "What typically takes months, we accomplish in a fraction of the time with AI-driven automation.",
  },
  {
    icon: FaLightbulb,
    title: "Future-proof by design",
    description: "We build for where the industry is going, not just where it is today.",
  },
  {
    icon: FaChartLine,
    title: "High value, low cost",
    description: "AI-powered efficiency means better software without the traditional price tag.",
  },
  {
    icon: FaClock,
    title: "Time-saving & scalable",
    description: "Fewer unnecessary cycles, faster deployment, businesses that scale without delay.",
  },
  {
    icon: FaCogs,
    title: "AI-enhanced customization",
    description: "Hyper-personalized solutions built around your exact needs — never a one-size-fits-all template.",
  },
  {
    icon: FaRocket,
    title: "Redefining the industry",
    description: "AI-driven innovation that makes software development smarter, faster, and more cost-effective.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span className="text-sm text-gray-500">Why teams choose us</span>
          </div>
          <h2 className={`${display.className} text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-gray-900 leading-[1.15]`}>
            What makes us unique
          </h2>
          <p className="text-gray-500 mt-5 text-lg leading-relaxed max-w-sm">
            Seven reasons clients stay with us long after the first project ships.
          </p>
        </div>

        {/* Feature list */}
        <div className="border-t border-gray-200">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group relative border-b border-gray-200 py-8 pl-6 -ml-6 transition-colors hover:bg-gray-50/80"
              >
                <span className="absolute left-0 top-8 bottom-8 w-[2px] bg-indigo-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                <div className="flex items-start gap-5">
                  <span className={`${display.className} text-sm text-gray-300 group-hover:text-indigo-500 pt-1 w-6 shrink-0 transition-colors`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon className="text-indigo-600 text-xl mt-1 shrink-0" />

                  <div className="flex-1 pr-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-500 mt-1.5 leading-relaxed max-w-xl">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;