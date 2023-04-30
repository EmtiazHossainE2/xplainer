import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroBanner = ({ course }) => {
  return (
    <div className="lg:bg-[#2F2F2F]">
      <div className="mx-auto max-w-7xl px-5 py-4 lg:py-7 lg:px-16 lg:text-white">
        <div className="flex gap-8">
          <div className="lg:basis-8/12">
            <h2 className="text-2xl font-bold lg:text-4xl">{course?.title}</h2>
            <p className="py-3 text-sm lg:text-lg">{course?.metaTitle}</p>
            <div>
              <div className="flex items-center gap-3">
                <button className="hidden lg:block rounded-sm bg-[#ECEB98] py-1.5 px-3 text-xs font-bold text-[#3D3C0A] ">
                  Best Seller
                </button>
                <div className="flex items-center justify-center gap-1 text-[#f7a01d]">
                  <span className="font-semibold">4.7</span>
                  <span className="flex">
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStar size={14} />
                    <FaStarHalfAlt size={14} />
                  </span>
                </div>
                <span className="hidden text-sm lg:block lg:text-[#CEC0FC]">
                  (280,645 ratings)
                </span>
                <span className="hidden text-sm lg:block">
                  948,000 students
                </span>
              </div>
            </div>
            <p className="pt-2 text-sm">
              Created by{" "}
              <span className="lg:text-[#CEC0FC]">
                {course.instructorInfo.name}
              </span>
            </p>
          </div>
          <div className="lg:basis-4/12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
