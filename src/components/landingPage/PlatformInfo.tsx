import PlatformInfoClient from "./PlatformInfoClient"; 


const getPlatformInfo = async () => {
  return {
    heading: "TechCreator – Innovate Faster with AI",
    subHeading: "Where Innovation Meets Efficiency",
    description:
      "We harness the power of artificial intelligence to revolutionize software development. Build sophisticated web and mobile applications in a fraction of the time, without compromising on quality or scalability.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/yROV87v9sXg?autoplay=0&rel=0",
  };
};

const PlatformInfo = async () => {
  const platformData = await getPlatformInfo();

  return <PlatformInfoClient platformData={platformData} />;
};

export default PlatformInfo;