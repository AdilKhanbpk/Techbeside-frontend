import Image from "next/image";
import portfolioImage from "../../../public/assets/portfoliopage/herosectionimage.webp";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-black text-white py-16 md:py-24">
      <div className="relative  flex flex-col md:flex-row items-center px-2 md:px-12">
        
        {/* Left Side (Text) */}
        <div className="md:w-1/2 text-center md:text-left md:mt-0 mt-12">
          <h1 className="text-4xl md:text-5xl  lg:text-6xl font-bold leading-tight">
          Our <span className="text-purple-600">Portfolio</span>
          </h1>
          <p className=" mt-2 md:mt-6 text-lg md:text-xl text-gray-300">
          TechCreator delivers impactful solutions customized to each client's needs. Our portfolio shows how we have helped businesses achieve their goals through innovative designs, seamless development, and strategic marketing. From Marketing to Development, we help you grow your business in every aspect.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <div className="relative w-full max-w-lg">
            {/* Stylish Image with Overlay */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-purple-600/30 rounded-lg blur-2xl"></div>
            <Image
              src={portfolioImage}
              width={600}
              height={600}
              priority
              alt="Innovative portfolio showcasing business solutions"
              className="rounded-lg shadow-lg transform transition-transform "
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
