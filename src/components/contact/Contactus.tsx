"use client"
import HeroSection_BG from "../../../public/assets/homepage/contactherosectionimage.webp";
import Image from "next/image";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="relative text-white ">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <Image
        width={300}
        height={200}
          src={HeroSection_BG}
          alt="Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      {/* contact form */}
      <ContactForm/>
    </div>
  );
}

export default ContactUs;
