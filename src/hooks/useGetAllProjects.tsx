"use client";
import { backend_url } from "@/newLayout";
import { setAllProjects } from "@/redux/projectSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/project/all`, { withCredentials: true });
     

        if (res.data.success) {
          dispatch(setAllProjects(res.data.projects));  
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);  
      }
    };
    fetchAllProjects();  
  }, [dispatch]); 

};

export default useGetAllProjects;
