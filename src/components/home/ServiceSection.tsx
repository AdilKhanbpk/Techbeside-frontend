"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2Icon, ShieldCheck, RefreshCw } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import serviceImage from "../../../public/assets/homepage/homewebdev.avif";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

const scrollToContact = (event: React.MouseEvent) => {
  event.preventDefault();
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const features = [
  {
    title: "Built to perform",
    description: "Fast, optimized pages that give visitors a seamless experience from the first click.",
    Icon: CheckCircle2Icon,
  },
  {
    title: "Unlimited revisions",
    description: "Your site keeps evolving with you — change requests are part of the service, not an add-on.",
    Icon: RefreshCw,
  },
  {
    title: "Money-back guarantee",
    description: "If the work doesn't meet what we agreed on, you get a full refund. No fine print.",
    Icon: ShieldCheck,
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="bg-[#0A0E17] py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={serviceImage}
              alt="High-performance website services"
              width={520}
              height={400}
              className="rounded-lg border border-white/10 w-full h-auto"
            />
          </motion.div>

          <div>
            <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-[#F3F5F9] leading-tight`}>
              Elevate your online presence
            </h2>
            <p className="mt-4 text-[#8993A8] max-w-md">
              We build high-performance sites and apps on MERN, MEAN, and
              Next.js — chosen to fit the project, not to pad a stack list.
            </p>

            <div className="mt-10 space-y-7">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 pl-5 border-l-2 border-[#6366F1]/40"
                >
                  <feature.Icon className="text-[#6366F1] w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#F3F5F9]">{feature.title}</h3>
                    <p className="text-[#8993A8] mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="mt-10 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-7 py-3.5 rounded-md transition-colors"
            >
              Get your site built
            </button>
            <p className="text-sm text-[#8993A8] mt-3">USA exclusive: 10% off right now.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;