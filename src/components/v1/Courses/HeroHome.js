import { checkout } from "@/src/utils/checkout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "../Shared/Modal";
import topPricingBadge from "/public/images/courses/featured.svg";
import topBadge from "/public/images/courses/top-post-badge.svg";

const HeroHome = ({
  heading,
  headingColorText,
  ctaText,
  apiForPm,
  pricing,
  coursePrice,
  handleCTAClick,
  coursePreviewSlug,
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const [loginModal, setLoginModal] = useState(false);
  // console.log(currentUser?.email)
  console.log(coursePrice);


  const handleClick = () => {
    console.log("click");
    if (currentUser?.email) {
      checkout({
        lineItems: [
          {
            price: coursePrice ,
            quantity: 1,
          },
        ],
      });
    } else {
      return setLoginModal(true);
    }
  };

  return (
    <div>
      <div className="section__padding container relative mx-auto">
        <div className="flex flex-col justify-between gap-5 md:flex-row lg:px-12 2xl:items-center 2xl:gap-0">
          {/* Illustration behind hero content */}
          {apiForPm && (
            <div
              className="pointer-events-none absolute left-1/2 bottom-0 -z-10 -translate-x-1/2 transform"
              aria-hidden="true"
            >
              <svg
                width="1360"
                height="578"
                viewBox="0 0 1360 578"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="illustration-01"
                  >
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#EAEAEA" offset="77.402%" />
                    <stop stopColor="#DFDFDF" offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="url(#illustration-01)" fillRule="evenodd">
                  <circle cx="1232" cy="128" r="128" />
                  <circle cx="155" cy="443" r="64" />
                </g>
              </svg>
            </div>
          )}

          {/* Review Image  */}
          <div className="hidden basis-1/2 md:block lg:basis-5/12">
            {apiForPm && (
              <Image
                src="/images/courses/review.webp"
                width={350}
                height={400}
                alt="api for pm review jpeg"
              />
            )}
            {pricing && (
              <Image
                src="/images/courses/hero-case.webp"
                width={700}
                height={400}
                alt="pm pricing webp"
              />
            )}
          </div>

          {/* Hero content */}
          <div className="basis-1/2 lg:basis-7/12">
            <div>
              <div className="md:items-starts flex items-center justify-center md:justify-start">
                {apiForPm && (
                  <Link href="/">
                    <Image
                      src={topBadge}
                      width={250}
                      height={54}
                      alt="API for Product Managers - The A to Z of APIs for product managers | Product Hunt"
                    />
                  </Link>
                )}
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

              {apiForPm && (
                <div>
                  <p className="pb-4 text-lg lg:text-xl ">
                    ✔️ Trusted by 7300+ PMs. Lifelong access. 10+ chapters
                  </p>
                  <p className="pb-4 text-lg lg:text-xl ">
                    ✔️ Crack your PM interview technical rounds with ease
                  </p>
                  <p className="pb-4 text-lg lg:text-xl ">
                    ✔️ Transform your product strategy with API skills
                  </p>
                  <p className="pb-5 text-lg lg:text-xl ">
                    ✔️ Elevate your career with API knowledge
                  </p>
                </div>
              )}
              {pricing && (
                <div>
                  <p className="pb-4 text-lg font-[500] lg:text-xl">
                    ✔️ 13 chapters covering pricing strategies, pricing models
                    and pricing pyschology
                  </p>
                  <p className="pb-4 text-lg font-[500] lg:text-xl">
                    ✔️ Case studies from Unacademy, Bumble, LinkedIn, Mailchimp,
                    Swiggy etc.
                  </p>
                </div>
              )}

              <button
                // onClick={handleCTAClick}
                onClick={handleClick}
                className="btn w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
              >
                {ctaText}
              </button>
              <div>
                <p className="pt-3">
                  Interested in a free chapter?{" "}
                  <Link href={`${coursePreviewSlug}`} className="text-blue-500">
                    Get it now
                  </Link>
                </p>
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
