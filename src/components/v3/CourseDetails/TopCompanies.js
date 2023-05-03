import Image from 'next/image';

const TopCompanies = ({ topCompanies }) => {
  return (
    <div className="border p-5">
      <h2 className="pb-5 text-base font-bold text-[#1C1D1F] lg:pb-1 lg:text-xl">
        Top companies offer this course to their employees
      </h2>
      <div className="flex flex-wrap justify-between  gap-3">
        {topCompanies.map((logo, index) => (
          <Image
            key={index}
            //****************  logo will be dynamic  *****************/
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