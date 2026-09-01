"use client";
import React from 'react';
import CreateBlogForm from '@/components/admin/CreateBlog'; 
import AdminLayout from '@/components/shared/AdminLayout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const CreateBlogPage: React.FC = () => {
  return (
    <ProtectedRoute>
   <AdminLayout>
      <div>
        <CreateBlogForm /> 
      </div>
   </AdminLayout>
   </ProtectedRoute>
  );
};

export default CreateBlogPage;
