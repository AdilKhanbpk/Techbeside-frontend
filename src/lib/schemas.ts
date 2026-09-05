// Schema markup generators for SEO

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TechBeside",
  description: "Software development and digital marketing agency",
  url: "https://www.techbeside.dev",
  logo: "https://www.techbeside.dev/logo.png",
  image: "https://www.techbeside.dev/logo.png",
  telephone: "+92 311 9265290",
  email: "info@techbeside.dev",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TechBeside Office",
    addressLocality: "Pakistan",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.facebook.com/techbesideofficial/",
    "https://www.linkedin.com/company/techbeside",
    "https://www.youtube.com/@techbeside",
    "https://www.instagram.com/techbesideofficial/",
    "https://twitter.com/techbesideofficial",
    "https://www.tiktok.com/@techbeside",
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
    name: "TechBeside",
    url: "https://www.techbeside.dev",
    logo: "https://www.techbeside.dev/logo.png",
    sameAs: [
      "https://www.facebook.com/techbesideofficial/",
      "https://www.linkedin.com/company/techbeside",
      "https://www.youtube.com/@techbeside",
      "https://www.instagram.com/techbesideofficial/",
      "https://twitter.com/techbesideofficial",
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
    name: "TechBeside",
    logo: {
      "@type": "ImageObject",
      url: "https://www.techbeside.dev/logo.png",
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
  name: "TechBeside",
  url: "https://www.techbeside.dev",
  logo: "https://www.techbeside.dev/logo.png",
  description:
    "TechBeside is a software development and digital marketing agency providing innovative solutions globally.",
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
    email: "info@techbeside.dev",
    areaServed: ["US", "GB", "CA", "PK"],
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/techbesideofficial/",
    "https://www.linkedin.com/company/techbeside",
    "https://www.youtube.com/@techbeside",
    "https://www.instagram.com/techbesideofficial/",
    "https://twitter.com/techbesideofficial",
    "https://www.tiktok.com/@techbeside",
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
