import CommonHead from "@/src/components/v1/Shared/CommonHead";
import GoogleLogin from "@/src/components/v1/Shared/GoogleLogin/GoogleLogin";
import PageLayout from "@/src/layout/PageLayout";
import { auth } from "@/src/auth/firebase/Firebase.init";
import { loginFailed, loginStart, loginSuccess } from "@/src/store/features/auth/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setUserData } from "@/src/utils/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Signup successful
      if (user?.emailVerified) {
        dispatch(loginStart());
        toast.success(`Welcome ${user.displayName}`);
        // console.log("User logged in:", user);
        const body = {
          uid: user?.uid,
          displayName: user.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          creationTime: user?.metadata.creationTime,
          lastSignInTime: user?.metadata.lastSignInTime,
          emailVerified: user?.emailVerified,
        };
        // console.log(body,'body')
        dispatch(loginSuccess(body));
        router.push("/dashboard");
        setCookie("user", JSON.stringify(body), {
          path: "/",
          maxAge: 1000000,
          sameSite: true,
        });
        // update the firestore
        setUserData(body);
      } else {
        toast.error("Sorry , You are not verified user !");
        router.push("/auth/verify-email");
        console.log("User logged in not verify:", user);
        dispatch(loginFailed());
      }
    } catch (error) {
      // Handle login error
      if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Password does not match");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      console.log(error);
    }
  };

  return (
    <>
      <CommonHead
        title={"Login - Xplainerr"}
        description={" "}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <div className="min-h-screen m-2">
            <div className=" mb-8 sm:container sm:mx-auto sm:pt-8">
              <div className="mx-auto w-full rounded-lg border-gray-400 lg:border-gray-200 bg-white px-10 py-6 pt-8 max-w-lg border shadow-lg ">
                <div className="">
                  <h1 className="mb-5 text-center text-2xl font-bold text-black">
                    Log in to Xplainerr
                  </h1>
                </div>
                <div>
                  {/****************************  Social Login *************************** */}
                  <div className="flex flex-col space-y-2">
                    {/***************************** Google  *****************************/}
                    <GoogleLogin />

                    {/***************************** Facebook  *****************************/}
                    {/* <button className='socialBtn'>
                      <Image
                        src="/images/social/facebook.svg"
                        alt="Facebook Logo"
                        className="mr-2 "
                        width={20}
                        height={20}
                      />
                      <span>Log in with Facebook</span>
                    </button> */}

                    {/***************************** Linkedin  *****************************/}
                    {/* <button className='socialBtn'>
                      <Image
                        src="/images/social/linkedin.svg"
                        alt="LinkedIn Logo"
                        className="mr-2 "
                        width={20}
                        height={20}
                      />
                      <span>Log in with LinkedIn</span>
                    </button> */}

                    {/***************************** University  *****************************/}
                    {/* <button className='socialBtn'>
                      Log in with university
                    </button> */}
                  </div>
                  {/***************************** Or  *****************************/}
                  <div className="relative flex items-center py-5">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="mx-4 flex-shrink text-[#cecdcd]">Or</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>

                  {/***************************** Login with Email and password  */}
                  <form onSubmit={handleLogin} className="mb-4 flex flex-col">
                    <div className="">
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
                          placeholder="Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
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
                      href="/auth/signup"
                    >
                      Sign up here
                    </Link>
                    .
                  </p>

                  <p className="text-sm ">
                    Forgot your password?{" "}
                    <Link
                      className="font-semibold text-indigo-500"
                      href="/auth/reset"
                    >
                      Reset here .
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
