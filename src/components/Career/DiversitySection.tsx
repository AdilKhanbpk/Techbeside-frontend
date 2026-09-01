import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Instagram } from 'lucide-react';
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
    <div>
      <div className=" mt-9 md:mt-16 mb-9 md:mb-16">
        <div className="max-w-3xl mb-6">
          <h2 className="font-semibold  font-inter mb-4 text-3xl md:text-5xl text-purple-600">
            We're from everywhere
          </h2>
          <p className="text-[#838696] font-normal font-inter text-[22px] leading-[35px]">
          A TechCreator workplace is more than just a workplace - it's a place where you can grow, innovate, and make an impact. Let's build a culture of excellence, collaboration, and shared purpose together if our values resonate with you. Let's redefine what's possible together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

         
         <div className="bg-[#651FFF] rounded-2xl cursor-pointer p-8 flex flex-col items-center justify-center text-white col-span-1 sm:col-span-2 md:col-span-1">
         <Link href="https://www.instagram.com/techcreatorco/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-12 h-12 mb-4 mx-auto" />
            <p className="text-lg font-medium text-center mb-2">Follow us on</p>
            <p className="text-sm opacity-90 text-center">#IPPSIbrogueDeupload</p>
         </Link>

          </div>

          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden h-64">
              <Image
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversitySection;


