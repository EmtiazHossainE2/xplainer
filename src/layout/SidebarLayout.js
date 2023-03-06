import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLock } from 'react-icons/fa'
import topBadge from '/public/images/courses/top-post-badge.svg'
import { AiOutlineMenu } from 'react-icons/ai';
import CourseMobileMenu from "../components/v1/Shared/Navbar/CourseMobileMenu";
import LoginModal from "../components/v1/Shared/Modal/LoginModal";
import Navbar from "../components/v1/Shared/Navbar/Navbar";


const SidebarLayout = ({ posts,course, children }) => {
  const [open, setToggle] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    // console.log(body)
    if (!body) return

    if (open) {
      body.style.overflowY = "hidden"
    } else {
      body.style.overflowY = "auto"
    }

  }, [open]);

  return (
    <>
      {/********************** Header Top  **********************/}
      <Navbar pageName={`courseDetail`}/>

      {/********************** Main Body **********************/}
      <div className="relative hidden lg:block">
        <div className="flex">
          {/********************* Left Side  **********************/}
          <div className="flex flex-col text-left fixed top-16 left-0 w-[18%] min-h-[100vh] px-2 shadow-2xl gap-8">
            <div>
              {posts &&
                posts.map((post, index) => (
                  <ul key={index} className=''>
                    <Link href={`/courses/${course}/${post.slug}`} className="flex justify-between items-center text-sm text-[#3B454E]">
                      <li className="py-2">{post.frontmatter.title}</li>
                      <FaLock />
                    </Link>
                  </ul>
                ))}
            </div>
            <div>
              <Image src={topBadge} width={350} height={400} alt="api for pm review jpeg" />
            </div>
          </div>

          {/********************** Content  **********************/}
          <div className="px-8 py-16 ml-[20%] mr-[18%]">
            {children}
          </div>

          {/********************** Right Side  **********************/}
          <div className="flex flex-col text-left fixed top-16 right-0 w-[15%] min-h-[100vh] pl-2">
            <div className="border-l pl-3">
              <p className="text-lg pb-3">Content</p>
              <div className="text-sm flex flex-col gap-3">
                <p><a href="#1.whydoweevenneedapisinthefirstinstance?">1. Why do we even need APIs in the first instance?</a></p>
                <p><a href="#">2. What is an API? </a></p>
                <p><a href="#">3. Request + response cycle</a></p>
                <p><a href="#">4. What is JSON?</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/********************** Content Mobile **********************/}
      <div className="px-3 py-16 md:px-12 block lg:hidden">
        {children}
      </div>

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