import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';


const CourseMobileMenu = ({ open, setToggle, posts, course, setLoginModal }) => {
  const router = useRouter()
  useEffect(() => {
    setToggle(false)
  }, [router, setToggle])

  return (
    <div
      onClick={(e) => {
        const target = e.target
        if (target.classList.contains("overlay")) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  top-0 left-0 z-20 h-screen w-full transition-all duration-500  ${open ? "bg-black/75" : "bg-transparent pointer-events-none"
        }`}
    >
      <div className={`absolute transition-[left] bg-white text-black h-screen w-[75%] max-w-[375px] pb-20 ${open ? "left-0 overflow-y-auto" : "-left-full"
        }`}>
        <div className="flex flex-col justify-start item-center">
          <div className="flex justify-between shadow-sm p-2">
            <h3 className="font-bold text-xl">Xplainerr</h3>
            <button onClick={() => setToggle(false)}><AiOutlineCloseCircle size={28} /></button>
          </div>

          {/*Course Nav Items  */}
          <div>
            <div>
              {posts &&
                posts.map((post, index) => (
                  <ul key={index} className='px-3'>
                    <Link href={`/courses/${course}/${post.slug}`} className="flex justify-between items-center text-sm text-[#3B454E]">
                      <li className="py-2.5">{post.frontmatter.title}</li>
                      <FaLock />
                    </Link>
                  </ul>
                ))}
            </div>
            <div className="flex gap-5 items-center px-3 mt-5">
              <h4 onClick={() => setLoginModal(true)} className="cursor-pointer font-semibold hover:border-b-2 px-4 py-1.5 bg-[#195bea] text-white rounded-md ">Login</h4>
              <Link href='/buy-now'><button className="px-3 py-1.5 bg-[#B80C07] text-white rounded-md ">Buy Now</button></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseMobileMenu