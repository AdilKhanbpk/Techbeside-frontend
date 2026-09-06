import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import heroimage from "../../../../public/assets/servicespages/devops.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import devopimage1 from "../../../../public/assets/servicespages/devopimag1.webp";
import devopimage2 from "../../../../public/assets/servicespages/devopimage2.webp";
import devopimage3 from "../../../../public/assets/servicespages/devopimage3.webp";
import devopimage4 from "../../../../public/assets/servicespages/devopimage4.webp";
import devopimage5 from "../../../../public/assets/servicespages/devopimage5.webp";

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

const Devops = () => {
  const categorySlug = "app-development";

  const services = [
    {
      title: "Project Management",
      description:
        "Executing precise project management potentially geared to step-out on time; it facilitates efficient collaboration by leading the project stakeholders.",
      icon: illustrationDesignImage,
      link: "/services/project-management",
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
      icon: developmentDesignImage,
      link: "/services/web-qa-tester",
    },
  ];


  const devopsFaqs = [
    { question: "What DevOps tools do you use?", answer: " We use Docker, Kubernetes, Jenkins, Terraform, AWS, and Azure DevOps." },
    { question: "How does DevOps improve software development?", answer: " DevOps automates deployment, enhances security, and speeds up releases." },
    { question: "Do you offer CI/CD pipeline setup?", answer: " Yes, we set up automated CI/CD pipelines for faster, error-free deployments." },
    { question: "How do you ensure infrastructure security?", answer: " We use firewalls, encryption, and vulnerability scanning to protect your system." },
    { question: "Can you migrate existing infrastructure to the cloud?", answer: " Absolutely! We handle AWS, Google Cloud, and Azure cloud migrations." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: " Automate development and operations processes with powerful DevOps tools." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Optimize workflows with CI/CD pipelines and real-time monitoring.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "  Enhance collaboration between teams for seamless development cycles." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Ensure smooth and efficient deployments with scalable DevOps solutions." },
  ];


  const sections = [
    {
      image: devopimage2,
      alt: "Speed up your workflows while reducing errors through DevOps automation with shorter and more accurate outputs",
      title: "Transform Processes with DevOps Automation",
      content:
        "Our DevOps automation services eliminate manual tasks and streamline workflows, reducing errors and deployment times. We utilize advanced tools to automate testing, integration, and delivery, empowering your business to operate with greater agility and precision.Automation drives consistency and accelerates time-to-market, enabling faster innovation. With optimized workflows, businesses can focus on strategic growth and customer satisfaction.",
    },
    {
      image: devopimage3,
      alt: "Aligning development with business goals for quicker time-to-market, better quality, and better performance ",
      title: "Empowering Growth with Business",
      content: 'Our business DevOps solutions are designed to align development practices with organizational goals. By enhancing collaboration between teams, we help businesses reduce time-to-market, improve quality, and achieve consistent performance.These solutions foster a culture of continuous improvement, ensuring agility and efficiency across every stage of the development lifecycle. With streamlined processes, your business can adapt to changes faster and drive long-term success.'
    },
    {
      image: devopimage4,
      alt: "Get personalized DevOps support for cloud migration, CI/CD pipelines, and workflow optimization",
      title: "Get a Tailored Support",
      content:
        "Work with a dedicated DevOps consultant to implement strategies that cater to your unique challenges. Whether you need help with cloud migration, CI/CD pipelines, or workflow optimization, our consultants deliver results-driven guidance and ongoing support. With expert advice and personalized solutions, businesses can streamline operations and enhance performance. Continuous support ensures that your DevOps strategy evolves as your business grows and technology advances.",
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
                name: "DevOps",
                item: "https://www.TechBeside.co/services/devops",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Expert DevOps Consulting"
        description={
          <>
            TechBeside provides professional DevOps consulting services to help businesses optimize their development and operations workflows. Our experienced DevOps consultants assess your current processes and implement tailored solutions to enhance efficiency, scalability, and collaboration across teams.
          </>
        }
        image={heroimage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Partner with One of the Leading DevOps Companies" 
        description={
          <>
           As one of the trusted DevOps companies, we deliver innovative solutions designed to meet your business needs. From infrastructure management to process automation, our team ensures seamless integration of {" "}
           <Link href="/services/web-development" className="underline">development and IT operations</Link> ,  for faster and more reliable software delivery.Enhancing collaboration, efficiency, and scalability across operations drives continuous improvement. Accelerate product releases and stay ahead in the competitive market with optimized DevOps practices. 
          </>
        }
           image={devopimage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={devopimage5}
        alt="Improved efficiency through DevOps automation cuts down time to deploy by 60% and seamless cloud migration through seamless CI/CD deployments"
        title="Driving Efficiency with DevOps Automation"
        content={
          <>
           We recently partnered with a tech startup to implement DevOps automation, reducing their deployment time by 60%. Additionally, our DevOps consulting services helped an enterprise migrate to a cloud-based infrastructure, enabling seamless scalability and enhanced security.These successful partnerships showcase the power of automation in driving efficiency and improving operational performance. By optimizing workflows and leveraging cloud solutions, businesses can achieve faster time-to-market and maintain a competitive edge.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={devopsFaqs} />
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

export default Devops;




export const metadata = servicesMetadata.devops;
