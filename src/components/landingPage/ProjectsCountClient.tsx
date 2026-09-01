"use client"; 

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";

interface StatItemProps {
  value: number;
  label: string;
  description: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
        <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
          {inView ? (
            <CountUp start={10} end={value} duration={2.5} separator="," suffix="+" useEasing={true} />
          ) : (
            "10+"
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-2">
          {label}
        </h3>
        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectsCountClient: React.FC<{ stats: StatItemProps[] }> = ({ stats }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="relative  min-h-[600px] md:min-h-[500px] overflow-hidden">
  
    {/* ✅ Background Image & Gradient Overlays (Merged) */}
    <div className="absolute inset-0 bg-gray-900">
      <Image
        src="/assets/homepage/our-people-our-success.webp"
        alt="Our Success Story"
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        style={{ objectFit: "cover" }}
        className={`transition-opacity duration-700 ${isImageLoaded ? "opacity-100" : "opacity-0"} transform scale-105 hover:scale-100 transition-transform duration-[2s]`}
        onLoad={() => setIsImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-transparent" />
    </div>
  
    {/* ✅ Content */}
    <div className="relative z-10 container mx-auto px-4 py-10 md:py-24 text-center">
      
      {/* ✅ Heading Section */}
      <motion.h2 
        initial={{ y: -20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={{ once: true }} 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        Empowered Teams, <span className="text-purple-400">Proven Success</span>
      </motion.h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-16">
        Our global impact and dedication to excellence have helped businesses achieve their digital transformation goals.
      </p>
  
      {/* ✅ Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
  
    </div>
  
  </section>
  
  );
};

export default ProjectsCountClient;
