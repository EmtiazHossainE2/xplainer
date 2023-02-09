import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='container mx-auto py-8 px-20'>
      <div className='flex justify-between items-center'>
        <div>
          <Link href='/'><h2 className='font-bold text-[30px]'>Xplainerr</h2></Link>
        </div>
        <div className='flex'>
          <p className='text-lg font-semibold px-5'><Link href='blog'>Blog</Link></p>
          <p className='text-lg font-semibold px-5'><Link href='/'>API for PM</Link></p>
          <p className='text-lg font-semibold px-5'><Link href='/'>Pricing</Link></p>
          <p className='text-lg font-semibold px-5'><Link href='/'>FAQ</Link></p>
          <p className='text-lg font-semibold px-5'><Link href='/'>Team</Link></p>
          <p className='text-lg font-semibold '>
            <Link href='/' className='bg-[#0070F4] rounded-[37px] py-[18px] px-6'>
              <button className=' text-white'>Get Free Ebook</button>
            </Link>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Navbar