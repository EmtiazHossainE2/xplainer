import { auth } from "@/src/auth/firebase/Firebase.init";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import GoogleLogin from "@/src/components/v1/Shared/GoogleLogin/GoogleLogin";
import PageLayout from "@/src/layout/PageLayout";
import { checkVerify } from "@/src/store/features/auth/authSlice";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Signup successful
      // Set the display name
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log("User signed up:", user);
      sendVerificationEmail();
      router.push("/auth/verify-email");
      dispatch(checkVerify());
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success("Verification email sent to your email !");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CommonHead
        title={"Signup - Xplainerr"}
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
                    Sign up for Xplainerr
                  </h1>
                </div>
                <div>
                  {/****************************  Social Signup *************************** */}
                  <div className="flex flex-col space-y-2">
                    {/***************************** Google  *****************************/}

                    <GoogleLogin />

                    {/***************************** Facebook  *****************************/}
                    {/* <button className='socialBtn' >
                      <Image src="/images/social/facebook.svg" alt="Facebook Logo" className="mr-2 " width={20} height={20} />
                      <span>Log in with Facebook</span>
                    </button> */}

                    {/***************************** Linkedin  *****************************/}
                    {/* <button className='socialBtn' >
                      <Image src="/images/social/linkedin.svg" alt="LinkedIn Logo" className="mr-2 " width={20} height={20} />
                      <span>Log in with LinkedIn</span>
                    </button> */}

                    {/***************************** University  *****************************/}
                    {/* <button className='socialBtn'>Log in with university</button> */}
                  </div>
                  {/***************************** Or  *****************************/}
                  <div className="relative flex items-center py-5">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="mx-4 flex-shrink text-[#cecdcd]">Or</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>

                  {/***************************** Signup with Email and password  */}
                  <form onSubmit={handleSignup} className="mb-4 flex flex-col">
                    <div className="">
                      {/*****************************  Display Name   */}
                      <div className="mb-4 flex w-full flex-col">
                        <label
                          htmlFor="name"
                          className="text-base text-gray-800"
                        >
                          Your name
                          <span className="text-red-600" aria-label="Required">
                            {" "}
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-400 focus:outline-none"
                          name="name"
                          label="Your Name"
                          type="text"
                          placeholder="Enter your full name"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      {/*****************************  Email   */}
                      <div className="mb-4 flex w-full flex-col">
                        <label
                          htmlFor="email"
                          className="text-base text-gray-800"
                        >
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
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {/*****************************  Password    */}
                      <div className="mb-4 flex w-full flex-col">
                        <label
                          htmlFor="password"
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
                          placeholder="Choose a password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {/*****************************  Signup    */}
                      <div className="">
                        <button
                          type="submit"
                          className="focus:ring-offset-2focus:ring-indigo-500 my-3 inline-flex  w-full  items-center justify-center rounded-md border border-transparent  bg-indigo-600 px-5 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/****************************** Other ***************** */}
                <div className="space-y-1 text-center font-medium text-gray-600">
                  <p className="text-sm ">
                    Already use Xplainerr ?{" "}
                    <Link
                      className="font-semibold text-indigo-500"
                      href="/auth/login"
                    >
                      Login here
                    </Link>
                    .
                  </p>

                  <p className="text-sm ">
                    By creating an account, you agree to our{" "}
                    <Link
                      className="font-semibold text-indigo-500"
                      href="/terms-of-service"
                    >
                      terms and service
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

export default Signup;
