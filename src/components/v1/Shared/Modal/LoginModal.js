import auth from "@/pages/auth/firebase/Firebase.init";
import Image from "next/image"
import { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';



const LoginModal = ({ isVisible, setLoginModal, onClose }) => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      setLoginModal(false)
      window.location.href = "/dashboard";
    }
  }, [user, setLoginModal])

  //loading
  if (loading) {
    return <p className="flex justify-center  items-center h-screen font-bold text-2xl">Loading...</p>
  }
  

  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center md:items-center z-[9999] pt-[10%] md:pt-5 px-3 lg:px-0'>
      <div className='w-[99%] md:w-[50%] lg:w-[70%] xl:w-[60%] 2xl:w-[900px] flex flex-col '>

        <div className=''>

          <div className="bg-white rounded-2xl flex shadow-[0_10px_20px_5px_rgb(0 0 0 / 5%)]">
            {/******************************* left-section ******************************/}
            <div className="hidden lg:block bg-[url('/images/shared/login_bg.webp')] bg-cover bg-[50%] pt-[18.75rem] px-[2.5rem] pb-[5.5rem] w-[28rem] rounded-l-[0.92rem]">
              <div className="text-2xl font-extrabold text-white">
                Welcome back ✨
              </div>
              <div className="text-[#e0e0e0] text-sm mt-[1.75rem] mx-0 mb-[2.75rem]">
                Expert-led training courses to accelerate your professional
                development
              </div>
              <div className="font-medium flex items-center text-white">
                Log in to get back
              </div>
            </div>

            {/* ******************************Right Section*******************************/}
            <div className="pt-12 px-5 lg:px-10 pb-10 text-center w-full lg:w-[29.375rem] relative flex flex-col justify-center items-center">
              <button className='text-black  text-lg font-semibold absolute top-4 right-4 border rounded-full border-[#e6e5e5] px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
              <div className="w-full">
                <div className=" text-[1.75rem] font-extrabold text-[#171421] mb-6">
                  Log in to your account
                </div>
                <div>
                  <div>
                    <div className="mt-6 mx-0 mb-8">
                      <span>Please enter your email to receive</span><br />
                      one time password
                    </div>
                    <input type="text" required="required" className="border border-[#e5e7eb] rounded-lg py-4 px-5 w-full text-[#171421] outline-[none]" placeholder="Email" />
                    <button disabled="disabled" className="bg-[#6334c8] font-semibold text-white disabled:opacity-[.2] w-full py-4 px-0 rounded-lg mt-3">
                      Get OTP </button>
                  </div>
                </div>
                <div>
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="flex-shrink mx-4 text-[#bdbdbd]">OR</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>
                  <button className="w-full flex justify-center items-center border border-[#e5e7eb] py-4  text-sm font-bold text-[#171421] rounded-lg">
                    <div className="flex items-center gap-1" onClick={() => signInWithGoogle()}>
                      <Image src="/images/brand/1.svg" width={25} height={25} alt="google" />
                      Continue with Google
                    </div>
                  </button>
                  <div className="text-[#828282] text-sm mt-6">
                    Don`&apos;`t have an account?<span className="text-[#6334c8] font-bold cursor-pointer px-2">Sign up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default LoginModal