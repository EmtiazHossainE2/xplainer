import auth from '@/src/auth/firebase/Firebase.init';
import styles from '@/styles/Navbar.module.css';
import { signOut } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import HeaderTopBanner from '../Banner/HeaderBanner';
import { CouponModal, LeadModal, LoginModal } from '../Modal';
import MobileMenu2 from './MobileMenu2';
import apiForPmSvg from '/public/images/shared/apiForPm.svg';
import noCode from '/public/images/shared/noCode.svg';
import personalBrand from '/public/images/shared/personalBrand.svg';
import pricing from '/public/images/shared/pricing.svg';
import productHunt from '/public/images/shared/productHunt.svg';
import users from '/public/images/shared/users.svg';


const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [couponModal, setCouponModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [courseOpen, setCourseOpen] = useState(false);
  const [workShopsOpen, setWorkShopsOpen] = useState(false);
  const [open, setToggle] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const router = useRouter()
  const [user] = useAuthState(auth)
  // console.log(user)

  //********************** Handle Sticky 
  useEffect(() => {

    const body = document.querySelector('body')
    // console.log(body)
    if (!body) return

    if (open) {
      body.style.overflowY = "hidden"
    } else {
      body.style.overflowY = "auto"
    }


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
  }, [open]);

  const handleBannerClick = (hasLead) => {
    if (hasLead) {
      router.push('/courses');
      return;
    }
    setShowModal((state) => !state)
  }

  // Logout 
  const logOut = () => {
    signOut(auth)
    window.location.href = "/";
  }
  const linkStyle = "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"

  return (
    <>
      <header className={` ${isSticky ? 'bg-white shadow-md fixed w-full z-10 top-0 border-b border-gray-200' : 'border-b border-gray-200'}`}>

        {/******************* Header Top Banner  ***************************/}
        <HeaderTopBanner handleBannerClick={handleBannerClick} />


        {/********************** * For Desktop  ********************* */}
        <div className={`relative ${styles.navbar} container mx-auto  px-20 ${isSticky ? 'py-4' : 'pt-4 pb-8'}`}>
          <div className={`${styles.navbar__links}`}>
            <div className={`${styles.navbar__logo}`}>
              <Link href='/'><h2 className='font-bold text-[26px]'>Xplainerr</h2></Link>
            </div>
          </div>
          <div className={`relative ${styles.navbar__container}`}>

            {/*********************** Courses ***********************/}
            <div className='text-md font-semibold px-3 '>
              <div
                onMouseOver={() => {
                  setCourseOpen(true)
                  setWorkShopsOpen(false)
                }}
                className={`flex justify-between items-center cursor-pointer gap-x-2 ${courseOpen ? "border-b-2 pb-[]  border-[#0070F4] " : ""}`}
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


            {/*********************** Workshops ***********************/}
            <div className='text-md font-semibold px-3 '>
              <div
                onMouseOver={() => {
                  setWorkShopsOpen(true)
                  setCourseOpen(false)
                }}
                className={`flex justify-between cursor-pointer items-center gap-x-2 ${workShopsOpen ? "border-b-2 pb-[]   border-[#0070F4] " : ""}`}
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


            {/********************** * Course submenu ********************* */}
            {courseOpen && (
              <div onMouseLeave={() => setCourseOpen(false)} className="absolute left-3 top-5 z-10 bg-white py-2 mt-2 shadow-xl">

                <Link href='/courses/api-for-pm' className={linkStyle}>
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

                <Link href='/courses/user-interview' className={linkStyle}>
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

            {/********************** * Workshop submenu ********************* */}
            {workShopsOpen && (
              <div onMouseLeave={() => setWorkShopsOpen(false)} className="absolute right-2 top-5 z-10 bg-white py-2 mt-2 shadow-xl">

                <Link href='/workshops/no-code' className={linkStyle}>
                  <div className='flex gap-x-3 '>
                    <Image src={noCode} alt='icon' width={30} height={27} />
                    <div className=''>
                      <h4 className='font-semibold'>No Code </h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                      <button className='rounded-sm font-bold text-[12px] px-2  h-[20px] bg-[#E0EBFF] text-[#4B73FF]'>Coming Soon</button>
                    </div>
                  </div>
                </Link>

                <Link href='/workshops/product-hunt' className="block my-2 pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]">
                  <div className='flex gap-x-3 '>
                    <Image src={productHunt} alt='product hunt icon' width={30} height={27} />
                    <div className=''>
                      <h4 className='font-semibold'>Product Hunt Launch</h4>
                      <p className='text-[12px] text-[#515151]'>Top rated. Beginner friendly.</p>
                      <button className='rounded-sm font-bold text-[12px] px-2  h-[20px] bg-[#E0EBFF] text-[#4B73FF]'>Coming Soon</button>
                    </div>
                  </div>
                </Link>

                <Link href='/workshops/build-brand' className={linkStyle}>
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
            {/************************ Workshop submenu end   ************************/}
            <p
              className='text-md font-semibold px-3 '
              onMouseOver={() => {
                setWorkShopsOpen(false)
                setCourseOpen(false)
              }}
            >
              <Link href='/mock-interview' className='hover:border-b-2  hover:border-[#0070F4]'>Mock Interviews</Link>
            </p>

            <p className='text-md font-semibold px-5' ><Link href='/blog' className='hover:border-b-2  hover:border-[#0070F4]'>Blog</Link></p>


          </div>

          <div className={`px-3 ${styles.navbar__sign}`}>
            {user?.email ? (
              <>
                {/************************ If user   ************************/}
                <div
                  className='cursor-pointer'
                  onMouseOver={() => {
                    setProfileOpen(true)
                  }}
                >
                  {user?.photoURL ? (
                    <Image className='rounded-full' src={user?.photoURL} width={38} height={38} alt="user photo" />
                  ) : (
                    <Image className='rounded-full' src='/images/shared/demoProfile.png' width={38} height={38} alt="user photo" />
                  )}
                </div>

                {/* Profile Submenu  */}
                {profileOpen && (
                  <div onMouseLeave={() => setProfileOpen(false)} className="absolute right-20 top-12 z-10 bg-white py-2 shadow-xl rounded-b-lg">

                    <Link href='/dashboard/' className={linkStyle}>
                      Dashboard
                    </Link>

                    <Link href='/dashboard/my-courses' className={linkStyle}>
                      My Courses
                    </Link>

                    <span className={`cursor-pointer ${linkStyle}`} onClick={logOut}>
                      Log Out
                    </span>

                  </div>
                )}
              </>
            ) : (
              <button onClick={() => setLoginModal(true)} className='bg-[#0070F4] rounded-md py-[10px] px-[25px] text-white text-md font-semibold'>Login</button>
            )}

          </div>

          {/*********************** For Mobile ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu className='cursor-pointer' size={27} onClick={() => setToggle(true)} />
          </div>

          <MobileMenu2 open={open} setToggle={setToggle} setLoginModal={setLoginModal} user={user} logOut={logOut} />
          {/*********************** For Mobile ********************* */}

        </div>
      </header>

      {/************************ Lead Modal  ************************/}
      <LeadModal
        isVisible={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
        setCouponModal={setCouponModal}
      />

      {/************************ Coupon Modal  ************************/}
      <CouponModal
        isVisible={couponModal}
        onClose={() => setCouponModal(false)}
      />

      {/************************ Login Modal  ************************/}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />

    </>
  )
}

export default Navbar