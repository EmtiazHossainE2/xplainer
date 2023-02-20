const CouponModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex pt-[40%] md:pt-0 justify-center md:items-center z-[9999]'>
      <div className='w-[98%] md:w-[60%] lg:w-[35%] 2xl:w-[500px] flex flex-col'>
        <button className='text-black bg-white text-lg place-self-end border rounded-full px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
        <div className='bg-white p-6 2xl:p-12 rounded-lg '>
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center pb-3">Your coupon code is</h2>
            <h1 className='text-lg md:text-xl text-center font-semibold text-red-500'>NY2023</h1>
            <div>
              <a href="https://dipakkr.gumroad.com/l/api-for-pm" target="_blank" rel="noopener noreferrer" onClick={() => onClose()}>
                <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 w-full mt-4 rounded-md">
                  Apply Coupon
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponModal