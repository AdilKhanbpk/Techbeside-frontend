import { backend_url } from "@/newLayout";
import { deleteApplicant } from "@/redux/applicantSlice";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface User {
  _id: string;
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
  resume: string;
  motivationLetter: string;
  originalResumeName: string;
  originalMotivationLetterName: string;
  createdAt: string;
}

interface UserTableProps {
  users: User[];
}

const ApplicantsTable: React.FC<UserTableProps> = ({ users }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const applicantsPerPage = 12;

  const totalPages = Math.ceil(users.length / applicantsPerPage);

  const indexOfLastApplicant = currentPage * applicantsPerPage;
  const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
  const currentApplicants = users.slice(
    indexOfFirstApplicant,
    indexOfLastApplicant
  );

  const handleSeeDetail = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString();
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${backend_url}/api/v1/application/delete/${id}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        dispatch(deleteApplicant(id));
        toast.success(res.data.message);
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 shadow-md">
        <thead className="bg-gray-100 text-gray-600 text-nowrap">
          <tr>
            <th className="px-4 py-2 text-left">Full Name</th>
            <th className="px-4 py-2 text-left">Phone Number</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Resume</th>
            <th className="px-4 py-2 text-left">Motivation Letter</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-600">
          {currentApplicants.map((user) => (
            <tr key={user._id} className="border-t">
              <td className="px-4 py-2 text-nowrap ">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-4 py-2">{user.phoneNumber}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                {user.resume ? (
                  <a
                    href={user.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.originalResumeName || "View Resume"}
                  </a>
                ) : (
                  <span className="text-gray-500">No Resume Available</span>
                )}
              </td>
              <td className="px-4 py-2">
                {user.motivationLetter ? (
                  <a
                    href={user.motivationLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.originalMotivationLetterName ||
                      "View Motivation Letter"}
                  </a>
                ) : (
                  <span className="text-gray-500">
                    No Motivation Letter Available
                  </span>
                )}
              </td>
              <td className="px-4 py-2">{formatDate(user.createdAt)}</td>
              <td className="px-4 py-2">
                <div className="flex space-x-4">
                  <button
                    className="text-purple-600 hover:text-purple-700"
                    onClick={() => handleSeeDetail(user)}
                    aria-label="See Detail"
                  >
                    <FaEye size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 hover:text-red-700"
                    aria-label="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-100">
          <tr>
            <td colSpan={7} className="py-2 px-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={goToPreviousPage}
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
                  onClick={goToNextPage}
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

      {/* Modal for User Details */}
      {selectedUser && (
        <div
          className="absolute inset-0 flex items-center justify-center mb-4 bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white text-black  w-full md:max-w-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-8 text-center bg-[#9A00FF] text-white p-7">
              User Details
            </h2>
            <div className="p-2 mb-3">
              <p className="mb-2">
                <strong>Full Name:</strong> {selectedUser.firstName}{" "}
                {selectedUser.lastName}
              </p>
              <p className="mb-2">
                <strong>Phone Number:</strong> {selectedUser.phoneNumber}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p className="mb-2">
                <strong>Location:</strong> {selectedUser.city}
              </p>
              <p className="mb-2">
                <strong>Address:</strong> {selectedUser.address},{" "}
                {selectedUser.city}, {selectedUser.stateOrProvince}
                {selectedUser.postalOrZipCode}
              </p>
              <p className="mb-2">
                <strong>Gender:</strong> {selectedUser.gender}
              </p>
              <p className="mb-2">
                <strong>Position Applied:</strong>{" "}
                {selectedUser.applyingForPosition}
              </p>
              <p className="mb-2">
                <strong>Experience:</strong> {selectedUser.experience}
              </p>
              <p className="mb-2">
                <strong>Professional URL:</strong>{" "}
                <a
                  href={selectedUser.professionalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {selectedUser.professionalUrl}
                </a>
              </p>
              <p className="mb-2">
                <strong>Motivation Letter:</strong>
                {selectedUser.motivationLetter ? (
                  <a
                    href={selectedUser.motivationLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {selectedUser.originalMotivationLetterName ||
                      "View Motivation Letter"}
                  </a>
                ) : (
                  <span className="text-gray-500">
                    No Motivation Letter Available
                  </span>
                )}
              </p>
              <p className="mb-2">
                <strong>Resume:</strong>
                {selectedUser.resume ? (
                  <a
                    href={selectedUser.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {selectedUser.originalResumeName || "View Resume"}
                  </a>
                ) : (
                  <span className="text-gray-500">No Resume Available</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsTable;
