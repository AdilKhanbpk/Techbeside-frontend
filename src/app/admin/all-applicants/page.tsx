"use client";
import ApplicantsTable from "@/components/admin/ApplicantsTable";
import AdminLayout from "@/components/shared/AdminLayout";
import useGetAllApplicants from "@/hooks/useGetAllApplicants";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const ApplicantsPage = () => { 
  useGetAllApplicants();
  const applicants = useSelector((store: RootState) => store.applicants.applicants);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredApplicants = applicants.filter((applicant) =>
    `${applicant.firstName} ${applicant.lastName} ${applicant.address} ${applicant.city}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
    <AdminLayout>
      <div className="container mx-auto p-4 mt-20">

        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
  <h1 className="text-2xl font-bold mb-4 md:mb-0">Applicant List</h1>

  <div className="relative flex items-center w-full max-w-xs">
    <input
      type="text"
      placeholder="Search by name & location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 pl-10 border-2 border-black rounded-md focus:outline-none "
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
</div>

        <ApplicantsTable users={filteredApplicants} />
      </div>
    </AdminLayout>
    </ProtectedRoute>
  );
};

export default ApplicantsPage;
