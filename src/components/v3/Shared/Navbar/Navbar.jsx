import { LoginModal } from "@/src/components/v1/Shared/Modal";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import apiForPmSvg from "/public/images/shared/apiForPm.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import noCode from "/public/images/shared/noCode.svg";
import personalBrand from "/public/images/shared/personalBrand.svg";
import pricing from "/public/images/shared/pricing.svg";
import productHunt from "/public/images/shared/productHunt.svg";
import users from "/public/images/shared/users.svg";
import { AiOutlineMenu } from "react-icons/ai";
import CourseMobileMenu from "@/src/components/v1/Shared/Navbar/CourseMobileMenu";
import MobileMenu2 from "@/src/components/v1/Shared/Navbar/MobileMenu2";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/src/store/features/auth/authSlice";

const timeoutDuration = 0;

const Navbar = ({ pageName, posts, course }) => {
  const [isSticky, setSticky] = useState(false);
  const [open, setToggle] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const router = useRouter();
  const triggerRef = useRef();
  const timeOutRef = useRef();
  const workShopRef = useRef();
  const workShopOutRef = useRef();
  const profileRef = useRef();
  const profileOutRef = useRef();

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)

  //***************** Course logic *****************
  const handleCourseEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleCourseLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  //***************** Workshop logic *****************
  const handleWorkShopEnter = (isOpen) => {
    clearTimeout(workShopOutRef.current);
    !isOpen && workShopRef.current?.click();
  };

  const handleWorkShopLeave = (isOpen) => {
    workShopOutRef.current = setTimeout(() => {
      isOpen && workShopRef.current?.click();
    }, timeoutDuration);
  };

  //***************** Profile logic *****************
  const handleProfileEnter = (isOpen) => {
    clearTimeout(profileOutRef.current);
    !isOpen && profileRef.current?.click();
  };

  const handleProfileLeave = (isOpen) => {
    profileOutRef.current = setTimeout(() => {
      isOpen && profileRef.current?.click();
    }, timeoutDuration);
  };

  //********************** Handle Sticky ********************** //
  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(body)
    if (!body) return;

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    //***************** handleScroll *****************
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  //***************** Logout *****************
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  const linkStyle =
    "block pl-4 pr-5 py-2 hover:bg-[#EAFCFF]  hover:text-primary";

  return (
    <>
      <header
        className={`border-b border-[#EAECF0] ${
          isSticky ? "fixed top-0 z-10 w-full bg-white shadow-md " : ""
        }`}
      >
        <div className="container mx-auto hidden py-[px] px-[63px] lg:block">
          <div className=" flex items-center justify-between gap-12">
            {/****************** Left Side ******************/}
            <div className="flex items-center justify-center">
              <Image
                src="https://ik.imagekit.io/zwxa4kttt/xplainer-logo.png?updatedAt=1680724534619"
                width={30}
                height={30}
                alt="Xplainerr Logo"
              />
              <Link href="/">
                <h2 className="ml-2 text-2xl font-[700] text-[#101828DE]">
                  Xplainerr
                </h2>
              </Link>
            </div>
            {/****************** Middle  ******************/}
            <div className="flex gap-5 space-x-2">
              {/****************** Course  ******************/}
              <div>
                <Popover className="hover:border-none">
                  {({ open }) => (
                    <div
                      onMouseEnter={() => handleCourseEnter(open)}
                      onMouseLeave={() => handleCourseLeave(open)}
                    >
                      <Popover.Button
                        ref={triggerRef}
                        className={`flex items-center gap-x-1 py-3 outline-none  ${
                          open ? " text-primary_bold" : ""
                        }  ${
                          router.asPath.startsWith("/courses")
                            ? `border-b-2 border-primary  text-primary`
                            : ""
                        } `}
                      >
                        Courses{" "}
                        {open ? (
                          <FiChevronUp size={20} />
                        ) : (
                          <FiChevronDown size={20} />
                        )}
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="left-50 absolute z-50 mt-[2px] border bg-white shadow-xl">
                          <Link
                            href="/courses/api-for-pm"
                            className={linkStyle}
                          >
                            <div className="flex gap-x-3 ">
                              <Image
                                src={apiForPmSvg}
                                alt="api for pm icon"
                                width={30}
                                height={27}
                              />
                              <div className="">
                                <h4 className="font-semibold">
                                  API for Product Manager
                                </h4>
                                <p className="text-[12px] text-[#515151]">
                                  Top rated. Beginner friendly.
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/courses/pricing-for-pm"
                            className="my-2 block py-2 pl-4 pr-8 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                          >
                            <div className="flex gap-x-3 ">
                              <Image
                                src={pricing}
                                alt="pricing icon"
                                width={30}
                                height={27}
                              />
                              <div className="">
                                <h4 className="font-semibold">
                                  A to Z of Pricing & Monetization
                                </h4>
                                <p className="text-[12px] text-[#515151]">
                                  Top rated. Beginner friendly.
                                </p>
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/courses/user-interview"
                            className={linkStyle}
                          >
                            <div className="flex gap-x-3 ">
                              <Image
                                src={users}
                                alt="user icon"
                                width={30}
                                height={27}
                              />
                              <div className="">
                                <div className="flex items-center gap-x-2">
                                  <h4 className="font-semibold">
                                    {" "}
                                    How to do user interviews{" "}
                                  </h4>
                                  <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2  text-[12px] font-bold text-[#4B73FF]">
                                    Coming Soon
                                  </button>
                                </div>
                                <p className="text-[12px] text-[#515151]">
                                  Top rated. Beginner friendly.
                                </p>
                              </div>
                            </div>
                          </Link>
                        </Popover.Panel>
                      </Transition>
                    </div>
                  )}
                </Popover>
              </div>

              {/****************** Workshop  ******************/}
              <div>
                <Popover className="hover:border-none">
                  {({ open }) => (
                    <div
                      onMouseEnter={() => handleWorkShopEnter(open)}
                      onMouseLeave={() => handleWorkShopLeave(open)}
                    >
                      <Popover.Button
                        ref={workShopRef}
                        className={`flex items-center gap-x-1 py-3 outline-none ${
                          open ? "text-primary_bold" : ""
                        }  ${
                          router.asPath.startsWith("/workshops")
                            ? `border-b-2 border-primary  text-primary`
                            : ""
                        } `}
                      >
                        Workshop
                        {open ? (
                          <FiChevronUp size={20} />
                        ) : (
                          <FiChevronDown size={20} />
                        )}
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="left-50 absolute z-50 mt-[2px] border bg-white shadow-xl">
                          <Link
                            href="/workshops/no-code"
                            className="block py-2 pl-4 pr-16 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                          >
                            <div className="flex gap-x-3 ">
                              <Image
                                src={noCode}
                                alt="noCode"
                                width={30}
                                height={27}
                              />
                              <div className="">
                                <h4 className="font-md">No Code </h4>
                                <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2  text-[12px] font-bold text-[#4B73FF]">
                                  Coming Soon
                                </button>
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/workshops/product-hunt"
                            className="block py-2 pl-4 pr-16 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                          >
                            <div className="flex gap-x-3 ">
                              <Image
                                src={productHunt}
                                alt="product hunt icon"
                                width={30}
                                height={27}
                              />
                              <div className="">
                                <h4 className="font-md">Product Hunt Launch</h4>
                                <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2  text-[12px] font-bold text-[#4B73FF]">
                                  Coming Soon
                                </button>
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/workshops/build-brand"
                            className="block py-2 pl-4 pr-16 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                          >
                            <div className="flex gap-x-3 ">
                              <Image
                                src={personalBrand}
                                alt="personal brand icon"
                                width={30}
                                height={27}
                              />
                              <div className="">
                                <div className="">
                                  <h4 className="font-md">
                                    Build Your Personal Brand
                                  </h4>
                                  <button className="h-[20px] rounded-sm bg-[#E0EBFF] px-2  text-[12px] font-bold text-[#4B73FF]">
                                    Coming Soon
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Popover.Panel>
                      </Transition>
                    </div>
                  )}
                </Popover>
              </div>

              <Link
                href="/mock-interview"
                className={`py-3    hover:text-primary_bold ${
                  router.pathname.startsWith("/mock-interview")
                    ? `border-b-2 border-primary  text-primary`
                    : ""
                }`}
              >
                Mock Interviews
              </Link>
              <Link
                href="/blog"
                className={`py-3   hover:text-primary_bold ${
                  router.pathname.startsWith("/blog")
                    ? `border-b-2 border-primary  text-primary`
                    : ""
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Right  Side*/}
            <div>
              {currentUser?.email ? (
                <div>
                  {/************************ If user   ************************/}
                  <Popover className="z-50 hover:border-none">
                    {({ open }) => (
                      <div
                        onMouseEnter={() => handleProfileEnter(open)}
                        onMouseLeave={() => handleProfileLeave(open)}
                      >
                        <Popover.Button
                          ref={profileRef}
                          className={`rounded-full py-2  outline-none`}
                        >
                          {currentUser?.photoURL ? (
                            <Image
                              className={`hover:ring-3 rounded-full ring hover:ring-primary  hover:ring-offset-1 ${
                                open ? "ring-3 ring-primary ring-offset-1" : ""
                              } `}
                              src={currentUser?.photoURL}
                              width={38}
                              height={38}
                              alt="user photo"
                            />
                          ) : (
                            <Image
                              className={`hover:ring-3 rounded-full ring hover:ring-primary  hover:ring-offset-1 ${
                                open ? "ring-3 ring-primary ring-offset-1" : ""
                              } `}
                              src="/images/shared/demoProfile.png"
                              width={38}
                              height={38}
                              alt="user photo"
                            />
                          )}
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute right-16 z-50 mt-[2px] rounded-b-lg border bg-white shadow-2xl">
                            <Link
                              href="/dashboard"
                              className="my-2 block py-2 pl-4 pr-20 hover:bg-[#EAFCFF]  hover:text-[#006BC2]"
                            >
                              Dashboard
                            </Link>

                            <span
                              className={`cursor-pointer ${linkStyle}`}
                              onClick={handleLogout}
                            >
                              {" "}
                              Log Out
                            </span>
                          </Popover.Panel>
                        </Transition>
                      </div>
                    )}
                  </Popover>
                </div>
              ) : (
                <div className="space-x-5">
                  <button
                    // onClick={() => setLoginModal(true)}
                    onClick={() => router.push("/login")}
                    className={`py-3 font-semibold text-primary hover:text-primary_bold `}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => router.push("/signup")}
                    className=" rounded-md bg-primary py-2 px-[15px] text-sm font-semibold text-white hover:bg-primary_bold"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*********************** For Mobile ********************* */}
        <div className={`block lg:hidden `}>
          <div className="my-2 flex justify-between px-5">
            <Link href="/" className="text-xl font-semibold">
              Xplainerr
            </Link>
            <AiOutlineMenu
              className="cursor-pointer"
              size={27}
              onClick={() => setToggle(true)}
            />
          </div>
        </div>

        {pageName === "courseDetail" ? (
          <CourseMobileMenu
            open={open}
            setToggle={setToggle}
            setLoginModal={setLoginModal}
            currentUser={currentUser}
            posts={posts}
            course={course}
          />
        ) : (
          <MobileMenu2
            open={open}
            setToggle={setToggle}
            setLoginModal={setLoginModal}
            user={currentUser}
            logOut={handleLogout}
          />
        )}

        {/*********************** For Mobile ********************* */}
      </header>

      {/************************ Login Modal  ************************/}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </>
  );
};

export default Navbar;
