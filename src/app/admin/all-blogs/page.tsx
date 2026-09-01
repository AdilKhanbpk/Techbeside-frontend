import AllBlogs from '@/components/admin/AllBlogs'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import AdminLayout from '@/components/shared/AdminLayout'
import React from 'react'

const Blogs = () => {
  return (
    <ProtectedRoute>
    <AdminLayout>
      <AllBlogs/>
    </AdminLayout>
    </ProtectedRoute>
  )
}

export default Blogs