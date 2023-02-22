import Image from "next/image"
import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className='container mx-auto py-4 px-5 lg:px-20'>
      <div className='flex flex-col lg:flex-row justify-between mt-12 items-center gap-5'>
        {/* Left  */}
        <div className='basis-1/2 text-center lg:text-start'>
          <h2 className="text-3xl lg:text-[40px] 2xl:text-5xl font-bold pb-5 md:py-5">Accelerate your <br /> tech career</h2>
          <p className='text-gray-500 text-lg lg:text-xl 2xl:text-2xl '>We provide niche up skilling courses to help your accelerate and succeed in tech career</p>
          <div className="pt-12">
            <Link href='/courses' className="bg-[#0070F4] rounded-[4px] py-[18px] px-6">
              <button className='text-white font-[500]'>Explore Courses</button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className='basis-1/2 flex justify-center items-center'>
          <Image
            src="/images/shared/hero1.jpg"
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