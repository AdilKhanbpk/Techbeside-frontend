import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata.about;

import AboutHeroSection from "@/components/about/AboutHeroSection";
import ExpertTeam from "@/components/about/ExpertTeam";
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

      {/* AboutPage + Organization schema – helps Google surface company facts directly in search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About TechBeside",
            url: "https://www.TechBeside.co/about",
            mainEntity: {
              "@type": "Organization",
              name: "TechBeside",
              url: "https://www.TechBeside.co/",
              foundingDate: "2019",
              description:
                "TechBeside is a software company delivering web development, mobile app development, DevOps and graphic design services for startups and enterprises.",
              sameAs: ["https://www.linkedin.com/in/muhammad-adil-1a44a830b/"],
            },
          }),
        }}
      />

      <main>
        <AboutHeroSection />
        <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9 space-y-16 md:space-y-24">
          <Overview />
          <ServicesSection />
          <ProjectsCount />
          <OverviewSec />
          {/* <ExpertTeam /> */}
        </div>
      </main>
    </>
  );
};

export default About;