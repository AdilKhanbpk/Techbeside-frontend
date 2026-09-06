"use client";
import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { FaMapMarkedAlt, FaPaintBrush, FaCode, FaBug, FaRocket, FaUsers } from "react-icons/fa";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

const steps = [
  {
    id: "01",
    title: "Plan the roadmap",
    description:
      "We agree on the feature list for the first release and the ones after it, along with the timeline and scope for each.",
    icon: FaMapMarkedAlt,
  },
  {
    id: "02",
    title: "Design the interface",
    description:
      "Every screen earns its place — no clutter, just the details that lead people to the action they came for.",
    icon: FaPaintBrush,
  },
  {
    id: "03",
    title: "Build the app",
    description:
      "Builds ship every 2–3 weeks for your feedback and approval, so there are no surprises at the end.",
    icon: FaCode,
  },
  {
    id: "04",
    title: "Run tests",
    description:
      "Automated tests cut QA time by 80%, and manual review catches what scripts alone would miss.",
    icon: FaBug,
  },
  {
    id: "05",
    title: "Launch the solution",
    description:
      "We handle the cutover so your audience moves to the new app without noticing the switch.",
    icon: FaRocket,
  },
  {
    id: "06",
    title: "Support or move in-house",
    description:
      "Keep us on for ongoing support, or we hand the project cleanly to your own team.",
    icon: FaUsers,
  },
];

const WorkProcess = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span className="text-sm text-gray-500">Our process</span>
          </div>
          <h2 className={`${display.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900`}>
            How we work on your project
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md p-8 transition-all"
              >
                <span
                  aria-hidden="true"
                  className={`${display.className} pointer-events-none select-none absolute -top-4 right-4 text-8xl font-bold text-gray-50 group-hover:text-indigo-50 transition-colors`}
                >
                  {step.id}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-md bg-indigo-50 flex items-center justify-center mb-6">
                    <Icon className="text-indigo-600 text-2xl" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-mono text-indigo-600">{step.id}</span>
                    <h3 className={`${display.className} text-lg font-semibold text-gray-900`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess; 