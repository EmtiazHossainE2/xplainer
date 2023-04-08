import { checkout } from "@/src/utils/checkout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "../Shared/Modal";
import PriceView from "./PriceView";
import topPricingBadge from "/public/images/courses/featured.svg";
import topBadge from "/public/images/courses/top-post-badge.svg";

const HeroHome = ({
  heading,
  headingColorText,
  ctaText,
  pricing,
  handleCTAClick,
  hasCourseAccess,
}) => {
  const [loginModal, setLoginModal] = useState(false);

  const priceData = {
    amount: 999,
    currency: "INR",
  };

  return (
    <div>
      <div className="section__padding container relative mx-auto">
        <div className="flex flex-col justify-between gap-5 md:flex-row lg:px-12 2xl:items-center 2xl:gap-0">
          {/* Review Image  */}
          <div className="hidden basis-1/2 md:block lg:basis-5/12">
            {pricing && (
              <Image
                src="/images/courses/hero-case.webp"
                width={500}
                height={350}
                alt="pm pricing webp"
              />
            )}
          </div>

          {/* Hero content */}
          <div className="basis-1/2 lg:basis-7/12">
            <div>
              <div className="md:items-starts flex items-center justify-center md:justify-start">
                {pricing && (
                  <Link href="/">
                    <Image
                      src={topPricingBadge}
                      width={250}
                      height={54}
                      alt="Featured | Product Hunt"
                    />
                  </Link>
                )}
              </div>
              <h1 className="mt-3 mb-4 text-4xl  font-bold lg:font-extrabold">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  {headingColorText}
                </span>{" "}
                {heading}
              </h1>

              {pricing && (
                <p className="pb-3 text-lg font-semibold text-blue-600">
                  1 stop destination for product, growth & marketing folks
                </p>
              )}

              {pricing && (
                <div>
                  <p className="text-md pb-4 font-[400] lg:text-xl">
                    ✔️ 13 chapters covering pricing strategies, pricing models
                    and pricing pyschology
                  </p>
                  <p className="text-md pb-4 font-[400] lg:text-xl">
                    ✔️ Case studies from Unacademy, Bumble, LinkedIn, Mailchimp,
                    Swiggy etc.
                  </p>
                </div>
              )}

              <PriceView priceData={priceData} />

              <div className="flex flex-col md:flex-row">
                <button
                  onClick={handleCTAClick}
                  className="btn w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
                >
                  {ctaText}
                </button>

                {!hasCourseAccess && (
                  <div className="mt-2 rounded-md  border border-gray-300 p-3 md:ml-2">
                    <button
                      onClick={handleCTAClick}
                      className=" ml-2 w-full cursor-pointer  text-[#6f6f6f] sm:mb-0 sm:w-auto"
                    >
                      Try free preview
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Hero content end*/}
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
