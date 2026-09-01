"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import CommonButton from "../common/Button";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backend_url}/api/v1/contact/send`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

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
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#091424] to-[#031220] md:px-4 px-2">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg md:p-8 p-2 rounded-2xl shadow-xl border border-white/20 text-white"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-100">Get in Touch</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            placeholder="First Name*"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeEventHandler}
            required
            className="w-full sm:w-1/2 bg-white/20 text-white border border-blue-400/50 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-md"
          />
          <input
            placeholder="Last Name*"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeEventHandler}
            required
            className="w-full sm:w-1/2 bg-white/20 text-white border border-blue-400/50 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-md"
          />
        </div>

        <input
          placeholder="Email Address*"
          type="email"
          name="email"
          value={formData.email}
          onChange={changeEventHandler}
          required
          className="w-full bg-white/20 text-white border border-blue-400/50 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-md mb-4"
        />

<PhoneInput
  country={"us"}
  value={formData.phoneNumber}
  onChange={handlePhoneChange}
  enableSearch={true} 
  inputStyle={{
    width: "100%",
    background: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(0, 123, 255, 0.5)",
    borderRadius: "0.5rem",
    padding: "1.95rem", 
    fontSize: "1.25rem", 
    color: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    paddingLeft: "50px", 
  }}
  containerClass="custom-phone-input"
/>





        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          name="message"
          value={formData.message}
          onChange={changeEventHandler}
          required
          className="w-full bg-white/20 text-white border border-blue-400/50 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70 shadow-md mb-6 mt-6"
        />
        
        <CommonButton
          title={loading ? "Sending..." : "Send Inquiry"}
          type="submit"
          disabled={loading}
          className={`w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/70 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
      </form>
    </div>
  );
};

export default ContactForm;
