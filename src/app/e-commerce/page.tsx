import { industryMetadata } from '@/lib/metadata';
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import ecommerceImage from "../../../public/assets/portfoliopage/eccommerce.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

export const metadata = industryMetadata.ecommerce;

const Ecommerce = () => {
  const industrySlug = "e-commerce";

  return (
    <>
       {/* Hero section */}
       <HeroSection
      backgroundImage={ecommerceImage}
      title="E-Commerce Website and Mobile App Development Services"
      description={
        <>
          E-commerce is booming right now, and at the heart of this growth are apps for online shopping. We are here to help you take full advantage of this trend by aligning your mobile and web solutions in both functionality and design. If you don't yet have a web solution, we're ready to develop one for you. Digitize your business today and experience up to 10X conversions with our expert E-commerce application development services.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />

      <IndustryRelatedProjects slug={industrySlug} />
    </>
  )
}

export default Ecommerce