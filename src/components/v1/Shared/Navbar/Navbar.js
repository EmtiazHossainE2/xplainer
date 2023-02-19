import Link from 'next/link'
import { useEffect, useState } from 'react'
import CouponModal from '../Modal/CouponModal';
import LeadModal from '../Modal/LeadModal';
import styles from '@/styles/Navbar.module.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import apiForPmSvg from '/public/images/shared/apiForPm.svg'
import pricing from '/public/images/shared/pricing.svg'
import users from '/public/images/shared/users.svg'
import noCode from '/public/images/shared/noCode.svg'
import productHunt from '/public/images/shared/productHunt.svg'
import personalBrand from '/public/images/shared/personalBrand.svg'

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [couponModal, setCouponModal] = useState(false)
  const [courseOpen, setCourseOpen] = useState(false);
  const [workShopsOpen, setWorkShopsOpen] = useState(false);

  // Handle Sticky 
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
      <header className={` ${isSticky ? 'bg-white shadow-md fixed w-full z-10 top-0 border-b border-gray-200' : 'border-b border-gray-200'}`}>

        {/******************* Header Top Banner  ***************************/}
        <div className='flex justify-center p-2 bg-[#ff6900] '>
          <p
            className="text-center text-[12px] md:text-md font-bold text-white hover:cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            🎉 Click here to unlock upto 50% discount offer 🎉{" "}
          </p>
        </div>

        {/********************** * For Desktop  ********************* */}
        <div className={`${styles.navbar} container mx-auto  px-20 ${isSticky ? 'py-4' : 'pt-4 pb-8'}`}>
          <div className={`${styles.navbar__links}`}>
            <div className={`${styles.navbar__logo}`}>
              <Link href='/'><h2 className='font-bold text-[26px]'>Xplainerr</h2></Link>
            </div>
          </div>
          <div className={`relative ${styles.navbar__container}`}>

          {/* Courses */}
            <div className='text-md font-semibold px-3 '>
              <div
                onMouseOver={() => {
                  setCourseOpen(true)
                  setWorkShopsOpen(false)
                }}
                className={`flex justify-between items-center cursor-pointer gap-x-2 ${courseOpen ? "border-b-2 border-[#0070F4] " : ""}`}
              >
                Courses
                <div className="flex justify-between items-center  gap-x-1">
                  <button className='bg-[#FF9500] rounded-sm flex items-center justify-center text-[8px] text-white font-bold w-[45px] h-[16px] px-[2px]'>50% Off</button>
                  {courseOpen ? (
                    <FiChevronUp size={22} className="font-bold" />
                  ) : (
                    <FiChevronDown size={22} className="font-bold" />
                  )}
                </div>
              </div>
            </div>

            {/* Workshops */}
            <div className='text-md font-semibold px-3 '>
              <div
                onMouseOver={() => {
                  setWorkShopsOpen(true)
                  setCourseOpen(false)
                }}
                className={`flex justify-between cursor-pointer items-center gap-x-2 ${workShopsOpen ? "border-b-2 border-[#0070F4] " : ""}`}
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
              <div onMouseLeave={() => setCourseOpen(false)} className="absolute left-3 top-5 z-10 bg-white py-2 mt-2 shadow-xl">

                <Link href='/courses/api-for-pm' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src={apiForPmSvg} alt='api for pm icon' width={30} height={27} />
                    <div className=''>
                      <h4 className='font-semibold'>API for Product Manager</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/courses/pricing-for-pm' className="block my-2 pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src={pricing} alt='pricing icon' width={30} height={27} />
                    <div className=''>
                      <h4 className='font-semibold'>A to Z of Pricing & Monetization</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/courses/user-interview' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src={users} alt='user icon' width={30} height={27} />
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
              <div onMouseLeave={() => setWorkShopsOpen(false)} className="absolute right-2 top-5 z-10 bg-white py-2 mt-2 shadow-xl">

                <Link href='/workshops/no-code' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src={noCode} alt='icon' width={30} height={27} />
                    <div className=''>
                      <h4 className='font-semibold'>No Code </h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/workshops/product-hunt' className="block my-2 pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                  <Image src={productHunt} alt='product hunt icon' width={30} height={27} />
                    <div className=''>
                      <h4 className='font-semibold'>Product Hunt Launch</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                    </div>
                  </div>
                </Link>

                <Link href='/workshops/build-brand' className="block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src={personalBrand} alt='personal brand icon' width={30} height={27} />
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
              className='text-md font-semibold px-3 '
              onMouseOver={() => {
                setWorkShopsOpen(false)
                setCourseOpen(false)
              }}
            >
              <Link href='/mock-interview' className='hover:border-b-2 hover:border-[#0070F4]'>Mock Interviews</Link>
            </p>
            <p className='text-md font-semibold px-5' ><Link href='/blog' className='hover:border-b-2 hover:border-[#0070F4]'>Blog</Link></p>

          </div>

          <div className={`px-3 ${styles.navbar__sign}`}>
            <Link href='/login' className='bg-[#0070F4] rounded-md py-[10px] px-[25px]'>
              <button className=' text-white text-md font-semibold'>Login</button>
            </Link>
          </div>

          {/********************** * For Mobile ********************* */}
          {/* <MobileNav/> */}
          <MobileMenu/>

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