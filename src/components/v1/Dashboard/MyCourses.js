import { myCourses } from "@/src/config/constants"
import Image from "next/image"
import Link from "next/link"

const MyCourses = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mb-56 2xl:mb-72">
        {myCourses &&
          myCourses.map((course, index) => (
            <div key={index}>
              <div>
                <Image src={`/images/blog/${course.coverImage}`} alt={course.title} width={300} height={300}/>
              </div>
              <div className="">
                <h3 className="text-sm font-bold capitalize">{course.title}</h3>
                <p className="text-sm text-gray-600 capitalize">{course.instructor},{course.company}</p>
              </div>
              <div className=" h-1 w-full bg-neutral-200 mt-2 mb-1">
                <div className="h1 bg-red-500" ></div>
              </div>
              <Link href='/dashboard' className="text-[12px] font-medium uppercase">Start Course</Link>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default MyCourses