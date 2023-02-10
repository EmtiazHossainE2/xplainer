import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({ blog, index }) => {
  return (
    <div className=' p-4 rounded-[10px] blog '>
      <div className='w-full'>
        <Link href='/'>
          <Image src={blog.image} className="w-full" alt={blog.title} />
        </Link>
      </div>
      <div className="flex gap-5 pt-2 pb-3 font-sm">
        <p className='text-[#0B72FF] '>{blog.category}</p>
        <p className='text-[#33383F] '>{blog.time}</p>
      </div>
      <Link href='/'><h3 className='text-xl xl:text-2xl font-bold pb-3'>{index+1} . {" "} {blog.title}</h3></Link>
      <p className='text-sm text-[#202020BF]'>{blog.description}</p>
    </div>
  )
}

export default Blog