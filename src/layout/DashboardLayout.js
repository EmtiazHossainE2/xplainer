import RequireAuth from '@/pages/auth/RequireAuth'
import React from 'react'
import DashNav from '../components/v1/Shared/Navbar/DashNav'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <RequireAuth>
        <DashNav />
        {children}
      </RequireAuth>
    </div>
  )
}

export default DashboardLayout