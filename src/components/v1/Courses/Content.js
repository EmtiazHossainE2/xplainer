import Image from "next/image";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Content = ({ content, index, onTitleClick, isOpen = true , course }) => {
  // const [childState,setChildState] = useState(true)
  return (
    <div key={index} className="mb-3 rounded-md pt-2 lg:px-2">
      {/* *************************** Module *************************** */}
      <div
        className={`text-l flex cursor-pointer items-center justify-between  border border-[#E5E7EB] bg-[#E5E7EB] py-2.5 pl-3 pr-3 font-semibold text-[#333333] lg:pl-6  ${
          course === "courseDetail" ? "" : "text-base md:text-2xl"
        }`}
        onClick={() => onTitleClick(index)}
      >
        <p>{content.title}</p>
        <div className="">
          {isOpen === index ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>

      {/* *************************** Submodule *************************** */}
      <div className={`border  text-gray-600 ${isOpen ? "block" : "hidden"}`}>
        {content.subModules.map((subModule, index) => (
          <Link
            href={subModule.slug}
            key={index}
            className="md:text-md flex items-center justify-between rounded-md  border-[#E5E7EB] bg-[#F5F5F5]  py-1 pl-3 pr-3 text-xs font-medium text-[#333333] md:text-sm lg:py-1.5  lg:pl-6"
          >
            <div className="flex justify-between py-1">
              <div className="flex gap-2">
                <Image
                  src="/images/shared/playBtn.svg"
                  width={19}
                  height={19}
                  alt="play icon"
                />
                <p>{subModule.title}</p>
              </div>
            </div>
            {/* <div className="text-primary ">
              {subModule.isPaid === true ? <p>Free</p> : <FaLock />}
            </div> */}
          </Link>
        ))}
      </div>
      {/* *************************** Submodule End*************************** */}
    </div>
  );
};

export default Content;
