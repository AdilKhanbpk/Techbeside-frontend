import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import qatestinImage from "../../../../public/assets/servicespages/qatesting.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import qaimage1 from "../../../../public/assets/servicespages/qaimage1.webp";
import qaimage2 from "../../../../public/assets/servicespages/qaimage2.webp";
import qaimage3 from "../../../../public/assets/servicespages/qaimage3.webp";
import qaimage4 from "../../../../public/assets/servicespages/qaimage4.webp";
import qaimage5 from "../../../../public/assets/servicespages/qaimage5.webp";

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

const QATesting = () => {
  const categorySlug = "web-qa-tester";
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
      title: "Software Maintenance",
      description:
        "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
      icon: motionDesignImage,
      link: "/services/software-maintenance-services",
    },
  ];

  const qatestingFaqs = [
    { question: "What types of testing do you provide?", answer: "We offer manual testing, automation, performance, and security testing." },
    { question: "Do you test mobile applications?", answer: "Yes, we test iOS, Android, and cross-platform apps for bugs and performance." },
    { question: "Which automation testing tools do you use?", answer: " We use Selenium, Cypress, Jest, and JMeter for automation." },
    { question: "How do you ensure software quality?", answer: " We follow test-driven development (TDD) and continuous testing." },
    { question: "Can you perform security testing for web applications?", answer: " Yes, we conduct penetration testing and vulnerability assessments." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Conduct rigorous testing to ensure bug-free and reliable applications." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Perform detailed testing for performance, security, and compatibility.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Deliver reports with actionable insights to enhance application quality." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Ensure seamless user experience with comprehensive quality assurance." },
  ];


  const sections = [
    {
      image: qaimage2,
      alt: "Customized QA solutions for different sectors toward achieving error-free working",
      title: "Specialized For Diverse Industries",
      content:
        "No matter your industry, TechBeside offers tailored QA solutions. From e-commerce to healthcare and beyond, our testing services are designed to meet the specific challenges of your domain, ensuring error-free performance. We have councilors to understand the unique requirements of each industry and make sure our testing methods align with your business end goals. Whether it's compliance for healthcare or scalability for e-commerce, we ensure your software meets the expectations you desire and get you to your targeted audience and results that support your business growth.",
    },
    {
      image: qaimage3,
      alt: "Agile QA continues to be an invaluable way of ensuring faster delivery with impeccable quality",
      title: "Accelerate Time-to-Market with Agile QA Services",
      content: 'Our Agile QA approach integrates testing throughout the development cycle. By detecting and resolving issues early, we help you speed up delivery timelines without compromising on quality or user experience. This continuous feedbacks loop makes sure that we are aware of the vulnerabilities of the system and allow us for faster and on time development. With the help our experienced and hardworking team we assist you in launching your product faster and ensure reliability.'
    },
    {
      image: qaimage4,
      alt: "Manual and automated testing for total security and protection of software",
      title: "Automation and Manual Testing",
      content:
        "We combine manual and automated testing methods to provide comprehensive coverage and efficient results. Our team leverages the latest tools and technologies to identify and fix vulnerabilities, ensuring your software is robust and secure. This dual approach allows us to address complex scenarios manually while automating repetitive tasks for faster outcomes. By striking the perfect balance between human insight and technological precision, we deliver thorough testing that guarantees seamless performance across all platforms.",
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
                name: "QA Testing",
                item: "https://www.TechBeside.co/services/web-qa-tester",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="QA Testing Services"
        description={
          <>
           At TechBeside, Expert QA testing services ensure your software is flawless and reliable. From <Link href="/services/web-development" className="text-indigo-600">identifying bugs</Link>,{" "}to improving functionality, we help businesses deliver top-quality applications that meet user expectations.
          </>
        }
        image={qatestinImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Comprehensive Quality Assurance Testing" 
        description={
          <>
          Our quality assurance process covers every aspect of your software, from performance and usability to security. With meticulous testing techniques, we ensure that your applications function seamlessly across all platforms.Our work of nature is to identify potential issues at early stages. This helps us in reducing risks and ensure to provide easy to-go platform to users. Going through thorough testing in real-world scenarios to make sure your software is ready to make impact online, delivering high performance and seamless functionality.
          </>
        }
           image={qaimage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={qaimage5}
        alt="Feature illustration"
        title="Recent Work: Delivering Quality You Can Trust"
        content={
          <>
           In a recent project, our QA testing services helped a SaaS company improve their application’s stability by 40%. Our comprehensive testing approach enabled the client to deliver a seamless user experience and gain higher customer satisfaction.We already have worked with e-commerce platforms when shopping online was at its peak. We enhanced their website’s load performance along with zero downtime. This level of dedication of our team has consistently helped business to build trust and do great in competitive markets.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={qatestingFaqs} />
        <OurTeam />
      <RelatedServices services={services} />
    
        <div className=" bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
          {/* {/* <ClientReviews /> */} */
          <ClientTestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default QATesting;


export const metadata = servicesMetadata.qaTesting;
