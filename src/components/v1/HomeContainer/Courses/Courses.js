import { allCourses } from "@/src/config/constants"
import { AiFillStar } from 'react-icons/ai'
import Image from "next/image"
import Link from "next/link";

const Courses = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <div className="xl:container xl:mx-auto section__padding">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-center text-3xl lg:text-[34px] font-bold">Our Courses </h2>
          <p className="pt-[10px] pb-8 text-[#515151] text-center text-[16px] md:text-xl font-medium">Get better at your job every single day!</p>
          <div className=" lg:px-32 flex flex-col lg:flex-row gap-10 lg:gap-5">
            {allCourses.slice(0, 2).map((course, index) => (
              <div key={index} className="course__box ">

                {/* Course header */}
                <div className={`flex items-start gap-5 py-3 rounded-t-xl ${course.courseHeaderColor} `}>
                  <div className="pl-3 md:pl-5 basis-10/12">
                    <h3 className="text-lg md:text-2xl pb-2 font-semibold ">{course.title}</h3>
                    <div className="flex items-center gap-2 md:gap-3">
                      <p className="flex items-center gap-1 md:gap-2 "><AiFillStar className="text-[#FFCA0F]" size={20} /> {course.ratings}/5 </p>
                      <Image src='/images/courses/Line.svg' alt="Line" width={2} height={20} />
                      <p className="flex items-center gap-1 md:gap-2">
                        <Image src='/images/courses/usersIcon.svg' alt="users" width={24} height={14} />
                        <span>{course.learners}k+ learners</span>
                      </p>
                    </div>
                  </div>
                  <div className="basis-2/12 text-end bg-[#FF9500] text-white rounded-l-xl py-1 md:py-[6px] 2xl:py-2 pr-1 md:pr-4 2xl:pr-6 text-[10px] md:text-[12px] font-bold mt-1 discount">
                    <span>{course.discount}</span>
                  </div>
                </div>

                {/* Course Body  */}
                <div className={`px-3 md:px-5 py-3`}>
                  {/* Sub Category  */}
                  {course.subCategory.slice(0, 3).map((subCat, index) => (
                    <button key={index} className='bg-[#F3F3F3] text-[#515151] font-medium rounded-[24px] px-2 md:px-3 text-[12px] py-1 md:py-[6px] mt-2 mr-2 mb-3 subCat'>{subCat}</button>
                  ))}

                  {/* Description  */}
                  <div>
                    <h3 className="text-lg text-black font-semibold pb-1 md:pb-2">Why choose this course?</h3>
                    {course.whyThisCourse.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex py-2 md:py-3 gap-x-2">
                        <Image src={`images/courses/${item.icon}`} alt="icon" width={24} height={22} />
                        <p className="text-sm md:text-[16px] 2xl:text-lg">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="bg-[#0070F4] text-white w-full py-[10px] rounded-md mt-2 text-lg font-semibold">Know more</button>
                  </Link>
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