"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaDocker, FaAws,  FaBrain, FaCloud,  FaEthereum,FaMicrosoft, FaReact, FaNode, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaPhp, FaLaravel, FaWordpress, FaBootstrap, FaSass, FaApple, FaAndroid
} from "react-icons/fa";
import {
  SiKotlin, SiSwift, SiFlutter,  SiTensorflow, SiPytorch, SiOpenai, SiHuggingface,  SiGooglecloud,  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiKubernetes, SiSolidity, SiRust, SiCsharp, SiPhp,  SiGo,   SiSvelte, SiAngular, SiTailwindcss, SiGraphql,  SiJquery, SiTypescript, SiWebpack, SiPug, SiGatsby, SiAstro, SiEleventy, SiExpress, SiFastapi, SiDjango, SiRubyonrails, SiFlask, SiNestjs,  SiStrapi, SiSanity, SiPrisma, SiNextdotjs, SiVuedotjs, SiIonic,   SiDart, SiFigma,
  SiAdobe, SiFramer,  SiRedux, SiExpo, SiRealm, SiSupabase, SiFastlane, 
} from "react-icons/si";

type TechnologyCategory = { id: string; name: string; isActive?: boolean };
type Technology = { name: string; icon: JSX.Element; category: string };

const categories: TechnologyCategory[] = [
  { id: "mobile-apps", name: "Mobile Apps", isActive: true },
  { id: "database", name: "Databases" },
  { id: "web-platforms", name: "Web Platforms" },
  { id: "cloud-devops", name: "Cloud & DevOps" },
  { id: "backend", name: "Backend Technologies" },
  { id: "ai-ml", name: "AI & Machine Learning" },
  { id: "blockchain", name: "Blockchain Technologies" },
];

const technologies: Record<string, Technology[]> = {
  "mobile-apps": [
    { name: "Swift", icon: <SiSwift className="text-orange-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Flutter", icon: <SiFlutter className="text-blue-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "React Native", icon: <FaReact className="text-blue-400 w-8 h-8" />, category: "mobile-apps" },
    { name: "Xamarin", icon: <FaMicrosoft className="text-blue-700 w-8 h-8" />, category: "mobile-apps" },
    { name: "Ionic", icon: <SiIonic className="text-gray-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Dart", icon: <SiDart className="text-blue-400 w-8 h-8" />, category: "mobile-apps" },
    { name: "Objective-C", icon: <FaApple className="text-gray-700 w-8 h-8" />, category: "mobile-apps" },
    { name: "SwiftUI", icon: <SiSwift className="text-orange-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Jetpack Compose", icon: <SiKotlin className="text-purple-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Android Native", icon: <FaAndroid className="text-green-600 w-8 h-8" />, category: "mobile-apps" },
    { name: "Expo", icon: <SiExpo className="text-black w-8 h-8" />, category: "mobile-apps" },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Redux", icon: <SiRedux className="text-purple-600 w-8 h-8" />, category: "mobile-apps" },
    { name: "Realm DB", icon: <SiRealm className="text-green-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Supabase", icon: <SiSupabase className="text-green-400 w-8 h-8" />, category: "mobile-apps" },
    { name: "Fastlane", icon: <SiFastlane className="text-red-600 w-8 h-8" />, category: "mobile-apps" },
    { name: "Figma", icon: <SiFigma className="text-pink-400 w-8 h-8" />, category: "mobile-apps" },
    { name: "Adobe XD", icon: <SiAdobe className="text-red-500 w-8 h-8" />, category: "mobile-apps" },
    { name: "Framer", icon: <SiFramer className="text-blue-600 w-8 h-8" />, category: "mobile-apps" },
  ],

  "web-platforms": [
    // 🌐 Frontend Frameworks & Libraries
    { name: "React", icon: <FaReact className="text-blue-400 w-8 h-8" />, category: "web-platforms" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black w-8 h-8" />, category: "web-platforms" },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Svelte", icon: <SiSvelte className="text-orange-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Angular", icon: <SiAngular className="text-red-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Gatsby", icon: <SiGatsby className="text-purple-600 w-8 h-8" />, category: "web-platforms" },
    { name: "Astro", icon: <SiAstro className="text-yellow-400 w-8 h-8" />, category: "web-platforms" },
    { name: "Eleventy", icon: <SiEleventy className="text-gray-600 w-8 h-8" />, category: "web-platforms" },

    // 🎨 UI Frameworks
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 w-8 h-8" />, category: "web-platforms" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 w-8 h-8" />, category: "web-platforms" },
    { name: "Sass", icon: <FaSass className="text-pink-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Pug (Jade)", icon: <SiPug className="text-green-600 w-8 h-8" />, category: "web-platforms" },

    // ⚡ State Management & APIs
    { name: "Redux", icon: <SiRedux className="text-purple-600 w-8 h-8" />, category: "web-platforms" },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 w-8 h-8" />, category: "web-platforms" },

    // ⚙️ Web Backend Technologies
    { name: "Node.js", icon: <FaNode className="text-green-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 w-8 h-8" />, category: "web-platforms" },
    { name: "FastAPI", icon: <SiFastapi className="text-blue-600 w-8 h-8" />, category: "web-platforms" },
    { name: "Django", icon: <SiDjango className="text-green-700 w-8 h-8" />, category: "web-platforms" },
    { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-400 w-8 h-8" />, category: "web-platforms" },
    { name: "Flask", icon: <SiFlask className="text-gray-500 w-8 h-8" />, category: "web-platforms" },
    { name: "PHP", icon: <FaPhp className="text-indigo-600 w-8 h-8" />, category: "web-platforms" },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 w-8 h-8" />, category: "web-platforms" },
    { name: "WordPress", icon: <FaWordpress className="text-blue-600 w-8 h-8" />, category: "web-platforms" },

    // 🛠️ Headless CMS
    { name: "Strapi", icon: <SiStrapi className="text-purple-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Sanity", icon: <SiSanity className="text-red-500 w-8 h-8" />, category: "web-platforms" },

    // ⚡ Build Tools
    { name: "Webpack", icon: <SiWebpack className="text-blue-500 w-8 h-8" />, category: "web-platforms" },
    { name: "Vite", icon: <SiVuedotjs className="text-blue-600 w-8 h-8" />, category: "web-platforms" },
    { name: "Parcel", icon: <SiVuedotjs className="text-yellow-600 w-8 h-8" />, category: "web-platforms" },

    // 🏆 Programming Languages
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-8 h-8" />, category: "web-platforms" },
    { name: "CSS3", icon: <FaCss3 className="text-blue-600 w-8 h-8" />, category: "web-platforms" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-8 h-8" />, category: "web-platforms" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-8 h-8" />, category: "web-platforms" },
    { name: "jQuery", icon: <SiJquery className="text-blue-700 w-8 h-8" />, category: "web-platforms" },

    // ⚡ Backend Frameworks
    { name: "NestJS", icon: <SiNestjs className="text-red-600 w-8 h-8" />, category: "web-platforms" },
    { name: "Prisma ORM", icon: <SiPrisma className="text-blue-500 w-8 h-8" />, category: "web-platforms" },
  ],

  "backend": [
    { name: "Python", icon: <FaPython className="text-yellow-400 w-8 h-8" />, category: "backend" },
    { name: "Java", icon: <FaJava className="text-red-600 w-8 h-8" />, category: "backend" },
    { name: "PHP", icon: <SiPhp className="text-indigo-500 w-8 h-8" />, category: "backend" },
    { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-400 w-8 h-8" />, category: "backend" },
    { name: "Go", icon: <SiGo className="text-blue-500 w-8 h-8" />, category: "backend" },
    { name: "C#", icon: <SiCsharp className="text-blue-700 w-8 h-8" />, category: "backend" },

    { name: "Node.js", icon: <FaNode className="text-green-500 w-8 h-8" />, category: "backend" },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 w-8 h-8" />, category: "backend" },
    { name: "FastAPI", icon: <SiFastapi className="text-blue-600 w-8 h-8" />, category: "backend" },
    { name: "Django", icon: <SiDjango className="text-green-700 w-8 h-8" />, category: "backend" },
    { name: "Flask", icon: <SiFlask className="text-gray-500 w-8 h-8" />, category: "backend" },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 w-8 h-8" />, category: "backend" },
    { name: "WordPress", icon: <FaWordpress className="text-blue-600 w-8 h-8" />, category: "backend" },
  ],

  "database": [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-8 h-8" />, category: "database" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 w-8 h-8" />, category: "database" },
    { name: "MySQL", icon: <SiMysql className="text-gray-600 w-8 h-8" />, category: "database" },
    { name: "Redis", icon: <SiRedis className="text-red-600 w-8 h-8" />, category: "database" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-8 h-8" />, category: "database" },
  ],

  "ai-ml": [
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 w-8 h-8" />, category: "ai-ml" },
    { name: "PyTorch", icon: <SiPytorch className="text-red-500 w-8 h-8" />, category: "ai-ml" },
    { name: "GPT-4", icon: <FaBrain className="text-purple-600 w-8 h-8" />, category: "ai-ml" },
    { name: "OpenAI API", icon: <SiOpenai className="text-gray-600 w-8 h-8" />, category: "ai-ml" },
    { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-500 w-8 h-8" />, category: "ai-ml" },
  ],

  "cloud-devops": [
    { name: "AWS", icon: <FaAws className="text-yellow-500 w-8 h-8" />, category: "cloud-devops" },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500 w-8 h-8" />, category: "cloud-devops" },
    { name: "Docker", icon: <FaDocker className="text-blue-500 w-8 h-8" />, category: "cloud-devops" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-gray-500 w-8 h-8" />, category: "cloud-devops" },
  ],

  "blockchain": [
    { name: "Ethereum", icon: <FaEthereum className="text-gray-700 w-8 h-8" />, category: "blockchain" },
    { name: "Solana", icon: <SiSolidity className="text-green-500 w-8 h-8" />, category: "blockchain" },
    { name: "Hyperledger", icon: <FaCloud className="text-blue-500 w-8 h-8" />, category: "blockchain" },
    { name: "Rust", icon: <SiRust className="text-red-600 w-8 h-8" />, category: "blockchain" },
  ],
};


export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("mobile-apps");

  return (
    <section className="relative bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white md:py-20 py-10 px-3 md:px-16">
      <div className="absolute inset-0 bg-black bg-opacity-40 blur-lg"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wide">
          Technologies We Use
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
          Explore our expertise in cutting-edge technologies that power the future of digital innovation.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 text-nowrap",
                activeCategory === category.id
                  ? "bg-white text-purple-600 shadow-lg transform scale-105"
                  : "bg-purple-600 text-white hover:bg-white hover:text-purple-600 shadow-md"
              )}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {technologies[activeCategory]?.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-3 sm:p-6 text-center  shadow-lg hover:bg-opacity-20"
            >
              <div className="flex items-center justify-center mb-3">
                {/* Clone the icon element to inject accessibility attributes */}
                {tech.icon && typeof tech.icon === 'object' && 'type' in tech.icon 
                  ? React.cloneElement(tech.icon as React.ReactElement, { "aria-hidden": "true", title: tech.name })
                  : tech.icon}
              </div>
              <h3 className="sm:text-lg text-base font-semibold ">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
