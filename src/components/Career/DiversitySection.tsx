import Image from 'next/image';
import { FC } from 'react';
import { Instagram, Globe, Heart } from 'lucide-react';
import image from "../../../public/assets/careerpage/career1.webp";
import image1 from "../../../public/assets/careerpage/career2.webp";
import image2 from "../../../public/assets/careerpage/careeer3.webp";
import image3 from "../../../public/assets/careerpage/career4.webp";
import image4 from "../../../public/assets/careerpage/career5.webp";
import Link from 'next/link';

const DiversitySection: FC = () => {
  const images = [
    { src: image, alt: "Team meeting" },
    { src: image1, alt: "Team collaboration" },
    { src: image2, alt: "Team discussion" },
    { src: image3, alt: "Office collaboration" },
    { src: image4, alt: "Office collaboration" }
  ];

  return (
    <section className="py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-indigo-600 mb-4 flex items-center justify-center gap-2">
          <Globe className="w-4 h-4" />
          Our Culture
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          We're From Everywhere
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          A TechBeside workplace is more than just a workplace - it's a place where you can grow, innovate, and make an impact. Let's build a culture of excellence, collaboration, and shared purpose together.
        </p>
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Large Image - Spans 2 columns */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 group">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Medium Image */}
        <div className="sm:col-span-1 lg:col-span-1">
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 group">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Instagram CTA Card */}
        <Link 
          href="https://www.instagram.com/techbesideofficial/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sm:col-span-1 lg:col-span-1"
        >
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl h-64 sm:h-80 p-8 flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 group">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-12 h-12" />
            </div>
            <p className="text-lg font-semibold text-center mb-2">Follow Us</p>
            <p className="text-sm opacity-90 text-center">@techbesideofficial</p>
            <div className="mt-4 flex items-center gap-2 text-sm opacity-75">
              <Heart className="w-4 h-4" />
              <span>Join our community</span>
            </div>
          </div>
        </Link>

        {/* Small Image */}
        <div className="sm:col-span-1 lg:col-span-1">
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Large Image - Spans 2 columns */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Small Image */}
        <div className="sm:col-span-1 lg:col-span-1">
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <Image
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 text-lg mb-6">
          Ready to be part of our global team?
        </p>
        <Link 
          href="#apply" 
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
        >
          View Open Positions
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default DiversitySection;
