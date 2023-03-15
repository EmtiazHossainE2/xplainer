import { allCourses } from "@/src/config/constants"
import { AiFillStar } from 'react-icons/ai'
import Image from "next/image"
import Link from "next/link";

const Courses = ({ heading, ctaText }) => {
  return (
    <div className="bg-[#FDFDFD]">
      <div className="container mx-auto px-5 pt-20">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-center text-[#101828DE] text-2xl lg:text-[36px] font-semibold "> {heading || "Our Courses "}</h2>
          <p className="text-[#475467] text-center text-base md:text-lg font-medium pt-2.5 pb-8 ">Get better at your job every single day!</p>
          <div className=" flex flex-col lg:flex-row gap-10 lg:gap-5">
            {allCourses.slice(0, 2).map((course, index) => (
              // <div key={index} className="course__box flex flex-col justify-around ">
              <div key={index} className="course__box 2xl:relative 2xl:min-h-[500px]">

                {/* Course header */}
                <div className={`flex items-start  gap-5 py-3 rounded-xl ${course.courseHeaderColor} `}>
                  {/* Title  */}
                  <div className="pl-3 md:pl-5 basis-10/12 ">
                    <h3 className="text-lg md:text-2xl pb-2 font-semibold ">{course.title}</h3>
                    <div className="flex items-center gap-2 md:gap-3">
                      <p className="flex items-center gap-1 md:gap-2 text-sm font-semibold"><AiFillStar className="text-[#FFCA0F]" size={20} /> {course.ratings}/5 </p>
                      <Image src='/images/courses/Line.svg' alt="Line" width={2} height={20} />
                      <p className="flex items-center gap-1 md:gap-2">
                        <Image src='/images/courses/usersIcon.svg' alt="users" width={24} height={14} />
                        <span>{course.learners}k+ learners</span>
                      </p>
                    </div>
                  </div>
                  {/* Discount  */}
                  <div className="basis-2/12  bg-[#FF9500] text-end text-white text-[10px] md:text-[12px] font-bold  rounded-l-xl py-1 md:py-[6px] 2xl:py-2 pr-[10px]  md:pr-4 2xl:pr-4  mt-1 discount">
                    <span>{course.discount}</span>
                  </div>
                </div>

                {/* Course Body  */}
                <div className={`px-3 md:px-5 py-3`}>
                  {/* Sub Category  */}
                  {course.subCategory.slice(0, 3).map((subCat, index) => (
                    <button key={index} className='bg-[#F3F3F3] text-[#515151] text-[12px] font-medium rounded-[24px] px-2 md:px-3  py-1 md:py-[6px] mt-2 mr-2 mb-3 subCat'>{subCat}</button>
                  ))}

                  {/* Description  */}
                  <div>
                    <h3 className="text-lg text-black font-semibold pb-1 md:pb-2">Why choose this course?</h3>
                    {course.whyThisCourse.slice(0, 4).map((item, index) => (
                      <div key={index} className="hidden lg:block">
                        <div className="flex items-center py-2 md:py-3 gap-x-2">
                          <div className="w-[36px] flex justify-center items-center h-[36px] bg-[#D7E8FF] rounded-[50%]">
                            <Image src={`images/courses/${item.icon}`} alt="icon" width={16} height={13} />
                          </div>
                          <p className="text-sm big:text-base text-[#475467]">{item.text}</p>
                        </div>
                      </div>
                    ))}
                    {course.whyThisCourse.slice(1, 4).map((item, index) => (
                      <div key={index} className="block lg:hidden">
                        <div className=" flex items-center py-2 md:py-3 gap-x-2">
                          <div className="basis-1/12 w-[39px] h-[25px] flex justify-center items-center bg-[#D7E8FF] rounded-[50%]">
                            <Image src={`images/courses/${item.icon}`} alt="icon" width={16} height={16} />
                          </div>
                          <p className="basis-10/12 text-sm big:text-base text-[#475467]">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-5">
                    <hr className="pt-5" />
                  </div>
                  <div className="2xl:mx-3">
                    <Link href={`/courses/${course.slug}`} >
                      <button className="bg-[#0070F4] text-white w-full 2xl:w-[95%] mx-auto py-[10px] rounded-md  mt-2 font-semibold 2xl:absolute 2xl:bottom-3  2xl:right-4 borderStyle"> {ctaText || 'Know More '} </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses