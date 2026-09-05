import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata.about;

import AboutHeroSection from "@/components/about/AboutHeroSection";
import ExpertTeam from "@/components/about/ExpertTeam";
import OurTeam from "@/components/about/OurTeam";
import Overview from "@/components/about/Overview";
import OverviewSec from "@/components/about/Overview-sec";
import ProjectsCount from "@/components/landingPage/ProjectsCount";
import ServicesSection from "@/components/landingPage/ServicesSection";
import React from "react";

const About = () => {
  return (
    <>
      {/* BreadcrumbList Schema – shows breadcrumb path in Google Search results */}
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
                name: "About",
                item: "https://www.TechBeside.co/about",
              },
            ],
          }),
        }}
      />
      <AboutHeroSection />
      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        <Overview />
        <div className="md:mt-16 mt-9">
          <ServicesSection />
        </div>
        <ProjectsCount />
        <OverviewSec />
        <ExpertTeam />
      </div>
    </>
  );
};

export default About;


