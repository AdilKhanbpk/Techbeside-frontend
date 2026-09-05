import { pageMetadata } from '@/lib/metadata';
import ContactUs from '@/components/contact/Contactus'

export const metadata = pageMetadata.contact;

const page = () => {
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
                name: "Contact",
                item: "https://www.TechBeside.co/contact",
              },
            ],
          }),
        }}
      />
      <ContactUs/>
    </>
  )
}

export default page
