"use client";
import { backend_url } from "@/newLayout";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoIosRadioButtonOff } from "react-icons/io";

interface PricingFormData {
  name: string;
  email: string;
  phoneNumber: string;
  service: string[];
  details: string;
  referenceLink: string;
}

const PricingForm: React.FC = () => {
  const [formData, setFormData] = useState<PricingFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    service: [],
    details: "",
    referenceLink: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Type narrowing for 'checkbox' inputs
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        service: target.checked
          ? [...prevData.service, value]
          : prevData.service.filter((service) => service !== value),
      }));
    } else {
      // For text inputs and textareas, just update the field
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${backend_url}/api/v1/pricing/submit-form`,
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
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          service: [],
          details: "",
          referenceLink: "",
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 pt-3 pb-3">
      <div className="flex flex-col md:flex-row md:gap-3 lg:gap-6 justify-between px-2 lg:px-8 mx-auto">
        {/* Left Section */}
        <div className="text-white flex md:mx-0 mx-auto flex-col mb-6 lg:mb-0 p-2">
          <div className="flex flex-col md:gap-4 text-2xl lg:text-6xl font-bold ">
          <h2 className="  ">
            Share your 
          </h2>
          <h2 className=" ">
          requirements 
          </h2>
          <h2 className="">
           with us
          </h2>
          </div>
          <p className="text-lg lg:text-xl mt-2">Complete this simple form and let's create something amazing together</p>
        </div>

        {/* Right Section */}
        <div className="bg-white p-9 shadow-lg w-full lg:w-1/2 rounded-md">
          <form
            className="space-y-4  "
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full lg:w-[325px] p-3 border-b border-black focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full lg:w-[325px] p-3 border-b border-black focus:outline-none"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full lg:w-[325px] p-3 border-b border-black focus:outline-none"
              />
            </div>

            {/* "What can we do for you" Field */}
            <div>
              <p className="font-bold mb-2">What can we do for you *</p>
              {[
                { id: "web-development", label: "Web Development" },
                { id: "app-development", label: "App Development" },
                { id: "ui-ux-designing", label: "UI/UX Designing" },
                { id: "logo-designing", label: "Logo Designing" },
                { id: "devops", label: "DevOps" },
                { id: "graphic-designing", label: "Graphic Designing" },
                { id: "project-management", label: "Project Management" },
                { id: "seo-content-writing", label: "SEO & Content Writing" },
                { id: "software-maintenance", label: "Software Maintenance" },
                { id: "qa-testing", label: "QA Testing" },
              ].map((service) => (
                <div key={service.id} className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id={service.id}
                    name="service"
                    value={service.id}
                    checked={formData.service.includes(service.id)}
                    onChange={handleChange}
                    className="hidden" 
                  />
                  <label
                    htmlFor={service.id}
                    className={`cursor-pointer  mr-2 flex items-center justify-center w-6 h-6 border-2 rounded-full transition-all duration-300 
          ${
            formData.service.includes(service.id)
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border-gray-300"
          } 
          hover:bg-blue-100`}
                  >
                    {/* Replace the checkbox with the icon */}
                    <IoIosRadioButtonOff
                      className={`w-2 h-2 ${
                        formData.service.includes(service.id)
                          ? "text-white bg-white rounded-full"
                          : "text-white"
                      }`}
                    />
                  </label>
                  <label htmlFor={service.id}>{service.label}</label>
                </div>
              ))}
            </div>

            {/* Any more details we should know */}
            <div>
              <textarea
                name="details"
                placeholder="Any more details we should know?"
                value={formData.details}
                onChange={handleChange}
                className="w-full lg:w-[325px] border-b border-black focus:outline-none p-1 mt-4"
              ></textarea>
            </div>

            {/* Figma or Reference Website Link */}
            <div>
              <input
                type="url"
                name="referenceLink"
                placeholder="Figma or reference website link"
                value={formData.referenceLink}
                onChange={handleChange}
                className="w-full lg:w-[325px] p-3 border-b border-black focus:outline-none"
              />
            </div>

            {/* Submit Button with loading indicator */}
            <div>
              <button
                type="submit"
                className={`bg-[#9A00FF] w-full text-white py-2 px-4 rounded-full mt-3 shadow-[0_4px_16px_-4px_#3b71ca] hover:bg-purple-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading} // Disable button while loading
              >
                {loading ? <div>Submitting....</div> : "Get Started Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PricingForm;
