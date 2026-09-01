"use client"; 

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  children: React.ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); 
    } else if (user.role !== "admin") {
      router.push("/"); 
    } 
  }, [user, router]);

  if (!user || user.role !== "admin") {
    return null; 
  }

  return <>{children}</>; 
};

export default ProtectedRoute;
