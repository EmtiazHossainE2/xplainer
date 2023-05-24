import { allCourses, allWorkshop, BASE_URL } from "@/src/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
const PUBLIC_IMAGE_PATH = BASE_URL + "images/shared";

const MobileMenu2 = ({ open, setToggle, setLoginModal, user, logOut }) => {
  const router = useRouter();
  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  const [courseOpen, setCourseOpen] = useState(true);
  const [workShopsOpen, setWorkShopsOpen] = useState(true);

  return (
    <div
      onClick={(e) => {
        const target = e.target;
        if (target.classList.contains("overlay")) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  top-0 left-0 z-20 h-screen w-full transition-all duration-500  ${
        open ? "bg-black/75" : "pointer-events-none bg-transparent"
      }`}
    >
      {/* <div className="grid h-screen w-[75%] max-w-[350px] lg:w-full bg-white"> */}
      <div
        className={`absolute h-screen w-[75%]  max-w-[375px] bg-white pb-20 transition-[left] ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div className="item-center flex flex-col justify-start">
          <div className="flex justify-between p-2 shadow-sm">
            <h3 className="text-xl font-bold">Xplainerr</h3>
            <button onClick={() => setToggle(false)}>
              <AiOutlineCloseCircle size={28} />
            </button>
          </div>

          {/***************************** Nav Items  *****************************/}
          <div>
            <div className={`relative flex flex-col gap-5 pt-4`}>
              <div className="text-md px-3 font-semibold ">
                <div
                  onClick={() => {
                    setCourseOpen(!courseOpen);
                  }}
                  className={`flex cursor-pointer items-center gap-x-2 `}
                >
                  Courses
                  <div className="flex items-center justify-between  gap-x-1">
                    <button className="flex h-[16px] w-[40px] items-center justify-center rounded-sm bg-[#FF9500] px-[2px] text-[8px] font-bold text-white">
                      50% OFF
                    </button>

                    {courseOpen ? (
                      <FiChevronUp size={22} className="font-bold" />
                    ) : (
                      <FiChevronDown size={22} className="font-bold" />
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`text-md px-3 font-semibold ${
                  courseOpen ? "mt-32" : ""
                }`}
              >
                <div
                  onClick={() => {
                    setWorkShopsOpen(!workShopsOpen);
                  }}
                  className={`flex cursor-pointer items-center gap-x-2 `}
                >
                  Workshops
                  <div className="flex items-center justify-between  gap-x-1">
                    <button className="flex h-[16px] w-[40px] items-center justify-center rounded-sm bg-[#E7E1FF] px-[2px] text-[8px] font-bold text-[#9868FF]">
                      New
                    </button>

                    {workShopsOpen ? (
                      <FiChevronUp size={22} className="font-bold" />
                    ) : (
                      <FiChevronDown size={22} className="font-bold" />
                    )}
                  </div>
                </div>
              </div>
              {/* ****************************courseOpen****************************** */}
              {courseOpen && (
                <div
                  onClick={() => setCourseOpen(false)}
                  className="absolute  left-0 top-10 z-10 mt-2 w-full border-b border-gray-200 bg-white  py-2"
                >
                  {allCourses.map((item, index) => {
                    return (
                      <Link
                        key={`course-${index}`}
                        href={`/courses/${item.slug}`}
                        className="block py-2 pl-4 pr-8 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                      >
                        <div className="imgIcon flex items-center gap-x-2">
                          <Image
                            src={`${PUBLIC_IMAGE_PATH}/${item.icon}`}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                          <div className="">
                            <h4 className="text-[12px] font-medium">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
              {/* ****************************workShopsOpen****************************** */}
              {workShopsOpen && (
                <div
                  onClick={() => setWorkShopsOpen(false)}
                  className={`absolute left-0   z-10 mt-2 w-full border-b border-gray-200 bg-white py-2  ${
                    courseOpen && workShopsOpen ? "top-52" : "top-20"
                  }`}
                >
                  {allWorkshop.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={`/workshops/${item.slug}`}
                        className="block py-2 pl-4 pr-8 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                      >
                        <div className="imgIcon flex items-center gap-x-2">
                          <Image
                            src={`${PUBLIC_IMAGE_PATH}/${item.icon}`}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                          <div className="">
                            <h4 className="text-[12px] font-medium">
                              {" "}
                              {item.title}{" "}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              <p
                className={`text-md px-3 font-semibold ${
                  workShopsOpen ? "mt-32" : ""
                }`}
                onClick={() => {
                  setWorkShopsOpen(!workShopsOpen);
                  setCourseOpen(!courseOpen);
                }}
              >
                <Link href="/mock-interview" className="">
                  Mock Interviews
                </Link>
              </p>
              <p className="text-md mb-5 px-3 font-semibold">
                <Link href="/blog" className="">
                  Blog
                </Link>
              </p>
            </div>
            {/* ****************************Check login user ****************************** */}
            <div className={`px-3 `}>
              {/* ****************************If user ****************************** */}
              {user?.email ? (
                <div>
                  <hr className="mb-2 border-t-[1.5px]" />
                  <p className="text-md mb-5 font-semibold">
                    <Link href="/dashboard" className="">
                      Dashboard
                    </Link>
                  </p>
                  {/* <p className='text-md font-semibold mb-5' ><Link href='/dashboard' className=''>My Courses</Link></p> */}
                  <p className="text-md mb-5 font-semibold " onClick={logOut}>
                    <span className="flex cursor-pointer items-center gap-2">
                      <BiLogOut size={20} />
                      Logout
                    </span>
                  </p>
                </div>
              ) : (
                //********************************** No user ********************************/
                <button
                  //     onClick={() => {
                  //   setLoginModal(true)
                  //   setToggle(false)
                  // }}
                  onClick={() => router.push("/login")}
                  className="text-md rounded-md bg-[#0070F4] py-[10px] px-[51px] font-semibold text-white"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu2;
