import Slider from "./Slider";

const getSlides = async () => {
  return [
    {
      videoSrc: "/videos/backgroundVideo.webm",
      heading: "Your All-in-One Solution for Websites, Mobile Apps & Custom Software",
      highlight: "Solution for Websites",
      highlightColor: "text-purple-600",
      description: `Empower your business with a team of experts dedicated to crafting tailor-made solutions that drive growth, efficiency, and success.`,
      buttonText: "Get Your Custom Solution Now!",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageSrc: "/assets/homepage/webapp.webp"
    },
    {
      videoSrc: "/videos/aibakgroundvideo.webm",
      heading: "Get Your Website Live in Just 58 Hours – 100% Guaranteed!",
      highlight: "– 100% Guaranteed!",
      highlightColor: "text-purple-600",
      description: `No delays, no stress – just a stunning, high-performance website built to impress! Mobile-friendly, SEO-optimized, and backed by a money-back guarantee for total peace of mind.`,
      buttonText: "Get Started – Launch in 58 Hours!",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageSrc: "/assets/homepage/aifuture.webp"
    },
    {
      videoSrc: "/videos/shapping-background-video.webm",
      heading: "Shaping the Future with Innovation",
      highlight: "Future",
      highlightColor: "text-purple-700",
      description: `We empower businesses to transform and lead through cutting-edge technology.`,
      buttonText: "Transform Your Business with AI – Get Started!",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      imageSrc: "/assets/homepage/shapingfuture.webp"
    },
  ];
};

const Page = async () => {
  const slides = await getSlides();

  return <Slider slides={slides} />;
};

export default Page;