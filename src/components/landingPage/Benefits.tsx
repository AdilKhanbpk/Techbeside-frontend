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
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: FaBolt,
    title: "Lightning-fast execution",
    description: "What typically takes months, we accomplish in a fraction of the time with AI-driven automation.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: FaLightbulb,
    title: "Future-proof by design",
    description: "We build for where the industry is going, not just where it is today.",
    gradient: "from-sky-400 to-blue-500",
  },
  {
    icon: FaChartLine,
    title: "High value, low cost",
    description: "AI-powered efficiency means better software without the traditional price tag.",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: FaClock,
    title: "Time-saving & scalable",
    description: "Fewer unnecessary cycles, faster deployment, businesses that scale without delay.",
    gradient: "from-fuchsia-400 to-pink-500",
  },
  {
    icon: FaCogs,
    title: "AI-enhanced customization",
    description: "Hyper-personalized solutions built around your exact needs — never a one-size-fits-all template.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: FaRocket,
    title: "Redefining the industry",
    description: "AI-driven innovation that makes software development smarter, faster, and more cost-effective.",
    gradient: "from-rose-400 to-red-500",
  },
];

const Benefits = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-8 overflow-hidden">
      {/* soft decorative glow — not a full background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-indigo-100 rounded-full blur-[120px] opacity-60" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-5">
            <FaRocket size={12} /> Why teams choose us
          </span>
          <h2 className={`${display.className} text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900`}>
            What makes us unique
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Seven reasons our clients keep coming back for more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] transition-shadow p-8"
              >
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-90 blur-md group-hover:blur-lg group-hover:opacity-100 transition-all`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={26} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2.5">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>

                <div
                  className={`absolute bottom-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;