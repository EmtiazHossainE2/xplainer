import { courseContent } from "@/src/config/constants";
import Link from "next/link";
import { useState } from "react";
import Content from "./Content";

const CourseContent = ({ course }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };

  const [toggleStates, setToggleStates] = useState({});

  const toggleView = (id) => {
    console.log(id);
    setToggleStates((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    console.log(toggleStates);
  };

  return (
    <div className={`${course === "courseDetail" ? "" : "bg-[#fafafa]"}`}>
      <div
        className={`container mx-auto   ${
          course === "courseDetail"
            ? "pt-10"
            : "px-3 py-[60px] lg:py-20 lg:px-12 big:px-36 large:px-96"
        }`}
      >
        <h3
          className={`pb-5 lg:pb-8 font-semibold leading-7  ${
            course === "courseDetail" ? "text-2xl" : "text-center text-[32px]"
          }`}
        >
          Course Content
        </h3>
        <div
          className={`container mx-auto w-full ${
            course === "courseDetail" ? "" : "lg:w-[793px]"
          }`}
        >
          {courseContent.map((content, index) => (
            <Content
              key={index}
              content={content}
              index={index}
              course={course}
              onTitleClick={toggleView}
              isOpen={toggleStates[index]}
            />
          ))}
          {/* <div className='text-center text-sm text-primary leading-[21px] pt-8 font-semibold'>
            <Link href='/'><p>Show all 10 lessons</p></Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
