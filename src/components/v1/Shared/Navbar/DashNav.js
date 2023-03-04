import auth from "@/pages/auth/firebase/Firebase.init"
import { signOut } from "firebase/auth"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

const DashNav = () => {

  const [profileOpen, setProfileOpen] = useState(false)
  const router = useRouter()
  const [user] = useAuthState(auth)
  console.log(user)

  const logOut = () => {
    signOut(auth)
    window.location.href = "/";
  }
  const linkStyle = "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"

  return (
    <div>
      <div className="container mx-auto lg:py-2 lg:px-20">
        <div className="relative flex justify-between items-center">
          <Link href='/dashboard'><h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold">Xplainerr</h3></Link>
          <div>
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
        </div>
      </div>
      <hr className="border-b my-2 2xl:my-3" />
    </div>
  )
}

export default DashNav