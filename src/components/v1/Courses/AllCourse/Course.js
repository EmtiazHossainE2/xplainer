import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from 'react-icons/ai'

const Course = ({ item }) => {
  console.log(item)
  return (
    <div className=" border border-[#EAECF0] rounded-[9px]">
      <div>
        <Image src={`/images/courses/${item.coverImage}`} className="w-full" alt={item.title} width={271} height={106} />
      </div>
      <div className="px-4">
        <h3 className="text-lg leading-[30px] pt-4 pb-1 font-bold capitalize">{item.title}</h3>
        <button className="text-xs text-[#FFAE00] py-[2px] px-2.5  bg-[#FFFBEC] rounded-[32px] leading-[32px] font-medium capitalize">{item.category}</button>
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center gap-1">
            <AiFillStar className="text-[#FFAE00]" />
            <p className="text-[#666666] text-sm font-medium" >{item.ratings}</p>
          </div>
          <span className="text-[#CAE7FF]">|</span>
          <p className="text-[#666666] text-sm font-medium">{item.learners} learners</p>
        </div>
        <Link href='/courses' className=" bg-[#ECF5FF] border border-[#0070F4] rounded-[4px] w-full flex justify-center h-[33px] mb-3 mt-10">
          <button className="text-[#0070F4] text-sm leading-[33px] font-semibold ">View Course</button>
        </Link>
      </div>

    </div>
  )
}

export default Course