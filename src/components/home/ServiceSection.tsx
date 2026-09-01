"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowDownIcon, CheckCircle2Icon, ShieldCheck, RefreshCw } from "lucide-react";
import serviceImage from '../../../public/assets/homepage/homewebdev.avif';


const scrollToContact = (event: React.MouseEvent) => {
  event.preventDefault(); // Stop default anchor behavior
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};


const ServiceSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:py-20 overflow-hidden bg-gradient-to-r from-[#091424] to-[#031220]">
      {/* Animated Background Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[100px] md:blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-[100px] md:blur-[120px]"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 leading-tight"
      >
        Elevate Your <span className='text-purple-600'>Online</span> Presence
      </motion.h2>

      <p className="text-center text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-12">
        We craft <span className="font-semibold">high-performance websites</span> using  
        <span className="font-semibold text-purple-400"> MERN, MEAN, and Next.js</span>.
      </p>

      {/* Features & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src={serviceImage}
            alt="High-performance website services"
            width={500}
            height={380}
            className="rounded-lg shadow-lg border-2 md:border-4 border-purple-500 transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Features Section */}
        <div className="space-y-6 md:space-y-8">
          {[ 
            {
              title: "⚡ Intuitive & Fully-Optimized Site",
              description: "Fast, optimized, and intuitive—we build sites that deliver a seamless experience to your customers.",
              Icon: CheckCircle2Icon,
            },
            {
              title: "🔄 Unlimited Alteration Support",
              description: "We offer unlimited alteration support—so your site always stays up-to-date and perfect.",
              Icon: RefreshCw,
            },
            {
              title: "🛡️ Money-back Guarantee",
              description: "Rest assured with a 100% money-back guarantee if our work doesn't meet your expectations.",
              Icon: ShieldCheck,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="flex items-start bg-[#0f1b2b] p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg md:shadow-xl backdrop-blur-md bg-opacity-80 hover:scale-105 transition-transform duration-300 border border-purple-500"
            >
              <feature.Icon className="text-purple-400 w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
              <div className="ml-3 md:ml-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mt-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-14 md:mt-16"
      >
        
          <motion.button
           onClick={scrollToContact} 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 123, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 md:gap-3 mx-auto text-lg md:text-xl"
          >
            Get Built Your Site
            <ArrowDownIcon className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        
        <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3">
          ✨ USA Exclusive: <span className="font-semibold text-blue-400">10% Off</span>
        </p>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
