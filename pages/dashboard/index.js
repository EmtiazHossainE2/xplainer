import DashboardLayout from '@/src/layout/DashboardLayout'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../auth/firebase/Firebase.init'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  // console.log(user)
  return (
    <DashboardLayout user={user}>
      <div className='container mx-auto section__padding'>
        <h2 className='lg:text-3xl xl:text-4xl  font-semibold py-3'>Welcome Back , {user?.displayName}</h2>
        <p className='text-gray-500'>Continue learning with our recommendations based on your career goals and recent activity</p>
        <div className='pt-5'>
          <Image className='rounded' src={user?.photoURL} width={300} height={300} alt="user photo" />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard