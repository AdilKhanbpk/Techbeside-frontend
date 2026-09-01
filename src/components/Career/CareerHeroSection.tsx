"use client";
import React, { useState } from "react";
import Image from "next/image";
import CommonButton from "../common/Button";
import { FC } from "react";
import CareerSectionImage from "../../../public/assets/careerpage/Rectangle 402.webp";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X } from "lucide-react";

const CareerHeroSection: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    jobField: "",
    professionalUrl: "",
    resume: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("jobField", formData.jobField);
    formDataToSend.append("professionalUrl", formData.professionalUrl);
    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/resume/send`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
          location: "",
          jobField: "",
          professionalUrl: "",
          resume: null,
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      console.log("Error:", error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className={`${isDialogOpen ? "blurred" : ""}`}>
      <div className="relative bg-black text-white h-[644px]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="mb-8 md:mb-12 md:p-10 md:mt-0 mt-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Careers - <span className="text-purple-600">Join Our Team</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Are you at your best in an atmosphere of trust, knowhow, freedom
              and support, alongside talented and creative people just like you?
              That's our working style.
            </p>
            <CommonButton
              className="bg-[#9A00FF] hover:bg-purple-700 shadow-[0_4px_16px_-4px_#3b71ca] text-white px-6 py-3 rounded-[12px] transition-colors w-[228px] h-[48px]"
              title="Send your resume"
              handleClick={handleDialogOpen}
            />
          </div>
          <div className="relative">
            <div className="absolute lg:left-[308px] lg:-top-20 md:left-0 md:top-0 top-5 overflow-hidden w-full md:w-auto">
              <Image
                src={CareerSectionImage}
                width={1200}
                height={1200}
                priority
                quality={75} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                alt="Team collaboration"
                className="w-full h-full rounded-[24px] md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center p-4 z-50 lg:mt-32 md:mt-[360px] mt-[740px]"
      onClick={handleDialogClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleDialogClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
          <h2 className="text-3xl font-bold">Join Our Team</h2>
          <p className="mt-2 opacity-90">Take the next step in your career journey</p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Phone and Location Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="City, Country"
                  required
                />
              </div>
            </div>

            {/* Field and Professional URL Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Field of Expertise</label>
                <input
                  type="text"
                  name="jobField"
                  value={formData.jobField}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="e.g., Frontend Development"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="professionalUrl"
                  value={formData.professionalUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-purple-500 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="resume" className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        className="sr-only"
                        onChange={handleChange}
                        required
                      />
                    </label>
                    
                    {formData.resume ? (
      <p className="mt-2 text-sm text-gray-600">{formData.resume.name}</p>
    ):(
      <p className="pl-1">or drag and drop</p>
    )}
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleDialogClose}
                className="px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all duration-200 font-medium shadow-lg hover:shadow-purple-500/25"
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)}
    </div>
  );
};

export default CareerHeroSection;
