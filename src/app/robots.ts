import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/admin', '/admin/*', '/api/*'],
    },
    sitemap: 'https://www.techcreator.co/sitemap.xml',
  }
}