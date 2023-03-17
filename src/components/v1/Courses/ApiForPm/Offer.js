import { offers } from '@/src/config/constants'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsCheck2 } from 'react-icons/bs'


const Offer = () => {

  return (
    <div className="bg-[#FAFBFF]">
      <div className="container mx-auto pt-[60px] lg:pt-[140px] pb-16 px-5 lg:px-12 big:px-36 large:px-96">
        <div className='flex flex-col lg:flex-row justify-between gap-16'>
          {/******************** Left  ********************/}
          {/* Large  */}
          <div className='basis-1/2 hidden lg:block lg:w-[465px] lg:h-[500px] bg-[#000] border shadow-[8px_8px_0px_-2px_#000000] rounded-2xl p-11'>
            <h3 className='text-[32px] leading-[48px] text-white font-medium'>Google ads Workshop <br /> Launch Offer</h3>
            <div className='py-4'>
              <h4 className='text-[#57E3A0] text-[56px] leading-[56px] font-medium'>₹499 <del className='text-[32px] leading-[32px]'>₹1999</del></h4>
            </div>
            <div className='flex text-white gap-4'>
              <BsArrowRight size={24} className='' />
              <p>Enroll now and get bonuses worth ₹10,000 free. There was never a better time to grab this.</p>
            </div>
            <div >
              <Link href='/' className='bg-[#58E3A0] border border-[#000] shadow-[8px_8px_0px_-2px_#FFFFFF] w-[374px] h-[88px] rounded-lg flex justify-center items-center text-xl font-medium mt-8'>
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          {/* Mobile  */}
          <div className='block lg:hidden p-6 rounded-[30px] border border-dashed border-[#0078FD]'>
            <h4 className='text-[21px] leading-[26.4px] '>Facebook Ads On- <br /> Demand Program Launch <br /> Offer (Save ₹1000)</h4>
            <div className='pt-t'>
              <h4 className='text-[#0054F7] text-[39px] leading-[48px] '>₹6999 <del className='text-xl text-[#616161]'>₹7999</del></h4>
              <hr className='bg-[#616161] mt-3  mb-5'/>
              <div className='flex flex-col '>
                <div className='flex gap-4 justify-center pb-3'>
                  <BsCheck2 size={32}/>
                  <p className=''>Enjoy the discounted price of ₹6999 and save a total of ₹1000</p>
                </div>
                <div className='flex gap-4 justify-center '>
                  <BsCheck2 size={24} />
                  <p>The launch offer expires tonight. April 14, 2023</p>
                </div>
              </div>
              <p className='text-[#8A8A8A] pt-2 pb-7'>Note: No exceptions would be made beyond the offer expiry date. The prices would go up and no free bonuses</p>
              <Link href='/' className='py-5 w-full flex items-center justify-center text-white rounded-[18px] bg-[#0054F7]'>
                <button className='text-center text-xl '>Enroll Now</button>
              </Link>

            </div>
          </div>


          {/******************* Right ****************** */}
          <div className='basis-1/2'>
            <h3 className='text-2xl lg:text-[32px] font-bold text-[#1F1F1F] text-center lg:text-start'>What you get:</h3>
            <div>
              {offers.map((offer, index) => (
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