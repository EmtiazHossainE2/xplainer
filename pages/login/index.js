import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const socialBtnStyle =
    "inline-flex items-center justify-center border leading-4 font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 px-5 py-3 text-base";

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
            <div className=" mb-8 sm:container sm:mx-auto sm:pt-8">
              <div className="mx-auto w-full rounded-lg border-gray-200 bg-white px-10 py-6 pt-8 sm:max-w-lg sm:border sm:shadow-lg">
                <div className="">
                  <h1 className="mb-5 text-center text-2xl font-bold text-black">
                    Log in to Xplainerr
                  </h1>
                </div>
                <div>
                  {/****************************  Social Login *************************** */}
                  <div className="flex flex-col space-y-2">
                    {/***************************** Google  *****************************/}
                    <button className={`${socialBtnStyle}`}>
                      <Image
                        src="/images/social/google.svg"
                        alt="Google Logo"
                        className="mr-2 "
                        width={20}
                        height={20}
                      />
                      <span>Log in with Google</span>
                    </button>

                    {/***************************** Facebook  *****************************/}
                    <button className={`${socialBtnStyle}`}>
                      <Image
                        src="/images/social/facebook.svg"
                        alt="Facebook Logo"
                        className="mr-2 "
                        width={20}
                        height={20}
                      />
                      <span>Log in with Facebook</span>
                    </button>

                    {/***************************** Linkedin  *****************************/}
                    <button className={`${socialBtnStyle}`}>
                      <Image
                        src="/images/social/linkedin.svg"
                        alt="LinkedIn Logo"
                        className="mr-2 "
                        width={20}
                        height={20}
                      />
                      <span>Log in with LinkedIn</span>
                    </button>

                    {/***************************** University  *****************************/}
                    <button className={`${socialBtnStyle}`}>
                      Log in with university
                    </button>
                  </div>
                  {/***************************** Or  *****************************/}
                  <div className="relative flex items-center py-5">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="mx-4 flex-shrink text-[#cecdcd]">Or</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>

                  {/***************************** Login with Email and password  */}
                  <form className="mb-4 flex flex-col">
                    <div className="">
                      {/*****************************  Email   */}
                      <div className="mb-4 flex w-full flex-col">
                        <label for="email" className="text-base text-gray-800">
                          Email address
                          <span className="text-red-600" aria-label="Required">
                            {" "}
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-400 focus:outline-none"
                          name="email"
                          label="Email address"
                          type="email"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      {/*****************************  Password    */}
                      <div className="mb-4 flex w-full flex-col">
                        <label
                          for="password"
                          className="text-base text-gray-800"
                        >
                          Password
                          <span className="text-red-600" aria-label="Required">
                            {" "}
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-400 focus:outline-none"
                          name="password"
                          label="Password"
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                      {/*****************************  Login    */}
                      <div className="">
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                        >
                          Log in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/****************************** Other ***************** */}
                <div className="space-y-1 text-center font-medium text-gray-600">
                  <p className="text-sm ">
                    Don’t have an account?{" "}
                    <Link
                      className="font-semibold text-indigo-500"
                      href="/signup"
                    >
                      Sign up here
                    </Link>
                    .
                  </p>

                  <p className="text-sm ">
                    Forgot your password?{" "}
                    <Link
                      className="font-semibold text-indigo-500"
                      href="/reset"
                    >
                      Reset it here .
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default Login;
