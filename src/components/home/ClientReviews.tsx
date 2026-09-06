"use client";
import Image from "next/image";
import Slider from "react-slick";
import { Space_Grotesk } from "next/font/google";
import upworkstar from "../../../public/assets/aboutpage/upwork.svg";
import linkedinstar from "../../../public/assets/aboutpage/linkedin.svg";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

const scrollToContact = (event: React.MouseEvent) => {
  event.preventDefault();
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const testimonials = [
  {
    image: "/assets/homepage/client1.jpg",
    name: "Aiden Clarke",
    company: "NextGen Tech",
    rating: 5,
    feedback: "Our new site led to a 35% increase in conversions within the first month. They understood our vision and brought it to life.",
  },
  {
    image: "/assets/homepage/client2.jpg",
    name: "Sophia Mitchell",
    company: "Web Creators",
    rating: 5,
    feedback: "A fast, SEO-friendly, and genuinely well-built site that elevated our online presence instantly.",
  },
  {
    image: "/assets/homepage/client3.jpg",
    name: "Liam Bennett",
    company: "Design Studio",
    rating: 5,
    feedback: "Their attention to detail made our brand stand out — engagement was up 40% after the redesign.",
  },
  {
    image: "/assets/homepage/client4.jpg",
    name: "Noah Reed",
    company: "Startup Solutions",
    rating: 5,
    feedback: "A scalable, mobile-optimized site that improved our user retention by 50% within three months.",
  },
  {
    image: "/assets/homepage/client5.jpg",
    name: "Zara Ellis",
    company: "Digital Edge",
    rating: 5,
    feedback: "Their UX/UI work took our store to the next level, improving conversions and reducing bounce rates.",
  },
  {
    image: "/assets/homepage/client6.jpg",
    name: "Ethan Foster",
    company: "Ecom Boosters",
    rating: 5,
    feedback: "They optimized our platform for a 70% faster load time and noticeably better retention.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
  ],
};

const ClientReviews = () => {
  return (
    <section className="bg-[#0A0E17] py-20 px-6 md:px-8 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-[#F3F5F9]`}>
          What clients say
        </h2>
        <p className="mt-3 text-[#8993A8]">
          Proud to serve as the innovation partner for teams that expect results.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          {[
            { image: upworkstar, reviews: "102 reviews" },
            { image: linkedinstar, reviews: "82 reviews" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-3 rounded-md"
            >
              <Image src={item.image} alt="platform logo" width={28} height={28} />
              <div className="text-left">
                <div className="flex gap-0.5 text-[#6366F1] text-sm">{"★".repeat(5)}</div>
                <p className="text-[#8993A8] text-sm">{item.reviews}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-3">
              <div className="bg-white/[0.03] border border-white/10 border-t-2 border-t-[#6366F1] rounded-md p-6 h-full min-h-[210px] flex flex-col">
                <p className="text-[#D5D9E2] italic leading-relaxed flex-1">&ldquo;{testimonial.feedback}&rdquo;</p>
                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-[#F3F5F9] font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#8993A8] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-14">
        <button
          onClick={scrollToContact}
          className="bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
        >
          Get your site built
        </button>
        <p className="text-sm text-[#8993A8] mt-3">USA exclusive: 10% off.</p>
      </div>
    </section>
  );
};

export default ClientReviews;