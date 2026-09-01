import React from "react";
import { FaBolt, FaBrain, FaChartLine, FaClock, FaCogs, FaRocket, FaLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain size={50} className="text-yellow-400" />,
    title: "AI-First Development",
    description: "We are a fully AI-powered software company, leveraging cutting-edge AI tools to automate development, optimize workflows, and deliver solutions faster than traditional methods.",
  },
  {
    icon: <FaBolt size={50} className="text-yellow-400" />,
    title: "Lightning-Fast Execution",
    description: "What typically takes developers months, we accomplish in minutes using AI-driven automation—delivering high-quality web and mobile applications at an unprecedented speed.",
  },
  {
    icon: <FaLightbulb size={50} className="text-yellow-400" />,
    title: "Super Innovative & Future-Proof",
    description: "We don’t just follow trends; we create them. Our AI-driven approach ensures that our solutions are smarter, more efficient, and built for the future.",
  },
  {
    icon: <FaChartLine size={50} className="text-yellow-400" />,
    title: "Cost-Effective, High-Value Solutions",
    description: "Our AI-powered efficiency allows us to build superior software at a fraction of the cost, providing unbeatable value without compromising quality.",
  },
  {
    icon: <FaClock size={50} className="text-yellow-400" />,
    title: "Time-Saving & Scalable",
    description: "We eliminate unnecessary development cycles, ensuring rapid deployment so businesses can scale faster without delays.",
  },
  {
    icon: <FaCogs size={50} className="text-yellow-400" />,
    title: "AI-Enhanced Customization",
    description: "Unlike traditional agencies, we use AI to create hyper-personalized solutions tailored to your exact needs—no one-size-fits-all templates.",
  },
  {
    icon: <FaRocket size={50} className="text-yellow-400" />,
    title: "Revolutionizing Software Development",
    description: "We are redefining the industry with AI-driven innovation, making software development smarter, faster, and more cost-effective than ever before.",
  },
];

const Benefits = () => {
  return (
    <section className="md:mt-16 mt-9 text-center">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600">
    What makes us unique
  </h2>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-10 md:mt-9 mt-6">
    {features.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col items-center md:p-6 p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:border-purple-600 hover:border-2"
      >
        {feature.icon}
        <h2 className="md:text-xl text-lg font-semibold mt-2 text-white">
          {feature.title}
        </h2>
        <p className="mt-1 md:text-lg text-base font-medium text-white text-center">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Benefits;
