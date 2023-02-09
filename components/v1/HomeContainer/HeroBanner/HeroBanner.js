import Image from "next/image"
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className='container mx-auto py-4 px-20'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        {/* Left  */}
        <div className='basis-1/2 text-center lg:text-start'>
          <h2 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-[80px] font-bold pb-5 md:py-5">Accelerate your tech career</h2>
          <p className='text-[#1F1F1F] text-[26px] '>We provide niche up skilling courses to help your accelerate and succeed in tech career</p>
          <div className="pt-20">
            <Link href='/courses' className="bg-[#0070F4] rounded-[37px] py-[18px] px-6">
              <button className='text-white font-[500]'>Explore Courses</button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className='basis-1/2 flex justify-center items-center'>
          <Image
            src="/images/home/heroBannerBg.png"
            alt="Hero Banner"
            width={1000}
            height={500}
            priority
          />
        </div>

      </div>
    </div>
  )
}

export default HeroBanner