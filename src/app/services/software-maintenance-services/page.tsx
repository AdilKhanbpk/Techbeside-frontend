import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import heroimage from "../../../../public/assets/servicespages/softwareMaintenece.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import softwareImage1 from "../../../../public/assets/servicespages/softImage1.webp";
import softwareImage2 from "../../../../public/assets/servicespages/softimage2.webp";
import softwareImage3 from "../../../../public/assets/servicespages/softImage3.webp";
import softwareImage4 from "../../../../public/assets/servicespages/softImage4.webp";
import softwareImage5 from "../../../../public/assets/servicespages/softimage5.webp";

// RelatedServices images
import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";
import Buttons from "@/components/services/Buttons";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";
import Herosection from "@/components/services/Herosection";
import FeatureSection from "@/components/services/FeatureSection";
import FeaturesList from "@/components/services/FeaturesList";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";

const SoftwareMaintenance = () => {
  const categorySlug = "software-maintenance-services";
  const services = [
    {
      title: "DevOps",
      description:
        "Streamlining your development pipeline for guided efficiency with automation to allow for automated daily deployment.",
      icon: developmentDesignImage,
      link: "/services/devops",
    },
    {
      title: "Project Management",
      description:
        "Executing precise project management potentially geared to step-out on time; it facilitates efficient collaboration by leading the project stakeholders.",
      icon: illustrationDesignImage,
      link: "/services/project-management",
    },
    {
      title: "QA Testing",
      description:
        "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
      icon: motionDesignImage,
      link: "/services/web-qa-tester",
    },
  ];


  const softwaremaintenanceFaqs = [
    { question: "What type of software maintenance do you provide?", answer: " We offer bug fixes, updates, performance optimization, and security patches." },
    { question: "Can you maintain software built by another company?", answer: " Yes, we take over legacy software and improve its efficiency." },
    { question: "How often should software be updated?", answer: " Regular updates every 3-6 months help improve security and speed." },
    { question: "Do you provide 24/7 support for critical systems?", answer: " Yes, we offer emergency support for mission-critical applications." },
    { question: "Can you migrate old software to new technologies?", answer: " Yes, we modernize outdated software into scalable, cloud-based solutions." },
  ];


  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Keep your software running smoothly with regular updates and maintenance." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Identify and resolve issues to enhance software performance and reliability.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Implement upgrades to align with the latest technologies and trends." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Provide comprehensive support to address all your software maintenance needs." },
  ];


  const sections = [
    {
      image: softwareImage2,
      alt: "Streamlined construction equipment maintenance software for tracking, scheduling, and monitoring performance",
      title: "Enhance Operations with Construction",
      content:
        "For industries relying on heavy machinery, our construction equipment maintenance software ensures streamlined tracking and management of equipment. From scheduling maintenance to monitoring performance, we deliver tailored solutions that enhance reliability and reduce costs.We provide you with the option of automatic maintenance and let you know the performance of your software also preventing costly downtime. To operate well and meet your need, we have got solutions for you by improving efficiency and long lasting lifespan of your equipment.",
    },
    {
      image: softwareImage3,
      alt: "Take advantage of enhanced security, efficiency, and longevity with proactive maintenance solutions",
      title: "Proactive Solutions for Long-Term Software Success",
      content: 'Our proactive approach to software maintenance services focuses on identifying potential issues before they occur. By implementing regular updates and monitoring, we ensure your software remains secure, efficient, and ready for future challenges.TechBeside adapt such approaches to avoid disruptions and keep your software running without any interruption. Our constant support system keeps you ahead of the trends and ensures better performance.'
    },
    {
      image: softwareImage4,
      alt: "Software maintenance plans developed to cater to unique business needs and the peculiarities of distinct industries",
      title: "Custom Maintenance Plans for Business Needs",
      content:
        "Every business is unique, and so are its software requirements. At TechBeside, we craft maintenance plans tailored to your goals, whether you need ongoing software maintenance and support services or assistance with industry-specific tools like construction equipment maintenance software.Before execution or practical work, we go through a proper plan in order to understand your needs that align perfectly to your business. We have expertise that analyze the basic needs and ensure your software always meet your core business objectives.",
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
                name: "Software Maintenance",
                item: "https://www.TechBeside.co/services/software-maintenance-services",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Reliable Software Maintenance Services"
        description={
          <>
           At <Link href="/" className="text-indigo-600">TechBeside</Link>,{" "} our software maintenance services are designed to keep your applications running smoothly. From  <Link href="/" className="text-indigo-600">bug fixes</Link>,{" "} to performance optimization, we ensure your software stays updated, secure, and aligned with your evolving business.
          </>
        }
        image={heroimage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Specialized Maintenance and Support Services" 
        description={
          <>
          Our comprehensive software maintenance and support services include troubleshooting, upgrades, and feature enhancements. With a dedicated team of experts, we provide consistent support to minimize downtime and maximize operational efficiency.Our support system is much robust that any issue arises, it is our duty to ensure seamless functionality and upgradation of your systems. We come with one goal of growing your business and flawless functionality.
          </>
        }
           image={softwareImage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={softwareImage5}
        alt="Permit stability and growth through software solutions for improved tracking efficiency while ensuring mere minimal disruption"
        title="Ensuring Stability and Growth"
        content={
          <>
          We recently helped a construction company implement construction equipment maintenance software, improving their tracking efficiency by 40%. Additionally, our software maintenance services have enabled businesses across industries to reduce operational disruptions and enhance performance.Our clients have already noted improvements in their workflow and have credited us for our hardwrok. Positive feedback reflects our dedication to digital solutions. We are ambitious about your ease and stability to your business with our constant support system.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={softwaremaintenanceFaqs} />
        <OurTeam />
      <RelatedServices services={services} />
    
        <div className=" bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
          {/* <ClientReviews /> */}
          <ClientTestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default SoftwareMaintenance;



export const metadata = servicesMetadata.softwareMaintenance;
