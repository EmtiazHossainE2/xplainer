import { apiForPmFaq } from "@/src/config/constants";
import { useState } from "react";
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Faq header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h3">Frequently asked questions </h2>
          </div>

          <div className="md:p-5 lg:px-32">
            {apiForPmFaq.map((faq, index) => (
              <div key={index} className="mb-3 border-t py-4 px-3 last:border-b">
                <div
                  className="text-lg cursor-pointer flex gap-x-4 items-center"
                  onClick={() => onTitleClick(index)}
                >
                  <div className="">
                    {
                      (activeIndex === index)
                        ? <AiOutlineMinus className=' text-[#0070F4] font-bold' size={24} />
                        : <AiOutlinePlus className=' text-[#0070F4] font-bold' size={24} />
                    }
                  </div>
                  <p className="text-lg font-medium">{faq.question}</p>
                </div>
                <div className={`mt-3  ${activeIndex === index ? "block pl-10 text-gray-600" : "hidden"}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

        </div >
      </div >
    </section >
  )
}

export default Faqs