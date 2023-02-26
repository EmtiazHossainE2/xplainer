

const LeadModal = ({ isVisible, onClose, setShowModal, setCouponModal }) => {
  if (!isVisible) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    // console.log(email)
    if (email) {

      //*********************     Call Api Here ******************/ 

      setShowModal(false)
      setCouponModal(true)
    }

  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80  flex pt-[40%] md:pt-0 justify-center md:items-center z-[9999]'>
      <div className='w-[99%] md:w-[50%] lg:w-[40%] 2xl:w-[600px] flex flex-col'>
        <button className='text-black bg-white text-lg place-self-end border rounded-full px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
        <div className='bg-white p-6 2xl:p-12 rounded-md '>
          <form onSubmit={handleSubmit}>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold">Claim up to 50% off on courses !</h4>
            <div className="flex flex-col gap-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="py-2 pl-4 pr-5 mt-5 border border-black rounded-xl bg-[#FFFFFF] placeholder:[#505050] "

              />
              <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 w-full">  Check Offers </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeadModal