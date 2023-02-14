import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CouponModal from '../Modal/CouponModal';
import LeadModal from '../Modal/LeadModal';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [couponModal, setCouponModal] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

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
          <div className={`${styles.navbar__container}`}>
            <p className='text-lg font-semibold px-5'><Link href='/blog'>Blog</Link></p>
            <p className='text-lg font-semibold px-5'><Link href='/courses/api-for-pm'>API for PM</Link></p>
            <p className='text-lg font-semibold px-5'><Link href='/'>Pricing</Link></p>
            <p className='text-lg font-semibold px-5'><Link href='/'>FAQ</Link></p>
            <p className='text-lg font-semibold px-5'><Link href='/'>Team</Link></p>
          </div>
          <div className={`${styles.navbar__sign}`}>
            <Link href='/' className='bg-[#0070F4] rounded-[37px] py-[18px] px-6'>
              <button className=' text-white text-lg font-semibold'>Get Free Ebook</button>
            </Link>
          </div>

          {/********************** * For Mobile ********************* */}
          <div className={`${styles.navbar__menu}`}>
            {toggleMenu
              ? <RiCloseLine className='cursor-pointer' size={27} onClick={() => setToggleMenu(false)} />
              : <AiOutlineMenu className='cursor-pointer' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className={`scale-up-center ${styles.navbar__menuContainer} `}>
                <div >
                  <p className='text-lg font-semibold px-5'><Link href='blog'>Blog</Link></p>
                  <p className='text-lg font-semibold px-5'><Link href='/courses/api-for-pm'>API for PM</Link></p>
                  <p className='text-lg font-semibold px-5'><Link href='/'>Pricing</Link></p>
                  <p className='text-lg font-semibold px-5'><Link href='/'>FAQ</Link></p>
                  <p className='text-lg font-semibold px-5'><Link href='/'>Team</Link></p>
                </div>
                <div className={`${styles.navbar__menuContainerLinksSign}`}>
                  <Link href='/' className='bg-[#0070F4] rounded-[37px] py-[12px] lg:py-[18px] px-6'>
                    <button className=' text-white text-lg font-semibold'>Get Free Ebook</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
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