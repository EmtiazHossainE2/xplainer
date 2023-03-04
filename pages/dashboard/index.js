import auth from '@/src/auth/firebase/Firebase.init'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import DashboardLayout from '@/src/layout/DashboardLayout'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  // console.log(user)
  return (
    <>
      <CommonHead
        title={"Xplainerr | Dashboard"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <DashboardLayout user={user}>
        <div className='container mx-auto px-3 lg:px-16'>
          <h2 className='text-2xl lg:text-3xl font-semibold py-3 lg:pt-5'>Welcome Back ,
            <span className='lg:hidden pb-1'><br /></span>
            {user?.displayName}</h2>
          <p className='text-gray-500'>Continue learning with our recommendations based on your career goals and recent activity</p>
          <div className='pt-5'>
            <Image className='rounded' src={user?.photoURL} width={300} height={300} alt="user photo" />
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Dashboard