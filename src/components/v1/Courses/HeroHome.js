import Image from "next/image";
import Link from "next/link";
import PriceView from "./PriceView";
import topPricingBadge from "/public/images/courses/featured.svg";

const HeroHome = ({
  heading,
  headingColorText,
  ctaText,
  pricing,
  handleCTAClick,
  hasCourseAccess,
}) => {
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
                <p className="pb-3 text-lg font-semibold text-primary">
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

              {hasCourseAccess === false && <PriceView priceData={priceData} />}

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div
                  onClick={handleCTAClick}
                  className="mt-8 rounded-md bg-primary py-4 hover:bg-primary_bold lg:mt-0 lg:px-9"
                >
                  <button className="w-full font-medium text-white lg:w-[196px]">
                    {ctaText}
                  </button>
                </div>
                {!hasCourseAccess && (
                  <Link
                    href="/courses/pricing-for-pm/introduction"
                    className="text-center"
                  >
                    <button className="hidden rounded-md  border border-gray-300 p-3 text-sm font-medium text-primary lg:block">
                      Try free preview
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Hero content end*/}
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
