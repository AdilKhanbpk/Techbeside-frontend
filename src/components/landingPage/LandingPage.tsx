// "use client";

// import dynamic from "next/dynamic";
// import { Suspense } from "react";

// // ✅ Lazy Load Components
// const Slider = dynamic(() => import("@/components/landingPage/HeroSection"));
// const Companies = dynamic(() => import("@/components/landingPage/Companies"));
// const ServicesSection = dynamic(() => import("@/components/landingPage/ServicesSection"));
// const Technologies = dynamic(() => import("@/components/landingPage/Technologies"));
// const WorkProcess = dynamic(() => import("@/components/landingPage/WorkProcess"));
// const OurValues = dynamic(() => import("@/components/landingPage/OurValues"));
// const ProjectsCount = dynamic(() => import("@/components/landingPage/ProjectsCount"));
// const Products = dynamic(() => import("@/components/landingPage/Products"));
// const OurTeam = dynamic(() => import("@/components/about/OurTeam"));
// const Benefits = dynamic(() => import("@/components/landingPage/Benefits"));
// const PlatformInfo = dynamic(() => import("@/components/landingPage/PlatformInfo"));
// const IndustriesSection = dynamic(() => import("@/components/landingPage/IndustriesSection"));
// const ClientReviews = dynamic(() => import("@/components/landingPage/ClientReviews"));
// const ClientTestimonialsSection = dynamic(() => import("@/components/landingPage/ClientTestimonialsSection"));
// const GetQoute = dynamic(() => import("@/components/landingPage/GetQoute"), { ssr: false });

// export default function LandingPage() {
//   return (
//     <>
//       {/* ✅ Slider will Load Immediately */}
//       <Slider />

//       <div className="max-w-[1450px] mx-auto px-4">
//         <Suspense fallback={<p className="text-center">Loading Companies...</p>}>
//           <Companies />
//         </Suspense>
//       </div>

//       <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
//         <Suspense fallback={<p className="text-center">Loading Services...</p>}>
//           <ServicesSection />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Technologies...</p>}>
//           <Technologies />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Work Process...</p>}>
//           <WorkProcess />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Values...</p>}>
//           <OurValues />
//         </Suspense>

//         <div className="md:mt-16 mt-9">
//           <Suspense fallback={<p className="text-center">Loading Projects Count...</p>}>
//             <ProjectsCount />
//           </Suspense>
//         </div>

//         <Suspense fallback={<p className="text-center">Loading Products...</p>}>
//           <Products />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Our Team...</p>}>
//           <OurTeam />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Benefits...</p>}>
//           <Benefits />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Platform Info...</p>}>
//           <PlatformInfo />
//         </Suspense>

//         <Suspense fallback={<p className="text-center">Loading Industries...</p>}>
//           <IndustriesSection />
//         </Suspense>

//         <div className="bg-purple-600 md:mt-16 mt-9">
//           <Suspense fallback={<p className="text-center">Loading Client Reviews...</p>}>
//             <ClientReviews />
//           </Suspense>

//           <Suspense fallback={<p className="text-center">Loading Testimonials...</p>}>
//             <ClientTestimonialsSection />
//           </Suspense>
//         </div>

//         <Suspense fallback={<p className="text-center">Loading Quote Section...</p>}>
//           <GetQoute />
//         </Suspense>
//       </div>
//     </>
//   );
// }
