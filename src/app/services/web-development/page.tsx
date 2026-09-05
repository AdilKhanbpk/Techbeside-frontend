import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";
import OurTeam from "@/components/about/OurTeam";
import Herosection from "@/components/services/Herosection";
import FeatureSection from "@/components/services/FeatureSection";
import FeaturesList from "@/components/services/FeaturesList";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";
import RelatedServices from "@/components/services/RelatedServices";
import webDevelopmentImage from "../../../../public/assets/servicespages/webdevelopment.webp";
import Link from "next/link";
import webimage1 from "../../../../public/assets/servicespages/webImage1.webp";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import webimage2 from '../../../../public/assets/servicespages/webserviceImage1.webp';
import webimage3 from '../../../../public/assets/servicespages/webserviceimage2.webp';
import webimage4 from '../../../../public/assets/servicespages/webserviceimage3.webp';
import webimage5 from "../../../../public/assets/servicespages/webimage5.webp";

import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";




const WebDevelopment = () => {
  const categorySlug = "web-development";

  const webDevFaqs = [
    { question: "Which technologies do you use for web development?", answer: " We use modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and TailwindCSS for building scalable web applications." },
    { question: "Do you develop eCommerce websites?", answer: " Yes, we specialize in eCommerce platforms like Shopify, WooCommerce, and custom solutions with secure payment gateways." },
    { question: "How long does it take to develop a website?", answer: " Development time depends on complexity, but typically 4-12 weeks for a complete project." },
    { question: "Do you provide website maintenance and support?", answer: " Yes, we offer ongoing maintenance to update content, fix bugs, and improve security." },
    { question: "Will my website be SEO-friendly and mobile-responsive?", answer: " Absolutely! We ensure your website is optimized for search engines and fully responsive on all devices." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Build scalable websites with modern technologies tailored to your business goals." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Ensure seamless performance and intuitive user experience with our web solutions.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Integrate powerful features and tools to enhance your website’s functionality." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Deliver projects on time with precision and a focus on quality." },
  ];


  const sections = [
    {
      image: webimage2,
      alt: "Custom Web App Development",
      title: "Custom Web App Development for Dynamic Digital Solutions",
      content:
        "We love working on fresh concepts, ideas and technologies that break industry standards and generate online traction. A solution that goes beyond a traditional website? Our custom web app development services deliver feature-rich, interactive applications that cater to your business's unique requirements. We specialize in building web apps that enhance user engagement and streamline your operations.",
    },
    {
      image: webimage3,
      alt: "MERN & MEAN Web Development",
      title: "MERN & MEAN Web Development Services for High Performance",
      content: (     
         <>
          Being a specialist in MERN and MEAN web development services, we build scalable, secure, and {" "}
          <Link  href="/services/web-development" className="text-blue-600">high-performance websites</Link>,
           based on your business needs. No matter if your need is a {" "}
          <Link  href="/blog" className="text-blue-600">content-heavy website</Link>, , a feature-rich {" "}
          <Link  href="/e-commerce" className="text-blue-600"> e-commerce platform</Link>, or an advanced web application, our developers harness the power and flexibility of MERN (MongoDB, Express, React, Node.js) and MEAN (MongoDB, Express, Angular, Node.js) to provide exemplary solution.,
         </>
       )
    },
    {
      image: webimage4,
      alt: "React Native Development",
      title: "React Native Development Services for Cross-Platform Excellence",
      content:
        "By means of React Native development service experts, we built cross-platform mobile applications that provide native-like experience on iOS and Android. To build high-performing and cost-effective mobile solutions, our developers use the power of React Native for building everything-from feature-rich business applications, dynamic e-commerce solutions to interactive social platforms.",
    },
  ];

  const webDevServices = [
    {
      title: "Custom Web Development",
      description: "Tailor-made solutions for your online presence.",
      icon: webDesignImage,
      link: "/services/custom-web-development",
    },
    {
      title: "E-commerce Solutions",
      description: "Creating robust online stores with seamless shopping experience.",
      icon: motionDesignImage,
      link: "/services/ecommerce-solutions",
    },
    {
      title: "Website Maintenance",
      description: "Ensuring your website stays up-to-date and secure.",
      icon: illustrationDesignImage,
      link: "/services/website-maintenance",
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
                name: "Web Development",
                item: "https://www.TechBeside.co/services/web-development",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Progressive Web Development Company"
        description={
          <>
            TechBeside, a Progressive Web Development Company, accelerates your business growth by delivering custom web solutions tailored to your objectives. Our team of skilled and experienced developers creates industry-specific websites for  {" "}
            <Link  href="/healthcare" className="text-blue-600">Healthcare</Link>,{" "}
            <Link href="/real-estate" className="text-blue-600">Real Estate</Link>, {" "}
            <Link href="/restaurants" className="text-blue-600">Restaurants</Link>, and {" "}
            <Link href="/e-commerce" className="text-blue-600">E-Commerce stores</Link>. We ensure seamless functionality, innovation, and  <Link href="/services/ui-ux-design-agency" className="text-blue-600">optimal user experience</Link>, helping businesses stay ahead in the  <Link href="/services/digital-marketing-for-software-companies" className="text-blue-600">digital landscape</Link>.
          </>
        }
        image={webDevelopmentImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Bespoke Web Development Tailored to Your Vision" 
        description={
          <>
            Stand out from the crowd with bespoke web development crafted to meet your specific needs. Our team of skilled developers creates custom solutions that align with your brand and business goals, offering unique designs and functionalities to captivate your audience and elevate your online presence. From concept to launch, we ensure every detail is perfected to deliver an exceptional{" "}
            <Link  href="/services/ui-ux-design-agency" className="underline">user experience.</Link>{" "} Let us transform your vision into a {" "}
            <Link href="/services/digital-marketing-for-software-companies" className="underline">dynamic digital reality</Link>
          </>
        }
           image={webimage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={webimage5}
        alt="Feature illustration"
        title="Comprehensive Web Development Services with Ongoing Support"
        content={
          <>
            Our commitment doesn’t end with the launch of your website or app. We provide comprehensive web development services, from concept to deployment, with continuous support to ensure your platform evolves with your business. Trust us to deliver innovation, functionality, and unmatched quality in every project. Whether you need updates, maintenance, or new features, we’re here every step of the way. Our team values collaboration and ensures your vision remains at the forefront. With us, your digital presence is always in expert hands.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={webDevFaqs} />
        <OurTeam />
      <RelatedServices services={webDevServices} />
    
        <div className=" bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
          <ClientReviews />
          <ClientTestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;

export const metadata = servicesMetadata.webDevelopment;
