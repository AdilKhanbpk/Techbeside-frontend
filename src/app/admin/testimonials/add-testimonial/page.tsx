"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/shared/AdminLayout";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useDispatch } from "react-redux";
import { addTestimonial } from "@/redux/testimonialSlice";

interface TestimonialFormData {
  profilePic: File | null;
  clientName: string;
  review: string;
  rating: number;
  websiteLink: string;
  screenshot: File | null;
}

const AddNewTestimonial: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<TestimonialFormData>({
    profilePic: null,
    clientName: "",
    review: "",
    rating: 0,
    websiteLink: "",
    screenshot: null,
  });

  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const dispatch = useDispatch()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;

    if (name === "profilePic" && file) {
      setProfilePreview(URL.createObjectURL(file));
    }

    if (name === "screenshot" && file) {
      setScreenshotPreview(URL.createObjectURL(file));
    }

    setFormData({ ...formData, [name]: file });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set loading to true while the request is in progress
    setLoading(true);

    // Create FormData object to send files and data
    const data = new FormData();
    data.append("clientName", formData.clientName);
    data.append("review", formData.review);
    data.append("rating", String(formData.rating));  // Make sure rating is sent as a string
    data.append("websiteLink", formData.websiteLink);
    
    if (formData.profilePic) {
      data.append("profilePicture", formData.profilePic);
    }
    
    if (formData.screenshot) {
      data.append("reviewScreenshot", formData.screenshot);
    }

    try {
      const res = await axios.post(`${backend_url}/api/v1/testimonial/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure this header is set
        },
      });

      // Handle success response
      if (res.data.success) {
        router.push("/admin/testimonials")
        dispatch(addTestimonial(res.data.testimonial))
        toast.success(res.data.message);
        // Optionally reset the form
        setFormData({
          profilePic: null,
          clientName: "",
          review: "",
          rating: 0,
          websiteLink: "",
          screenshot: null,
        });
        setProfilePreview(null);
        setScreenshotPreview(null);
      }
    } catch (error: any) {
      console.error("Error submitting testimonial:", error);
      toast.error(error?.response?.data?.message);
    } finally {
      // Set loading to false after the request is complete
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
    <AdminLayout>
      <div className=" mx-auto mt-20 ">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Testimonial</h1>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-md shadow-lg p-4 border max-w-4xl  mx-auto ">
          {/* Profile Picture */}
          <div>
            <label className="block font-semibold mb-2">Client Profile Picture</label>
            <div className="relative w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              {profilePreview ? (
                <img src={profilePreview} alt="Profile Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">Avatar</span>
              )}
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Client Name */}
          <div>
            <label className="block font-semibold mb-2">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              placeholder="Enter client name"
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          {/* Review */}
          <div>
            <label className="block font-semibold mb-2">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Write the review here"
              className="w-full border p-2 rounded-md"
              rows={5}
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold mb-2">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              min={1}
              max={5}
              placeholder="5 stars"
              className="w-[300px] border p-2 rounded-md"
              required
            />
          </div>

          {/* Website Link */}
          <div>
            <label className="block font-semibold mb-2">Website Link</label>
            <input
              type="url"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Screenshot */}
          <div>
            <label className="block font-semibold mb-2">Screenshot</label>
            <div className="relative w-full h-40 border-2 border-dashed rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
              {screenshotPreview ? (
                <img src={screenshotPreview} alt="Screenshot Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">Upload Screenshot</span>
              )}
              <input
                type="file"
                name="screenshot"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer "
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
          <button
            type="submit"
            className={` ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600"} text-white  p-2 w-fit py-2 rounded-md hover:bg-purple-700 transition`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Testimonial"}
          </button>
          </div>
          
        </form>
      </div>
    </AdminLayout>
    </ProtectedRoute>
  );
};

export default AddNewTestimonial;
