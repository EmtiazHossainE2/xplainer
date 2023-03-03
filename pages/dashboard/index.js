
import RequireAuth from '../auth/RequireAuth'

const Dashboard = () => {
  return (
    <>
    <RequireAuth>
      <h2>Dashboard</h2>
    </RequireAuth>
    </>
  )
}

export default Dashboard