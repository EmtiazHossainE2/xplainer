import { allCourses, IMAGE_KIT_CDN } from "@/src/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";


const Courses = ({ heading, ctaText }) => {
  return (
    <div className="bg-[#FDFDFD]">
      <div className="container mx-auto px-5 pt-20">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-center text-2xl font-semibold text-[#101828DE] lg:text-[36px] ">
            {" "}
            {heading || "Our Courses "}
          </h2>
          <p className="pt-2.5 pb-8 text-center text-base font-medium text-[#475467] md:text-lg ">
            Get better at your job every single day!
          </p>
          <div className=" flex flex-col gap-10 lg:flex-row lg:gap-5">
            {allCourses.map((course, index) => (
              <Link
                href={`/courses/${course?.slug}`}
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
                  <div className="mt-auto flex items-center justify-between">
                    <div className="m-2 flex flex-col items-start">
                      <span>
                        <svg
                          width="38"
                          height="10"
                          viewBox="0 0 38 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 4h6v2H9z" fill="#8887FF"></path>
                          <path d="M23 4h6v2h-6z" fill="#E5E5E5"></path>
                          <circle cx="5" cy="5" r="5" fill="#8887FF"></circle>
                          <circle cx="19" cy="5" r="5" fill="#8887FF"></circle>
                          <circle fill="#E5E5E5" cx="33" cy="5" r="5"></circle>
                        </svg>
                      </span>
                      <p className="caption-text mt-1 font-semibold capitalize tracking-wider ">
                        intermediate
                      </p>
                    </div>
                    <Link href={`/courses/${course?.slug}`}>
                      <button className="min-w-8 ml-auto mb-2 mr-2 flex items-center rounded-sm border border-[#9c9b9b] p-3 font-bold tracking-wide transition duration-200 hover:border-black">
                        <span className="navigation-text pr-2">Preview</span>
                        <AiOutlineArrowRight
                          size={20}
                          className="text-primary"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View ALl  */}
          <Link href="/courses">
            <button className="mx-auto mt-9 flex items-center gap-5 rounded-md bg-primary hover:bg-primary_bold  px-4 py-2.5 text-white">
              Browse all courses
              <FiArrowRight size={24} className="font-bold" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
