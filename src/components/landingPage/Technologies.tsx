"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import {
  FaDocker,
  FaAws,
  FaBrain,
  FaCloud,
  FaReact,
  FaNode,
  FaPython,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaBootstrap,
  FaKey,
  FaCode,
  FaDatabase,
  FaLink,
  FaBolt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiHuggingface,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiKubernetes,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiJquery,
  SiTailwindcss,
  SiGraphql,
  SiRedux,
  SiExpo,
  SiVite,
  SiPostman,
  SiVercel,
  SiMicrosoftazure,
  SiJsonwebtokens,
} from "react-icons/si";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

type TechnologyCategory = { id: string; name: string };
type Technology = { name: string; icon: JSX.Element; category: string };

const categories: TechnologyCategory[] = [
  { id: "web-platforms", name: "Web Platforms" },
  { id: "mobile-apps", name: "Mobile Apps" },
  { id: "backend", name: "Backend Technologies" },
  { id: "database", name: "Databases" },
  { id: "ai-ml", name: "AI & Machine Learning" },
  { id: "cloud-devops", name: "Cloud & DevOps" },
];

const technologies: Record<string, Technology[]> = {
  "mobile-apps": [
    { name: "React Native", icon: <FaReact className="w-7 h-7 text-blue-400" />, category: "mobile-apps" },
    { name: "Expo", icon: <SiExpo className="w-7 h-7 text-gray-300" />, category: "mobile-apps" },
    { name: "TypeScript", icon: <SiTypescript className="w-7 h-7 text-blue-400" />, category: "mobile-apps" },
    { name: "Redux", icon: <SiRedux className="w-7 h-7 text-indigo-400" />, category: "mobile-apps" },
    { name: "Context API", icon: <FaCode className="w-7 h-7 text-blue-400" />, category: "mobile-apps" },
    { name: "Firebase", icon: <SiFirebase className="w-7 h-7 text-yellow-400" />, category: "mobile-apps" },
    { name: "OAuth", icon: <FaKey className="w-7 h-7 text-indigo-400" />, category: "mobile-apps" },
    { name: "Postman", icon: <SiPostman className="w-7 h-7 text-orange-400" />, category: "mobile-apps" },
  ],
  "web-platforms": [
    { name: "React", icon: <FaReact className="w-7 h-7 text-blue-400" />, category: "web-platforms" },
    { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7 text-gray-300" />, category: "web-platforms" },
    { name: "NextAuth", icon: <FaKey className="w-7 h-7 text-indigo-400" />, category: "web-platforms" },
    { name: "Vite", icon: <SiVite className="w-7 h-7 text-purple-400" />, category: "web-platforms" },
    { name: "TypeScript", icon: <SiTypescript className="w-7 h-7 text-blue-400" />, category: "web-platforms" },
    { name: "Redux", icon: <SiRedux className="w-7 h-7 text-indigo-400" />, category: "web-platforms" },
    { name: "Context API", icon: <FaCode className="w-7 h-7 text-blue-400" />, category: "web-platforms" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7 text-blue-400" />, category: "web-platforms" },
    { name: "Bootstrap", icon: <FaBootstrap className="w-7 h-7 text-indigo-400" />, category: "web-platforms" },
    { name: "jQuery", icon: <SiJquery className="w-7 h-7 text-blue-400" />, category: "web-platforms" },
    { name: "HTML5", icon: <FaHtml5 className="w-7 h-7 text-indigo-400" />, category: "web-platforms" },
    { name: "CSS3", icon: <FaCss3 className="w-7 h-7 text-blue-400" />, category: "web-platforms" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNode className="w-7 h-7 text-green-400" />, category: "backend" },
    { name: "Express.js", icon: <SiExpress className="w-7 h-7 text-gray-400" />, category: "backend" },
    { name: "NestJS", icon: <SiNestjs className="w-7 h-7 text-red-400" />, category: "backend" },
    { name: "Python", icon: <FaPython className="w-7 h-7 text-yellow-400" />, category: "backend" },
    { name: "FastAPI", icon: <SiFastapi className="w-7 h-7 text-blue-400" />, category: "backend" },
    { name: "Django", icon: <SiDjango className="w-7 h-7 text-green-500" />, category: "backend" },
    { name: "PHP", icon: <FaPhp className="w-7 h-7 text-indigo-400" />, category: "backend" },
    { name: "OAuth", icon: <FaKey className="w-7 h-7 text-indigo-400" />, category: "backend" },
    { name: "JWT", icon: <SiJsonwebtokens className="w-7 h-7 text-pink-400" />, category: "backend" },
    { name: "GraphQL", icon: <SiGraphql className="w-7 h-7 text-pink-400" />, category: "backend" },
    { name: "REST APIs", icon: <FaCode className="w-7 h-7 text-gray-300" />, category: "backend" },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb className="w-7 h-7 text-green-400" />, category: "database" },
    { name: "SQL", icon: <FaDatabase className="w-7 h-7 text-blue-400" />, category: "database" },
    { name: "NoSQL", icon: <FaDatabase className="w-7 h-7 text-green-400" />, category: "database" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-7 h-7 text-blue-400" />, category: "database" },
    { name: "MySQL", icon: <SiMysql className="w-7 h-7 text-gray-400" />, category: "database" },
    { name: "Redis", icon: <SiRedis className="w-7 h-7 text-red-400" />, category: "database" },
    { name: "Firebase", icon: <SiFirebase className="w-7 h-7 text-yellow-400" />, category: "database" },
  ],
  "ai-ml": [
    { name: "GPT / OpenAI", icon: <SiOpenai className="w-7 h-7 text-gray-300" />, category: "ai-ml" },
    { name: "Anthropic (Claude)", icon: <FaBrain className="w-7 h-7 text-indigo-400" />, category: "ai-ml" },
    { name: "Custom LLM Deployments", icon: <FaServer className="w-7 h-7 text-indigo-400" />, category: "ai-ml" },
    { name: "LangChain", icon: <FaLink className="w-7 h-7 text-green-400" />, category: "ai-ml" },
    { name: "Hugging Face", icon: <SiHuggingface className="w-7 h-7 text-yellow-400" />, category: "ai-ml" },
    { name: "TensorFlow", icon: <SiTensorflow className="w-7 h-7 text-indigo-400" />, category: "ai-ml" },
    { name: "PyTorch", icon: <SiPytorch className="w-7 h-7 text-red-400" />, category: "ai-ml" },
    { name: "n8n", icon: <FaBolt className="w-7 h-7 text-red-400" />, category: "ai-ml" },
  ],
  "cloud-devops": [
    { name: "AWS", icon: <FaAws className="w-7 h-7 text-yellow-400" />, category: "cloud-devops" },
    { name: "Azure", icon: <SiMicrosoftazure className="w-7 h-7 text-blue-400" />, category: "cloud-devops" },
    { name: "Google Cloud", icon: <SiGooglecloud className="w-7 h-7 text-blue-400" />, category: "cloud-devops" },
    { name: "Vercel", icon: <SiVercel className="w-7 h-7 text-gray-300" />, category: "cloud-devops" },
    { name: "Render", icon: <FaCloud className="w-7 h-7 text-blue-400" />, category: "cloud-devops" },
    { name: "Docker", icon: <FaDocker className="w-7 h-7 text-blue-400" />, category: "cloud-devops" },
    { name: "Kubernetes", icon: <SiKubernetes className="w-7 h-7 text-gray-400" />, category: "cloud-devops" },
    { name: "GitHub Actions", icon: <FaGithub className="w-7 h-7 text-gray-300" />, category: "cloud-devops" },
  ],
};

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("mobile-apps");
  const activeName = categories.find((c) => c.id === activeCategory)?.name ?? "";

  return (
    <section className="bg-[#0A0E17] py-20 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            <span className="text-sm text-[#8993A8]">Our stack</span>
          </div>
          <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-[#F3F5F9]`}>
            Technologies we build with
          </h2>
          <p className="mt-4 text-[#8993A8]">
            A deliberately chosen toolkit — proven where it matters, modern where it counts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
          {/* Category sidebar */}
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "shrink-0 text-left px-4 py-3 rounded-md text-sm font-medium transition-colors border-l-2 flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal",
                  activeCategory === category.id
                    ? "bg-white/[0.04] border-[#6366F1] text-white"
                    : "border-transparent text-[#8993A8] hover:text-white hover:bg-white/[0.03]"
                )}
              >
                {category.name}
                <span className="text-xs text-[#8993A8]/70 hidden lg:inline">
                  {technologies[category.id]?.length}
                </span>
              </button>
            ))}
          </div>

          {/* Technology grid */}
          <div className="min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-[#F3F5F9] font-medium">{activeName}</h3>
                  <span className="text-sm text-[#8993A8]">
                    {technologies[activeCategory]?.length} tools
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                  {technologies[activeCategory]?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center gap-3 bg-white/[0.03] border border-white/10 hover:border-[#6366F1]/50 rounded-md py-6 px-3 text-center transition-colors"
                    >
                      {React.isValidElement(tech.icon)
                        ? React.cloneElement(tech.icon as React.ReactElement, {
                            "aria-hidden": "true",
                            title: tech.name,
                          })
                        : tech.icon}
                      <span className="text-sm text-[#D5D9E2]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}