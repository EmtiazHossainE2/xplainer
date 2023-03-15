
import RequireAuth from '../auth/RequireAuth'
import DashNav from '../components/v1/Shared/Navbar/DashNav'
import Navbar from '../components/v1/Shared/Navbar/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <RequireAuth>

        <Navbar />

        {children}

      </RequireAuth>
    </div>
  )
}

export default DashboardLayout