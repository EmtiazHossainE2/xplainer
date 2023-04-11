import { callLeadAPI } from "@/src/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LeadModal = ({ isVisible, setShowPopup, setCouponModal }) => {
  const router = useRouter();

  // After 30 Sec Lead Popup open
  useEffect(() => {
    const shouldShowPopup = !localStorage.getItem("leadPopupClosed");
    if (shouldShowPopup) {
      const timeoutId = setTimeout(() => {
        setShowPopup(true);
      }, 30000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [setShowPopup]);
  // After 30 Sec Lead Popup open


  const handleClose = () => {
    localStorage.setItem("leadPopupClosed", true);
    setShowPopup(false);
  };

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const currentURL = origin + router.asPath;

  // Lead Form Submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email)
    if (email) {
      callLeadAPI({ email, hostName: origin, url: currentURL });
      localStorage.setItem("leadPopupClosed", true);
      localStorage.setItem("usrData", true);
      setShowPopup(false);
      setCouponModal(true);
    }
  };

  if (isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] flex  justify-center bg-black bg-opacity-80 pt-[40%] md:items-center md:pt-0">
        <div className="flex w-[99%] flex-col md:w-[50%] lg:w-[30%] 2xl:w-[450px]">
          <div className="relative rounded-md bg-white  px-6 py-12 2xl:p-12 ">
            <button
              className="py-.5 absolute top-4 right-4 mb-2 rounded-full border border-[#e6e5e5] bg-white px-2 text-lg font-semibold text-black"
              onClick={handleClose}
            >
              X
            </button>
            <div>
              <h4 className="mb-8 text-center text-lg font-semibold md:text-xl md:font-bold lg:text-2xl">
                Claim up to 50% off on the program!
              </h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="mb-[5px] text-sm font-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // placeholder="Enter your name"
                  required
                  className="placeholder:[#505050] mb-4 rounded-lg border border-[#ccc] bg-[#f1f1f1] py-3 pl-4 pr-5"
                />
                <label className="mb-[5px] text-sm font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // placeholder="Enter your email"
                  required
                  className="placeholder:[#505050] mb-4 rounded-lg border border-[#ccc] bg-[#f1f1f1] py-3 pl-4 pr-5 "
                />
                <button className="mt-4 w-full rounded-lg bg-[#0070F4] bg-gradient-to-r from-[#0070F4] to-[#8253db] py-2  px-8 text-lg font-semibold text-white">
                  {" "}
                  Check Offers{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default LeadModal;
