import auth from "@/src/auth/firebase/Firebase.init";
import { loginFailed, loginStart, loginSuccess } from "@/src/store/features/auth/authSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const LoginModal = ({ isVisible, setLoginModal, onClose }) => {
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {

    dispatch(loginStart())

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log(user)
        toast.success(`Welcome ${user.displayName}`)
        const body = {
          uid: user?.uid,
          displayName:user.displayName,
          email:user?.email,
          photoURL: user?.photoURL,
        }
        dispatch(loginSuccess(body))
        setLoginModal(false)

      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
        dispatch(loginFailed())
      });
  };


  //loading
  if (isLoading) {
    return (
      <p className="flex h-screen  items-center justify-center text-2xl font-bold">
        Loading...
      </p>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center bg-black bg-opacity-80 px-3 pt-[10%] md:items-center md:pt-5 lg:px-0">
      <div className="flex w-[99%] flex-col md:w-[50%] lg:w-[70%] xl:w-[60%] 2xl:w-[900px] ">
        <div className="">
          <div className="shadow-[0_10px_20px_5px_rgb(0 0 0 / 5%)] flex rounded-2xl bg-white">
            {/******************************* left-section ******************************/}
            <div className="hidden w-[28rem] rounded-l-[0.92rem] bg-[url('/images/shared/login_bg.webp')] bg-cover bg-[50%] px-[2.5rem] pt-[18.75rem] pb-[5.5rem] lg:block">
              <div className="text-2xl font-extrabold text-white">
                Welcome back ✨
              </div>
              <div className="mx-0 mt-[1.75rem] mb-[2.75rem] text-sm text-[#e0e0e0]">
                Expert-led training courses to accelerate your professional
                development
              </div>
              <div className="flex items-center font-medium text-white">
                Log in to get back
              </div>
            </div>

            {/* ******************************Right Section*******************************/}
            <div className="relative flex w-full flex-col items-center justify-center px-5 pt-12 pb-10 text-center lg:w-[29.375rem] lg:px-10">
              <button
                className="py-.5  absolute top-4 right-4 mb-2 rounded-full border border-[#e6e5e5] px-2 text-lg font-semibold text-black"
                onClick={() => onClose()}
              >
                X
              </button>
              <div className="w-full">
                <div className=" mb-6 text-[1.75rem] font-extrabold text-[#171421]">
                  Log in to your account
                </div>
                <div>
                  <div>
                    <div className="mx-0 mt-6 mb-8">
                      <span>Please enter your email to receive</span>
                      <br />
                      one time password
                    </div>
                    <input
                      type="text"
                      required="required"
                      className="w-full rounded-lg border border-[#e5e7eb] py-4 px-5 text-[#171421] outline-[none]"
                      placeholder="Email"
                    />
                    <button
                      disabled="disabled"
                      className="mt-3 w-full rounded-lg bg-[#6334c8] py-4 px-0 font-semibold text-white disabled:opacity-[.2]"
                    >
                      Get OTP{" "}
                    </button>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center py-5">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="mx-4 flex-shrink text-[#bdbdbd]">OR</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-lg border border-[#e5e7eb]  py-4 text-sm font-bold text-[#171421]">
                    <div
                      className="flex items-center gap-1"
                      onClick={() => handleLogin()}
                    >
                      <Image
                        src="/images/brand/1.svg"
                        width={25}
                        height={25}
                        alt="google"
                      />
                      Continue with Google
                    </div>
                  </button>
                  <div className="mt-6 text-sm text-[#828282]">
                    Don`&apos;`t have an account?
                    <span className="cursor-pointer px-2 font-bold text-[#6334c8]">
                      Sign up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
