import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import UIUXDesignImage from "../../../../public/assets/servicespages/UIDesign.webp";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import uxdesignimage1 from "../../../../public/assets/servicespages/uxdesign1.webp";
import uxdesignimage2 from "../../../../public/assets/servicespages/uxdesign2.webp";
import uxdesignimage3 from "../../../../public/assets/servicespages/uxdesign3.webp";
import uxdesignimage4 from "../../../../public/assets/servicespages/uxdesign4.webp";
import uxdesignimage5 from "../../../../public/assets/servicespages/uxeesign5.webp";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";
import FeatureSection from "@/components/services/FeatureSection";
import FeaturesList from "@/components/services/FeaturesList";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import Herosection from "@/components/services/Herosection";

const UIUXDesign = () => {
  const categorySlug = "ui-ux-design-agency";
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating powerful mobile applications that will capture users and enhance your brand.",
      icon: appDesignImage,
      link: "/services/mobile-app-development-company",
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: motionDesignImage,
      link: "/services/affordable-graphic-design-services",
    },
    
  ];

  const uiuxdesignFaqs = [
    { question: "What is included in your UI/UX design process?", answer: " We follow a structured approach: user research, wireframing, prototyping, and final design." },
    { question: "Which tools do you use for UI/UX design?", answer: " We use Figma, Adobe XD, Sketch, and InVision to create stunning interfaces." },
    { question: "How do you ensure a good user experience (UX)?", answer: " We conduct usability testing and feedback sessions to refine designs." },
    { question: "Do you provide UI design for mobile apps?", answer: " Yes! We create pixel-perfect UI/UX for mobile, web, and SaaS platforms." },
    { question: "How long does UI/UX design take?", answer: " A simple design takes 2-4 weeks, while complex interfaces may take 6-8 weeks." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Design intuitive interfaces that enhance user experience across platforms." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Simplify navigation with creative and responsive UI designs.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: " Incorporate user feedback to deliver tailored designs that engage and delight." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: " Ensure every design aligns with your brand and user expectations." },
  ];


  const sections = [
    {
      image: uxdesignimage2,
      alt: "Mobile UI/UX design from TechBeside comes with sleek, responsive, and intuitive interfaces for maximum engaging on-the-go experience",
      title: "Mobile UI/UX Design for On-the-Go Excellence",
      content:
        "In a mobile-first world, our expertise in mobile UI/UX design ensures your applications are optimized for smaller screens without compromising user experience. We design sleek, responsive, and intuitive interfaces that captivate users across all devices. Our focus on simplicity and accessibility ensures a seamless experience for users on the go. We create mobile interfaces that engage users and keep them coming back for more.",
    },
    {
      image: uxdesignimage3,
      alt: "Comprehensive UI/UX solutions by TechBeside, solving user challenges and driving business results from ideation to implementation",
      title: "Your Choice for Multi-Device Reach",
      content: 'We provide comprehensive UI/UX design services, covering every step from ideation to implementation. Our goal is to deliver designs that not only look great but also solve real user challenges, driving results for your business.Designs are crafted with user behavior in mind, ensuring a seamless experience that leads to higher engagement. Tailored to your business goals, the result is a user-friendly interface that fuels growth and satisfaction.'
    },
    {
      image: uxdesignimage4,
      alt: "The UI/UX design is formulated for the individual industries to exceed expectations for apps and digital platforms",
      title: "Customized UI/UX for Every Industry",
      content:
        "From startups to enterprises, our design solutions cater to diverse industries. Whether you need a mobile UI/UX design for an app or a complete overhaul of your digital presence, we ensure the final product exceeds your expectations.Each design is tailored to your industry’s specific needs, ensuring maximum impact. The goal is to create intuitive, engaging experiences that drive user loyalty and business growth.",
    },
  ];

 


  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.TechBeside.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "UI/UX Design Agency",
                item: "https://www.TechBeside.co/services/ui-ux-design-agency",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Exceptional Digital Experiences: UI/UX Design Services"
        description={
          <>
            At TechBeside, our UI/UX design is built around delivering intuitive and visually engaging interfaces. We focus on creating user journeys that enhance interaction and improve satisfaction, ensuring your platform stands out in a competitive digital landscape.
          </>
        }
        image={UIUXDesignImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Your Partner as a Top UI/UX Design Agency" 
        description={
          <>
            Recognized as a top UI/UX design agency, we collaborate closely with clients to craft designs that resonate with their audience. From wireframes to final designs, we prioritize functionality and creativity to reflect your brand’s identity and drive user engagement.Our designs are optimized for performance, ensuring seamless navigation and an exceptional user experience. Let’s work together to elevate your {" "}
            <Link href="/services/seo-services-for-small-business" className="underline">online presence</Link> ,  and enhance user satisfaction.
          </>
        }
           image={uxdesignimage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={uxdesignimage5}
        alt=" Featuring great designs: Healthcare UI/UX that drives engagement and eCommerce design that boosts conversions"
        title="Recent Work: Turning Ideas into Impactful Designs"
        content={
          <>
           Recently, we partnered with a healthcare startup to deliver a user-friendly mobile UI/UX design that improved patient engagement. Additionally, our work with an e-commerce platform as a top UI/UX design agency enhanced their customer journey, leading to increased conversions and user satisfaction.These projects highlight our ability to create designs that solve real problems while driving business success.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={uiuxdesignFaqs} />
        <OurTeam />
      <RelatedServices services={services} />
    
        <div className=" bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
          <ClientReviews />
          <ClientTestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default UIUXDesign;

export const metadata = servicesMetadata.uiUxDesign;
