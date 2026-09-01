import Image from "next/image";
import ouTeamImage from "../../../public/assets/aboutpage/teamimage.png";
import OurTeamClient from "../landingPage/OurTeamClient";


const getTeamData = async () => {
  return {
    heading: "Our Team is Your Team",
    description:
      "Don’t just share your story – make it unforgettable! We simplify the complex, captivate your audience, and drive results with expert digital marketing strategies that boost visibility, drive qualified traffic, and turn leads into conversions. From engagement and rankings to conversions, we help you achieve your marketing goals with creative brilliance. Ready to transform your strategy? Learn more about us HERE.",
  };
};

const OurTeam = async () => {
  const teamData = await getTeamData(); 

  return (
    <section id="OurTeam" className="flex flex-col lg:flex-row justify-between gap-6 bg-gray-100 md:py-12 py-6 rounded-lg px-6 md:mt-16 mt-9">
  
  {/* Text Section */}
  <div className="lg:w-1/2 w-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-purple-600 font-bold">
      {teamData.heading}
    </h2>
    <p className="text-gray-600 mt-3 text-base md:text-lg">{teamData.description}</p>

    {/* Team Client Component */}
    <OurTeamClient />  
  </div>

  {/* Image Section */}
  <div className="flex justify-center lg:w-2/5 w-full">
    <Image 
      src={ouTeamImage} 
      alt="Our Team" 
      width={500} 
      height={350} 
      className="rounded-lg object-contain max-w-full h-auto"
    />
  </div>

</section>

  
  );
};

export default OurTeam;