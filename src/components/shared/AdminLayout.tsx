import React, { useMemo } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const memoizedSidebar = useMemo(() => <AdminSidebar />, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        {memoizedSidebar} 
        <main className="flex-1 sm:p-4 w-100 overflow-auto">
          {children} 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
