import Image from "next/image"

const Settings = ({ currentUser }) => {
  // console.log(currentUser)
  return (
    <div className="pb-20">
      <div className="bg-[#FAFAFA] border border-[#C2C2C2] rounded-xl flex flex-col lg:flex-row gap-5 items-center py-3 lg:p-5">
        <div>
          <Image className="rounded-full" src={currentUser?.photoURL} width={140} height={140} alt={currentUser?.displayName} />
        </div>
        <div>
          <h3 className="text-lg text-center lg:text-start lg:text-xl big:text-4xl font-medium lg:font-bold leading-6">{currentUser?.displayName}</h3>
          <p className="py-3 text-sm lg:text-base">Last Login  : {currentUser?.lastSignInTime?.slice(0,16)}</p>
          <p className=" text-sm lg:text-base">Joined : {currentUser?.creationTime?.slice(0, 16)}</p>
        </div>
      </div>
    </div>
  )
}

export default Settings