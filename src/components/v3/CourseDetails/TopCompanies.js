import Image from 'next/image';
import React from 'react'

const TopCompanies = ({ topCompanies }) => {
  return (
    <div className="border p-5">
      <h2 className="text-xl font-bold text-[#1C1D1F]">
        Top companies offer this course to their employees
      </h2>
      <div className="flex justify-between gap-3">
        {topCompanies.map((logo, index) => (
          <Image
            key={index}
            src={`/images/courses/v3/companyLogo/${logo.logo}`}
            width={80}
            height={80}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default TopCompanies