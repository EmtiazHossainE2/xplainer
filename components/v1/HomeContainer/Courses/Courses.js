import Image from "next/image"
import Link from "next/link"
import { coursesData } from "./coursesData"
import { ImArrowUpRight2 } from 'react-icons/im'


const Courses = () => {
  return (
    <div className="bg-[#F5F5F7]">
      <div className="xl:container xl:mx-auto section__padding">
        <div className="flex flex-col justify-center items-center">
          <button className="customBtn">Courses</button>
          <h2 className="customTitle">Our Courses </h2>
          <div className=" lg:px-32 flex flex-col gap-5">
            {coursesData.map((course, index) => (
              <div key={index} className=" courseCard hover:shadow-md">
                <div className="basis-4/12 flex justify-center items-center">
                  <Image src={course.courseImg}  alt="course.title" />
                </div>
                <div className="basis-8/12">
                  <h4 className="lg:text-2xl 2xl:text-3xl font-semibold py-2 2xl:py-5">{course.title}</h4>
                  <p className="lg:text-lg 2xl:text-xl text-justify text-[#515151]">{course.des}</p>
                  <div className="flex justify-end items-end  pt-8 2xl:pt-16">
                    <Link href='/' className="flex gap-x-2 justify-between items-center text-[#0070F4]">
                      <p className="text-[17px] font-[500] pb-1">Explore Now</p>
                      <ImArrowUpRight2  className="font-bold " />
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