import Image from "next/image";
import Link from "next/link";

const MyCourses = ({ allCourses }) => {
  // console.log(allCourses,'p')
  return (
    <div>
      <div className="grid grid-cols-1 gap-8  md:grid-cols-2 lg:mb-56 lg:grid-cols-3 xl:grid-cols-4 ">
        {allCourses &&
          allCourses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-md border border-[#EAECF0] pb-2"
            >
              <div className="image">
                <Image
                  src={`${course.cover_image}`}
                  className="w-full"
                  alt={course.title}
                  width={271}
                  height={106}
                />
              </div>
              <div className="px-3.5">
                <h3 className="pt-4 pb-12 text-lg font-bold capitalize leading-[30px]">
                  {course.title}
                </h3>
                <p className="text-xs font-medium capitalize leading-[33px] text-[#868686]">
                  {course.instructor}
                </p>
                <Link
                  href={`courses/${course.slug}/introduction`}
                  className="absolute bottom-2 left-2 flex h-[33px] w-[95%] justify-center rounded-[4px] border border-[#0070F4] bg-[#ECF5FF]"
                >
                  <button className="  text-sm font-semibold leading-[33px] text-[#0070F4] ">
                    Start Course
                  </button>
                </Link>

                {/* <div className="flex justify-between gap-3 items-center">
                  <div className='h-1.5 w-[85%] lg:w-[84%] big:w-[85%] bg-gray-300 my-6 rounded-lg border '>
                    <div
                      style={{ width: `${course.progress}%` }}
                      className={`h-full ${course.progress ? 'bg-[#00D930]' : 'bg-[#E4E4E4]'}`}>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#0070F4] font-semibold leading-[33px]">{course.progress} %</p>
                </div> */}
              </div>
            </div>
          ))}

        {allCourses && allCourses.length === 0 && (
          <div className="flex min-h-[50vh] items-center justify-center pb-16">
            <h2 className="text-2xl  font-medium"> No courses found </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
