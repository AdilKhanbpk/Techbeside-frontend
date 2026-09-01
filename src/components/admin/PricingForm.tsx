"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { backend_url } from "@/newLayout";

interface PricingItem {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  referenceLink: string;
  details: string;
  createdAt: string;
}

const PricingForm = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PricingItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<PricingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${backend_url}/api/v1/pricing/all/form-submissions`
        );
        if (res.data.success && Array.isArray(res.data.data)) {
          setData(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlerDelete = async (id: string) => {
    try {
      // Make the delete API call
      const res = await axios.delete(
        `${backend_url}/api/v1/pricing/delete/form-submissions/${id}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        // Remove the deleted item from the state
        setData((prevData) => prevData.filter((item) => item._id !== id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "An error occurred while deleting"
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleString();
      setCurrentTime(time);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

 
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (item: PricingItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="mt-20">
      <div className="flex md:flex-row flex-col text-center md:text-start mt-6 md:mt-2 justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Pricing List</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search customers..."
            className="border-2 outline-none p-2 rounded-md w-[300px]  border-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
            <th className="border p-2 text-center">No.</th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Phone Number</th>
              <th className="border p-2 text-left">Service</th>
              <th className="border p-2 text-left">Reference Link</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 text-center">
        {startIndex + index + 1} 
      </td>
                <td className="border p-2 text-nowrap">{item.name}</td>
                <td className="border p-2 text-nowrap">{item.email}</td>
                <td className="border p-2 text-nowrap">{item.phoneNumber}</td>
                <td className="border p-2">
                  {Array.isArray(item.service)
                    ? item.service.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))
                    : String(item.service)
                        .split("\n")
                        .map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                </td>

                <td className="border p-2 text-blue-500">
                  <a
                    href={item.referenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.referenceLink}
                  </a>
                </td>
                <td className="border p-2">
                  <button
                    className="text-purple-600 mr-2"
                    onClick={() => openModal(item)}
                  >
                    <FaRegEye />
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => handlerDelete(item._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100 w-full">
  <tr>
    <td colSpan={7} className="py-2 px-4 ">
      <div className="flex justify-between items-center ">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-500" : "bg-purple-600 text-white"}`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-500" : "bg-purple-600 text-white"}`}
        >
          Next
        </button>
      </div>
    </td>
  </tr>
</tfoot>

        </table>
      </div>

      

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div
            ref={modalRef} 
            className="bg-white  w-1/3"
          >
            <h2 className="text-2xl font-bold mb-4 text-center bg-[#9A00FF] text-white p-7">
              Pricing Form Details
            </h2>
            <div className="p-2 mb-3">
              <p>
                <strong>Name:</strong> {selectedItem.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedItem.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {selectedItem.phoneNumber}
              </p>
              <p>
                <strong>Services:</strong> <br />
                {Array.isArray(selectedItem.service)
                  ? selectedItem.service.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))
                  : String(selectedItem.service)
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
              </p>
              <p>
                <strong>Reference Link:</strong>{" "}
                <a
                  href={selectedItem.referenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedItem.referenceLink}
                </a>
              </p>
              <p>
                <strong>Description:</strong> {selectedItem.details}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(selectedItem.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Current Time:</strong> {currentTime}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingForm;
