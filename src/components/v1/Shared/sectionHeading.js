import React from "react";

const SectionHeading = ({ heading, description }) => {
  return (
    <>
      <div className="text-center lg:pt-10">
        <h2 className="customTitle"> {heading} </h2>
        {description && (
          <p className="text-[#475467] text-center text-base md:text-lg font-medium pt-[10px] pb-8 ">
            {description}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionHeading;
