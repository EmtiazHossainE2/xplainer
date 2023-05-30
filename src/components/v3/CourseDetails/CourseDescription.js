import React from 'react'

const CourseDescription = ({ description }) => {
  return (
    <div>
      <h2 className="pt-5 pb-3 text-xl font-semibold lg:text-2xl">
        Description
      </h2>
      <div className="text-sm text-gray-600">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="prose-p:text-md md:prose-li:text-md md:prose-ol:text-md prose max-w-full prose-h1:text-2xl prose-h2:my-0 prose-h2:mb-2 prose-p:my-0 prose-a:text-primary prose-a:no-underline"
        ></div>
      </div>
    </div>
  );
};

export default CourseDescription