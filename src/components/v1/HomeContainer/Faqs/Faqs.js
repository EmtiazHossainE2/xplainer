import { useState } from "react";
import { faqData } from "./faqData";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import SectionHeading from "../../Shared/sectionHeading";


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='container mx-auto px-5 lg:px-12 big:px-36 large:px-96 '>
      <div className="pb-10 lg:pb-16">
        <SectionHeading heading={"Frequently Asked Questions"} />
      </div>
      <div className="p-2 lg:px-32 lg:pb-8">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-3 border-b pt-2 pb-4 px-2 rounded-md">
            <div
              className="text-lg cursor-pointer flex justify-between items-center"
              onClick={() => onTitleClick(index)}
            >
              <p>{faq.question}</p>
              <div className="">
                {
                  (activeIndex === index)
                    ? <BsChevronUp className=' text-primary font-extrabold' size={20} />
                    : <BsChevronDown className=' text-primary font-extrabold' size={20} />
                }
              </div>
            </div>
            <div className={`mt-3 text-gray-600 rounded ${activeIndex === index ? "block" : "hidden"}`}>
              {faq.answer}
            </div>
          </div>
        ))}

        {/* Cta  */}
        {/* <div className="text-center py-10 hidden md:block">
          <button className="bg-[#0070F4] py-5 px-16 rounded-[46px] text-white font-semibold">Unleash the Power of Content Creation for just Rs.2999! ₹7,999</button>
          <p className="text-sm text-[#475467] pt-4 ">Reserve a seat before April 5, 2023 to unlock Bonuses worth ₹25,000</p>
        </div> */}

      </div>
    </div>
  )
}

export default Faqs