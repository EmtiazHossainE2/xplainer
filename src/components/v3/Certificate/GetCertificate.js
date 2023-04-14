import Image from 'next/image';
import React from 'react'

const GetCertificate = ({ genCertificate }) => {
  const { name, instructor, course, getDate } = genCertificate;
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center justify-center  px-3">
      
      <div className=" relative" id="certificate">
        <h3 className="absolute top-[37%] left-[37%] text-2xl font-semibold capitalize">
          {name}
        </h3>
        <h3 className="absolute top-[46%] left-[46%] text-lg font-semibold capitalize">
          {instructor}
        </h3>
        <h3 className="absolute top-[59.3%] left-[49%] text-sm font-medium capitalize">
          {course}
        </h3>
        <p className="absolute top-[79.3%] left-[26.6%] text-[6px] ">
          {getDate}
        </p>
        <Image
          src="/certificate/certificateDemo.png"
          width={800}
          height={500}
          alt="certificate"
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default GetCertificate