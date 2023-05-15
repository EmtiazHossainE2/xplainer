import { withRouter } from "next/router";
import { useState } from "react";
import CommonHead from "../components/v1/Shared/CommonHead";
import Footer2 from "../components/v1/Shared/Footer/Footer";
import { CouponModal, LeadModal } from "../components/v1/Shared/Modal";
import Navbar from "../components/v3/Shared/Navbar/Navbar";

const PageLayout = ({ children, router }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [couponModal, setCouponModal] = useState(false);

  return (
    <>
      <Navbar router={router} />

      {children}

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
