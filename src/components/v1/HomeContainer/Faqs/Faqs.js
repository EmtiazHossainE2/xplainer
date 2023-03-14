import { useState } from "react";
import { faqData } from "./faqData";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='container mx-auto section__padding '>
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
      </div>
    </div>
  )
}

export default Faqs