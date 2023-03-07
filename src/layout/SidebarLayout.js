import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import LoginModal from "../components/v1/Shared/Modal/LoginModal";
import CourseMobileMenu from "../components/v1/Shared/Navbar/CourseMobileMenu";
import topBadge from "/public/images/courses/top-post-badge.svg";

const SidebarLayout = ({ posts, course, children }) => {
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(body)
    if (!body) return;

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <>
      {/********************** Header Top  **********************/}
      {/* <Navbar pageName={`courseDetail`} /> */}
      <header className='bg-white shadow-md fixed w-full z-10 top-0 border-b border-gray-200 px-3 md:px-12 lg:px-16'>
        <div className="flex justify-between items-center">
          <Link href='/'><h2 className='font-bold text-[26px] py-2'>Xplainerr</h2></Link>

          {/*********************** For Desktop ********************* */}
          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-x-6 ">

              <button onClick={() => setLoginModal(true)} className='bg-[#0070F4] rounded-md py-[10px] px-[25px] text-white text-md font-semibold'>Login</button>
            </div>
          </div>
          {/*********************** For Mobile Menu ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu className='cursor-pointer' size={27} onClick={() => setToggle(true)} />
          </div>
          <CourseMobileMenu open={open} setToggle={setToggle} setLoginModal={setLoginModal} posts={posts} course={course} />

          {/*********************** For Mobile Menu ********************* */}

        </div>
      </header>

      {/********************** Main Body **********************/}
      <div className="relative hidden lg:block">
        <div className="flex">
          {/********************* Left Side  **********************/}
          <div className="flex flex-col text-left fixed overflow-y-auto top-16 left-0 w-[18%] h-screen px-2 shadow-2xl mb-12 ">
            
              {posts &&
                Object.keys(posts).map((chapter, index) => {
                  const chapterData = posts[chapter];
                  const frontmatter = posts[chapter].frontmatter;
                  const slug = posts[chapter].slug;

                  return (
                    <ul key={index} className="">
                      <li className="py-2 flex justify-between items-center">
                        <Link
                          href={`/courses/${course}/${slug}`}
                          className="flex justify-between items-center text-sm text-[#3B454E]"
                        >
                          {frontmatter.title}
                        </Link>

                        <FaLock />


                      </li>
                      {chapterData?.subChapters && (
                        <ul key={index} className="">

                          {chapterData?.subChapters.map((subChapter, index) => {
                            return (
                              <li className="py-2 pl-2 flex justify-between items-center border-l-2 ml-3" key={`subchapter-${index}`}>
                                <Link
                                  href={`/courses/${course}/${slug}/${subChapter.slug}`}
                                  className=" text-sm text-[#3B454E]"
                                >
                                  {subChapter.frontmatter.title}
                                </Link>

                                <FaLock />
                              </li>
                            )
                          })}

                        </ul>
                      )}

                    </ul>
                  );
                })}
              <div className="mt-6">
                <Image
                  src={topBadge}
                  width={350}
                  height={400}
                  alt="api for pm review jpeg"
                />
              </div>
            

          </div>

          {/********************** Content  **********************/}
          <div className="px-8 py-16 ml-[20%] mr-[18%]">{children}</div>

          {/********************** Right Side  **********************/}
          <div className="flex flex-col text-left fixed top-16 right-0 w-[15%] min-h-[100vh] pl-2">
            <div className="border-l pl-3">
              <p className="text-lg pb-3">Content</p>
              <div className="text-sm flex flex-col gap-3">
                <p>
                  <a href="#1.whydoweevenneedapisinthefirstinstance?">
                    1. Why do we even need APIs in the first instance?
                  </a>
                </p>
                <p>
                  <a href="#">2. What is an API? </a>
                </p>
                <p>
                  <a href="#">3. Request + response cycle</a>
                </p>
                <p>
                  <a href="#">4. What is JSON?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************** Content Mobile **********************/}
      <div className="px-3 py-16 md:px-12 block lg:hidden">{children}</div>

      {/* Login Modal  */}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </>
  );
};

export default SidebarLayout;
