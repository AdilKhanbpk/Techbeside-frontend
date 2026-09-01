"use client"; 

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

interface PlatformInfoProps {
  platformData: {
    heading: string;
    subHeading: string;
    description: string;
    youtubeEmbedUrl: string;
  };
}

const PlatformInfoClient: React.FC<PlatformInfoProps> = ({ platformData }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading Section */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center  md:mt-16 mt-9"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
          {platformData.heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          {platformData.subHeading}
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-6 border mt-6 md:gap-10 items-center bg-white rounded-2xl shadow-sm p-6 md:p-12">
        {/* Left section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Transform Your Ideas into Reality
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {platformData.description}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-purple-600">Why Choose TechCreator?</h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li> Lightning-fast development cycles</li>
              <li> AI-powered code optimization</li>
              <li> Innovative solutions at scale</li>
              <li> Cost-effective development</li>
            </ul>
          </div>

          <Link
            href="https://www.linkedin.com/in/saudkhan39"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center md:px-6 md:py-3 px-2 py-2 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200 group"
          >
            Connect on LinkedIn
            <FaLinkedin className="ml-2  group-hover:scale-110 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Right section with lazy-loaded video */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
        >
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          )}
          <iframe
            className="w-full h-full rounded-xl"
            src={platformData.youtubeEmbedUrl}
            title="TechCreator Introduction"
            loading="lazy"
            onLoad={() => setIsVideoLoaded(true)}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlatformInfoClient;
