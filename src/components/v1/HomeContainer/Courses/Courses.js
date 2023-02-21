import { allCourses, BASE_URL } from "@/src/config/constants"
// import Image from "next/image"
// import Link from "next/link"
import { RxDividerVertical } from 'react-icons/rx'
import { AiFillStar } from 'react-icons/ai'
import Image from "next/image"

const PUBLIC_IMAGE_PATH = BASE_URL + 'images/courses';


const Courses = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <div className="xl:container xl:mx-auto section__padding">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl lg:text-[34px] font-bold">Our Courses </h2>
          <p className="pt-[10px] pb-5 text-[#515151] text-xl font-medium">Get better at your job every single day!</p>
          <div className=" lg:px-32 flex flex-col md:flex-row gap-5">
            {allCourses.slice(0, 2).map((course, index) => (
              <div key={index} className="course__box">

                {/* course header */}
                <div className={`flex items-start py-3 ${course.courseHeaderColor} `}>
                  <div className="pl-5 basis-10/12">
                    <h3 className="text-2xl pb-2 font-semibold ">{course.title}</h3>
                    <div className="flex items-center gap-3">
                      <p className="flex items-center gap-2"><AiFillStar className="text-[#FFCA0F]" size={20}/> {course.ratings}/5 </p>
                      <Image src='/images/courses/Line.svg' alt="Line" width={2} height={20} />
                      <p className="flex items-center gap-2">
                        <Image src='/images/courses/usersIcon.svg' alt="users" width={24} height={14} />
                        <span>{course.learners}k+ learners</span>
                      </p>
                    </div>
                  </div>
                  <div className="basis-2/12 text-end bg-[#FF9500] text-white rounded-l-xl py-[3px] pr-3 font-bold">
                    <span>{course.discount}</span>
                  </div>
                </div>

                {/* Course Body  */}
                <div className={`pl-5 py-3`}>
                  {course.subCategory.slice(0, 3).map((c, index) => (
                    <button key={index} className='bg-[#F3F3F3] text-[#515151] font-medium rounded-[24px] px-[10px] py-2 mx-2'>{c}</button>
                  ))}
                  <div>
                    <h3>Why choose this course?</h3>
                    {course.whyThisCourse.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Image src={`images/courses/${item.icon}`} alt="icon" width={24} height={22} />
                        <p>{item.text}</p>
                      </div>
                    ))}
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