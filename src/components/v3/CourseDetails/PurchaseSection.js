import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoCheck } from "react-icons/go";

const PurchaseSection = ({
  course,
  handleBuyNowClick,
  ctaText,
  hasCourseAccess,
}) => {
  // console.log(ctaText)
  const router = useRouter();
  return (
    <div className="z-20 mx-5 my-2 border bg-white lg:fixed lg:mx-0  lg:mt-[-200px] lg:mr-20 lg:shadow-xl">
      <div className="hidden lg:block">
        <Image
          src={course?.cover_image}
          width={350}
          height={195}
          alt={course?.title}
        />
      </div>
      <div className="flex flex-col-reverse gap-5 p-3 lg:flex-col lg:gap-2">
        <div>
          <p className="flex items-center gap-2">
            <span className="text-3xl font-bold">
              {" "}
              {course?.priceData?.currency}. {course?.priceData?.amount}
            </span>
            <span className="text-[#6a6f73] line-through">1999</span>
            <span className="text-[#6a6f73]">50% off</span>
          </p>
          <div>
            {!hasCourseAccess && (
              <Link
                href={`${router.asPath}/introduction`}
                className="text-center"
              >
                <button className="w-full mt-3 rounded-md  border border-gray-300 px-3 py-2 text-sm font-medium text-primary ">
                  Try free preview
                </button>
              </Link>
            )}
          </div>
          <div>
            <button
              onClick={handleBuyNowClick}
              className="my-3 w-full rounded-sm bg-primary px-3 py-2 font-medium text-white "
            >
              {ctaText}
            </button>
          </div>
          <p className="text-center text-xs">30-Days Money-Back Guarantee</p>
        </div>
        <div>
          <p className="py-2 text-sm">This course includes:</p>
          {course?.courseHighlights.map((include, index) => (
            <div
              key={index}
              className="flex items-center gap-1 space-y-1 text-sm"
            >
              <GoCheck />
              <span>{include?.item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;
