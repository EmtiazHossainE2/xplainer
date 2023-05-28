import { logout } from "@/src/store/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../components/v1/Shared/Modal/LoginModal";
import CourseMobileMenu from "../components/v1/Shared/Navbar/CourseMobileMenu";
import topBadge from "/public/images/courses/top-post-badge.svg";
import { useRouter } from "next/router";

const SidebarLayout = ({ posts, course, children, slug }) => {
  console.log(posts, "posts");
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const { courses: availCourses } = useSelector((state) => state.course);
  const [isPaid, setCourseUnlock] = useState(false);

  useEffect(() => {
    const isCourseAvailable = availCourses?.some(
      (item) => item.slug === course
    );
    const isUserLoggedIn = Boolean(currentUser?.email);

    if (isCourseAvailable && isUserLoggedIn) {
      setCourseUnlock(true);
    }
  }, [availCourses, course, currentUser?.email, slug]);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  const handleBackToCourse = () => {
    router.push(`/courses/${course}`);
  };

  const linkStyle =
    "block pl-4 pr-8 py-2 hover:bg-[#EAFCFF]  hover:text-[#006BC2]";
  const courseLink =
    "flex justify-between items-center text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-200/40 px-1 2xl:px-3";

  return (
    <>
      {/********************** Header Top  **********************/}
      <header className="fixed top-0 z-10 w-full border-b border-gray-200 bg-gray-100 px-3 shadow-md md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h2 className="py-2 text-[26px] font-bold">Xplainerr</h2>
          </Link>

          {/*********************** For Desktop ********************* */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center gap-x-6 ">
              <Link
                href="/dashboard"
                className="border-b-[#0070F4] py-3.5 text-sm font-semibold hover:border-b-2 hover:text-[#0070F4]"
              >
                My Courses
              </Link>
              {currentUser?.email ? (
                <>
                  {/************************ If currentUser   ************************/}
                  <div
                    className="cursor-pointer"
                    onMouseOver={() => {
                      setProfileOpen(true);
                    }}
                  >
                    {currentUser?.photoURL ? (
                      <Image
                        className="rounded-full"
                        src={currentUser?.photoURL}
                        width={38}
                        height={38}
                        alt="user photo"
                      />
                    ) : (
                      <Image
                        className="rounded-full"
                        src="/images/shared/demoProfile.png"
                        width={38}
                        height={38}
                        alt="user photo"
                      />
                    )}
                  </div>

                  {/* Profile Submenu  */}
                  {profileOpen && (
                    <div
                      onMouseLeave={() => setProfileOpen(false)}
                      className="absolute right-20 top-12 z-10 rounded-b-lg bg-white py-2 shadow-xl"
                    >
                      <Link href="/dashboard/" className={linkStyle}>
                        Dashboard
                      </Link>

                      <span
                        className={`cursor-pointer ${linkStyle}`}
                        onClick={handleLogout}
                      >
                        Log Out
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => setLoginModal(true)}
                  className="text-md rounded-md bg-[#0070F4] py-[10px] px-[25px] font-semibold text-white"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          {/*********************** For Mobile Menu ********************* */}
          <div className={`block lg:hidden `}>
            <AiOutlineMenu
              className="cursor-pointer"
              size={27}
              onClick={() => setToggle(true)}
            />
          </div>
          <CourseMobileMenu
            open={open}
            setToggle={setToggle}
            setLoginModal={setLoginModal}
            currentUser={currentUser}
            posts={posts}
            course={course}
          />

          {/*********************** For Mobile Menu ********************* */}
        </div>
      </header>

      {/********************** Main Body **********************/}
      <div className="relative hidden lg:block">
        <div className="flex">
          {/********************* Left Side  **********************/}
          <div className="fixed left-0 mb-12 flex h-screen w-[20%] flex-col overflow-y-auto bg-gray-100 pt-[60px] pl-2 pr-1 text-left shadow-2xl ">
            <div>
              <p onClick={handleBackToCourse}>
                <button className="flex w-full items-center  gap-3 bg-[#DADADA] px-2 py-3 font-medium">
                  <BsArrowLeft size={24} />
                  Back to course
                </button>
              </p>
            </div>

            {/********************************** Paid Chapter  **********************************/}
            {posts &&
              Object.keys(posts)
                .map((chapter) => posts[chapter])
                .sort((a, b) => {
                  const aTitleParts = a.frontmatter.title.split(". ");
                  const bTitleParts = b.frontmatter.title.split(". ");

                  const aNumber = parseFloat(aTitleParts[0]);
                  const bNumber = parseFloat(bTitleParts[0]);

                  if (aNumber < bNumber) return -1;
                  if (aNumber > bNumber) return 1;
                  return 0;
                })
                .map((chapterData, index) => {
                  const frontmatter = chapterData.frontmatter;
                  const slug = chapterData.slug;
                  const isFreeChapter = chapterData.isFreeChapter;
                  console.log(frontmatter.title, "frontmatter");

                  return (
                    <ul key={index}>
                      <Link
                        href={`/learning-hub/${course}/${slug}`}
                        className={courseLink}
                      >
                        <li className="flex items-center justify-between py-2 ">
                          {frontmatter.title}
                        </li>
                        {!isPaid && isFreeChapter === false && <FaLock />}
                      </Link>

                      {chapterData.subChapters && (
                        <ul key={index}>
                          {chapterData.subChapters
                            .slice() 
                            .sort((a, b) => {
                              const aNumber = parseFloat(
                                a.frontmatter.title.split(".")[0]
                              );
                              const bNumber = parseFloat(
                                b.frontmatter.title.split(".")[0]
                              );
                              return aNumber - bNumber;
                            })
                            .map((subChapter, index) => {
                              return (
                                <Link
                                  key={`subchapter-${index}`}
                                  href={`/learning-hub/${course}/${slug}/${subChapter.slug}`}
                                  className=" flex items-center justify-between px-1 text-sm text-gray-600 hover:bg-gray-200/40 hover:text-gray-800 2xl:px-3"
                                >
                                  <li className="ml-2.5 py-2 pl-2 ">
                                    {subChapter.frontmatter.title}
                                  </li>
                                  {!isPaid && <FaLock />}
                                </Link>
                              );
                            })}
                        </ul>
                      )}
                    </ul>
                  );
                })}

            <div className="mt-6 mb-10">
              <Image
                src={topBadge}
                width={350}
                height={400}
                alt="api for pm review jpeg"
              />
            </div>
          </div>

          {/********************** Content  **********************/}
          <div className="ml-[25%] mr-[5%]  px-8 pt-16 lg:mt-4">{children}</div>
        </div>
      </div>

      {/********************** Content Mobile **********************/}
      <div className=" block pt-16 md:px-12 lg:hidden">{children}</div>

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
