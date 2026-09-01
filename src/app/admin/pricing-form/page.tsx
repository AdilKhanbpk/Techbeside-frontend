import PricingForm from '@/components/admin/PricingForm'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import AdminLayout from '@/components/shared/AdminLayout'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute>
      <AdminLayout>
    <div>
      <PricingForm/>
    </div>
    </AdminLayout>
    </ProtectedRoute>
  )
}

export default page