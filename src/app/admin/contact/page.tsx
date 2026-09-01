"use client";
import { useState } from 'react';
import ContactTable from '@/components/admin/ContactTable';
import AdminLayout from '@/components/shared/AdminLayout';
import useGetAllMessages from '@/hooks/useGetAllMessages';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa'; 
import axios from 'axios';
import { backend_url } from '@/newLayout';
import { toast } from 'react-toastify';
import { removeContact } from '@/redux/messageSlice';
import ContactModal from '@/components/admin/ContactModal';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: string;
}

const Contacts: React.FC = () => {
  useGetAllMessages();

  const { messages } = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = messages?.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      fullName.includes(lowerCaseQuery) ||
      contact.email.toLowerCase().includes(lowerCaseQuery) ||
      contact.phoneNumber.toLowerCase().includes(lowerCaseQuery) ||
      contact.message.toLowerCase().includes(lowerCaseQuery)
    );
  }) || [];

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`${backend_url}/api/v1/contact/delete/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(removeContact(id));
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  const handleView = async (id: string) => {
    try {
      const res = await axios.get(`${backend_url}/api/v1/contact/get/${id}`, {        
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        setSelectedContact(res.data.message);
        setIsModalOpen(true); 
      }else{
        toast.error(res.data.message)
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setSelectedContact(null);
  };
  return (
    <ProtectedRoute>
    
    <AdminLayout>
      <div className="p-4 mt-20">
        <div className="flex justify-between sm:flex-row flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Contacts : ({messages.length})</h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 pl-10 border-2 border-black  rounded-md w-[300px] outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <ContactTable  contacts={filteredContacts} onDelete={handleDelete} onView={handleView} />

        {/* Conditionally render ContactModal if it's open */}
        {isModalOpen && selectedContact && (
          <ContactModal contact={selectedContact} onClose={handleCloseModal} />
        )}
      </div>
    </AdminLayout>
    </ProtectedRoute>
  );
};

export default Contacts;