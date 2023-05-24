import { auth } from "@/src/auth/firebase/Firebase.init";
import { loginFailed, loginStart, loginSuccess } from "@/src/store/features/auth/authSlice";
import { setUserData } from "@/src/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const GoogleLogin = () => {
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    dispatch(loginStart());

    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result.user);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      const body = {
        uid: user?.uid,
        displayName: user.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        creationTime: user?.metadata.creationTime,
        lastSignInTime: user?.metadata.lastSignInTime,
      };
      dispatch(loginSuccess(body));
      router.push("/dashboard");
      setCookie("user", JSON.stringify(body), {
        path: "/",
        maxAge: 1000000,
        sameSite: true,
      });
      // update the firestore
      setUserData(body);
    } catch (err) {
      // Handle Errors here.
      console.log(err);
      dispatch(loginFailed());
    }
  };

  //loading
  if (isLoading) {
    return (
      <p className="flex h-screen  items-center justify-center text-2xl font-bold">
        Loading...
      </p>
    );
  }

  return (
    <button className="socialBtn" onClick={() => handleGoogleLogin()}>
      <Image
        src="/images/social/google.svg"
        alt="Google Logo"
        className="mr-2 "
        width={20}
        height={20}
      />
      <span>Log in with Google</span>
    </button>
  );
}

export default GoogleLogin