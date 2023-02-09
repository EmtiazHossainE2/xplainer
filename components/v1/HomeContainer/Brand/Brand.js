import Image from "next/image"

const Brand = () => {
  return (
    <div className='container mx-auto py-4 px-6 md:px-20'>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-[#DCECFF] text-[#0070F4] py-[6px] px-5 rounded-[40px]">Top Companies</button>
        <h2 className="pt-5 text-center pb-8 text-3xl lg:text-[40px] leading-10 font-semibold">Learners From Top Companies </h2>
        <div className='py-8 flex flex-wrap justify-center items-center gap-10'>
          <div>
            <Image
              src="/images/brand/brand1.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand2.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand3.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand4.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand5.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand6.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand7.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand8.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand