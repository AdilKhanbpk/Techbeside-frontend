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

const OurTeamClient = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <form onSubmit={handleSubmit} className="lg:w-[565px] mt-4 bg-white p-2 text-black rounded-md">
      <div className="flex flex-col justify-center sm:flex-row gap-4 mb-4">
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
      {/* PhoneInput */}
      <div className="w-full mb-4">
        <PhoneInput
          country={"us"}
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          inputStyle={{ width: "100%" }}
          inputClass="w-full text-black bg-gray-100 border-none rounded-lg p-6 focus:ring-1 focus:ring-purple-700 focus:outline-none"
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
    </form>
  );
};

export default OurTeamClient;
