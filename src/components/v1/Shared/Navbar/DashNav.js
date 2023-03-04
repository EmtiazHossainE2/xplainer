import auth from "@/pages/auth/firebase/Firebase.init"
import { signOut } from "firebase/auth"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AiOutlineMenu } from 'react-icons/ai';
import DashMobileNav from "./DashMobileNav"

const DashNav = ({user}) => {

  const [isSticky, setSticky] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false)
  const [open, setToggle] = useState(false)

  //********************** Handle Sticky 
  useEffect(() => {
    const body = document.querySelector('body')
    // console.log(body)
    if (!body) return

    if (open) {
      body.style.overflowY = "hidden"
    } else {
      body.style.overflowY = "auto"
    }


    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);
  

  const logOut = () => {
    signOut(auth)
    window.location.href = "/";
  }
  const linkStyle = "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"

  return (
    <div className={` ${isSticky ? 'bg-white shadow-md fixed w-full z-10 top-0 border-b border-gray-200' : 'border-b border-gray-200'}`}>
      <div className="container mx-auto px-3 lg:px-16">
        <div className={`relative flex justify-between items-center ${isSticky ? 'py-2' : 'py-2.5'}`}>
          <Link href='/dashboard'><h3 className="font-bold text-[26px]">Xplainerr</h3></Link>
          {/*********************** For Desktop ********************* */}
          <div className="hidden lg:block">
            {user?.email && (
              <>
                {/************************ Profile   ************************/}
                <div
                  className='cursor-pointer'
                  onMouseOver={() => {
                    setProfileOpen(true)
                  }}
                >
                  {user?.photoURL ? (
                    <Image className='rounded-full' src={user?.photoURL} width={38} height={38} alt="user photo" />
                  ) : (
                    <Image className='rounded-full' src='/images/shared/demoProfile.png' width={38} height={38} alt="user photo" />
                  )}
                </div>

                {/* Profile Submenu  */}
                {profileOpen && (
                  <div onMouseLeave={() => setProfileOpen(false)} className="absolute right-0 top-12 z-80 bg-white py-2 shadow-xl rounded-b-xl">

                    <div className={` ${linkStyle}`}>
                      <h4 className="font-semibold ">{user?.displayName}</h4>
                      <span className="text-sm text-gray-400">{user?.email}</span>
                    </div>
                    <hr />

                    <Link href='/dashboard/' className={linkStyle}>
                      Dashboard
                    </Link>

                    <Link href='/dashboard/my-courses' className={linkStyle}>
                      My Courses
                    </Link>

                    <span className={`cursor-pointer ${linkStyle}`} onClick={logOut}>
                      Log Out
                    </span>

                  </div>
                )}
              </>
            )}
          </div>

          {/*********************** For Mobile Menu ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu className='cursor-pointer' size={27} onClick={() => setToggle(true)} />
          </div>

          <DashMobileNav open={open} setToggle={setToggle}  user={user} logOut={logOut} />


        </div>
      </div>
    </div>
  )
}

export default DashNav