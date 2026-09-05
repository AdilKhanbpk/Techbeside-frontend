import { Metadata } from 'next';

interface MetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  type?: 'website' | 'article';
}

const BASE_URL = 'https://www.techbeside.dev';
const DEFAULT_OG_IMAGE = 'https://www.techbeside.dev/logo.png';

export const generateMetadata = (
  path: string,
  options: MetadataOptions
): Metadata => {
  const {
    title,
    description,
    keywords,
    ogImage = DEFAULT_OG_IMAGE,
    ogImageAlt = 'TechBeside - Software Development & Digital Marketing',
    twitterCard = 'summary_large_image',
    author,
    publishedDate,
    modifiedDate,
    type = 'website',
  } = options;

  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | TechBeside`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      siteName: 'TechBeside',
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@techbesideofficial',
    },
  };

  if (publishedDate) {
    metadata.openGraph = {
      ...metadata.openGraph,
      publishedTime: publishedDate,
    } as any;
  }

  if (modifiedDate) {
    metadata.openGraph = {
      ...metadata.openGraph,
      modifiedTime: modifiedDate,
    } as any;
  }

  return metadata;
};

// Predefined metadata for common pages
export const pageMetadata = {
  home: generateMetadata('/', {
    title: 'Software Development and Digital Marketing Agency',
    description:
      'With TechBeside, you can get the marketing and development solutions you need to grow your company. Compete in your market now.',
    keywords: [
      'software development',
      'digital marketing',
      'web development',
      'mobile app development',
      'custom software solutions',
    ],
  }),

  about: generateMetadata('/about', {
    title: 'About Us',
    description:
      'Learn about TechBeside team of expert developers, designers, and marketers dedicated to delivering innovative software solutions and digital marketing strategies.',
    keywords: [
      'about techbeside',
      'software development team',
      'digital marketing experts',
      'custom software company',
    ],
  }),

  services: generateMetadata('/services', {
    title: 'Services - Software Development & Digital Marketing',
    description:
      'Explore our comprehensive services including web development, mobile apps, UI/UX design, DevOps, SEO, graphic design, QA testing, project management, software maintenance, digital marketing, and SaaS MVP development.',
    keywords: [
      'software development services',
      'digital marketing services',
      'web development',
      'mobile app development',
      'UI/UX design',
      'DevOps services',
      'QA testing services',
      'project management',
      'software maintenance',
      'graphic design services',
      'SEO services',
      'SaaS MVP development',
    ],
  }),

  blog: generateMetadata('/blog', {
    title: 'Blog - Tech Insights & Industry Trends',
    description:
      'Stay updated with the latest trends in software development, digital marketing, technology insights, and best practices from TechBeside experts.',
    keywords: [
      'tech blog',
      'software development trends',
      'digital marketing tips',
      'technology insights',
      'industry trends',
    ],
  }),

  portfolio: generateMetadata('/portfolio', {
    title: 'Portfolio - Our Projects & Case Studies',
    description:
      'Explore our portfolio of successful projects across web development, mobile apps, e-commerce, and digital marketing solutions.',
    keywords: [
      'portfolio',
      'case studies',
      'projects',
      'web development projects',
      'mobile app portfolio',
    ],
  }),

  pricing: generateMetadata('/pricing', {
    title: 'Pricing - Transparent & Flexible Plans',
    description:
      'Discover our transparent pricing plans for web development, mobile apps, digital marketing, and other services. Get a free quote today.',
    keywords: [
      'pricing',
      'software development pricing',
      'digital marketing pricing',
      'service packages',
      'affordable solutions',
    ],
  }),

  contact: generateMetadata('/contact', {
    title: 'Contact Us - Get Your Free Consultation',
    description:
      'Ready to transform your business? Contact TechBeside today for a free consultation and let us help you achieve your goals.',
    keywords: [
      'contact us',
      'get in touch',
      'free consultation',
      'software development inquiry',
      'digital marketing inquiry',
    ],
  }),

  career: generateMetadata('/career', {
    title: 'Careers - Join Our Team',
    description:
      'Join the TechBeside team! Explore career opportunities and become part of our innovative software development and digital marketing company.',
    keywords: [
      'careers',
      'jobs',
      'hiring',
      'software developer jobs',
      'digital marketer jobs',
    ],
  }),

  termsConditions: generateMetadata('/terms-conditions', {
    title: 'Terms and Conditions - Rules for Using Our Platform',
    description:
      'Understand the rules, responsibilities, and limitations for using TechBeside\'s services. Explore user obligations, prohibited activities, content policies, and governing laws.',
    keywords: [
      'terms and conditions',
      'terms of service',
      'legal',
      'user agreement',
      'platform rules',
    ],
  }),

  privacyPolicy: generateMetadata('/privacy-policy', {
    title: 'Privacy Policy - Your Data, Protected',
    description:
      'Learn how TechBeside collects, uses, and protects your data to ensure a safe and personalized experience. Explore our privacy practices, data security measures, and cookie usage.',
    keywords: [
      'privacy policy',
      'data protection',
      'personal data',
      'user privacy',
      'GDPR',
      'data security',
    ],
  }),

  jobApply: generateMetadata('/job-apply', {
    title: 'Apply for a Job at TechBeside',
    description:
      'Submit your job application to TechBeside. Send us your CV and join our team of expert developers, designers, and digital marketers.',
    keywords: [
      'job application',
      'careers at TechBeside',
      'apply now',
      'software developer jobs',
      'digital marketer jobs',
    ],
  }),

  confirmation: {
    ...generateMetadata('/confirmation', {
      title: 'Thank You - Request Submitted',
      description:
        'Your request has been submitted successfully. TechBeside will review it and get back to you as soon as possible.',
      keywords: [],
    }),
    robots: {
      index: false,
      follow: false,
    },
  },
};

// Service page metadata generator
export const servicePageMetadata = (
  serviceName: string,
  slug: string,
  description: string,
  keywords: string[]
) =>
  generateMetadata(`/services/${slug}`, {
    title: `${serviceName} Services`,
    description,
    keywords,
  });

// Blog post metadata generator
export const blogPostMetadata = (
  title: string,
  slug: string,
  description: string,
  keywords: string[],
  publishedDate?: string,
  author?: string
) =>
  generateMetadata(`/blog/${slug}`, {
    title,
    description,
    keywords,
    publishedDate,
    author,
    type: 'article',
  });

// Service-specific metadata
export const servicesMetadata = {
  webDevelopment: generateMetadata('/services/web-development', {
    title: 'Progressive Web Development Company',
    description: 'TechBeside provides full-fledged progressive web app development services. Custom, scalable, and SEO-friendly web solutions for your business.',
    keywords: ['progressive web development', 'web development company', 'custom web solutions', 'responsive web design', 'progressive web apps'],
  }),

  mobileApp: generateMetadata('/services/mobile-app-development-company', {
    title: 'Android and iOS Mobile App Development Services',
    description: 'Build iOS and Android mobile apps with TechBeside. Expert mobile app developers creating innovative, user-centric applications.',
    keywords: ['Android app development', 'iOS app development', 'mobile app development services', 'cross-platform apps', 'mobile solutions'],
  }),

  uiUxDesign: generateMetadata('/services/ui-ux-design-agency', {
    title: 'UI/UX Design Services - Exceptional Digital Experiences',
    description: 'Award-winning UI/UX design agency creating beautiful, intuitive interfaces that enhance user experience and drive conversions.',
    keywords: ['UI/UX design services', 'user interface design', 'user experience design', 'design agency', 'digital experience design'],
  }),

  devops: generateMetadata('/services/devops', {
    title: 'Expert DevOps Consulting',
    description: 'Professional DevOps services for CI/CD pipeline automation, cloud infrastructure, and scalable software deployment.',
    keywords: ['DevOps consulting', 'CI/CD', 'cloud infrastructure', 'automation', 'deployment'],
  }),

  projectManagement: generateMetadata('/services/project-management', {
    title: 'Complete Project Management Services',
    description: 'Expert project management services ensuring timely delivery, quality control, and transparent communication throughout your project lifecycle.',
    keywords: ['project management services', 'agile management', 'scrum', 'project delivery', 'development management'],
  }),

  seo: generateMetadata('/services/seo-services-for-small-business', {
    title: 'SEO Content Writing Services',
    description: 'Affordable SEO services for small businesses to improve search rankings, drive organic traffic, and increase online visibility.',
    keywords: ['SEO content writing', 'search engine optimization', 'digital marketing', 'organic traffic', 'small business SEO'],
  }),

  softwareMaintenance: generateMetadata('/services/software-maintenance-services', {
    title: 'Reliable Software Maintenance Services',
    description: 'Reliable software maintenance services ensuring your applications stay secure, updated, and performing optimally.',
    keywords: ['software maintenance services', 'application support', 'bug fixes', 'system updates', 'technical support'],
  }),

  graphicDesign: generateMetadata('/services/affordable-graphic-design-services', {
    title: 'Affordable Graphic Design Services - Creative Solutions',
    description: 'Professional graphic design services for branding, marketing materials, and visual content creation at competitive prices.',
    keywords: ['graphic design', 'logo design', 'branding', 'visual design', 'creative services'],
  }), // NOTE: kept as-is — fix the H1 on this page instead, see below

  qaTesting: generateMetadata('/services/web-qa-tester', {
    title: 'QA Testing Services',
    description: 'Comprehensive QA testing services including manual testing, automation testing, and quality assurance for your applications.',
    keywords: ['QA testing services', 'quality assurance', 'software testing', 'test automation', 'bug detection'],
  }),

  digitalMarketing: generateMetadata('/services/digital-marketing-for-software-companies', {
    title: 'Digital Marketing Services',
    description: 'Specialized digital marketing services for software companies. Increase leads, boost sales, and build your brand online.',
    keywords: ['digital marketing services', 'software marketing', 'online marketing', 'lead generation', 'brand promotion'],
  }),

  saasMvp: generateMetadata('/services/saas-mvp-development', {
    title: 'SaaS MVP Development - Launch in 30-45 Days',
    description: 'Turn your SaaS idea into a scalable, market-ready product in 30-45 days. Full-stack MVP development with modern tech, SEO optimization, and deployment support.',
    keywords: ['SaaS MVP development', 'startup software development', 'MVP development', 'SaaS development services', 'product development', 'launch SaaS fast'],
  }),
};

// Industry-specific metadata
export const industryMetadata = {
  restaurants: generateMetadata('/restaurants', {
    title: 'Restaurant Mobile App Development Company',
    description: 'Custom restaurant software including POS systems, online ordering, table reservations, and delivery management solutions tailored for your business.',
    keywords: ['restaurant mobile app development', 'POS system', 'restaurant software', 'food delivery app', 'online ordering system'],
  }),

  ecommerce: generateMetadata('/e-commerce', {
    title: 'E-Commerce Website and Mobile App Development Services',
    description: 'Full-stack e-commerce development services including Shopify, WooCommerce, and custom platforms with secure payments and inventory management.',
    keywords: ['e-commerce website development', 'e-commerce app development', 'online store', 'shopping cart', 'payment gateway'],
  }),

  realEstate: generateMetadata('/real-estate', {
    title: 'Real Estate Web and App Development Company',
    description: 'Specialized real estate software for property management, listing platforms, CRM systems, and investor portals to streamline your operations.',
    keywords: ['real estate web development', 'real estate app development', 'property management', 'real estate CRM', 'listing platform'],
  }),

  hospitality: generateMetadata('/hospitality', {
    title: 'Hospitality Website and App Development Service',
    description: 'Comprehensive hospitality solutions including booking systems, guest management, staff coordination, and revenue optimization tools.',
    keywords: ['hospitality website development', 'hospitality app development', 'hotel management', 'booking system', 'guest management'],
  }),

  greenEnergy: generateMetadata('/green-energy', {
    title: 'Green Energy Software Solutions',
    description: 'Custom software for renewable energy companies including monitoring, analytics, grid management, and sustainability reporting tools.',
    keywords: ['green energy software', 'sustainable energy solutions', 'renewable energy', 'solar software', 'energy management'],
  }),

  healthcare: generateMetadata('/healthcare', {
    title: 'Custom Healthcare Software Development Solutions',
    description: 'Custom healthcare software solutions with strengthened data security, including patient care tools, reporting and analytics, IoMT, blockchain, and AI-driven innovation.',
    keywords: ['healthcare software development', 'medical software', 'patient care software', 'IoMT healthcare', 'healthcare data security'],
  }),
};

