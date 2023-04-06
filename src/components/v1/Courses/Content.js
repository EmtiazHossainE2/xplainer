import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';

const Content = ({ content, index,  onTitleClick,isOpen = true }) => {
  // const [childState,setChildState] = useState(true)
  return (
    <div key={index} className="mb-3 pt-2 px-2 rounded-md">
      {/* *************************** Module *************************** */}
      <div
        className="md:text-2xl text-l cursor-pointer flex justify-between items-center bg-[#E5E7EB] py-2.5 pl-6 pr-3 border border-[#E5E7EB] rounded-md text-[#333333] font-semibold"
        onClick={() => onTitleClick(index)}
      >
        <p>{content.title}</p>
        <div className="">
          {
            (isOpen === index)
              ? <BsChevronUp />
              : <BsChevronDown />
          }
        </div>
      </div>

      {/* *************************** Submodule *************************** */}
      <div className={` text-gray-600 rounded ${isOpen ? "block" : "hidden"}`}>
        {content.subModules.map((subModule, index) => (
          <Link href={subModule.slug} key={index} className="flex justify-between items-center bg-[#F5F5F5] py-2.5 pl-6 pr-3 border border-[#E5E7EB] rounded-md text-[#333333] font-medium text-sm md:text-md  p-6">
           <div className='p-2 flex'>
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
           </div>
          </Link>
        ))}
      </div>
      {/* *************************** Submodule End*************************** */}
    </div>
  )
}

export default Content