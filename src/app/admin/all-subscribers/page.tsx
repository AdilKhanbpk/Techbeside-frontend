"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminLayout from "@/components/shared/AdminLayout";
import { backend_url } from "@/newLayout";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi"; // Import trash icon from react-icons
import { toast } from "react-toastify";

interface Subscriber {
  _id: string;
  email: string;
}

const AllSubscriber = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/getAllSubscribers`);
        if (res.data.success) {
          const data = res.data.subscribers.filter((subscriber: Subscriber) =>
            isValidEmail(subscriber.email)
          );
          setSubscribers(data);
          setFilteredSubscribers(data);
          setErrorMessage("");
        } else {
          setErrorMessage(res.data.message || "Failed to fetch subscribers");
        }
      } catch (error) {
        console.error("Error fetching subscribers:", error);
        setErrorMessage("An error occurred while fetching subscribers");
      }
    };

    fetchSubscribers();
  }, []);

  // Delete a subscriber
  const handleDelete = async (subscriberId: string) => {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;

    try {
      const res = await axios.delete(`${backend_url}/api/v1/delete-subscriber`, {
        data:{id: subscriberId}, 
      });

      if (res.data.success) {
        setSubscribers((prev) =>
          prev.filter((subscriber) => subscriber._id !== subscriberId)
        );
        setFilteredSubscribers((prev) =>
          prev.filter((subscriber) => subscriber._id !== subscriberId)
        );
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message || "Failed to delete subscriber");
      }
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      toast.error("An error occurred while deleting the subscriber.");
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (event.target.value.trim() === "") {
      setFilteredSubscribers(subscribers);
    } else {
      const filtered = subscribers.filter((subscriber) =>
        subscriber.email.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredSubscribers(filtered);
    }
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-8 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4 md:mb-0">
              All Subscribers: ({filteredSubscribers.length})
            </h1>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by email"
              className="px-4 py-2 border border-black rounded-lg shadow-sm outline-none"
            />
          </div>

          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg">
              {errorMessage}
            </div>
          )}

          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6  text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber, index) => (
                  <tr
                    key={subscriber._id}
                    className={`border-t hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{subscriber.email}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleDelete(subscriber._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AllSubscriber;
