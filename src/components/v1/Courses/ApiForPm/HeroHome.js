import Image from "next/image"
import Link from "next/link"

const HeroHome = () => {
  return (
    <div className='container mx-auto py-4 px-5 lg:px-36 large:px-96'>
      <div className='flex flex-col lg:flex-row justify-between pt-[52px] items-center gap-16 '>
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

        {/* Right */}
        <div className='basis-1/2 flex flex-col '>
          <h2 className="text-[#000] text-5xl font-extrabold ">API For Product  <br /> Managers</h2>
          <div className="flex gap-8 py-4 px-3">
            <div className="flex gap-2">
              <Image src='/images/courses/i1.svg' width={20} height={19} alt="icon" />
              <p className="text-sm text-[#333]">25k+ students</p>
            </div>
            <div className="flex">
              <Image src='/images/courses/i2.svg' width={20} height={19} alt="icon" />
              <p>11 courses</p>
            </div>
            <div className="flex">
              <Image src='/images/courses/i3.svg' width={20} height={19} alt="icon" />
              <p>25 hours</p>
            </div>
          </div>
          <div>
            <p className="text-[#9CA3AF] py-3.5 text-sm font-medium">Certificate of completion available.</p>
            <p className="text-[#9CA3AF] text-sm font-medium pb-3.5">Our product management interview course teaches you the <br /> essential skills you need to ace your PM interview, with hours of <br /> example questions, videos, and interview tips.</p>
            <div className="flex items-center gap-6">
              <Link href='/courses/api-for-pm' className="bg-[#0070F4] px-9 py-4 rounded-md">
                <button className="w-full lg:w-[196px] text-white font-medium">Get Full Access</button>
              </Link>
              <Link href='/courses/api-for-pm'>
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