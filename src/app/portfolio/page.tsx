import { pageMetadata } from "@/lib/metadata";
import ClientReviews from "@/components/landingPage/ClientReviews"
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection"
import HeroSection from "@/components/portfolio/HeroSection"
import OurImpresiveProject from "@/components/portfolio/OurImpresiveProject"
import PortfolioSection from "@/components/portfolio/PortfolioSection"

export const metadata = pageMetadata.portfolio;

const Portfolio = () => {
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
                name: "Portfolio",
                item: "https://www.techcreator.co/portfolio",
              },
            ],
          }),
        }}
      />
      <HeroSection/>

    <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
    {/* <PortfolioSection/> */}
      <OurImpresiveProject/>
      <div className=" bg-purple-600 md:mt-16 mt-9 md:mb-16 mb-9 ">
<ClientReviews/>
<ClientTestimonialsSection />
</div>
    </div>
     
    </>
  )
}

export default Portfolio
