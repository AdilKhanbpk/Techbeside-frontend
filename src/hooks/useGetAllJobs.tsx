"use client";
import { backend_url } from "@/newLayout";
import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/job/all`, { withCredentials: true });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));  
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);  
      }
    };
    fetchAllJobs();  
  }, [dispatch]); 

};

export default useGetAllJobs;
