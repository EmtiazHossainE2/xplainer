import Link from 'next/link'
import Image from 'next/image';

const BlogList = ({ allPosts }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1 mb-4">Type the way you talk</h1>
            <p className="text-xl text-gray-600">Stay up to date on the latest from Simple and best news from the Dev world.</p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">

            {/* Articles container */}
            <div className="md:grow -mt-4">

              {allPosts && allPosts.map((post, index) => {
                return (
                  <article key={`post_${index}`} className="flex items-center py-4 border-b border-gray-200">
                    <div>
                      <header>
                        <h2 className="h4 mb-2">
                          <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title || 'test'}</Link>
                        </h2>
                      </header>
                      <div className="text-lg text-gray-600 mb-4">
                        In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.
                      </div>
                      <footer className="text-sm">
                        <div className="flex items-center">
                          <div className="flex shrink-0 mr-3">
                            <a className="relative" href="#0">
                              <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                              <Image className="relative rounded-full" src={require('../images/news-author-04.jpg').default} width="32" height="32" alt="Author 04" />
                            </a>
                          </div>
                          <div>
                            <span className="text-gray-600">By </span>
                            <a className="font-medium hover:underline" href="#0">Micheal Osman</a>
                            <span className="text-gray-600"> · July 20, 2020</span>
                          </div>
                        </div>
                      </footer>
                    </div>
                    <Link href="/blog-post" className="block shrink-0 ml-6">
                      <div>
                        <span className="sr-only">Read more</span>
                        <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                        </svg>
                      </div>
                    </Link>
                  </article>
                )
              })}

            </div>

            {/* Sidebar */}
            <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">

              {/* Popular posts */}
              

            </aside>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogList