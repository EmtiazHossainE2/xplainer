import Link from 'next/link'
import { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { LoginModal } from './Modal'

const UpgradeToPremium = ({ posts, course }) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center  justify-center rounded-lg border border-gray-200 bg-white p-8">
        <FaLock size={24} className="mb-3" />
        <h2 className="text-center text-xl font-extrabold text-black md:text-2xl">
          {" "}
          Upgrade to continue learning
        </h2>

        <div className="flex flex-row flex-wrap justify-center">
          <Link href={`/courses/${course}`}>
            {" "}
            <button className=" my-4 rounded-lg bg-[#5524e0] px-10 py-2.5 font-semibold text-white">
              {" "}
              Unlock chapter{" "}
            </button>
          </Link>
        </div>

        
        {posts &&
          Object.keys(posts)
            .slice(0, 1)
            .map((chapter, index) => {
              const frontmatter = posts[chapter].frontmatter;
              const slug = posts[chapter].slug;

              return (
                <span key={index} className="font-medium text-gray-400">
                  {" "}
                  Not sure yet ?
                  <Link
                    className="font-semibold text-gray-600"
                    href={`/learning-hub/${course}/${slug}`}
                  >
                    Try the free lesson
                  </Link>
                </span>
              );
            })}
      </div>

      {/* Login Modal  */}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </div>
  );
}

export default UpgradeToPremium