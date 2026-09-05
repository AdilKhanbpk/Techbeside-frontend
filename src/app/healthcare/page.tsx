import { industryMetadata } from '@/lib/metadata';
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import healthcareImage from "../../../public/assets/portfoliopage/healthcare.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

export const metadata = industryMetadata.healthcare;

const Healthcare = () => {
  const industrySlug = "healthcare";

  return (
    <>
      {/* Hero section */}
     <HeroSection
      backgroundImage={healthcareImage}
      title="Custom HealthCare Software Development Solutions & Services"
      description={
        <>
          At TechBeside, we don’t just develop software—we build lasting relationships by bridging the bio and tech fields. With over five years of experience in the medical and tech industries, we understand the unique challenges healthcare organizations face.
          <br /><br />
          That’s why we deliver tailored solutions that seamlessly improve patient care, enhance reporting and analytics, strengthen data security, and boost efficiency—all under one roof. Using advanced approaches like IoMT, Blockchain, and AI, we combine expertise and innovation to meet your needs and drive meaningful results.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />

      {/* Related Industry Projects */}
      <IndustryRelatedProjects slug={industrySlug} />
    </>
  );
}

export default Healthcare;


