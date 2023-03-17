import { courseContent } from '@/src/config/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import Content from './Content';

const CourseContent = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  // const onTitleClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };

  const [toggleStates, setToggleStates] = useState({});
  

  const toggleView = (id) => {
    console.log(id)
    setToggleStates((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    console.log(toggleStates)
  };



  return (
    <div className='bg-[#F5F5F5]'>
      <div className="container mx-auto py-[60px] lg:py-20 px-3 lg:px-12 big:px-36 large:px-96">
        <h3 className='text-center text-[32px] font-semibold leading-7 pb-8'>Course Content</h3>
        <div className='w-full lg:w-[693px] container mx-auto'>
          {courseContent.map((content, index) => (
            <Content key={index} content={content} index={index} onTitleClick={toggleView} isOpen={toggleStates[index]} />
          ))}
          <div className='text-center text-sm text-[#0070F4] leading-[21px] pt-8 font-semibold'>
            <Link href='/'><p>Show all 10 lessons</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseContent