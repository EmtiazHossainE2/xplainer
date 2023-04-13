import Image from "next/image";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PriceView from "../PriceView";

const HeroHome = ({ course, ctaText, handleCTAClick, hasCourseAccess }) => {
  const priceData = {
    amount: 999,
    currency: "INR",
    discount: 50,
  };

  return (
    <div className="container mx-auto py-4 pb-12 px-5 lg:px-12 big:px-36 large:px-96">
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
          {/* Title  */}
          <h2 className="text-3xl font-bold text-[#101828DE] md:text-2xl lg:text-5xl lg:font-extrabold lg:text-[#000] ">
            {course === "api-for-pm" && (
              <>
                Learn API For Product <br /> Managers
              </>
            )}
          </h2>
          <div className="apiForPm flex gap-8 py-4 px-1 lg:hidden lg:px-3">
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
            <div className="mobileContent mb-4 flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]">
                  Transform your product strategy with API skill
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]">
                  {" "}
                  Elevate your career with API knowledge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]">
                  {" "}
                  Certificate of completion available.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill className="text-primary" />
                <p className="text-sm text-[#475467]"> Trusted by 7300+ PMs.</p>
              </div>
            </div>

            <PriceView priceData={priceData} />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div
                onClick={handleCTAClick}
                className="mt-8 rounded-md bg-primary hover:bg-primary_bold py-4 lg:mt-0 lg:px-9"
              >
                <button className="w-full font-medium text-white lg:w-[196px]">
                  {ctaText}
                </button>
              </div>
              {!hasCourseAccess && 
              <Link
                href="/courses/api-for-pm/introduction"
                className="text-center"
              >
                <button className="hidden rounded-md  border border-gray-300 p-3 text-sm font-medium text-primary lg:block">
                  Try free preview
                </button>
              </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
