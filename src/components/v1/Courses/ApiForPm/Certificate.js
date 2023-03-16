import { certificateTexts } from "@/src/config/constants"
import Image from "next/image"

const Certificate = () => {
  return (
    <div className="bg-[#F8FAFF]">
      <div className="container mx-auto py-24 px-5 lg:px-36 large:px-96">
        <div className="text-center ">
          <h3 className="text-[38px] text-[#101828DE] font-bold leading-[48px]">Get Certified</h3>
          <p className="text-lg text-[#333333] font-medium pt-3 pb-12">Yes! You will be <span className="text-[#FFC000] ">certified</span> for this program once you submit your assignment.</p>
        </div>
        <div className='flex justify-between gap-12'>
          {/******************** Left  ********************/}
          <div className="basis-1/2">
            {certificateTexts.map((text,index) => (
              <div key={index} className="flex gap-5 space-y-8 pb-8">
                <div className="basis-1/12">
                  <Image className="bg-[#E28C1926] rounded-md" width={48} height={45} src={`/images/courses/${text.icon}`} alt="icon" />
                </div>
                <p className="basis-11/12 text-sm font-[300]">{text.description}</p>
              </div>
            ))}
          </div>
          {/******************* Right ****************** */}
          <div className="basis-1/2">
            <Image src="/images/courses/certificate.svg" width={502} height={365} alt="certificate" className="border border-[#FDBE5F26] rounded-[20px]"/>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Certificate