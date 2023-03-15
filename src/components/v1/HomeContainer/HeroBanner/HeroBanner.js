import Image from "next/image"
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className='container mx-auto py-4 px-5 lg:px-36 large:px-96'>
      <div className='flex flex-col lg:flex-row justify-between mt-12 items-center gap-5'>
        {/* Left  */}
        <div className='basis-1/2 '>
          <h2 className="text-[#101828DE] text-4xl lg:text-6xl font-bold pb-5 md:py-5">Accelerate your <br /> tech career</h2>
          <p className='text-[#475467] text-lg lg:text-xl '>We provide niche up skilling courses to help your accelerate and succeed in tech career</p>
          <div className="pt-8 lg:pt-12 ">
            <Link href='/courses' className="bg-[#0070F4] rounded-md lg:rounded-2xl py-3 md:py-5 big:py-6  md:px-[30px] w-full border lg:border-2 border-[#AED3FF]">
              <button className='w-full lg:w-[222px] text-white font-semibold text-base md:text-xl'>Explore Courses</button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className='basis-1/2 hidden scale-125 md:block lg:flex justify-center items-center'>
          <Image
            src="https://ik.imagekit.io/zwxa4kttt/hero-v2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677394708916"
            alt="Hero Banner"
            width={450}
            height={600}
            priority
          />
        </div>

      </div>
    </div>
  )
}

export default HeroBanner