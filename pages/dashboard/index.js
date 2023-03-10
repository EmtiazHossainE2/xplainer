import auth from '@/src/auth/firebase/Firebase.init'
import MyCourses from '@/src/components/v1/Dashboard/MyCourses'
import Settings from '@/src/components/v1/Dashboard/Settings'
import WishList from '@/src/components/v1/Dashboard/WishList'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import DashboardLayout from '@/src/layout/DashboardLayout'
import Image from 'next/image'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  // console.log(user)

  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(0);

  const menus = [
    { id: 0, name: "All Courses" },
    { id: 1, name: "Wishlist" },
    { id: 2, name: "Settings" },
  ];

  const handleActive = (index) => {
    setActive(index);
    setClicked(index);
  };


  return (
    <>
      <CommonHead
        title={"Xplainerr | Dashboard"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <DashboardLayout user={user}>
        <div className="bg-black">
          <div className='container mx-auto px-3 lg:px-16 pt-5 pb-.5'>
            <h2 className='text-2xl  text-white font-semibold py-3 lg:pt-5'>Welcome Back , {" "}
              <span className='lg:hidden pb-1'><br /></span>
              {user?.displayName}</h2>

            <h2 className='text-2xl  lg:text-3xl text-white font-semibold py-3 lg:py-10'>My Learning </h2>
            {/* Menus  */}
            <nav className="flex items-center gap-5 border-gray-200 ">
              {menus.map((menu, index) => (
                <p
                  key={index}
                  onClick={() => handleActive(index)}
                  className={`text-xl cursor-pointer pb-2 px-2 border-b-[6px]  ${index === clicked ? "text-white font-semibold " : "border-transparent text-white"
                    }`}
                >
                  {menu.name}
                </p>
              ))}
            </nav>
            {/* Menus  */}
          </div>
        </div>

        {/* Child  */}
        <div className="container mx-auto px-3 lg:px-16 my-5">
          {active === 0 && <MyCourses />}
          {active === 1 && <WishList />}
          {active === 2 && <Settings />}
        </div>

      </DashboardLayout>
    </>
  )
}

export default Dashboard