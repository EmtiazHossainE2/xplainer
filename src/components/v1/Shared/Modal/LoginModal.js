import Image from "next/image"


const LoginModal = ({ isVisible, setLoginModal, onClose }) => {
  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center md:items-center z-[9999] pt-[20%] md:pt-5 px-5 lg:px-0'>
      <div className='w-[99%] md:w-[50%] lg:w-[70%] xl:w-[60%] 2xl:w-[900px] flex flex-col '>

        <div className=''>

          <div class="bg-white rounded-2xl flex shadow-[0_10px_20px_5px_rgb(0 0 0 / 5%)]">
          {/******************************* left-section ******************************/}
            <div class="hidden lg:block bg-[url('/images/shared/login_bg.webp')] bg-cover bg-[50%] pt-[18.75rem] px-[2.5rem] pb-[5.5rem] w-[28rem] rounded-l-[0.92rem]">
              <div class="text-2xl font-extrabold text-white">
                Welcome back ✨
              </div>
              <div class="text-[#e0e0e0] text-sm mt-[1.75rem] mx-0 mb-[2.75rem]">
                Expert-led training courses to accelerate your professional
                development
              </div>
              <div class="font-medium flex items-center text-white">
                Log in to get back
              </div>
            </div>

            {/* ******************************Right Section*******************************/}
            <div class="pt-12 px-5 lg:px-10 pb-10 text-center w-full lg:w-[29.375rem] relative flex flex-col justify-center items-center">
              <button className='text-black  text-lg font-semibold absolute top-4 right-4 border rounded-full border-[#e6e5e5] px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
              <div class="w-full">
                <div class=" text-[1.75rem] font-extrabold text-[#171421] mb-6">
                  Log in to your account
                </div>
                <div>
                  <div>
                    <div class="mt-6 mx-0 mb-8">
                      <span>Please enter your email to receive</span><br />
                      one time password
                    </div>
                    <input type="text" required="required" class="border border-[#e5e7eb] rounded-lg py-4 px-5 w-full text-[#171421] outline-[none]" placeholder="Email" />
                    <button disabled="disabled" class="bg-[#6334c8] font-semibold text-white disabled:opacity-[.2] w-full py-4 px-0 rounded-lg mt-3">
                      Get OTP </button>
                  </div>
                </div>
                <div>
                  <div class="relative flex py-5 items-center">
                    <div class="flex-grow border-t border-[#bdbdbd]"></div>
                    <span class="flex-shrink mx-4 text-[#bdbdbd]">OR</span>
                    <div class="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>
                  <button class="w-full flex justify-center items-center border border-[#e5e7eb] py-4  text-sm font-bold text-[#171421] rounded-lg">
                    <div className="flex gap-1">
                      <Image src="/images/brand/1.svg" width={25} height={25} alt="google" />
                      Continue with Google
                    </div>
                  </button>
                  <div class="text-[#828282] text-sm mt-6">
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