

// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import Image from "next/image";
// import CountUp from "react-countup";
// import { Fraunces, Space_Grotesk } from "next/font/google";

// const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
// const sans = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

// interface StatItemProps {
//   value: number;
//   label: string;
//   description: string;
//   delay: number;
// }

// const StatRow: React.FC<StatItemProps & { isLast: boolean }> = ({
//   value,
//   label,
//   description,
//   delay,
//   isLast,
// }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -16 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6, delay }}
//       className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 py-5 md:py-6 ${
//         isLast ? "" : "border-b border-white/15"
//       }`}
//     >
//       <div className={`${serif.className} text-4xl md:text-6xl italic text-[#EFE8D8] leading-none tabular-nums`}>
//         {inView ? (
//           <CountUp start={0} end={value} duration={2.2} separator="," suffix="+" useEasing />
//         ) : (
//           "0+"
//         )}
//       </div>

//       <div className="flex flex-col">
//         <h3 className={`${sans.className} text-base md:text-lg font-medium text-white`}>
//           <span className="relative inline-block">
//             {label}
//             <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C9A24B] transition-all duration-300 group-hover:w-full" />
//           </span>
//         </h3>
//         <p className="mt-1 text-sm text-white/50 max-w-md">{description}</p>
//       </div>

//       <div className="col-span-2 md:hidden" />
//     </motion.div>
//   );
// };

// const ProjectsCountClient: React.FC<{ stats: StatItemProps[] }> = ({ stats }) => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   return (
//     <section className="relative min-h-[600px] md:min-h-[500px] overflow-hidden bg-[#0B0A08]">
//       {/* Background photo, kept quiet and off to one side */}
//       <div className="absolute inset-0">
//         <Image
//           src="/assets/homepage/our-people-our-success.webp"
//           alt="Our Success Story"
//           fill
//           loading="lazy"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           quality={75}
//           style={{ objectFit: "cover", objectPosition: "left center" }}
//           className={`transition-opacity duration-700 ${
//             isImageLoaded ? "opacity-300" : "opacity-0"
//           }`}
//           onLoad={() => setIsImageLoaded(true)}
//         />
//         {/* Duotone + fade so the photo reads as texture, not a hero shot */}
//         <div className="absolute inset-0 bg-[#0B0A08] mix-blend-color opacity-150" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08] via-[#0B0A08]/70 to-[#0B0A08]" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08] via-transparent to-[#0B0A08]/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full">
//         <div className="container mx-auto px-6 md:px-10 h-full flex items-center py-14 md:py-0">
//           <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.3fr] gap-10 md:gap-16 w-full items-center">
//             {/* Left: heading */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="h-px w-10 bg-[#C9A24B] mb-6" />
//               <h2 className={`${serif.className} text-3xl md:text-5xl italic text-[#EFE8D8] leading-[1.1] mb-4`}>
//                 Empowered teams,
//                 <br />
//                 proven success
//               </h2>
//               <p className={`${sans.className} text-white/55 text-sm md:text-base max-w-sm leading-relaxed`}>
//                 Our global impact and dedication to excellence have helped
//                 businesses achieve their digital transformation goals.
//               </p>
//             </motion.div>

//             {/* Right: ledger of stats */}
//             <div className="flex flex-col">
//               {stats.map((stat, index) => (
//                 <StatRow key={index} {...stat} isLast={index === stats.length - 1} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsCountClient;


"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { Fraunces, Space_Grotesk } from "next/font/google";

const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
const sans = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface StatItemProps {
  value: number;
  label: string;
  description: string;
  delay: number;
}

const StatRow: React.FC<StatItemProps & { isLast: boolean }> = ({
  value,
  label,
  description,
  delay,
  isLast,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 py-5 md:py-6 ${
        isLast ? "" : "border-b border-white/15"
      }`}
    >
      <div className={`${serif.className} text-4xl md:text-6xl italic text-[#EFE8D8] leading-none tabular-nums`}>
        {inView ? (
          <CountUp start={0} end={value} duration={2.2} separator="," suffix="+" useEasing />
        ) : (
          "0+"
        )}
      </div>

      <div className="flex flex-col">
        <h3 className={`${sans.className} text-base md:text-lg font-medium text-white`}>
          <span className="relative inline-block">
            {label}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C9A24B] transition-all duration-300 group-hover:w-full" />
          </span>
        </h3>
        <p className="mt-1 text-sm text-white/50 max-w-md">{description}</p>
      </div>

      <div className="col-span-2 md:hidden" />
    </motion.div>
  );
};

const ProjectsCountClient: React.FC<{ stats: StatItemProps[] }> = ({ stats }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="relative min-h-[600px] md:min-h-[500px] overflow-hidden bg-[#0B0A08]">
      {/* Background photo, kept quiet and off to one side */}
      <div className="absolute inset-0">
        <Image
          src="/assets/homepage/our-people-our-success.webp"
          alt="Our Success Story"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          style={{ objectFit: "cover", objectPosition: "left center" }}
          className={`transition-opacity duration-700 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {/* Just enough tint for the white text to stay readable — the photo should still read as a photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08]/90 via-[#0B0A08]/45 to-[#0B0A08]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-6 md:px-10 h-full flex items-center py-14 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.3fr] gap-10 md:gap-16 w-full items-center">
            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-10 bg-[#C9A24B] mb-6" />
              <h2 className={`${serif.className} text-3xl md:text-5xl italic text-[#EFE8D8] leading-[1.1] mb-4`}>
                Empowered teams,
                <br />
                proven success
              </h2>
              <p className={`${sans.className} text-white/55 text-sm md:text-base max-w-sm leading-relaxed`}>
                Our global impact and dedication to excellence have helped
                businesses achieve their digital transformation goals.
              </p>
            </motion.div>

            {/* Right: ledger of stats */}
            <div className="flex flex-col">
              {stats.map((stat, index) => (
                <StatRow key={index} {...stat} isLast={index === stats.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCountClient;