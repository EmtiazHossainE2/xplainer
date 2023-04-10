import { Router, withRouter } from "next/router";
import { useEffect } from "react";
import Footer2 from "../components/v1/Shared/Footer/Footer";
import Navbar from "../components/v3/Shared/Navbar/Navbar";
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { logout } from "../store/features/auth/authSlice";


const PageLayout = ({ children, router }) => {

  const dispatch =  useDispatch();

  useEffect(()=> {
    const user = Cookies.get('user');
    if(!user){
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <>
      {/* <Navbar router={router}/> */}
      <Navbar router={router} />

      {children}

      {/* <Footer /> */}
      <Footer2 />
    </>
  );
};

export default withRouter(PageLayout);