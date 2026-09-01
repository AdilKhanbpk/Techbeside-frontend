import Image from 'next/image';
import upworkstar from "../../../public/assets/aboutpage/upwork.svg";
import linkedinstar from "../../../public/assets/aboutpage/linkedin.svg";

const ClientReviews = () => {
  return (
    <section className="text-white bg-purple-600 md:mt-16 mt-9 md:pt-16 pt-3 px-2 md:px-0 text-center">
    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold mb-4">
      Our clients simply love <span className="text-black">what we do</span>
    </h2>
    <p className="text-lg text-gray-100 mb-8">
      Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
    </p>
  
    <div className="flex justify-center flex-wrap gap-10">
      {[ 
        { image: upworkstar, alt: "Upwork", reviews: "102 REVIEWS" },
        { image: linkedinstar, alt: "Linkedin", reviews: "82 REVIEWS" }
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <Image src={item.image} alt={item.alt} width={50} height={50} className="rounded-md" />
          <div className="text-center text-4xl">
            <div className="flex gap-1 text-yellow-400">
              {'★'.repeat(5)}
            </div>
            <p className="text-white text-xl">{item.reviews}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default ClientReviews;
