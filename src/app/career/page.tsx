import { pageMetadata } from '@/lib/metadata';
import CareerHeroSection from '@/components/Career/CareerHeroSection'
import CoreValues from '@/components/Career/CoreValues'
import DiversitySection from '@/components/Career/DiversitySection'
import JobsCard from '@/components/Career/JobsCard'
import React from 'react'



export const metadata = pageMetadata.career;

const Career = () => {
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
                item: "https://www.techcreator.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Career",
                item: "https://www.techcreator.co/career",
              },
            ],
          }),
        }}
      />
      <CareerHeroSection/>
    <div className='max-w-[1450px] mx-auto px-4 md:mt-16'>
      <CoreValues/>
      <JobsCard />
      <DiversitySection/>
      </div>
    </>
  )
}

export default Career
