// src/app/sitemap.ts
import { MetadataRoute } from "next";
import axios from "axios";

async function getBlogPosts() {
    try {
        const response = await axios.get(
            "https://TechBeside-backend.onrender.com/api/v1/blogs/all"
        );
        return response.data.blogs.map((post: any) => ({
            title: post.title
                ? post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
                : "untitled",
            lastmod: new Date(post.createdAt).toISOString(),
        }));
    } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages: MetadataRoute.Sitemap = [
        { url: "https://www.techbeside.dev/", lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
        { url: "https://www.techbeside.dev/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: "https://www.techbeside.dev/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/portfolio", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/pricing", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/career", lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
        { url: "https://www.techbeside.dev/contact", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/privacy-policy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
        { url: "https://www.techbeside.dev/terms-conditions", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
        { url: "https://www.techbeside.dev/job-apply", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },

        // Services
        // { url: "https://www.techbeside.dev/services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: "https://www.techbeside.dev/services/saas-mvp-development", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: "https://www.techbeside.dev/services/web-development", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: "https://www.techbeside.dev/services/mobile-app-development-company", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: "https://www.techbeside.dev/services/ui-ux-design-agency", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/services/devops", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/services/project-management", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/services/seo-services-for-small-business", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/services/software-maintenance-services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/services/affordable-graphic-design-services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/services/web-qa-tester", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/services/digital-marketing-for-software-companies", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },

        // Industries
        { url: "https://www.techbeside.dev/restaurants", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/e-commerce", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/real-estate", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/hospitality", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: "https://www.techbeside.dev/healthcare", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: "https://www.techbeside.dev/green-energy", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ];


    const blogPosts = await getBlogPosts();
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post: any) => ({
        url: `https://www.techbeside.dev/blog/${post.title}`,
        lastModified: post.lastmod,
        changeFrequency: "weekly",
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
