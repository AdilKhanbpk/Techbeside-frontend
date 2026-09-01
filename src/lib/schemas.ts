// Schema markup generators for SEO

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TechCreator",
  description: "Software development and digital marketing agency",
  url: "https://www.techcreator.co",
  logo: "https://www.techcreator.co/assets/icons/Logo.png",
  image: "https://www.techcreator.co/assets/icons/Logo.png",
  telephone: "+92 311 9265290",
  email: "info@techcreator.co",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TechCreator Office",
    addressLocality: "Pakistan",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.facebook.com/techcreatorfb/",
    "https://www.linkedin.com/company/techcreator",
    "https://www.youtube.com/@techcreator9512",
    "https://www.instagram.com/techcreatorco/",
    "https://twitter.com/techcreatorco",
    "https://www.tiktok.com/@techcreator.co",
  ],
  areaServed: ["US", "GB", "CA", "PK"],
});

export const generateServiceSchema = (
  serviceName: string,
  description: string,
  serviceUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  url: serviceUrl,
  provider: {
    "@type": "Organization",
    name: "TechCreator",
    url: "https://www.techcreator.co",
    logo: "https://www.techcreator.co/assets/icons/Logo.png",
    sameAs: [
      "https://www.facebook.com/techcreatorfb/",
      "https://www.linkedin.com/company/techcreator",
      "https://www.youtube.com/@techcreator9512",
      "https://www.instagram.com/techcreatorco/",
      "https://twitter.com/techcreatorco",
    ],
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateBlogPostingSchema = (
  title: string,
  description: string,
  imageUrl: string,
  datePublished: string,
  dateModified: string,
  author: string,
  articleUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description: description,
  image: imageUrl,
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "TechCreator",
    logo: {
      "@type": "ImageObject",
      url: "https://www.techcreator.co/assets/icons/Logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechCreator",
  url: "https://www.techcreator.co",
  logo: "https://www.techcreator.co/assets/icons/Logo.png",
  description:
    "TechCreator is a software development and digital marketing agency providing innovative solutions globally.",
  founder: {
    "@type": "Person",
    name: "Saud Khan",
    sameAs: [
      "https://www.linkedin.com/in/saudkhan39",
      "https://github.com/saudkhanbpk/",
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92 311 9265290",
    contactType: "Customer Service",
    email: "info@techcreator.co",
    areaServed: ["US", "GB", "CA", "PK"],
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/techcreatorfb/",
    "https://www.linkedin.com/company/techcreator",
    "https://www.youtube.com/@techcreator9512",
    "https://www.instagram.com/techcreatorco/",
    "https://twitter.com/techcreatorco",
    "https://www.tiktok.com/@techcreator.co",
  ],
});

export const generateAggregateRatingSchema = (
  ratingValue: number,
  reviewCount: number,
  ratingCount: number
) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  ratingValue: ratingValue,
  reviewCount: reviewCount,
  ratingCount: ratingCount,
});

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.replace(/\*\*/g, ""),
    },
  })),
});
