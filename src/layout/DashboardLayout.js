
import RequireAuth from '../auth/RequireAuth'
import Footer2 from '../components/v1/Shared/Footer/Footer2'
import DashNav from '../components/v1/Shared/Navbar/DashNav'
import Navbar from '../components/v1/Shared/Navbar/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <RequireAuth>

        <Navbar />

        {children}

        <Footer2/>

      </RequireAuth>
    </div>
  )
}

export default DashboardLayout