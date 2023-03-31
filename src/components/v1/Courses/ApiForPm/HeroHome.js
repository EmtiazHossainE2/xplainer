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
            src="/images/courses/man1.svg"
            alt="Hero Banner"
            width={400}
            height={338}
            priority
          />
        </div>
        <div className="flex basis-1/2 scale-125 items-center justify-center px-8 md:block lg:hidden">
          <Image
            className="rounded-lg"
            src="/images/courses/videoMan.svg"
            alt="Hero Banner"
            width={300}
            height={256}
            priority
          />
        </div>

        {/* Right */}
        <div className="flex basis-1/2 flex-col ">
          <h2 className="text-4xl font-medium text-[#101828DE] lg:text-5xl lg:font-extrabold lg:text-[#000] ">
            API For Product <br /> Managers
          </h2>
          <div className="apiForPm flex gap-8 py-4 px-1 lg:px-3">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/courses/i1.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs text-[#333] lg:text-sm">25k+ students</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/courses/i2.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs lg:text-sm">11 courses</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/courses/i3.svg"
                width={20}
                height={19}
                alt="icon"
              />
              <p className="text-xs lg:text-sm">25 hours</p>
            </div>
          </div>
          <div>
            <p className="pb-2 text-sm text-[#475467] lg:py-3.5 lg:text-sm lg:font-medium lg:text-[#9CA3AF]">
              Certificate of completion available.
            </p>
            {/* For large  */}
            <p className="hidden pb-3.5 text-sm font-medium text-[#9CA3AF] lg:block">
              Our product management interview course teaches you the <br />{" "}
              essential skills you need to ace your PM interview, with hours of{" "}
              <br /> example questions, videos, and interview tips.
            </p>

            {/* For Mobile  */}
            <div className="mobileContent flex flex-col space-y-2 lg:hidden">
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
                <p className="text-sm text-[#475467]"> Trusted by 7300+ PMs.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div
                onClick={handleClick}
                className="mt-8 rounded-md bg-[#0070F4] py-4 lg:mt-0 lg:px-9"
              >
                <button className="w-full font-medium text-white lg:w-[196px]">
                  Get Full Access
                </button>
              </div>
              <Link href="/courses/api-for-pm/module-1" className="text-center">
                <p className="text-sm font-medium text-[#0070F4]">
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
