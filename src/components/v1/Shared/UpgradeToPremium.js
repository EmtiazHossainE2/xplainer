import { upgradeItem } from '@/src/config/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaLock } from 'react-icons/fa'
import { LoginModal } from './Modal'

const UpgradeToPremium = ({ posts, course }) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      <div class="flex flex-col items-center w-full mt-6 p-8 border border-gray-200 rounded-lg bg-white">
        <FaLock size={24} className='mb-3' />
        <h2 class="text-center text-xl md:text-2xl font-extrabold text-black">Join now to continue learning
        </h2>
        <span class="text-center text-base text-gray-400 w-full md:w-2/3">As an Exponent member, you’ll get access to the rest of this course, and so much more.</span>

        <div class="flex flex-wrap flex-row justify-center">
          <button onClick={() => setLoginModal(true)} class=" my-4 px-10 py-2.5 rounded-lg font-semibold bg-[#5524e0] text-white" >Upgrade now</button>
        </div>

        <div class="py-10 md:px-10  grid grid-cols-1 md:grid-cols-2 gap-5">
          {upgradeItem?.map((item, index) => (
            <div key={index} className='flex justify-center '>
              <AiOutlineCheck size={40} className='text-blue-500 font-bold' />
              <div>
                <p class="ml-5 text-lg leading-6 font-medium text-gray-800">{item.title}</p>
                <dd class="mt-2 ml-5 text-base text-gray-500">{item.des}
                </dd>
              </div>
            </div>
          ))}
        </div>

        {posts &&
          Object.keys(posts).slice(0, 1).map((chapter, index) => {
            const frontmatter = posts[chapter].frontmatter;
            const slug = posts[chapter].slug;

            return (
              <span key={index} class="font-medium text-gray-400">Not sure yet?
                <Link class="font-semibold text-gray-600" href={`/courses/${course}/${slug}`}>Try the free lesson</Link>
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
  )
}

export default UpgradeToPremium