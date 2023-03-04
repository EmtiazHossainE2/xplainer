import RequireAuth from '@/pages/auth/RequireAuth'
import DashNav from '../components/v1/Shared/Navbar/DashNav'

const DashboardLayout = ({user,children}) => {
  return (
    <div>
      <RequireAuth>
        
        <DashNav user={user}/>

        {children}

      </RequireAuth>
    </div>
  )
}

export default DashboardLayout