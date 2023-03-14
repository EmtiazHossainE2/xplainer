
import RequireAuth from '../auth/RequireAuth'
import DashNav from '../components/v1/Shared/Navbar/DashNav'

const DashboardLayout = ({ children }) => {
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