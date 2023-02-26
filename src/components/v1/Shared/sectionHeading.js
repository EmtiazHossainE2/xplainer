import React from "react";

const SectionHeading = ({ heading, description }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="customTitle"> {heading} </h2>
        {description && (
          <p className="text-[#515151] text-center text-[16px] md:text-xl font-medium pt-[10px] pb-8 ">
            {description}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionHeading;
