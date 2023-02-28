import Image from "next/image";
import Link from "next/link";
import { FaLock } from 'react-icons/fa'
import topBadge from '/public/images/courses/top-post-badge.svg'


const SidebarLayout = ({ posts, children }) => {
  return (
    <>
      <div className="relative">
        <div className="flex">
          {/********************* Left Side  **********************/}
          <div className="flex flex-col text-left fixed top-10 left-0 w-[18%] min-h-[100vh] px-2 shadow-2xl gap-8">
            <div>
              {posts &&
                posts.map((post, index) => (
                  <ul key={index} className=''>
                    <Link href={`/courses/api-for-pm/${post.slug}`} className="flex justify-between items-center text-sm text-[#3B454E]">
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
          <div className="p-8 ml-[20%] mr-[18%]">
            {children}
          </div>

          {/********************** Right Side  **********************/}
          <div className="flex flex-col text-left fixed top-10 right-0 w-[15%] min-h-[100vh] pl-2">
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

    </>
  );
};

export default SidebarLayout;