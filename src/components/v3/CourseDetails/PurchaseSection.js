import Image from "next/image";
import React from "react";
import {  BsStopwatch } from "react-icons/bs";
import { GoCheck } from "react-icons/go";

const PurchaseSection = ({
  course,
}) => {
  return (
    <div className="lg:fixed z-20 mx-5 lg:mx-0 my-2 lg:mt-[-200px] lg:mr-20  border bg-white lg:shadow-xl">
      <div>
        <Image src={course.image} width={350} height={195} alt={course.title} />
      </div>
      <div className="p-3">
        <p className="flex items-center gap-2">
          <span className="text-3xl font-bold">Rs. {course.price}</span>
          <span className="text-[#6a6f73] line-through">1999</span>
          <span className="text-[#6a6f73]">50% off</span>
        </p>
        <p className="flex items-center gap-1 pt-2 text-sm font-medium text-[#b32d0f]">
          {" "}
          <BsStopwatch /> <span>16 hours left at this price!</span>
        </p>
        <div>
          <button className="my-3 w-full rounded-sm bg-primary px-3 py-2 font-medium text-white ">
            Buy Now
          </button>
        </div>
        <p className="text-center text-xs">30-Day Money-Back Guarantee</p>
        <div>
          <p className="py-2 text-sm">This course includes:</p>
          {course?.courseIncludes.map((inc, index) => (
            <div
              key={index}
              className="flex items-center gap-1 space-y-1 text-sm"
            >
              <GoCheck />
              <span>{inc?.item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;
