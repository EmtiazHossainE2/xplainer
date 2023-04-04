import { checkout } from "@/src/utils/checkout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { LoginModal } from "../../Shared/Modal";

const HeroHome = ({ coursePrice }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [loginModal, setLoginModal] = useState(false);
  // console.log(currentUser?.email)
  // console.log(coursePrice);

  const handleClick = () => {
    console.log("click");
    if (currentUser?.email) {
      checkout({
        lineItems: [
          {
            price: coursePrice,
            quantity: 1,
          },
        ],
      });
    } else {
      return setLoginModal(true);
    }
  };

  return (
    <div className="container mx-auto py-4 px-5 lg:px-12 big:px-36 large:px-96">
      <div className="flex flex-col items-center justify-between gap-10 pt-10 lg:flex-row  lg:gap-16 lg:pt-[52px] ">
        {/* Left  */}
        <div className="hidden basis-1/2 scale-125 items-center justify-center md:block lg:flex">
          <Image
            className="rounded-lg"
            src="/images/courses/api.png"
            alt="Hero Banner"
            width={400}
            height={338}
            priority
          />
        </div>
        <div className="flex basis-1/2 scale-125 items-center justify-center px-8 md:block lg:hidden">
          <Image
            className="rounded-lg"
          src="/images/courses/api.png"
            alt="Hero Banner"
            width={300}
            height={256}
            priority
          />
        </div>

        {/* Right */}
        <div className="flex basis-1/2 flex-col ">
          <h2 className="text-3xl font-bold text-[#101828DE] lg:text-5xl md:text-2xl lg:font-extrabold lg:text-[#000] ">
            Learn API For Product <br /> Managers
          </h2>
          <div className="apiForPm lg:hidden flex gap-8 py-4 px-1 lg:px-3">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/courses/i1.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs text-[#333] lg:text-sm">7.3k+ learners</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/courses/i2.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs lg:text-sm">10+ modules</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/courses/i3.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs lg:text-sm">10+ hours</p>
            </div>
          </div>
          
          <div className="mt-4">
          
            {/* For large 
            <p className="hidden pb-3.5 text-sm font-medium text-[#9CA3AF] lg:hidden">
              Our product management interview course teaches you the <br />{" "}
              essential skills you need to ace your PM interview, with hours of{" "}
              <br /> example questions, videos, and interview tips.
            </p> */}

            {/* For Mobile  */}
            <div className="mobileContent flex flex-col space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]">
                  Transform your product strategy with API skill
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]">
                  {" "}
                  Elevate your career with API knowledge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]">
                  {" "}
                  Certificate of completion available.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]"> Trusted by 7300+ PMs.</p>
              </div>
            </div>

            <div className="mt-2 mb-2">
            <p className="  ext-[#000000]">
            <span className="text-3xl font-bold">Rs. 999</span> <span className="line-through text-[#7b7b7b]">₹ 1,999 </span> <span className="text-[#7b7b7b]">( 50% off ) </span>
            </p>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div
                onClick={handleClick}
                className="mt-8 rounded-md bg-[#0070F4] py-4 lg:mt-0 lg:px-9"
              >
                <button className="w-full font-medium text-white lg:w-[196px]">
                  Enroll now
                </button>
              </div>
              <Link href="/courses/api-for-pm/introduction" className="text-center">
                <p className="text-sm lg:hidden border border-gray-300 p-3 rounded-md font-medium text-[#0070F4]">
                  Try free preview
                </p>
                <p className="text-sm hidden font-medium text-[#0070F4]">
                  Try free preview
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/************************ Login Modal  ************************/}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </div>
  );
};

export default HeroHome;
