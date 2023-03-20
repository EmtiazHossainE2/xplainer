import { logout } from '@/src/store/features/auth/authSlice';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../components/v1/Shared/Modal/LoginModal";
import CourseMobileMenu from "../components/v1/Shared/Navbar/CourseMobileMenu";
import Navbar from '../components/v1/Shared/Navbar/Navbar';
import topBadge from "/public/images/courses/top-post-badge.svg";

const SidebarLayout = ({ posts, course, children, slug }) => {
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false)
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch()

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

  // Logout 
  const handleLogout = () => {
    dispatch(logout())
    window.location.href = "/";
  }

  const linkStyle = "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
  const courseLink = "flex justify-between items-center text-sm hover:bg-blue-400 text-[#3B454E] px-1 2xl:px-3"

  return (
    <>
      {/********************** Header Top  **********************/}
      <Navbar pageName={`courseDetail`} posts={posts} course={course} />
      

      {/********************** Main Body **********************/}
      <div className="relative hidden lg:block">
        <div className="flex">
          {/********************* Left Side  **********************/}
          <div className="flex flex-col text-left fixed overflow-y-auto top-16 left-0 w-[18%] h-screen pl-2 pr-1 shadow-2xl mb-12 ">

            {/********************************** Paid Chapter  **********************************/}
            {posts &&
              Object.keys(posts).map((chapter, index) => {
                const chapterData = posts[chapter];
                const frontmatter = posts[chapter].frontmatter;
                const slug = posts[chapter].slug;
                const isFreeChapter = posts[chapter].isFreeChapter;

                return (
                  <ul key={index}>
                    <Link
                      href={`/courses/${course}/${slug}`}
                      className={courseLink}>
                      <li className="py-2 flex justify-between items-center ">
                        {frontmatter.title}
                      </li>
                      {!currentUser?.email && isFreeChapter === false && (<FaLock />)}
                    </Link>

                    {chapterData?.subChapters && (
                      <ul key={index}>
                        {chapterData?.subChapters.map((subChapter, index) => {
                          return (
                            <Link
                              key={`subchapter-${index}`}
                              href={`/courses/${course}/${slug}/${subChapter.slug}`}
                              className=" text-sm flex justify-between items-center text-[#3B454E] hover:bg-blue-400 px-1 2xl:px-3"
                            >
                              <li className="py-2 pl-2 ml-2.5 " >
                                {subChapter.frontmatter.title}
                              </li>
                              {!currentUser?.email && (<FaLock />)}
                            </Link>
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
          <div className="px-8  pt-8 pb-16 ml-[20%] mr-[15%]">{children}</div>

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
