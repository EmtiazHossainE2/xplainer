import Image from "next/image"
import Link from "next/link"

const CouponModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80  flex pt-[40%] md:pt-0 justify-center md:items-center z-[9999]'>
      <div className='w-[99%] md:w-[50%] lg:w-[30%] 2xl:w-[450px] flex flex-col'>

        <div className='bg-white px-6 py-12  2xl:p-12 rounded-md relative '>
          <button className='text-black bg-white text-lg font-semibold absolute top-4 right-4 border rounded-full border-[#e6e5e5] px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
          <div>
            <div className="flex justify-center items-center pb-5">
              <Image src='/images/shared/popupLogo.svg' width={48} height={40} alt='popup logo' />
            </div>
            <div className="text-center">
              <h3 className="my-1 text-lg font-bold lg:text-2xl inline-block whitespace-nowrap bg-gradient-to-l from-[#4f46e5] to-pink-500 bg-clip-text text-transparent animate-pulse">CONGRATULATIONS</h3>
              <div className="border-2 border-dashed border-[#845cc7] rounded-lg py-4 my-2">
                <p className="py-1 font-medium text-lg">Your</p>
                <h3 className="bg-gradient-to-l from-[#f38c8f] to-[#b086ff] bg-clip-text text-transparent text-6xl font-semibold">{`50%`}</h3>
                <h4 className="text-[#a273ff] text-2xl font-bold">Discount</h4>
                <p className="text-lg font-medium">has been applied</p>
              </div>
                <h3 className="text-5xl font-bold">₹2500 <small className="text-2xl"><del>₹5000</del></small></h3>
            </div>

          </div>
          <div>
            <Link href="/courses?coupon=NY2023" onClick={() => onClose()}>
              <button className="uppercase text-white font-semibold py-2 rounded-lg text-lg px-8 mt-8 w-full  bg-gradient-to-r from-[#e98ba2] to-[#bd86e8]">
                buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponModal