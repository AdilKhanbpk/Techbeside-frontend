"use client";
import React, { useState } from "react";
import CommonButton from "../common/Button";
import { FC } from "react";
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
        setDialogOpen(false);
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
    <>
      <section
        aria-label="Career introduction"
        className="relative bg-[#0B0B14] text-white overflow-hidden"
      >
        {/* Fine grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        
        {/* Soft indigo glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.30), transparent)",
          }}
        />

        <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
          {/* Tag */}
          <p className="text-center text-sm font-medium text-[#A5A6F6] mb-6">
            Careers at TechBeside
          </p>

          {/* Heading */}
          <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Build the future with us, one <span className="text-indigo-500">line of code</span> at a time
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-xl text-white/60 leading-8 md:leading-9">
            Join a team where trust, knowhow, and creative freedom fuel extraordinary work. We're looking for talented people who want to make an impact.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleDialogOpen}
              className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-indigo-500 transition-colors text-white text-lg md:text-xl font-medium py-4 px-10 rounded-full shadow-[0_0_40px_-6px_#6366F1]"
            >
              Submit Your Resume
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Dialog */}
      {isDialogOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleDialogClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleDialogClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 text-white">
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 outline-none text-gray-900"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 outline-none text-gray-900"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 outline-none text-gray-900"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 outline-none text-gray-900"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 outline-none text-gray-900"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 outline-none text-gray-900"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-200">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="resume" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
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
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        {formData.resume && (
                          <p className="mt-2 text-sm text-gray-600">{formData.resume.name}</p>
                        )}
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
                      className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 transition-all duration-200 font-medium shadow-lg hover:shadow-indigo-500/25"
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
    </>
  );
};

export default CareerHeroSection;
