import { MyCourses, Settings, WishList } from '@/src/components/v1/Dashboard'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import DashboardLayout from '@/src/layout/DashboardLayout'
import { use, useState } from 'react'
import { useSelector } from 'react-redux'
import {db} from "@/src/auth/firebase/Firebase.init";
import { parseCookies } from '@/src/utils/helper'
import { ref, onValue, get, child } from "firebase/database";


const Dashboard = ({allCourses}) => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(0);

  const menus = [
    { id: 0, name: "All Courses" },
    { id: 1, name: "Settings" },
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
            <h2 className='text-lg lg:text-[26px] big:pb-16  lg:leading-[48px] font-medium lg:font-bold text-white pt-9 pb-7 '>Welcome Back , {" "}
              <span className='lg:hidden pb-1'><br /></span>
              {currentUser?.displayName}
            </h2>

            {/* Menus  */}
            <nav className="flex items-center gap-5 border-gray-200 ">
              {menus.map((menu, index) => (
                <p
                  key={index}
                  onClick={() => handleActive(index)}
                  className={`text-sm lg:text-base cursor-pointer pb-2 lg:px-2 border-b-[6px]  ${index === clicked ? "text-white font-semibold " : "border-transparent text-white"
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
          {active === 0 && <MyCourses allCourses={allCourses}/>}
          {/* {active === 1 && <WishList />} */}
          {active === 1 && <Settings currentUser={currentUser}/>}
        </div>

      </DashboardLayout>
    </>
  )
}


export default Dashboard

export const getServerSideProps = async ({req, res}) => {
  
  // fetch cookie
  const data = parseCookies(req);
  const user = data.user && JSON.parse(data.user);

  if(!user) { 
    return { 
      props : {
        user : null,
        allCourses : []
      }
    }
  }

  const userRef = ref(db);
  const channel = `users/${user.uid}/paidCourses`;
  const snapshot = await get(child(userRef, channel))
  const courseData = snapshot.val();

  let unlockedCourses = [];

  if(courseData){
    await Promise.all(Object.keys(courseData).map( async (item, index) => {
      const courseChannel = `courses/${item}`;
       const snap = await get(child(userRef, courseChannel))
      const courseDetail = snap.val();
      if(courseDetail){
        unlockedCourses.push(courseDetail)
      }
    }));
  }

  console.log(unlockedCourses);

  return {
    props: {
      user : user,
      allCourses: unlockedCourses,
    },
  }
}

