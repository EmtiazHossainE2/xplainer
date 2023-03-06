import CommonHead from '@/src/components/v1/Shared/CommonHead'
import PageLayout from '@/src/layout/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {

  const socialBtnStyle = "inline-flex items-center justify-center border leading-4 font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 px-5 py-3 text-base"

  return (
    <>
      <CommonHead
        title={"Login - Xplainerr"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <div className="min-h-screen">
            <div className=" sm:container sm:pt-8 sm:mx-auto mb-8">
              <div className="bg-white mx-auto sm:border border-gray-200 sm:shadow-lg px-10 py-6 pt-8 w-full sm:max-w-lg rounded-lg">
                <div className="">
                  <h1 className="text-2xl text-center font-bold text-black mb-5">Log in to Xplainerr</h1>
                </div>
                <div>
                  {/****************************  Social Login *************************** */}
                  <div className="flex flex-col space-y-2">
                    {/***************************** Google  *****************************/}
                    <button className={`${socialBtnStyle}`} >
                      <Image src="/images/social/google.svg" alt="Google Logo" className="mr-2 " width={20} height={20} />
                      <span>Log in with Google</span>
                    </button>

                    {/***************************** Facebook  *****************************/}
                    <button className={`${socialBtnStyle}`} >
                      <Image src="/images/social/facebook.svg" alt="Facebook Logo" className="mr-2 " width={20} height={20} />
                      <span>Log in with Facebook</span>
                    </button>

                    {/***************************** Linkedin  *****************************/}
                    <button className={`${socialBtnStyle}`} >
                      <Image src="/images/social/linkedin.svg" alt="LinkedIn Logo" className="mr-2 " width={20} height={20} />
                      <span>Log in with LinkedIn</span>
                    </button>

                    {/***************************** University  *****************************/}
                    <button className={`${socialBtnStyle}`}>Log in with university</button>

                  </div>
                  {/***************************** Or  *****************************/}
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="flex-shrink mx-4 text-[#cecdcd]">Or</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>

                  {/***************************** Login with Email and password  */}
                  <form className="mb-4 flex flex-col">
                    <div className="">
                      {/*****************************  Email   */}
                      <div className="w-full flex flex-col mb-4">
                        <label for="email" className="text-base text-gray-800">Email address<span className="text-red-600" aria-label="Required"> *</span></label>
                        <input
                          className="mt-1 rounded-lg shadow-sm border border-gray-300 focus:border-gray-400 px-3 py-2 w-full focus:outline-none"
                          name="email"
                          label="Email address"
                          type="email"
                          placeholder="Your email address"
                          required
                        />

                      </div>
                      {/*****************************  Password    */}
                      <div className="w-full flex flex-col mb-4">
                        <label for="password" className="text-base text-gray-800">Password<span className="text-red-600" aria-label="Required"> *</span>
                        </label>
                        <input
                          className="mt-1 rounded-lg shadow-sm border border-gray-300 focus:border-gray-400 px-3 py-2 w-full focus:outline-none"
                          name="password"
                          label="Password"
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                      {/*****************************  Login    */}
                      <div className="">
                        <button type="submit" className="inline-flex items-center justify-center  border  leading-4 font-medium rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2focus:ring-indigo-500 border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-base my-3 w-full">Log in</button>
                      </div>
                    </div>
                  </form>
                </div>

                {/****************************** Other ***************** */}
                <div className="text-center text-gray-600 font-medium space-y-1">
                  <p className='text-sm '>Don’t have an account? <Link className="text-indigo-500 font-semibold" href="/signup">Sign up here</Link>.</p>

                  <p className='text-sm '>Forgot your password? <Link className="text-indigo-500 font-semibold" href="/reset">Reset it here .</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default Login