import Image from "next/image";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Content = ({ content, index, onTitleClick, isOpen = true , course }) => {
  // const [childState,setChildState] = useState(true)
  return (
    <div key={index} className="mb-3 rounded-md px-2 pt-2">
      {/* *************************** Module *************************** */}
      <div
        className={`text-l flex cursor-pointer items-center justify-between rounded-md border border-[#E5E7EB] bg-[#E5E7EB] py-2.5 pl-6 pr-3 font-semibold text-[#333333]  ${
          course === "courseDetail" ? "" : "md:text-2xl"
        }`}
        onClick={() => onTitleClick(index)}
      >
        <p>{content.title}</p>
        <div className="">
          {isOpen === index ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>

      {/* *************************** Submodule *************************** */}
      <div className={` rounded text-gray-600 ${isOpen ? "block" : "hidden"}`}>
        {content.subModules.map((subModule, index) => (
          <Link
            href={subModule.slug}
            key={index}
            className="md:text-md flex items-center justify-between rounded-md border border-[#E5E7EB] bg-[#F5F5F5] p-6 py-2.5 pl-6 pr-3 text-sm font-medium  text-[#333333]"
          >
            <div className="flex justify-between p-2">
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
