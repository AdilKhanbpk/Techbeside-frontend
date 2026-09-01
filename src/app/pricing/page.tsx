import { pageMetadata } from "@/lib/metadata";
import PricingCards from "@/components/pricing/PricingCards";

export const metadata = pageMetadata.pricing;

const Pricing = () => {
  return (  
      <div>
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
                  name: "Pricing",
                  item: "https://www.techcreator.co/pricing",
                },
              ],
            }),
          }}
        />
        <PricingCards />
      </div>
    
  );
}

export default Pricing;
