import Link from 'next/link'
import Image from 'next/image';

const BlogList = ({ posts }) => {
  // console.log(posts)
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12  md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold"> How to get started with API ? </h1>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">

            {/* Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-12 md:gap-y-8 items-start">

              {/* Article */}
              {posts && posts.map((post, index) => (
                <div key={index}>
                  <article className="flex flex-col h-full" data-aos="zoom-y-out">
                    <header>
                      <Link href={`/blog/${post.slug}`} className="block mb-6">
                        <Image className=" inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={post?.frontmatter?.cover_image} width="352" height="198"  alt={post.frontmatter.title} />
                      </Link>
                      <div className="mb-3">
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
                      <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:underline"> {post.frontmatter.title}</Link>
                      </h3>
                    </header>
                    <p className="text-gray-600 grow">  {post.frontmatter.metaDescription}</p>
                    <footer className="text-sm flex items-center mt-4">
                      <div className="flex shrink-0 mr-3">
                        <a className="relative" href="#0">
                          <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          <Image className="relative rounded-full" src={post?.frontmatter?.author_image}  width="32" height="32" alt={post.frontmatter.author} />
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">{post.frontmatter.author}</a> 
                      </div>
                    </footer>
                  </article>
                </div>
              ))}


            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogList