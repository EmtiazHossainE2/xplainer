import useCourseAccess from "@/src/hooks/auth/useCourseAccess";
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
  const { hasCourseAccess } = useCourseAccess(course);
  console.log(hasCourseAccess, "access");

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
      className={`overlay fixed  top-0 left-0 z-20 h-screen w-full transition-all duration-500  ${
        open ? "bg-black/75" : "pointer-events-none bg-transparent"
      }`}
    >
      <div
        className={`absolute h-screen w-[75%] max-w-[375px] bg-white pb-20 text-black transition-[left] ${
          open ? "left-0 overflow-y-auto" : "-left-full"
        }`}
      >
        <div className="item-center flex flex-col justify-start">
          <div className="flex justify-between p-2 shadow-sm">
            <h3 className="text-xl font-bold">Xplainerr</h3>
            <button onClick={() => setToggle(false)}>
              <AiOutlineCloseCircle size={28} />
            </button>
          </div>

          {/*Course Nav Items  */}
          <div>
            {/********************************** Free Chapter  ***************************************/}
            {posts &&
              Object.keys(posts)
                .slice(0, 1)
                .map((chapter, index) => {
                  const frontmatter = posts[chapter].frontmatter;
                  const slug = posts[chapter].slug;

                  return (
                    <ul key={index}>
                      <Link
                        href={`/learning-center/${course}/${slug}`}
                        className={courseLink}
                      >
                        <li className="flex items-center justify-between py-2 ">
                          {frontmatter.title}
                        </li>
                      </Link>
                    </ul>
                  );
                })}

            {/********************************** Paid Chapter  **********************************/}
            {posts &&
              Object.keys(posts)
                .slice(1)
                .map((chapter, index) => {
                  const chapterData = posts[chapter];
                  const frontmatter = posts[chapter].frontmatter;
                  const slug = posts[chapter].slug;

                  return (
                    <ul key={index}>
                      <Link
                        href={`/learning-center/${course}/${slug}`}
                        className={courseLink}
                      >
                        <li className="flex items-center justify-between py-2 ">
                          {frontmatter.title}
                        </li>
                        {!hasCourseAccess && <FaLock />}
                      </Link>

                      {chapterData?.subChapters && (
                        <ul key={index}>
                          {chapterData?.subChapters.map((subChapter, index) => {
                            return (
                              <Link
                                key={`subchapter-${index}`}
                                href={`/learning-center/${course}/${slug}/${subChapter.slug}`}
                                className=" flex items-center justify-between px-3 text-sm text-[#3B454E] hover:bg-blue-400"
                              >
                                <li className="ml-2 py-2 pl-1 ">
                                  {subChapter.frontmatter.title}
                                </li>
                                {!hasCourseAccess && <FaLock />}
                              </Link>
                            );
                          })}
                        </ul>
                      )}
                    </ul>
                  );
                })}
            <hr className="mt-2" />
            <div className="mt-5 flex items-center gap-5 px-3">
              {currentUser?.email ? (
                <>
                  <Link
                    href="/dashboard"
                    className="cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold "
                  >
                    Dashboard
                  </Link>
                  <h4
                    onClick={handleLogout}
                    className="cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold "
                  >
                    Log out
                  </h4>
                </>
              ) : (
                <>
                  <h4
                    // onClick={() => setLoginModal(true)}
                    onClick={() => router.push("/login")}
                    className="cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold "
                  >
                    Login
                  </h4>
                  <h4
                    // onClick={() => setLoginModal(true)}
                    onClick={() => router.push("/signup")}
                    className="cursor-pointer rounded-md bg-primary px-4 py-1.5 font-semibold text-white hover:border-b-2 hover:bg-primary_bold "
                  >
                    Signup
                  </h4>
                </>
              )}
              {!currentUser?.email && (
                <Link href={`/courses/${course}`}>
                  <button className="rounded-md bg-[#B80C07] px-3 py-1.5 text-white ">
                    Buy Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMobileMenu;
