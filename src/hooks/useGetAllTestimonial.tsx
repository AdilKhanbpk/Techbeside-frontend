"use client";
import { backend_url } from "@/newLayout";
import { setAllProjects } from "@/redux/projectSlice";
import { setAllTestimonials } from "@/redux/testimonialSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllTestimonial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllTestimonial = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/testimonial/all`, { withCredentials: true });
  

        if (res.data.success) {
          dispatch(setAllTestimonials(res.data.testimonials));  
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);  
      }
    };
    fetchAllTestimonial();  
  }, [dispatch]); 

};

export default useGetAllTestimonial;
