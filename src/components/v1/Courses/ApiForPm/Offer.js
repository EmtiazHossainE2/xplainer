import { offers } from '@/src/config/constants'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'


const Offer = () => {

  return (
    <div className="bg-[#FAFBFF]">
      <div className="container mx-auto pt-[140px] pb-16 px-5 lg:px-36 large:px-96">
        <div className='flex justify-between gap-12'>
          {/******************** Left  ********************/}
          <div className='basis-1/2  w-[465px] h-[532.8px] bg-[#000] border shadow-[8px_8px_0px_-2px_#000000] rounded-2xl p-11'>
            <h3 className='text-[32px] leading-[48px] text-white font-medium'>Google ads Workshop <br /> Launch Offer</h3>
            <div className='py-4'>
              <h4 className='text-[#57E3A0] text-[56px] leading-[56px] font-medium'>₹499 <del className='text-[32px] leading-[32px]'>₹1999</del></h4>
            </div>
            <div className='flex text-white gap-4'>
              <BsArrowRight size={24} className=''/>
              <p>Enroll now and get bonuses worth ₹10,000 free. There was never a better time to grab this.</p>
            </div>
            <div >
              <Link href='/' className='bg-[#58E3A0] border border-[#000] shadow-[8px_8px_0px_-2px_#FFFFFF] w-[374px] h-[88px] rounded-lg flex justify-center items-center text-xl font-medium mt-8'>
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          {/******************* Right ****************** */}
          <div className='basis-1/2'>
            <h3 className='text-[32px] font-bold text-[#1F1F1F]'>What you get:</h3>
            <div>
              {offers.map((offer , index) => (
                <div key={index} className="flex gap-2 space-y-4  ">
                  <div className='basis-1/12 flex justify-center items-center mt-3'>
                    <Image src='/images/shared/right.svg' width={29} height={21} alt="icon" />
                  </div>
                  <div className='basis-11/12'>
                    <p>{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Offer