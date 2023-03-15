import { useState } from "react";
import { faqData } from "./faqData";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='container mx-auto px-5 lg:px-36 large:px-96 '>
      <div className="p-2 lg:px-32">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-3 border-b  pt-2 pb-4 px-2 rounded-md">
            <div
              className="text-lg cursor-pointer flex justify-between items-center"
              onClick={() => onTitleClick(index)}
            >
              <p>{faq.question}</p>
              <div className="">
                {
                  (activeIndex === index)
                    ? <AiOutlineUp className=' text-[#1C68FF] font-extrabold' size={24} />
                    : <AiOutlineDown className=' text-[#1C68FF] font-extrabold' size={24} />
                }
              </div>
            </div>
            <div className={`mt-3 text-gray-600 rounded ${activeIndex === index ? "block" : "hidden"}`}>
              {faq.answer}
            </div>
          </div>
        ))}
        <div className="text-center py-10 hidden md:block">
          <button className="bg-[#0070F4] py-5 px-16 rounded-[46px] text-white font-semibold">Unleash the Power of Content Creation for just Rs.2999! ₹7,999</button>
          <p className="text-sm text-[#475467] pt-4 ">Reserve a seat before April 5, 2023 to unlock Bonuses worth ₹25,000</p>
        </div>
      </div>
    </div>
  )
}

export default Faqs