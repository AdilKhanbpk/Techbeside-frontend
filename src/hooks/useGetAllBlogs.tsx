"use client";
import { backend_url } from "@/newLayout";
import { setAllblog } from "@/redux/blogSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllBlogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/blogs/all`, { withCredentials: true });

        if (res.data.success) {
          dispatch(setAllblog(res.data.blogs));  
        } else {
          console.error("No blogs found or API failed:", res.data.message);
        }
      } catch (error:any) {
        console.error("Error fetching blogs:", error.message);  
      }
    };
    fetchAllBlogs();
  }, [dispatch]);
};


export default useGetAllBlogs;