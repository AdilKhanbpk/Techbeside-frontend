"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

const stats = [
  { value: "190", suffix: "+", label: "Happy clients" },
  { value: "210", suffix: "", label: "Projects completed" },
  { value: "50", suffix: "", label: "Products launched" },
];

const StatsSection = () => {
  return (
    <section className="bg-[#0A0E17] py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-[#F3F5F9]`}>
            Our achievements
          </h2>
          <p className="text-[#8993A8] max-w-sm">
            Measured in outcomes, not promises — here&apos;s where the work has landed so far.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-y border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 px-2 sm:px-8 first:pl-0"
            >
              <div className="flex items-baseline gap-1">
                <span className={`${display.className} text-5xl font-bold text-[#F3F5F9]`}>{stat.value}</span>
                <span className="text-2xl font-semibold text-[#6366F1]">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-[#8993A8]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;