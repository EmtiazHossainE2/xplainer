import { MyCourses, Settings, WishList } from '@/src/components/v1/Dashboard'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import DashboardLayout from '@/src/layout/DashboardLayout'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)

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
      <DashboardLayout >
        <div className="bg-black">
          <div className='container mx-auto px-5 lg:px-16 big:px-[130px]'>
            <h2 className='text-2xl lg:text-[34px] leading-10 lg:leading-[48px] font-bold lg:font-extrabold text-white pt-9 pb-7 big:pb-16'>Welcome Back , {" "}
              <span className='lg:hidden pb-1'><br /></span>
              {currentUser?.displayName}
            </h2>

            {/* Menus  */}
            <nav className="flex items-center gap-5 border-gray-200 ">
              {menus.map((menu, index) => (
                <p
                  key={index}
                  onClick={() => handleActive(index)}
                  className={`lg:text-lg big:text-2xl cursor-pointer pb-2 lg:px-2 border-b-[6px]  ${index === clicked ? "text-white font-bold " : "border-transparent text-white"
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
        <div className="container mx-auto px-5 lg:px-16 big:px-[130px] pt-16 big:pt-20">
          {active === 0 && <MyCourses />}
          {active === 1 && <WishList />}
          {active === 2 && <Settings />}
        </div>

      </DashboardLayout>
    </>
  )
}

export default Dashboard