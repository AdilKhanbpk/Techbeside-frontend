"use client";
import Login from "@/components/auth/login";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Login />
  );
};

export default page;
