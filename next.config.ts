/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "@headlessui/react",
      "@heroicons/react",
      "framer-motion",
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  images: {
    domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' blob: data: https:; font-src 'self' data: https:; connect-src 'self' https: wss: http://localhost:*; frame-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ],
      },
       {
      source: "/fonts/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/videos/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/app-development",
        destination: "/services/mobile-app-development-company",
        permanent: true, 
      },
      {
        source: "/e-commerce-projects",
        destination: "/e-commerce",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/qa-testing",
        destination: "/services/web-qa-tester",
        permanent: true,
      },
      {
        source: "/services/graphic-designing",
        destination: "/services/affordable-graphic-design-services",
        permanent: true,
      },
      {
        source: "/services/software-maintenance",
        destination: "/services/software-maintenance-services",
        permanent: true,
      },
      {
        source: "/services/ui-ux-designing",
        destination: "/services/ui-ux-design-agency",
        permanent: true,
      },
      {
        source: "/services/seo-content-writing",
        destination: "/services/seo-services-for-small-business",
        permanent: true,
      },
      {
        source: "/services/sqa",
        destination: "/services/web-qa-tester",
        permanent: true,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/services/ui-ux-design-agency",
        permanent: true,
      },
      {
        source: "/blog/blogDetail/:slug*",
        destination: "/",
        permanent: true,
      },

      {
        source: "/services/mobile-app-development",
        destination: "/services/mobile-app-development-company",
        permanent: true,
      },

      {
        source: "/blog/how-is-saas-software-distributed-most-powerful-channels-in-2024",
        destination: "/blog/how-is-saas-software-distributed-most-powerful-channels",
        permanent: true,
      },
      {
        source: "/blog/top-software-development-trends-in-2025",
        destination: "/blog/top-software-development-trends/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
//   },

//   // Define headers for caching
//   async headers() {
//     return [
//       // Cache static media files
//       {
//         source: '/_next/static/media/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000', 
//           },
//         ],
//       },
//       // Cache static Next.js assets
//       {
//         source: '/_next/static/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000', 
//           },
//         ],
//       },
//       // Cache fonts
//       {
//         source: '/fonts/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000', 
//           },
//         ],
//       },
//     ];
//   }
  
// };

// module.exports = nextConfig;