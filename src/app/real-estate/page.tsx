import { industryMetadata } from '@/lib/metadata';
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import realstateImage from "../../../public/assets/portfoliopage/realstate.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

export const metadata = industryMetadata.realEstate;

const RealEstate = () => {
  const industrySlug = "real-estate";



  return (
    <>
      {/* Hero section */}
      <HeroSection
        backgroundImage={realstateImage}
        title="Real Estate Web and App development company"
        description={
          <>
            At TechBeside, we go beyond app creation by offering comprehensive maintenance services to keep your app updated and running smoothly. From resolving bugs to implementing version updates, our experts ensure your app stays reliable and efficient.
            <br /><br />
            Our mobile apps come packed with features like price insights, location details, property age, and more—delivering the tools your audience needs to make informed decisions.
          </>
        }
        buttonText="Get Started Today"
        buttonLink="/contact"
      />

      <IndustryRelatedProjects slug={industrySlug} />
    </>
  )
}

export default RealEstate


