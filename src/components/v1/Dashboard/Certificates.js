import { IMAGE_KIT_CDN, allCourses } from "@/src/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Certificates = () => {
  return (
    <div>
      <div className=" flex flex-col gap-10 lg:flex-row lg:gap-5">
        {allCourses.map((course, index) => (
          <div
            key={index}
            className=" hover:shadow:xl  m-3 flex flex-initial flex-shrink-0 transform flex-col overflow-hidden  bg-white text-black shadow-md transition duration-500 hover:-translate-y-1.5"
          >
            <div>
              <Image
                src={`${IMAGE_KIT_CDN}/${course.coverImage}`}
                width={310}
                height={155}
                alt={course?.title}
              />
            </div>

            <div className="flex flex-col p-2 ">
              <div className="m-2 flex items-center justify-between">
                <div className="flex w-full items-center">
                  <div className=" flex  overflow-hidden rounded-md bg-[#08313c] text-white">
                    <span className="overflow-hidden  text-ellipsis whitespace-nowrap p-1 text-sm leading-[22px]">
                      {course?.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2"></div>
              </div>
              <p className="m-1 mb-5 text-xl font-bold leading-[28px] lg:mt-3 lg:mb-8">
                {course?.title}
              </p>
              <Link href={`/dashboard/certificate/${course?.slug}`}>
                <button className="ml-auto mb-2 mr-2 flex w-full items-center justify-center rounded-sm border border-[#9c9b9b] p-3 text-center font-bold tracking-wide transition duration-200 hover:border-black">
                  <span className="navigation-text pr-2">Get Certificate</span>
                  <AiOutlineArrowRight size={20} className="text-[#7472db]" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
