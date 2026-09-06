"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import { Space_Grotesk } from "next/font/google";
import CommonButton from "../common/Button";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });

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

  const changeEventHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      const res = await axios.post(`${backend_url}/api/v1/contact/send`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/confirmation");
        setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full bg-transparent text-[#F3F5F9] placeholder:text-[#8993A8] border-b border-white/15 py-3 text-lg focus:outline-none focus:border-[#6366F1] transition-colors";

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0A0E17] border-t border-white/10 px-4 py-20"
    >
      <div className="w-full max-w-xl">
        <h2 className={`${display.className} text-3xl md:text-4xl font-semibold text-[#F3F5F9] mb-2`}>
          Get in touch
        </h2>
        <p className="text-[#8993A8] mb-10">Tell us about your project — we usually reply within a day.</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              placeholder="First name*"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeEventHandler}
              required
              className={fieldClass}
            />
            <input
              placeholder="Last name*"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeEventHandler}
              required
              className={fieldClass}
            />
          </div>

          <input
            placeholder="Email address*"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeEventHandler}
            required
            className={fieldClass}
          />

          <PhoneInput
            country={"us"}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            enableSearch={true}
            inputStyle={{
              width: "100%",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 0,
              padding: "1.5rem 0 0.75rem 50px",
              fontSize: "1.125rem",
              color: "#F3F5F9",
            }}
            buttonStyle={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
            containerClass="custom-phone-input"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            name="message"
            value={formData.message}
            onChange={changeEventHandler}
            required
            className={`${fieldClass} resize-none`}
          />

          <CommonButton
            title={loading ? "Sending..." : "Send inquiry"}
            type="submit"
            disabled={loading}
            className={`w-full h-12 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-lg font-semibold rounded-md transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;