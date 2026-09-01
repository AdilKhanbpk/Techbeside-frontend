import { industryMetadata } from '@/lib/metadata';
import IndustryRelatedProjects from '@/components/Industorycategory/industoryRelatedProject';
import restaurantImage from "../../../public/assets/portfoliopage/restaurant.webp";
import React from 'react'
import HeroSection from '@/components/portfolio/IndustryHeroSection';

export const metadata = industryMetadata.restaurants;

const Restaurant = () => {
  const industrySlug = "restaurants";

  return (
    <>
      {/* Hero section */}
      <HeroSection
      backgroundImage={restaurantImage}
      title="Restaurant Mobile App Development Company"
      description={
        <>
          From customized point-of-sale systems to table reservation platforms and online food delivery apps, we design software that simplifies your operations and enhances customer experiences.
          <br /><br />
          Whether you’re managing a single location or a chain of restaurants, our tailored tools help you operate efficiently, offer seamless services, and boost revenue—all in one integrated system.
        </>
      }
      buttonText="Get Started Today"
      buttonLink="/contact"
     />


      <IndustryRelatedProjects slug={industrySlug}/>
    </>
  )
}

export default Restaurant