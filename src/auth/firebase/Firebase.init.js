// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADO65cUrY9OV3LfyBko82gJ9oASey_lts",
  authDomain: "xplainerr-g.firebaseapp.com",
  projectId: "xplainerr-g",
  storageBucket: "xplainerr-g.appspot.com",
  messagingSenderId: "855189205971",
  appId: "1:855189205971:web:765f0a6044a4918d7df526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;