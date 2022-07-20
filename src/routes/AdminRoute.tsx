import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from '../components/layout/AdminLayout'

const AdminRoute: React.FC = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

export default AdminRoute
