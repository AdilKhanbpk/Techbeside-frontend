"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai'; 
import { FaWhatsapp } from "react-icons/fa";

const Buttons = () => {
  const router = useRouter();

  // Open the strategy link in the same tab
  const handleStrategyClick = () => {
    window.location.href = "https://calendly.com/contact-techcreator/30min";
  };

  // Open the WhatsApp link in the same tab
  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/923119265290";
  };

  // Navigate to the contact page
  const handleContactClick = () => {
    router.push("/contact");
  };

 // Slow bouncing animation
 const slowBounce = (delayTime: number) => ({
  initial: { y: 0 },
  animate: { 
    y: [0, -10, 0],  // Move up slowly, then down
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const, // Smooth bounce
      duration: 1.5,  // Slow animation (was 0.6s)
      delay: delayTime
    }
  },
  whileHover: { y: 0 } // Stop animation on hover
});

return (
  <div className='flex gap-4 mt-6 md:px-0 px-3 mb-4 justify-center sm:justify-start'>
    {/* Strategy Button */}
    <motion.button 
      whileTap={{ scale: 0.95 }}
      {...slowBounce(0)} // First button starts immediately
      className='bg-purple-700 p-2 rounded-full text-white'
      onClick={handleStrategyClick}
      aria-label="Schedule a strategy call"
    >
      <AiOutlineCalendar size={30} />
    </motion.button>
    
    {/* WhatsApp Button */}
    <motion.button 
      whileTap={{ scale: 0.95 }}
      {...slowBounce(0.5)} // Delayed bounce
      className='bg-green-600 p-2 rounded-full text-white'
      onClick={handleWhatsappClick}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </motion.button>

    {/* Contact Button */}
    <motion.button 
      whileTap={{ scale: 0.95 }}
      {...slowBounce(1)} // Even more delay
      className='bg-orange-500 p-2 rounded-full text-white'
      onClick={handleContactClick}
      aria-label="Go to contact page"
    >
      <AiOutlineMail size={30} />
    </motion.button>
  </div>
);
};

export default Buttons;