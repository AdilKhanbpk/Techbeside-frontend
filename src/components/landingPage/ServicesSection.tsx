"use client"
import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  des: string;
  image: string;
  link: string;
  altText: string;
}

const ServicesSection: React.FC = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1240, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    smallTablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const servicesArr: Service[] = [
    {
      id: 1,
      title: "Web Design & Development",
      des:
        "We make what you think. Whether it is through implementation, team extension, or research, we can support you. TechBeside provides web development services that are all about helping your business stand out in the digital world."
          .split(" ")
          .slice(0, 26)
          .join(" ") + "...",
      image: "/assets/homepage/webdesignicon.webp",
      link: "/services/web-development",
      altText: "Web design services",
    },
    {
      id: 2,
      title: "Mobile App Development",
      des:
        "Using an agile Mobile App Development methodology, TechBeside churns android app development and iOS app development for businesses of all scales."
          .split(" ")
          .slice(0, 20)
          .join(" ") + "...",
      image: "/assets/homepage/appdevicon.webp",
      link: "/services/app-development",
      altText: "Mobile app development",
    },
    {
      id: 3,
      title: "DevOps",
      des:
        "We bridge the gap between development and operations, ensuring seamless collaboration, automation, and faster time-to-market. From CI/CD pipelines to real-time monitoring, our tailored solutions enhance efficiency, scalability, and reliability."
          .split(" ")
          .slice(0, 20)
          .join(" ") + "...",
      image: "/assets/homepage/devops.webp",
      link: "/services/devops",
      altText: "DevOps services",
    },
    {
      id: 4,
      title: "Software Testing Service",
      des:
        "Your software is ready for success with our Software Testing Services, designed to deliver comprehensive bug detection, advanced security protocols, and flawless performance evaluation."
          .split(" ")
          .slice(0, 23)
          .join(" ") + "...",
      image: "/assets/homepage/webdevicon.webp",
      link: "/services/qa-testing",
      altText: "Software testing",
    },
    {
      id: 5,
      title: "UI/UX Designing",
      des:
        "Creating colors that brands need. In addition to implementing proven systems, our designers undergo meticulous reviews and learn from impactful practices and toolsets."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "/assets/homepage/uiuxdesign.webp",
      link: "/services/ui-ux-design",
      altText: "UI/UX design",
    },
    {
      id: 6,
      title: "Graphic Designing",
      des:
        "TechBeside’s creatives hail from around the world and bring a comprehensive skill set, ensuring you are matched with the right creatives – quality control included."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image:"/assets/homepage/softwaremaintanence.webp",
      link: "/services/graphic-designing",
      altText: "Graphic design",
    },
    {
      id: 7,
      title: "Project Management",
      des:
        "Team coordination and cooperation is what we demand and deal first. We manage a lot of businesses successfully and have the potential to handle your projects."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "/assets/homepage/projectmanagement.webp",
      link: "/services/project-management",
      altText: "Project management",
    },
    {
      id: 8,
      title: "SEO & Content Writing",
      des:
        "We aim to create websites and rank them on Google with expert SEO Services. TechBeside builds platforms that meet search engine needs to scale your business into profitability."
          .split(" ")
          .slice(0, 27)
          .join(" ") + "...",
      image: "/assets/homepage/seo.webp",
      link: "/services/seo-content-writing",
      altText: "SEO services",
    },
    {
      id: 9,
      title: "Software Maintenance",
      des:
        "Ensure your software runs smoothly with expert maintenance services that address issues proactively. Our team offers regular updates, efficient bug fixes, and seamless integration to ensure your applications remain optimized and secure for modern business needs."
          .split(" ")
          .slice(0, 24)
          .join(" ") + "...",
      image: "/assets/homepage/softwaremaintanence.webp",
      link: "/services/software-maintenance",
      altText: "Software maintenance",
    },
    {
      id: 10,
      title: "Digital Marketing",
      des:
        "We create good ads campaigns on Facebook, Instagram, LinkedIn, Twitter, and Google Ads to increase the reach of your brand. We focus on creating viral content, targeted ads, and communities. When paired with a solid branding strategy, we make sure your social presence hits home. From influencer collaborations to data-driven analytics, we empower social media platforms to be your leading tools in achieving growth and success."
          .split(" ")
          .slice(0, 24)
          .join(" ") + "...",
      image: "/assets/homepage/digitalmarketing.webp",
      link: "/services/digital-marketing-for-software-companies",
      altText: "Digital marketing",
    },
    
  ];
  
 
  
  const CustomButtonGroup = ({ next, previous }: { next?: () => void; previous?: () => void }) => (
    <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-between px-2">
      {/* Left Arrow */}
      <button 
        onClick={previous} 
        className="bg-indigo-600 shadow-md p-2 rounded-full hover:bg-black text-white transition"
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" /> 
      </button>
  
      {/* Right Arrow */}
      <button 
        onClick={next} 
        className="bg-indigo-600 shadow-md p-2 rounded-full hover:bg-black text-white transition"
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight className="w-5 h-5" /> 
      </button>
    </div>
  );
  
 
  
 
    return (
      <section>
        <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center font-bold mb-6 md:mb-9 text-indigo-600">Our Premium Services</h2>
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all 0.5s ease"
          transitionDuration={500}
          containerClass="pb-12"
          dotListClass="flex justify-center space-x-2 mt-6"
          itemClass="px-4"
          renderDotsOutside={true}
          customButtonGroup={<CustomButtonGroup />} // ✅ Custom Arrows
          arrows={false} // Hide default arrows
        >
          {servicesArr.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link href={item.link} className="block h-full">
                <ServiceCard
                  title={item.title}
                  description={item.des}
                  icon={item.image}
                  altText={item.altText}
                />
              </Link>
            </motion.div>
          ))}
        </Carousel>
        </section>
    );
  };
  
  export default ServicesSection;
