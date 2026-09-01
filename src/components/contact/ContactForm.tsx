// ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import CommonButton from "../common/Button";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeEventHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/contact/send`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/confirmation");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24  lg:py-32">
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-around items-start gap-10 mt-20"
    >
      {/* Contact Information */}
      <div className="max-w-lg text-white">
      <h1 className="font-semibold text-3xl sm:text-5xl">
        Let's Create Something Amazing
      </h1>

      {/* Location */}
      <div className="mt-6 flex items-center gap-3 text-lg">
        <div className=" bg-purple-600 rounded-full p-1.5">
          <MapPin size={30} className="text-white " />
        </div>
        <p className="text-xl">TechCreator, Florida, Orlando, USA</p>
      </div>

      {/* Contact Methods */}
      <div className="mt-3 space-y-3 text-xl">
        <Link
          href="https://wa.me/+13213646803"
          rel="noopener noreferrer"
          className="flex items-center gap-3 "
        >
          <div className=" bg-green-600 rounded-full p-1.5">
            <FaWhatsapp size={28} className="text-white" />
          </div>
          <span className="hover:underline ">+1(321)364-6803</span>
        </Link>

        <Link href="tel:+13213646803" className="flex items-center gap-3 ">
          <div className=" bg-purple-700 rounded-full p-2">
            <PhoneCall className="text-white" />
          </div>
          <span className="hover:underline">+1(321)364-6803</span>
        </Link>
      </div>

      {/* Email */}
      <div className="mt-4 flex items-center gap-3">
        <div className=" bg-blue-600 rounded-full p-1.5">
          <Mail size={28} className="text-white" />
        </div>
        <Link href="mailto:contact@techcreator.co" className="hover:underline text-xl">
          contact@techcreator.co
        </Link>
      </div>
    </div>
  
      {/* Form Section */}
      <div className="md:w-[565px] w-full shadow-lg p-6 sm:p-10 bg-white text-black rounded-md">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            placeholder="First name*"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeEventHandler}
            required
            className="w-full sm:w-1/2 rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none"
          />
          <input
            placeholder="Last name*"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeEventHandler}
            required
            className="w-full sm:w-1/2 rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none"
          />
        </div>
        <input
          placeholder="Email*"
          type="email"
          name="email"
          value={formData.email}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none mb-4"
        />
     {/* PhoneInput  */}
     <div className="w-full mb-4">
  <PhoneInput
    country={"us"} 
    value={formData.phoneNumber}
    onChange={handlePhoneChange}
    containerClass=" rounded-lg " 
    containerStyle={{ width: '100%' }}
  inputStyle={{ width: '100%' }}
    inputClass="w-full text-black bg-gray-100 border-none rounded-lg p-6 focus:ring-1 focus:ring-purple-700 focus:outline-none"
    buttonClass="bg-gray-100 rounded-l-lg border-r border-gray-300"
    dropdownClass="bg-white text-black rounded-lg shadow-lg"
  />
</div>



        <textarea
          placeholder="Your Message..."
          rows={4}
          name="message"
          value={formData.message}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-purple-700 focus:outline-none mb-6"
        />
        <CommonButton
          title={loading ? "Sending..." : "Send Message"}
          type="submit"
          disabled={loading}
          className={`bg-purple-600 text-white w-full h-12 rounded-full shadow-[0_4px_16px_-4px_#3b71ca] transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
          } focus:outline-none`}
        />
      </div>
    </form>
  </div>
  
  );
};

export default ContactForm;
