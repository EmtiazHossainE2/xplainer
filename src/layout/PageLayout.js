import { Router, withRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer2 from "../components/v1/Shared/Footer/Footer";
import Navbar from "../components/v3/Shared/Navbar/Navbar";
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { logout } from "../store/features/auth/authSlice";
import { CouponModal, LeadModal } from "../components/v1/Shared/Modal";


const PageLayout = ({ children, router }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [couponModal, setCouponModal] = useState(false);

  const dispatch =  useDispatch();

  /** Protected Page Layout  */
  // useEffect(()=> {
  //   const user = Cookies.get('user');
  //   if(!user){
  //     dispatch(logout());
  //     router.push('/')
  //   }
  // }, [dispatch]);

  return (
    <>
      {/* <Navbar router={router}/> */}
      <Navbar router={router} />

      {children}

      {/* <Footer /> */}

      <Footer2 />

      {/************************ Lead Popup Modal  ************************/}
      <LeadModal
        isVisible={showPopup}
        setShowPopup={setShowPopup}
        setCouponModal={setCouponModal}
      />

      {/************************ Coupon Popup Modal  ************************/}
      <CouponModal
        isVisible={couponModal}
        onClose={() => setCouponModal(false)}
      />
    </>
  );
};

export default withRouter(PageLayout);