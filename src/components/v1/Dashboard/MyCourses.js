import { myCourses } from "@/src/config/constants"
import Image from "next/image"
import Link from "next/link"

const MyCourses = ({allCourses}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:mb-56 2xl:mb-72">
        {allCourses &&
          allCourses.map((course, index) => (
            <div key={index} className=" border border-[#EAECF0] pb-2 rounded-[9px]">
              <div>
                <Image src={`/images/myCourse/${course.coverImage}`} className="w-full" alt={course.title} width={271} height={106} />
              </div>
              <div className="px-3.5">
                <h3 className="text-lg leading-[30px] pt-4 font-bold capitalize">{course.title}</h3>
                <p className="text-xs text-[#868686] leading-[33px] font-medium capitalize">{course.instructor}</p>
                <Link href={`courses/${course.permalink}/introduction`} className=" bg-[#ECF5FF] border border-[#0070F4] rounded-[4px] w-full flex justify-center h-[33px] mt-8">
                  <button className="text-[#0070F4] text-sm leading-[33px] font-semibold ">Start Course</button>
                </Link>

                {/* <div className="flex justify-between gap-3 items-center">
                  <div className='h-1.5 w-[85%] lg:w-[84%] big:w-[85%] bg-gray-300 my-6 rounded-lg border '>
                    <div
                      style={{ width: `${course.progress}%` }}
                      className={`h-full ${course.progress ? 'bg-[#00D930]' : 'bg-[#E4E4E4]'}`}>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#0070F4] font-semibold leading-[33px]">{course.progress} %</p>
                </div> */}
              </div>

            </div>
          ))
        }

        {allCourses && allCourses.length === 0 && (
           <div className="flex justify-center items-center pb-16">
            <h2 className="text-2xl  font-medium"> No courses found   </h2>
         </div>
        )}

      </div>
    </div >
  )
}

export default MyCourses