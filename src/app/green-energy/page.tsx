import { industryMetadata } from '@/lib/metadata';
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import greenEnergyImage from "../../../public/assets/portfoliopage/greenenergy.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

export const metadata = industryMetadata.greenEnergy;

const GreenEnergy = () => {
  const industrySlug = "green-energy";

  return (
    <>
      {/* Hero section */}
      <HeroSection
      backgroundImage={greenEnergyImage}
      title="Green Energy Software Solutions for Sustainable Future"
      description={
        <>
         With a mission to help user in the future of innovation in renewable energy, TechCreator Software Company also creates custom software solutions for sustainability and efficiency.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />

      <IndustryRelatedProjects slug={industrySlug} />
    </>
  )
}

export default GreenEnergy


