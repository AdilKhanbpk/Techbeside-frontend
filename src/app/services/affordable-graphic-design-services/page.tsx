import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import heroimage from "../../../../public/assets/servicespages/graphichero.webp";
import Image from "next/image";
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";
import graphic1 from "../../../../public/assets/servicespages/graphi1.webp";
import graphic2 from "../../../../public/assets/servicespages/graphic2.webp";
import graphic3 from "../../../../public/assets/servicespages/graphic3.webp";
import FramedFeatureSectionImage from "../../../../public/assets/servicespages/FramedFeatureSection.webp";
import FeatureImage from "../../../../public/assets/servicespages/featureimage.webp";

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
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";

const GraphicDesign = () => {
  const categorySlug = "affordable-graphic-design-services";
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
      title: "SEO & Content Writing",
      description:
        "Optimizing content to produce traffic and are highly rated in the search engine results pages.",
      icon: motionDesignImage,
      link: "/services/seo-services-for-small-business",
    },
  ];

  const graphicDesigningFaqs = [
    { question: "What graphic design services do you offer?", answer: " We create logos, branding, UI designs, illustrations, and social media graphics." },
    { question: "Which design tools do you use?", answer: " We work with Adobe Photoshop, Illustrator, Figma, and Canva." },
    { question: "How long does a graphic design project take?", answer: " Simple designs take 2-5 days, while branding projects take 1-4 weeks." },
    { question: "Do you provide custom branding packages?", answer: " Yes! We offer logo, brand identity, and social media design." },
    { question: "Can you create designs for both digital and print?", answer: " Absolutely! We design business cards, posters, and social media graphics." },
  ];

  const features = [
    { icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />, text: "Create eye-catching designs that represent your brand effectively." },
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, text: 'Deliver creative solutions for logos, banners, brochures, and more.' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Focus on innovation to create stunning visuals that captivate your audience." },
    { icon: <Clock className="w-6 h-6 text-blue-500" />, text: "Ensure timely delivery of designs without compromising on quality." },
  ];


  const sections = [
    {
      image: graphic1,
      alt: "TechBeside attracts audience to your products graphic designing",
      title: "Agency for Graphic Design Tailored to Your Brand",
      content:
        "At TechBeside, we understand the importance of design diversity. Our expertise spans various graphic design styles, ensuring we can create the perfect visual identity for your business, whether it’s modern, minimalistic, or vibrant and bold.We work closely and understand the needs of your business and then translating them into audience-oriented designs. We deal in different categories such as digital assets, print materials or full brand overhauls. Our designs will always resonate with your target market.",
    },
    {
      image: graphic2,
      alt: "TechBeside offers services in graphic designing for your brand",
      title: "Custom Designs for Every Need",
      content: 'We offer a wide range of services, including branding, infographics, and digital marketing assets. With our agency for graphic design, you’ll receive personalized solutions designed to stand out in today’s competitive market.Our team of experts make sure that every element in design reflect your unique identity of your brand. Along with attention-grabbing logos to engaging social media visuals we guarantee designs that not only look great but also driven results and elevate your brand’s online presence.'
    },
    {
      image: graphic3,
      alt: "Strategic design to boost brand visibility and industry leadership",
      title: "Brand with Strategic Visuals",
      content:
        "Effective design goes beyond aesthetics. Our designs are strategically crafted to enhance your brand’s visibility and connect with your target audience, positioning your business as a leader in its industry.Our every designs convey a full story of your business and its core message. Each design is purposeful that speaks directly to your customer and build your brand recognition. These aesthetic and self-speaking will ultimately drive customer loyalty and growth.",
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
                name: "Graphic Design Services",
                item: "https://www.TechBeside.co/services/affordable-graphic-design-services",
              },
            ],
          }),
        }}
      />
      <Herosection
        title="Affordable Graphic Design Services for Your Business"
        description={
          <>
           <Link href="/" className="text-indigo-600">TechBeside</Link>,{" "}is your go-to agency for graphic design, offering creative solutions that bring your ideas to life. From logos to <Link href="/services/digital-marketing-for-software-companies" className="text-indigo-600">marketing materials</Link>,{" "}our designs are crafted to communicate your brand's message effectively and captivate your audience.
          </>
        }
        image={heroimage}
      />

      <div className="max-w-[1450px] mx-auto  md:mt-16 mt-9 px-4">
        <FeatureSection 
        title="Partner with One of the Top Graphic Design Companies" 
        description={
          <>
          As one of the leading graphic design companies, we provide professional services that enhance your brand’s identity. Our team of skilled designers specializes in creating high-impact visuals that drive engagement and leave a lasting impression.Our designs reflect your brand personality and attracts your targeted audience. We ensure quality, whether it is logo or other marketing materials. Being creative and innovative is our identity.
          </>
        }
           image={FeatureImage}

         />

        <FeaturesList title="Why Choose Us" features={features} />
        <DiagonalFeatureSection sections={sections}  />
        <FramedFeatureSection  
        image={FramedFeatureSectionImage}
        alt="Feature illustration"
        title="Comprehensive Web Development Services with Ongoing Support"
        content={
          <>
           Our commitment doesn’t end with the launch of your website or app. We provide comprehensive web development services, from concept to deployment, with continuous support to ensure your platform evolves with your business. Trust us to deliver innovation, functionality, and unmatched quality in every project.With regular updates and maintenance, your platform stays ahead of the competition.
          </>
        }
      />
        <ServicesRelatedProjects slug={categorySlug} />
        <FaqSection title="Frequently Asked Questions" faqs={graphicDesigningFaqs} />
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

export default GraphicDesign;


export const metadata = servicesMetadata.graphicDesign;
