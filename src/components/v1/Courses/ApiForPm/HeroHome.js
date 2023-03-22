import Image from "next/image"
import Link from "next/link"
import { BsFillCheckCircleFill } from 'react-icons/bs'

const HeroHome = () => {
  return (
    <div className='container mx-auto py-4 px-5 lg:px-12 big:px-36 large:px-96'>
      <div className='flex flex-col lg:flex-row justify-between pt-10 lg:pt-[52px] items-center  gap-10 lg:gap-16 '>
        {/* Left  */}
        <div className='basis-1/2 hidden scale-125 md:block lg:flex justify-center items-center'>
          <Image
            className="rounded-lg"
            src="/images/courses/man1.svg"
            alt="Hero Banner"
            width={400}
            height={338}
            priority
          />
        </div>
        <div className='basis-1/2 px-8 lg:hidden scale-125 md:block flex justify-center items-center'>
          <Image
            className="rounded-lg"
            src="/images/courses/videoMan.svg"
            alt="Hero Banner"
            width={300}
            height={256}
            priority
          />
        </div>

        {/* Right */}
        <div className='basis-1/2 flex flex-col '>
          <h2 className="text-4xl font-medium text-[#101828DE] lg:text-[#000] lg:text-5xl lg:font-extrabold ">API For Product  <br /> Managers</h2>
          <div className="flex gap-8 py-4 px-1 lg:px-3 apiForPm">
            <div className="flex justify-center items-center gap-2">
              <Image src='/images/courses/i1.svg' width={20} height={19} alt="icon" />
              <p className="text-xs lg:text-sm text-[#333]">25k+ students</p>
            </div>
            <div className="flex justify-center items-center">
              <Image src='/images/courses/i2.svg' width={20} height={19} alt="icon" />
              <p className="text-xs lg:text-sm">11 courses</p>
            </div>
            <div className="flex justify-center items-center">
              <Image src='/images/courses/i3.svg' width={20} height={19} alt="icon" />
              <p className="text-xs lg:text-sm">25 hours</p>
            </div>
          </div>
          <div>
            <p className="text-[#475467] text-sm pb-2 lg:text-[#9CA3AF] lg:py-3.5 lg:text-sm lg:font-medium">Certificate of completion available.</p>
            {/* For large  */}
            <p className="hidden lg:block text-[#9CA3AF] text-sm font-medium pb-3.5">Our product management interview course teaches you the <br /> essential skills you need to ace your PM interview, with hours of <br /> example questions, videos, and interview tips.</p>

            {/* For Mobile  */}
            <div className="flex flex-col space-y-2 lg:hidden mobileContent">
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill  className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]">Transform your product strategy with API skill</p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill  className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]"> Elevate your career with API knowledge</p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCheckCircleFill  className="text-[#5454d4]" />
                <p className="text-sm text-[#475467]"> Trusted by 7300+ PMs.</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <Link href='/courses/api-for-pm/module-1' className="bg-[#0070F4] mt-8 lg:mt-0 lg:px-9 py-4 rounded-md">
                <button className="w-full lg:w-[196px] text-white font-medium">Get Full Access</button>
              </Link>
              <Link href='/courses/api-for-pm/module-1' className="text-center">
                <p className="text-sm text-[#0070F4] font-medium">Try free preview</p>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default HeroHome