"use client";
import { backend_url } from "@/newLayout";
import { setAllApplicants } from "@/redux/applicantSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllApplicants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/application/get/all`, { withCredentials: true });

        if (res.data.success) {
          dispatch(setAllApplicants(res.data.applications));  
        }
      } catch (error) {
        console.error("Error fetching Messages:", error);  
      }
    };
    fetchAllApplicants();  
  }, [dispatch]); 

};

export default useGetAllApplicants;