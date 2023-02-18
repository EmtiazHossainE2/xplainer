import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CouponModal from '../Modal/CouponModal';
import LeadModal from '../Modal/LeadModal';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import styles from '@/styles/Navbar.module.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [couponModal, setCouponModal] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [courseOpen, setCourseOpen] = useState(false);
  const [workShopsOpen, setWorkShopsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className={` ${isSticky ? 'bg-white shadow-md fixed w-full z-10 top-0 ' : ''}`}>

        {/******************* Header Top Banner  ***************************/}
        <div className='flex justify-center p-4 bg-[#0070F4] '>
          <p
            className="text-center text-[16px] md:text-xl font-bold text-white hover:cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            🎉 Click here to unlock upto 50% discount offer 🎉{" "}
          </p>
        </div>

        {/********************** * For Desktop  ********************* */}
        <div className={`${styles.navbar} container mx-auto  px-20 ${isSticky ? 'py-4' : 'pt-4 pb-8'}`}>
          <div className={`${styles.navbar__links}`}>
            <div className={`${styles.navbar__logo}`}>
              <Link href='/'><h2 className='font-bold text-[30px]'>Xplainerr</h2></Link>
            </div>
          </div>
          <div className={`relative ${styles.navbar__container}`}>

            <p className='text-lg font-semibold px-3 '>
              <Link href='/'
                onMouseOver={() => {
                  setCourseOpen(true)
                  setWorkShopsOpen(false)
                }}
                className={`flex justify-between items-center gap-x-2 ${courseOpen ? "border-b-2 border-[#0070F4] " : ""}`}
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

              </Link>
            </p>

            <p className='text-lg font-semibold px-3 '>
              <Link href='/'
                onMouseOver={() => {
                  setWorkShopsOpen(true)
                  setCourseOpen(false)
                }}
                className={`flex justify-between items-center gap-x-2 ${workShopsOpen ? "border-b-2 border-[#0070F4] " : ""}`}
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

              </Link>
            </p>
            {/* Dropdown  */}
            {courseOpen && (
              <div onMouseLeave={() => setCourseOpen(false)} className="absolute left-3 top-7 z-10 bg-white py-2 mt-2 shadow-xl">

                <Link href='/courses/api-for-pm' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src='/images/shared/apiForPm.png' alt='api for pm icon' width={40} height={10} />
                    <div className=''>
                      <h4 className='font-semibold'>API for Product Manager</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/courses/pricing-for-pm' className="block my-2 pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src='/images/shared/pricing.png' alt='pricing icon' width={40} height={10} />
                    <div className=''>
                      <h4 className='font-semibold'>A to Z of Pricing & Monetization</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/courses/user-interview' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src='/images/shared/users.png' alt='user icon' width={40} height={10} />
                    <div className=''>
                      <div className="flex gap-x-2 items-center">
                        <h4 className='font-semibold'>  How to do user interviews  </h4>
                        <button className='rounded-sm font-bold text-[12px] px-2  h-[20px] bg-[#E0EBFF] text-[#4B73FF]'>Coming Soon</button>
                      </div>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

              </div>
            )}

            {workShopsOpen && (
              <div onMouseLeave={() => setWorkShopsOpen(false)} className="absolute right-6 top-7 z-10 bg-white py-2 mt-2 shadow-xl">

                <Link href='/workshops/no-code' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src='/images/shared/noCode.png' alt='icon' width={40} height={10} />
                    <div className=''>
                      <h4 className='font-semibold'>No Code </h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/workshops/product-hunt' className="block my-2 pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src='/images/shared/productHunt.png' alt='product hunt icon' width={40} height={10} />
                    <div className=''>
                      <h4 className='font-semibold'>Product Hunt Launch</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/workshops/build-brand' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src='/images/shared/personalBrand.png' alt='personal brand icon' width={40} height={10} />
                    <div className=''>
                      <div className="flex gap-x-2 items-center">
                        <h4 className='font-semibold'>  Build Your Personal Brand  </h4>
                        <button className='rounded-sm font-bold text-[12px] px-2  h-[20px] bg-[#E0EBFF] text-[#4B73FF]'>Coming Soon</button>
                      </div>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

              </div>
            )}

            <p
              className='text-lg font-semibold px-3 '
              onMouseOver={() => {
                setWorkShopsOpen(false)
                setCourseOpen(false)
              }}
            >
              <Link href='/mock-interview' className='hover:border-b-2 hover:border-[#0070F4]'>Mock Interviews</Link>
            </p>
            <p className='text-lg font-semibold px-5' ><Link href='/blog'className='hover:border-b-2 hover:border-[#0070F4]'>Blog</Link></p>
          </div>
          <div className={`px-3`}>
            <Link href='/' className='bg-[#0070F4] rounded-md py-[10px] px-[51px]'>
              <button className=' text-white text-lg font-semibold'>Login</button>
            </Link>
          </div>

          {/********************** * For Mobile ********************* */}

        </div>
      </header>

      <LeadModal
        isVisible={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
        setCouponModal={setCouponModal}
      />

      <CouponModal
        isVisible={couponModal}
        onClose={() => setCouponModal(false)}
      />

    </>
  )
}

export default Navbar