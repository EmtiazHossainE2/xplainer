import Image from "next/image"


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
      <div className='w-[99%] md:w-[50%] lg:w-[30%] 2xl:w-[450px] flex flex-col'>
        
        <div className='bg-white px-6 py-12  2xl:p-12 rounded-md relative '>
        <button className='text-black bg-white text-lg font-semibold absolute top-4 right-4 border rounded-full border-[#e6e5e5] px-2 py-.5 mb-2' onClick={() => onClose()}>X</button>
          <div>
            <div className="flex justify-center items-center pb-5">
              <Image src='/images/shared/popupLogo.svg' width={48} height={40} alt='popup logo'/>
            </div>
            <h4 className="text-lg text-center md:text-xl lg:text-2xl font-semibold md:font-bold mb-8">Claim up to 50% off on the program!</h4>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="flex flex-col">
              <label className="font-bold mb-[5px] text-sm">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                // placeholder="Enter your name"
                required
                className="py-3 pl-4 pr-5 mb-4 border border-[#ccc] rounded-lg bg-[#f1f1f1] placeholder:[#505050]"

              />
              <label className="font-bold mb-[5px] text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                // placeholder="Enter your email"
                required
                className="py-3 pl-4 pr-5 mb-4 border border-[#ccc] rounded-lg bg-[#f1f1f1] placeholder:[#505050] "

              />
              <button className="text-white font-semibold py-2 rounded-lg text-lg px-8 mt-4 w-full  bg-gradient-to-r from-[#ff6868] to-[#8253db]">  Show me my special price 🥰 </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeadModal