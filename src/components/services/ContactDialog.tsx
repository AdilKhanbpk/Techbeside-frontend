import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { backend_url } from '@/newLayout';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import CommonButton from "../common/Button";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactDialog = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); 
  const router = useRouter()

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backend_url}/api/v1/contact/send`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      if (res.data.success) {
        toast.success(res.data.message);
router.push("/confirmation")
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' }); 
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error?.response?.data?.message || 'An error occurred';
      toast.error(errorMessage);
    } finally {
      setLoading(false); 
    }
  };
  return (
    
      <form onSubmit={handleSubmit} className="sm:w-[565px] shadow-2xl p-6 sm:p-10 mt-10 sm:mt-0 h-full w-full bg-white rounded-md">
      <div className="flex flex-col sm:flex-row sm:gap-5 mb-4">
        <input
          placeholder="First name*"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={changeEventHandler}
          required
          className="w-full sm:w-1/2 rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-purple-700 focus:outline-none mb-4 sm:mb-0"
        />
        <input
          placeholder="Last name*"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={changeEventHandler}
          required
          className="w-full sm:w-1/2 rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-purple-700 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="Email*"
          type="email"
          name="email"
          value={formData.email}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-purple-700 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="Phone Number*"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-purple-700 focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <textarea
          placeholder="Your Message..."
          rows={4}
          name="message"
          value={formData.message}
          onChange={changeEventHandler}
          required
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-purple-700 focus:outline-none"
        />
      </div>
      <div>
        <CommonButton
          title={loading ? "Sending..." : "Send Message"}
          type="submit"
          disabled={loading}
          className={`bg-purple-700 text-white w-full h-12 rounded-full transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'} focus:outline-none`}
        />
      </div>
    </form>
  )
}

export default ContactDialog
