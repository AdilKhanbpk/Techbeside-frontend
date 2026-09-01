"use client";
import { backend_url } from '@/newLayout';
import { RootState } from '@/redux/store';
import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  stateOrProvince: string;
  postalOrZipCode: string;
  gender: string;
  applyingForPosition: string;
  experience: string;
  professionalUrl: string;
  resume: File | null;
  motivationLetter: File | null;
}

const JobApplicationForm: React.FC = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");  
  const { allJobs } = useSelector((state: RootState) => state.job);
  // const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    stateOrProvince: '',
    postalOrZipCode: '',
    gender: '',
    applyingForPosition: '',
    experience: '',
    professionalUrl: '',
    resume: null,
    motivationLetter: null,
  });

  useEffect(() => {
    if (jobId && allJobs.length > 0) {
      const job = allJobs.find(job => job._id === jobId);
      if (job) {
        setFormData((prevData) => ({
          ...prevData,
          applyingForPosition: job.title,
        }));
      }
    }
  }, [jobId, allJobs]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
        [`${name}OriginalName`]: file.name,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!jobId) {
      toast.error("Job ID is missing.");
      return;
    }
  
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as Blob | string);
      }
    });
  
    setLoading(true); 
    try {
        const res = await axios.post(
          `${backend_url}/api/v1/application/apply/${jobId}`, 
          formDataToSend, 
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          router.push("/career");
          toast.success(res.data.message);
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            city: '',
            stateOrProvince: '',
            postalOrZipCode: '',
            gender: '',
            applyingForPosition: '',
            experience: '',
            professionalUrl: '',
            resume: null,
            motivationLetter: null,
          });
        }
    } catch (error: any) {
      console.error(error);
      const errorMessage = error?.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-white border  shadow-md  p-8 sm:p-12 md:p-7 lg:p-5 space-y-6">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
  <div className="grid grid-cols-1 gap-6">
    {/* First Name and Last Name */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input
        type="text"
        name="firstName"
        placeholder="First Name*"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full p-3 border-b border-black focus:outline-none"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name*"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full p-3 border-b border-black focus:outline-none"
      />
    </div>

    {/* Email */}
    <input
      type="email"
      name="email"
      placeholder="Email*"
      value={formData.email}
      onChange={handleChange}
      required
      className="md:w-[325px] w-full p-3 border-b border-black focus:outline-none"
    />

    {/* Phone Number and Gender */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <input
    type="text"
    name="phoneNumber"
    placeholder="Phone Number*"
    value={formData.phoneNumber}
    onChange={handleChange}
    required
    className="w-full p-3 border-b border-black focus:outline-none"
  />
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    required
    className="w-full p-3 border-b border-black focus:outline-none bg-white"
  >
    <option value="" disabled>
      Select Gender*
    </option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>


    {/* Address */}
    <input
      type="text"
      name="address"
      placeholder="Address*"
      value={formData.address}
      onChange={handleChange}
      required
      className="w-full p-3 border-b border-black focus:outline-none"
    />

    {/* City */}
    <input
      type="text"
      name="city"
      placeholder="Enter your location (Country & City)*"
      value={formData.city}
      onChange={handleChange}
      required
      className="md:w-[325px] w-full p-3 border-b border-black focus:outline-none"
    />

    {/* Applying For Position and Experience */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input
        type="text"
        name="applyingForPosition"
        value={formData.applyingForPosition}
        onChange={handleChange}
        required
        readOnly
        className="w-full p-3 border-b border-black focus:outline-none"
      />
      <input
        type="text"
        name="experience"
        placeholder="Experience (e.g., 2+ years, 3+ years)"
        value={formData.experience}
        onChange={handleChange}
        required
        className="w-full p-3 border-b border-black focus:outline-none"
      />
    </div>

    {/* Professional URL */}
    <input
      type="text"
      name="professionalUrl"
      placeholder="Professional URL*"
      value={formData.professionalUrl}
      onChange={handleChange}
      required
      className="md:w-[325px] w-full p-3 border-b border-black focus:outline-none"
    />

    {/* Resume and Motivation Letter */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700">Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
          className="w-full p-3 border-b border-black focus:outline-none"
        />
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700">Motivation Letter</label>
        <input
          type="file"
          name="motivationLetter"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          // required
          className="w-full p-3 border-b border-black focus:outline-none"
        />
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex md:justify-center justify-start mt-6">
    <button
      type="submit"
      className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
    >
      {loading ? "Submitting..." : "Submit Application"}
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default JobApplicationForm;