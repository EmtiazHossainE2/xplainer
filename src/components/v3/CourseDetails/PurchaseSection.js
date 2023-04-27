import Image from "next/image";
import React from "react";
import { BsStopwatch } from "react-icons/bs";

const PurchaseSection = ({ bannerImg, courseTitle ,priceData}) => {
  return (
    <div className="fixed z-20 mt-[-230px] mr-20  border bg-white shadow-xl">
      <div>
        <Image src={bannerImg} width={350} height={195} alt={courseTitle} />
      </div>
      <div className="p-3">
        <p className="flex items-center gap-2">
          <span className="text-3xl font-bold">Rs. {priceData.amount}</span>
          <span className="text-[#6a6f73] line-through">1999</span>
          <span className="text-[#6a6f73]">50% off</span>
        </p>
        <p className="flex items-center gap-1 pt-2 text-sm font-medium text-[#b32d0f]">
          {" "}
          <BsStopwatch /> <span>16 hours left at this price!</span>
        </p>
        <div>
          <button className="my-2 w-full border border-black px-3 py-1 font-medium ">
            Buy Now
          </button>
        </div>
        <p className="text-center text-xs">30-Day Money-Back Guarantee</p>
      </div>
    </div>
  );
};

export default PurchaseSection;
