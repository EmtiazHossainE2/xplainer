import { logout } from "@/src/store/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CourseMobileMenu = ({
  open,
  setToggle,
  posts,
  course,
  setLoginModal,
  currentUser
}) => {
  const router = useRouter();
  const dispatch = useDispatch()
  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  // Logout 
  const handleLogout = () => {
    dispatch(logout())
    window.location.href = "/";
  }

  const courseLink = "flex justify-between items-center text-sm hover:bg-blue-400 text-[#3B454E] px-3 "

  return (
    <div
      onClick={(e) => {
        const target = e.target;
        if (target.classList.contains("overlay")) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  top-0 left-0 z-20 h-screen w-full transition-all duration-500  ${open ? "bg-black/75" : "bg-transparent pointer-events-none"
        }`}
    >
      <div
        className={`absolute transition-[left] bg-white text-black h-screen w-[75%] max-w-[375px] pb-20 ${open ? "left-0 overflow-y-auto" : "-left-full"
          }`}
      >
        <div className="flex flex-col justify-start item-center">
          <div className="flex justify-between shadow-sm p-2">
            <h3 className="font-bold text-xl">Xplainerr</h3>
            <button onClick={() => setToggle(false)}>
              <AiOutlineCloseCircle size={28} />
            </button>
          </div>

          {/*Course Nav Items  */}
          <div>
            {/********************************** Free Chapter  ***************************************/}
            {posts &&
              Object.keys(posts).slice(0, 1).map((chapter, index) => {
                const frontmatter = posts[chapter].frontmatter;
                const slug = posts[chapter].slug;

                return (
                  <ul key={index}>
                    <Link
                      href={`/courses/${course}/${slug}`}
                      className={courseLink}>
                      <li className="py-2 flex justify-between items-center ">
                        {frontmatter.title}
                      </li>
                    </Link>
                  </ul>
                );
              })}

            {/********************************** Paid Chapter  **********************************/}
            {posts &&
              Object.keys(posts).slice(1).map((chapter, index) => {
                const chapterData = posts[chapter];
                const frontmatter = posts[chapter].frontmatter;
                const slug = posts[chapter].slug;

                return (
                  <ul key={index}>
                    <Link
                      href={`/courses/${course}/${slug}`}
                      className={courseLink}>
                      <li className="py-2 flex justify-between items-center ">
                        {frontmatter.title}
                      </li>
                      {!currentUser?.email && (<FaLock />)}
                    </Link>

                    {chapterData?.subChapters && (
                      <ul key={index}>
                        {chapterData?.subChapters.map((subChapter, index) => {
                          return (
                            <Link
                              key={`subchapter-${index}`}
                              href={`/courses/${course}/${slug}/${subChapter.slug}`}
                              className=" text-sm flex justify-between items-center text-[#3B454E] hover:bg-blue-400 px-3"
                            >
                              <li className="py-2 pl-1 ml-2 " >
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
            <hr className="mt-2" />
            <div className="flex gap-5 items-center px-3 mt-5">
              {currentUser?.email ? (
                <h4
                  onClick={handleLogout}
                  className="cursor-pointer font-semibold hover:border-b-2 px-4 py-1.5 bg-[#195bea] text-white rounded-md "
                >
                  Log out
                </h4>
              ) : (
                <h4
                  onClick={() => setLoginModal(true)}
                  className="cursor-pointer font-semibold hover:border-b-2 px-4 py-1.5 bg-[#195bea] text-white rounded-md "
                >
                  Login
                </h4>
              )}
              {!currentUser?.email &&
                <Link href="/buy-now">
                  <button className="px-3 py-1.5 bg-[#B80C07] text-white rounded-md ">
                    Buy Now
                  </button>
                </Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMobileMenu;
