import { Metadata } from "next";
import BlogHeroDetail from "@/components/blog/blogDetails/BlogHeroDetail";
import BlogDetails from "@/components/blog/blogDetails/BlogDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Define Blog Data Type
interface BlogData {
  title: string;
  description: string;
  metaTitle?: string;        // ✅ Optional metaTitle
  metaDescription?: string;  // ✅ Optional metaDescription
}

// Fetch blog data
async function getBlogById(slug: string): Promise<BlogData> {
  try {
    const response = await fetch(`https://TechBeside-backend.onrender.com/api/v1/blogs/get/${slug}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("blog detilaa", data.blog);


    if (data.blog) {
      return {
        title: data.blog.title,
        description: data.blog.description,
        metaTitle: data.blog.metaTitle,
        metaDescription: data.blog.metaDescription,
      };
    }

    return { title: "Blog Not Found", description: "No description available." };

  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { title: "Blog Not Found", description: "No description available." };
  }
}

export default async function DetailPost({ params }: PageProps) {
  const resolvedParams = await params;
  
  if (!resolvedParams?.id) {
    return <div>Blog not available at this time. Please check back later.</div>;
  }

  return (
    <>
      <BlogHeroDetail />
      <BlogDetails params={{ slug: resolvedParams.id }} />
    </>
  );
}

// ✅ Generate Dynamic Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.id;
  const blog = await getBlogById(slug);

  return {
    title: blog.metaTitle || blog.title || "Blog Not Found",
    description: blog.metaDescription || blog.description || "No description available.",
    alternates: {
      canonical: `https://www.TechBeside.co/blog/${slug}`,
    },
  };
}
