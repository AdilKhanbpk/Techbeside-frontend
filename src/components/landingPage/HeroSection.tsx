import Slider from "./Slider";

const getSlides = async () => {
  return [
    {
      videoSrc: "/videos/backgroundVideo.webm",
      heading: "Custom Web Development & Mobile App Development Services for Growing Businesses",
      highlight: "Development Services",
      highlightColor: "text-indigo-600",
      description: `From custom web applications to native and cross-platform mobile apps, our development team builds scalable software tailored to how your business actually works.`,
      buttonText: "Get a Free Project Quote",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      imageSrc: "/assets/homepage/webapp.webp",
    },
    {
      videoSrc: "/videos/aibakgroundvideo.webm",
      heading: "AI Agent Development Services to Automate Your Business Workflows",
      highlight: "AI Agent Development",
      highlightColor: "text-indigo-600",
      description: `We design and deploy custom AI agents that handle customer support, lead qualification, and internal operations — cutting manual work without cutting quality.`,
      buttonText: "Talk to an AI Automation Expert",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      imageSrc: "/assets/homepage/aifuture.webp",
    },
    {
      videoSrc: "/videos/shapping-background-video.webm",
      heading: "Affordable Custom Software Development Company for Startups & Enterprises",
      highlight: "Custom Software Development",
      highlightColor: "text-indigo-500",
      description: `Whether you're launching an MVP or modernizing legacy systems, we deliver fast, reliable software development built around your budget and timeline.`,
      buttonText: "Start Building With Us",
      buttonColor: "bg-indigo-500 hover:bg-indigo-700",
      imageSrc: "/assets/homepage/shapingfuture.webp",
    },
  ];
};

const Page = async () => {
  const slides = await getSlides();

  return <Slider slides={slides} />;
};

export default Page;