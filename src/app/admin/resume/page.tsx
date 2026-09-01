"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminLayout from "@/components/shared/AdminLayout";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import Link from "next/link";

interface Resume {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: String;
  jobField: string;
  professionalUrl: string;
  resume: string;
  originalFileName: string;
}

const Page = () => {
  const rowsPerPage = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/resume/allResume`);
        if (res.data.success) {
          setResumes(res.data.resumes);
        }
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  const filteredData = resumes.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (item.name?.toLowerCase() || "").includes(searchTermLower) ||
      (item.email?.toLowerCase() || "").includes(searchTermLower) ||
      (item.phoneNumber?.toLowerCase() || "").includes(searchTermLower) ||
      (item.location?.toLowerCase() || "").includes(searchTermLower) ||
      (item.jobField?.toLowerCase() || "").includes(searchTermLower) ||
      (item.professionalUrl?.toLowerCase() || "").includes(searchTermLower) ||
      (item.originalFileName?.toLowerCase() || "").includes(searchTermLower)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${backend_url}/api/v1/resume/delete/${id}`
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setResumes(resumes.filter((resume) => resume._id !== id));
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4 mt-20">
          {/* Search Input */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Resume List : ({filteredData.length})</h1>
            <div className="relative flex items-center w-full max-w-xs">
              <input
                type="text"
                placeholder="Search by name, location, or field..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border-2 border-black rounded-md focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-2 text-center">No.</th>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Email</th>
                  <th className="border p-2 text-left">Phone</th>
                  <th className="border p-2 text-left">Location</th>
                  <th className="border p-2 text-left">Field</th>
                  <th className="border p-2 text-left">Professional URL</th>
                  <th className="border p-2 text-left">Resume</th>
                  <th className="border p-1 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr key={row._id}>
                    <td className="border p-2 text-center">
                      {startIndex + index + 1}
                    </td>
                    <td className="border p-2 text-nowrap">{row.name}</td>
                    <td className="border p-2 text-nowrap">{row.email}</td>
                    <td className="border p-2 text-nowrap">
                      {row.phoneNumber}
                    </td>
                    <td className="border p-2 text-nowrap">{row.location}</td>
                    <td className="border p-2 text-nowrap">{row.jobField}</td>
                    <td className="border p-2">
                      <Link
                        href={row.professionalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {row.professionalUrl}
                      </Link>
                    </td>
                    <td className="border p-2 text-nowrap">
                      <a
                        href={row.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {row.originalFileName}
                      </a>
                    </td>
                    <td className="border p-1 text-center">
                      <button onClick={() => handleDelete(row._id)}>
                        <FaTrash className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot className="bg-gray-100 w-full">
                <tr>
                  <td colSpan={8} className="py-2 px-4">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded ${
                          currentPage === 1
                            ? "bg-gray-200 text-gray-500"
                            : "bg-purple-600 text-white"
                        }`}
                      >
                        Previous
                      </button>
                      <span className="text-gray-700">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded ${
                          currentPage === totalPages
                            ? "bg-gray-200 text-gray-500"
                            : "bg-purple-600 text-white"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default Page;
