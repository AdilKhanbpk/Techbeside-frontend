import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import digitalMarketingHeroImage from "../../../../public/assets/servicespages/digitalmarketionHeroImage.webp";
import marketingImage1 from "../../../../public/assets/servicespages/digitalmarketing1.webp";
import marketingImage2 from "../../../../public/assets/servicespages/digitalmarketing2.webp";
import marketingImage3 from "../../../../public/assets/servicespages/digitalmarketing3.webp";
import marketingImage4 from "../../../../public/assets/servicespages/digitalmarketing4.webp";
import marketingImage5 from "../../../../public/assets/servicespages/digitalmarketing5.webp";

// RelatedServices images
import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
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

const DigitalMarketing = () => {
  const categorySlug = "digital-marketing-for-software-companies";
  const services = [
    {
      title: "Web Developement",
      description:
        "Making dynamic, responsive websites that put user satisfaction first.",
      icon: productDesignImage,
      link: "/services/web-development",
    },
    {
      title: "SEO & Content Writing",
      description:
        "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
      icon: motionDesignImage,
      link: "/services/seo-services-for-small-business",
    },
    {
      title: "Graphic Designing",
      description:
        "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
      icon: webDesignImage,
      link: "/services/affordable-graphic-design-services",
    },
  ];

  const digitalMarketingFaqs = [
    { question: "What services are included in digital marketing?", answer: " We offer social media marketing, PPC ads, email marketing, and SEO." },
    { question: "Do you manage social media accounts?", answer: " Yes, we handle Facebook, Instagram, LinkedIn, and Twitter marketing." },
    { question: "How do you track ad campaign performance?", answer: " We provide real-time analytics and conversion tracking." },
    { question: "Can you run paid ad campaigns?", answer: " Yes! We manage Google Ads, Facebook Ads, and LinkedIn Ads." },
    { question: "How long does it take to see digital marketing results?", answer: " Organic marketing takes 3-6 months, while paid ads show results instantly." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Grow your online presence with targeted digital marketing campaigns." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Boost engagement with creative social media strategies and analytics.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Leverage data to drive traffic and convert leads effectively." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Achieve consistent results with data-driven and time-tested techniques." },
  ];


  const sections = [
    {
      image: marketingImage2,
      alt: "PPC campaigns designed for traffic and conversion maximization",
      title: "PPC Campaigns Designed for Maximum ROI",
      content:
        "As specialists in PPC, we design campaigns that deliver high-impact results. Our team analyzes your business needs and targets the right audience with precision, ensuring your ads—whether Google or Meta Ads—generate maximum traffic and conversions.We go through a deep keyword research and competitor analysis to come up with the strategies that are data-driven and tailored to your goals. We thoroughly monitor and optimize your campaigns to ensure you stay ahead in a competitive market.",
    },
    {
      image: marketingImage3,
      alt: "Engaging Insta and FB ads that drive sales with creativity and analytics",
      title: "Insta and FB Ads That Deliver Impact",
      content: 'Our expertise in Insta and FB ads guarantees attention-grabbing campaigns that drive engagement and sales. We combine creativity with advanced analytics to craft ads that resonate with your audience and achieve your goals.We ensure your brand’s online presence through eye catching visuals and compelling ad copy. Our strategies are tailored to target the right audience to maximize the ROI. We also constantly monitor and optimize with time to time to keep your campaigns go along with the trends. Let’s work together and grab the right audience for your business.'
    },
    {
      image: marketingImage4,
      alt: "Branding that defines you and leaves a lasting impression",
      title: "Strategic Branding For Your Business",
      content:
        "Branding is more than a logo—it’s how the world perceives your business. Our experts take the time to understand your vision and values, delivering branding solutions that define your identity and leave a lasting impression on your audience.Every element of our strategy align with your business, whether it is visual aesthetics or messaging tone. We aim to connect you to your audience emotionally and your brand stand out by combining our creativity and our market research. Our strategies will make your brand trustworthy that inspires trust, loyalty and recognition across all touch points.",
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
                name: "Digital Marketing",
                item: "https://www.TechBeside.co/services/digital-marketing-for-software-companies",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Digital Marketing Services"
        description={
          <>
           At TechBeside, we combine creativity and strategy to offer tailored digital marketing services that meet your unique business goals. From effective branding to result-driven campaigns, our team’s expertise ensures your online success.
          </>
        }
        image={digitalMarketingHeroImage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Social Media Marketing: Your Audience, Engaged" 
        description={
          <>
         Our personalized approach to social media marketing helps brands foster authentic connections. With a deep understanding of platform algorithms, we craft compelling content and manage campaigns on Instagram, Facebook, and beyond to captivate and grow your audience.We promote your business digitally through engaging posts and targeted ads. We ensure your brand gets a spotlights online among your competitors. Our experts in marketing department analyze insights and adapt strategies which maximizes reach and hunt targeted audience which then turn into loyal customers.
          </>
        }
           image={marketingImage1}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={marketingImage1}
        alt="Bespoke solutions show 60% increase in conversion and audience growth"
        title="Proven Results Across Industries"
        content={
          <>
           With experience across multiple sectors, we bring personalized expertise to every project. For a retail client, our strategic Meta Ads increase conversions by 60%. For startups, our targeted social media marketing campaigns have driven audience growth and brand loyalty.Our diverse portfolio shows our excellence and the values we bring to industries such as technology, healthcare, real estate and e-commerce. Our past excellency push us to deliver more and come with the solutions for your business that not only exceed expectations but to bring dignity.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={digitalMarketingFaqs} />
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

export default DigitalMarketing;



export const metadata = servicesMetadata.digitalMarketing;
