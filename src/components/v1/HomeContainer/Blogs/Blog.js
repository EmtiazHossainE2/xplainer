import Image from 'next/image'
import Link from 'next/link'

const Blog = ({ blog, index }) => {
  // console.log(blog)
  return (
    <div className=' p-4 rounded-[10px] blog '>
      <div className='w-full'>
        <Link href={`/blog/${blog.slug}`}>
          <Image src={blog?.frontmatter?.cover_image} className="w-full" alt={blog.frontmatter.title} width="352" height="198" />
        </Link>
      </div>
      <div className="my-3">
        <ul className="flex flex-wrap text-xs font-medium -m-1">
          <li className="m-1">
            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Guides</a>
          </li>
          <li className="m-1">
            <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">Intermediate</a>
          </li>
          <li className="m-1">
            <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span>
          </li>
        </ul>
      </div>
      <Link href={`/blog/${blog.slug}`}><h3 className='text-lg xl:text-xl font-semibold pb-3'>{index + 1} . {" "} {blog.frontmatter.title}</h3></Link>
      <p className='text-sm text-[#202020BF]'>{blog.frontmatter.metaDescription.slice(0,80) + '...'}</p>
    </div>
  )
}

export default Blog