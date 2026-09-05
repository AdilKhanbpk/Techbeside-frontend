import { pageMetadata } from '@/lib/metadata';
import BlogCards from '@/components/blog/BlogCards';
import BlogHeroSection from '@/components/blog/BlogHeroSection';

// SEO metadata — must be in a Server Component (no "use client")
export const metadata = pageMetadata.blog;

interface BlogImage {
  imageUrl: string;
  altDescription?: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  image: string | BlogImage;
  createdAt: string;
  updatedAt: string;
}

// Server-side fetch so Googlebot sees all blog cards in the initial HTML
async function getBlogs(): Promise<Blog[]> {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${backendUrl}/api/v1/blogs/all`, {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success ? data.blogs : [];
  } catch {
    return [];
  }
}

const BlogPage = async () => {
  const blogs = await getBlogs();

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
                name: "Blog",
                item: "https://www.TechBeside.co/blog",
              },
            ],
          }),
        }}
      />
      <BlogHeroSection />
      <BlogCards initialBlogs={blogs} />
    </>
  );
};

export default BlogPage;
