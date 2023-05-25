import { auth } from "@/src/auth/firebase/Firebase.init";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "@/src/store/features/auth/authSlice";
import { setUserData } from "@/src/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      dispatch(loginStart());
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      const body = {
        uid: user?.uid,
        displayName: user.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        creationTime: user?.metadata.creationTime,
        lastSignInTime: user?.metadata.lastSignInTime,
        emailVerified: user?.emailVerified,
      };

      dispatch(loginSuccess(body));
      router.push("/dashboard");
      setCookie("user", JSON.stringify(body), {
        path: "/",
        maxAge: 1000000,
        sameSite: true,
      });
      setUserData(body);
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        toast.error("Login cancelled !");
        dispatch(loginFailed());
      } else {
        console.log(err);
        dispatch(loginFailed());
      }
    }
  };

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
};

export default GoogleLogin;
