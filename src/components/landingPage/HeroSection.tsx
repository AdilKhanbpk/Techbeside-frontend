import Slider from "./Slider";

const getSlides = async () => {
  return [
    {
      imageSrc: "/mainbg.png",
      badge: "AI-Powered Solutions for Modern Businesses",
      titleLine1: "AI Agent Development",
      titleLine2: "& Custom Automation",
      description:
        "We design and deploy custom AI agents that handle customer support, lead qualification, and internal operations — cutting manual work without cutting quality.",
      buttonText: "Talk to an AI Automation Expert",
      buttonLink: "/contact",
    },
    {
      imageSrc: "/mainbg.png",
      badge: "Custom Web & Mobile Apps",
      titleLine1: "Custom Development Services",
      titleLine2: "for Growing Businesses",
      description:
        "From custom web applications to native and cross-platform mobile apps, our development team builds scalable software tailored to how your business works.",
      buttonText: "Get a Free Project Quote",
      buttonLink: "/contact",
    },
    {
      imageSrc: "/mainbg.png",
      badge: "Scalable Software Engineering",
      titleLine1: "Affordable Software Development",
      titleLine2: "for Startups & Enterprises",
      description:
        "Whether you're launching an MVP or modernizing legacy systems, we deliver fast, reliable software development built around your budget and timeline.",
      buttonText: "Start Building With Us",
      buttonLink: "/contact",
    },
  ];
};

const Page = async () => {
  const slides = await getSlides();

  return <Slider slides={slides} />;
};

export default Page;