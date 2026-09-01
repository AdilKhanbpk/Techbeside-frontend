"use client";
import { backend_url } from "@/newLayout";
import { setMessages } from "@/redux/messageSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllMessages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/contact/all`, { withCredentials: true });
     

        if (res.data.success) {
          dispatch(setMessages(res.data.messages));  
        }
      } catch (error) {
        console.error("Error fetching Messages:", error);  
      }
    };
    fetchAllMessages();  
  }, [dispatch]); 

};

export default useGetAllMessages;