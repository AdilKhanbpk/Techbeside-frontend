"use client";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaTrophy } from "react-icons/fa";

const stats = [
  { icon: FaUsers, value: "190+", label: "Happy Clients", color: "bg-[#091E36]" },
  { icon: FaProjectDiagram, value: "210", label: "Projects Completed", color: "bg-[#091E36]" },
  { icon: FaTrophy, value: "50", label: "Products Launched", color: "bg-[#091E36]" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#091424] to-[#031220]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Our <span className="text-purple-600">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative p-8 rounded-3xl bg-[#091E36] border border-purple-500 shadow-lg transition-all group hover:scale-105 hover:shadow-purple-800/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4a1b6d20_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${stat.color} backdrop-blur-md shadow-md`}>
                    <stat.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                      <span className="text-xl text-purple-400 mb-1.5">+</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
