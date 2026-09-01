"use client";
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import AdminLayout from '@/components/shared/AdminLayout';
import { backend_url } from '@/newLayout';
import axios from 'axios';
import Link from 'next/link';
import {  useRouter, useSearchParams } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { toast } from 'react-toastify';

interface FormData {
  title: string;
  description: string;
  jobType: string;
  location: string;
  skills: string[];
  experience: string;
  salary: string;
  category: string;
  employmentType: string;
  company: string;
  qualifications: string[];
}

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');
  const router = useRouter()
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    jobType: '',
    location: '',
    skills: [],
    experience: '',
    salary: '',
    category: '',
    employmentType: '',
    company: '',
    qualifications: []
  });

  useEffect(() => {
    if (jobId) {
      const fetchJobData = async () => {
        try {
          const res = await axios.get(`${backend_url}/api/v1/job/get/${jobId}`);
          if (res.data.success) {
            setFormData(res.data.job); 
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchJobData();
    }
  }, [jobId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleArrayChange = (e: ChangeEvent<HTMLInputElement>, field: 'skills' | 'qualifications') => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value.split(',').map(item => item.trim()).filter(Boolean)
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (jobId) {
        // Update job if jobId is present
        const res = await axios.put(`${backend_url}/api/v1/job/update/${jobId}`, formData, {
          withCredentials: true,
        });
        if (res.data.success) {
          router.push("/admin/all-jobs")
          toast.success(res.data.message);
          setFormData({
            title: '',
            description: '',
            jobType: '',
            location: '',
            skills: [],
            experience: '',
            salary: '',
            category: '',
            employmentType: '',
            company: '',
            qualifications: []
          });
        }
      } else {
        // Create new job if no jobId
        const res = await axios.post(`${backend_url}/api/v1/job/create`, formData, {
          withCredentials: true,
        });
        if (res.data.success) {
          router.push("/admin/all-jobs")
          toast.success(res.data.message);
          setFormData({
            title: '',
            description: '',
            jobType: '',
            location: '',
            skills: [],
            experience: '',
            salary: '',
            category: '',
            employmentType: '',
            company: '',
            qualifications: []
          });
        }
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }finally{
      setLoading(false)
    }
  };


   // Handle cancel
   const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      jobType: '',
      location: '',
      skills: [],
      experience: '',
      salary: '',
      category: '',
      employmentType: '',
      company: '',
      qualifications: []
    });
  };

  

  return (
    <ProtectedRoute>
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">{jobId ? 'Edit Job' : 'Add New Position'}</h1>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Row 1: jobType and location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Row 2: experience and salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Experience Level</option>
                <option value="0-2 years">0-2 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Salary</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Row 3: category and employmentType */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Design">Design</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Employment Type</label>
              <input
                type="text"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Row 4: company */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Company</label>
            <select
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select Company</option>
              <option value="Tech Creator">Tech Creator</option>
            </select>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Skills (Comma separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. JavaScript, Node.js, React"
            />
          </div>

          {/* Qualifications */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Qualifications (Comma separated)</label>
            <input
              type="text"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Bachelors, Masters"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between">
            <Link
              href="/admin/all-jobs"
              className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
            >
              {loading ? "Loading..." : jobId ? 'Update Job' : 'Create Job'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
    </ProtectedRoute>
  );
};

export default Page;
