import { courseContent } from '@/src/config/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'

const CourseContent = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='bg-[#F5F5F5]'>
      <div className="container mx-auto py-20 px-5 lg:px-12 big:px-36 large:px-96">
        <h3 className='text-center text-[32px] font-semibold leading-7 pb-8'>Course Content</h3>
        <div className='w-[693px] container mx-auto'>
          {courseContent.map((content, index) => (
            <div key={index} className="mb-3 pt-2 px-2 rounded-md">
              {/* *************************** Module *************************** */}
              <div
                className="text-lg cursor-pointer flex justify-between items-center bg-[#E5E7EB] py-2.5 pl-6 pr-3 border border-[#E5E7EB] rounded-md text-[#333333] font-semibold"
                onClick={() => onTitleClick(index)}
              >
                <p>{content.title}</p>
                <div className="">
                  {
                    (activeIndex === index)
                      ? <BsChevronUp />
                      : <BsChevronDown />
                  }
                </div>
              </div>
            
              {/* *************************** Submodule *************************** */}
              <div className={`mt-3 text-gray-600 rounded ${activeIndex === index ? "block" : "hidden"}`}>
                {content.subModules.map((subModule, index) => (
                  <Link href={subModule.slug} key={index} className="flex justify-between items-center bg-[#F5F5F5] py-2.5 pl-6 pr-3 border border-[#E5E7EB] rounded-md text-[#333333] font-medium text-sm mb-2">
                    <div className="flex gap-2">
                      {subModule.isPaid && <Image src='/images/shared/playBtn.svg' width={19} height={19} alt='play icon' />}
                      <p>{subModule.title}</p>
                    </div>
                    <div className='text-[#0070F4] '>
                      {subModule.isPaid === true ? (
                        <p>Free</p>
                      ) : (
                        <FaLock />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              {/* *************************** Submodule End*************************** */}
            </div>
          ))}
          <div className='text-center text-sm text-[#0070F4] leading-[21px] pt-8 font-semibold'>
            <Link href='/'><p>Show all 10 lessons</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseContent