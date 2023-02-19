import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from "next/image";
import apiForPmSvg from '/public/images/shared/apiForPm.svg'
import pricing from '/public/images/shared/pricing.svg'
import users from '/public/images/shared/users.svg'
import noCode from '/public/images/shared/noCode.svg'
import productHunt from '/public/images/shared/productHunt.svg'
import personalBrand from '/public/images/shared/personalBrand.svg'
import { allCourses, allWorkshop } from '@/src/config/constants';

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [courseOpen, setCourseOpen] = useState(true);
  const [workShopsOpen, setWorkShopsOpen] = useState(true);

  return (
    <div className={`block lg:hidden `}>

      <AiOutlineMenu className='cursor-pointer' size={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
        <div
          className={`pt-2 pb-6 w-9/12  h-screen bg-white z-20 fixed top-0 -left-0 lg:left-0 lg:hidden  peer-focus:left-0 transition ease-out delay-150 duration-300 border-r border-[#a9a6a6] navdrawer `}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-duration="200"
          data-aos-easing="ease-in-sine"

        >
          <div className="flex flex-col justify-start item-center">
            <div className="flex justify-between shadow-sm p-2">
              <h3 className="font-bold text-xl">Xplainerr</h3>
              <button onClick={() => setToggleMenu(false)}><AiOutlineCloseCircle size={28} /></button>
            </div>

            {/* Nav Items  */}
            <div>
              <div className={`relative flex flex-col gap-5 pt-4`}>

                <div className='text-md font-semibold px-3 '>
                  <div
                    onClick={() => {
                      setCourseOpen(!courseOpen)
                    }}
                    className={`flex items-center gap-x-2 cursor-pointer `}
                  >
                    Courses
                    <div className="flex justify-between items-center  gap-x-1">
                      <button className='bg-[#FF9500] rounded-sm flex items-center justify-center text-[8px] text-white font-bold w-[40px] h-[16px] px-[2px]'>50% OFF</button>

                      {courseOpen ? (
                        <FiChevronUp size={22} className="font-bold" />
                      ) : (
                        <FiChevronDown size={22} className="font-bold" />
                      )}
                    </div>

                  </div>
                </div>

                <div className={`text-md font-semibold px-3 ${courseOpen ? 'mt-40' : ''}`}>
                  <div
                    onClick={() => {
                      setWorkShopsOpen(!workShopsOpen)
                    }}
                    className={`flex items-center cursor-pointer gap-x-2 `}
                  >
                    Workshops
                    <div className="flex justify-between items-center  gap-x-1">
                      <button className='bg-[#E7E1FF] rounded-sm flex items-center justify-center text-[8px] text-[#9868FF] font-bold w-[40px] h-[16px] px-[2px]'>New</button>

                      {workShopsOpen ? (
                        <FiChevronUp size={22} className="font-bold" />
                      ) : (
                        <FiChevronDown size={22} className="font-bold" />
                      )}

                    </div>

                  </div>
                </div>
                {/* Dropdown  */}
                {courseOpen && (
                  <div onClick={() => setCourseOpen(false)} className="absolute left-0 top-10 z-10 bg-white py-2 mt-2 shadow-lg w-full">

                    {allCourses.map((item, index)=> {
                      return(
                        <Link key={`course-${index}`} href={`/courses/${item.slug}`} className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                        <div className='flex items-center gap-x-2 imgIcon'>
                          <Image src={apiForPmSvg} alt='api for pm icon' width={20} height={20} />
                          <div className=''>
                            <h4 className='font-medium text-[12px]'>{item.title}</h4>
                          </div>
                        </div>
                      </Link>
                      )
                    })}

                   

                    <Link href='/courses/pricing-for-pm' className="block my-2 pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                      <div className='flex items-center gap-x-2 imgIcon'>
                        <Image src={pricing} alt='pricing icon' width={20} height={20} />
                        <div className=''>
                          <h4 className='font-medium text-[12px]'>A to Z of Pricing & Monetization</h4>

                        </div>
                      </div>
                    </Link>

                    <Link href='/courses/user-interview' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                      <div className='flex items-center gap-x-2 imgIcon'>
                        <Image src={users} alt='user icon' width={20} height={20} />
                        <div className=''>
                          <div className="flex gap-x-2 items-center ">
                            <h4 className='font-medium text-[12px]'>  How to do user interviews  </h4>
                          </div>
                        </div>
                      </div>
                    </Link>

                  </div>
                )}

                {workShopsOpen && (
                  <div onClick={() => setWorkShopsOpen(false)} className={`absolute left-0  z-10 bg-white py-2 mt-2 shadow-lg w-full ${courseOpen && workShopsOpen ? 'top-60' : 'top-20'}`}>

                    {allWorkshop.map((item, index)=> {
                      return(
                        <Link key={index} href={`/workshops/${item.slug}`} className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                        <div className='flex items-center gap-x-2 imgIcon'>
                          <Image src={noCode} alt='icon' width={20} height={20} />
                          <div className=''>
                            <h4 className='font-medium text-[12px]'> {item.title} </h4>
                          </div>
                        </div>
                      </Link>
                      )
                    })}
                  </div>
                )}

                <p
                  className={`text-md font-semibold px-3 ${workShopsOpen ? 'mt-36' : ''}`}
                  onClick={() => {
                    setWorkShopsOpen(!workShopsOpen)
                    setCourseOpen(!courseOpen)
                  }}
                >
                  <Link href='/mock-interview' className=''>Mock Interviews</Link>
                </p>
                <p className='text-md font-semibold px-3 mb-5' ><Link href='/blog' className=''>Blog</Link></p>
              </div>
              <div className={`px-3 `}>
                <Link href='/login' className='bg-[#0070F4] rounded-md py-[10px] px-[51px]'>
                  <button className=' text-white text-md font-semibold'>Login</button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}


    </div>
  )
}

export default MobileMenu