import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import projectManagementImage from "../../../../public/assets/servicespages/projectmanagement.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import projectimage1 from "../../../../public/assets/servicespages/project1.webp";
import projectimage2 from "../../../../public/assets/servicespages/project2.webp";
import projectimage3 from "../../../../public/assets/servicespages/project3.webp";
import projectimage4 from "../../../../public/assets/servicespages/project4.webp";
import projectimage5 from "../../../../public/assets/servicespages/project5.webp";
import webimage3 from "../../../../public/assets/servicespages/webserviceimage2.webp";


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

const projectManagement = () => {
  const categorySlug = "project-management";

  const services = [
    {
      title: "DevOps",
      description:
        "Streamlining your development pipeline for guided efficiency with automation to allow for automated daily deployment.",
      icon: developmentDesignImage,
      link: "/services/devops",
    },
    {
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: motionDesignImage,
      link: "/services/software-maintenance-services",
    },
    {
      title: "QA Testing",
      description:
        "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
      icon: illustrationDesignImage,
      link: "/services/web-qa-tester",
    },
  ];


  const projectManagementFaqs = [
    { question: "What project management methodologies do you follow?", answer: " We use Agile, Scrum, and Kanban for efficient project delivery." },
    { question: "How do you track project progress?", answer: " We use tools like Jira, Trello, and Asana for real-time tracking." },
    { question: "How do you handle delays and risks in projects?", answer: " We conduct risk assessments and set buffer timelines to handle challenges." },
    { question: "Do you offer remote project management?", answer: " Yes! We manage projects remotely with effective communication tools." },
    { question: "Can you help manage a large-scale IT project?", answer: " Yes, we specialize in enterprise-level project management and execution." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: " Manage projects with precision using advanced tracking and analytics tools." },
    { icon: <FileText className="w-6 h-6 text-purple-500" />, text: ' Ensure timely delivery with streamlined workflows and resource allocation.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: " Drive collaboration across teams for successful project execution." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Monitor progress in real-time to achieve project goals efficiently." },
  ];


  const sections = [
    {
      image: projectimage2,
      alt: "Tailored project management strategies for software development",
      title: "Personalized  Solution to every Project Development Plan",
      content:
        "Every software development project is unique, and so are our solutions. We specialize in creating tailored project management strategies that address your specific development needs, ensuring smooth coordination, accountability, and optimal resource utilization. By understanding your software project objectives, we provide flexible and scalable solutions that adapt as your project evolves.",
    },
    {
      image: projectimage3,
      alt: "Project Management Services by TechCreator",
      title: "Project Planning and Team Management Services",
      content: (
        <>
          <p>
            Our expertise in Agile software project management helps businesses stay adaptable, improve collaboration, and deliver quality software on time. We ensure flexibility while maintaining high standards and meeting deadlines.
          </p><br/>
          <ul className="font-bold">
          <li>➤ Adapt to change</li>
          <li>➤ Enhance developer collaboration</li>
          <li>➤ Accelerate software delivery</li>
          <li>➤ Implement Agile methodologies</li>
          <li>➤ Maintain flexibility</li>
          <li>➤ Ensure high code quality</li>
          <li>➤ Leverage continuous feedback</li>
          <li>➤ Foster innovation and efficiency</li>
          </ul><br/>
          <p>
            This approach keeps teams focused, motivated, and aligned with evolving business and technology needs.
          </p>
        </>
      )
    },
    {
      image: projectimage4,
      alt: "Best Project Management boost efficiency",
      title: "Efficiency with End-to-End Project Oversight",
      content:
        "From planning to execution, we provide comprehensive oversight to ensure every stage of your project runs smoothly. Our focus on communication, timeline adherence, and quality ensures that your projects achieve their desired outcomes with minimal disruptions.We proactively address challenges, ensuring that adjustments are made swiftly to maintain progress. With a dedicated team overseeing every aspect, your project remains aligned with your goals, leading to a successful and timely delivery.",
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
                item: "https://www.techcreator.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Project Management",
                item: "https://www.techcreator.co/services/project-management",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Development Management and Complete Project Management Services"
        description={
          <>
           <Link href="/" className="text-purple-600">TechCreator</Link>,{" "}  offers expert project management services for businesses, designed to optimize workflows and ensure the timely delivery of <strong className="font-bold">software development, apps or website development.</strong> Our team focuses on aligning development project objectives with your business goals, providing clarity, structure, and seamless execution for agile <strong className="font-bold">software development and IT project management.</strong>

          </>
        }
        image={projectManagementImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Efficient Project Management Services" 
        description={
          <>
           <Link href="/" className="underline">TechCreator</Link> ,{" "} offers reliable project management services designed to streamline workflows and ensure timely delivery of projects. Our team focuses on aligning project objectives with your business goals, providing clarity, structure, and seamless execution.With a keen focus on communication and collaboration, projects are delivered on time and within budget. Our approach minimizes risks and maximizes project success, driving growth and efficiency.
          </>
        }
           image={projectimage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={projectimage5}
        alt="Feature illustration"
        title="Comprehensive Web Development Services with Ongoing Support"
        content={
          <>
           Our commitment doesn’t end with the launch of your website or app. We provide comprehensive web development services, from concept to deployment, with continuous support to ensure your platform evolves with your business. Trust us to deliver innovation, functionality, and unmatched quality in every project.With regular updates and maintenance, your platform stays ahead of the competition.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={projectManagementFaqs} />
        <OurTeam />
      <RelatedServices services={services} />
    
        <div className=" bg-purple-600 md:mt-16 mt-9 md:mb-16 mb-9">
          <ClientReviews />
          <ClientTestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default projectManagement;



export const metadata = servicesMetadata.projectManagement;
