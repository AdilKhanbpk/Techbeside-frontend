"use client"
import JobsCard from '@/components/admin/Alljobs'
import Header from '@/components/admin/Header'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import AdminLayout from '@/components/shared/AdminLayout'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import React, { useState } from 'react'


const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")


  
  useGetAllJobs()

  return (
    <ProtectedRoute>
    <AdminLayout>
      <div className="">
        <Header onSearch={setSearchTerm} buttonType="job"  />
        <JobsCard searchTerm={searchTerm} />
      </div>
    </AdminLayout>
    </ProtectedRoute>
  )
}

export default Page
