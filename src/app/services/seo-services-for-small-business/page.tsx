import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import SEOImage from "../../../../public/assets/servicespages/seoheroimage.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import seoimage1 from "../../../../public/assets/servicespages/seoimage1.webp";
import seoimage2 from "../../../../public/assets/servicespages/seoimade2.webp";
import seoimage3 from "../../../../public/assets/servicespages/seoimage3.webp";
import seoimage4 from "../../../../public/assets/servicespages/seoimage4.webp";
import seoimage5 from "../../../../public/assets/servicespages/seoimage5.webp";


// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
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

const SeoContentWriting = () => {
  const categorySlug = "seo-services-for-small-business";
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

  const seoFaqs = [
    { question: "What is included in your SEO services?", answer: " We offer keyword research, on-page SEO, backlinks, and content optimization." },
    { question: "How long does it take to see SEO results?", answer: " SEO results typically take 3-6 months, depending on competition." },
    { question: "Do you provide blog writing and content marketing?", answer: " Yes! We create SEO-friendly blogs, articles, and website content." },
    { question: "Can SEO help my local business?", answer: " Yes, our Local SEO strategies improve Google rankings in your area." },
    { question: "How do you track SEO performance?", answer: " We provide monthly reports and real-time analytics dashboards." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: " Improve your search engine rankings with optimized and engaging content." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Craft compelling content tailored to your audience and business goals.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Implement effective strategies to drive traffic and boost online visibility." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: " Deliver consistent and high-quality content on time to meet your needs." },
  ];


  const sections = [
    {
      image: seoimage2,
      alt: "Achieve better visibility with expert SEO consulting offering strategy, keyword research, and page optimization",
      title: "Strategic Consulting for Better Visibility",
      content:
        "Beyond content creation, we offer SEO consulting services to help you craft a results-driven strategy. Whether you need guidance on keyword research or optimizing existing pages, our consultants ensure your content aligns with your broader SEO goals.We focus on actionable insights that improve search rankings and drive targeted traffic. With continuous monitoring and adjustments, we help your business stay competitive in ever-evolving search engine algorithms.",
    },
    {
      image: seoimage3,
      alt: "Drive targeted traffic with every business niche's SEO content-enhanced experiences, driving engagement and conversions",
      title: "Optimization For Every Business Niche",
      content: `Our SEO content strategy focuses on natural keyword integration that aligns with search intent. By incorporating industry-specific keywords, we help your website attract targeted traffic and boost engagement, leading to improved rankings and conversions.We create customized content plans tailored to your business's unique needs, ensuring that your message resonates with the right audience. This approach not only increases visibility but also builds long-term trust with your customers.`
    },
    {
      image: seoimage4,
      alt: "Boost authority with technical SEO expertise in delivering content that attracts, retains visitors, and supports long-term growth",
      title: "Enhance Authority with Technical SEO Expertise",
      content:
        "Combining SEO content writing services with technical SEO knowledge, we ensure that your website content not only attracts but also retains visitors. From readability improvements to optimized linking structures, we deliver content that supports long-term growth.Our approach strengthens your site’s authority in search engines, driving higher rankings and sustained traffic. By addressing technical issues, we improve user experience and ensure that your content reaches its full potential",
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
                name: "SEO Services",
                item: "https://www.TechBeside.co/services/seo-services-for-small-business",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="SEO Content Writing Services"
        description={
          <>
          At TechBeside, we provide professional SEO content writing services designed to align with your business goals and improve search engine visibility. With a focus on quality and relevance, our content engages audiences and supports a comprehensive SEO content strategy that drives measurable results.
          </>
        }
        image={SEOImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection
        title="Go-To Technical SEO Agency" 
        description={
          <>
          As a trusted technical SEO agency, we ensure every piece of content is optimized for search engine success. From metadata to keyword placement, our team blends technical expertise with creative writing to help your site rank higher and convert better.We conduct thorough audits to identify and fix any SEO issues, ensuring your website performs at its best. By focusing on on-page optimization, site speed, and mobile responsiveness, we drive organic traffic and improve user engagement.
          </>
        }
           image={seoimage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={seoimage5}
        alt="With a 50% increase in organic traffic and other measurable results, expert SEO strategies are producing improved keyword rankings"
        title="Results That Speak for Themselves"
        content={
          <>
           In a recent project, we partnered with an e-commerce platform to revamp their SEO content strategy, resulting in a 50% increase in organic traffic. Additionally, as a technical SEO agency, we helped a tech company optimize its blog content, improving keyword rankings and audience engagement.These successes showcase our ability to drive measurable improvements and deliver lasting results. By aligning strategies with business objectives, we ensure that every optimization contributes to overall growth and visibility.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={seoFaqs} />
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

export default SeoContentWriting;



export const metadata = servicesMetadata.seo;
