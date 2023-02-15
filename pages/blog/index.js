// import BlogList from '@/components/v1/Blog/BlogList'
import PageLayout from '@/src/layout/PageLayout'
import Head from 'next/head'

const Blog = () => {
  return (
    <>
      <Head>
        <title>X Plainer | Blog </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayout>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}

            {/*  Page content */}
            <main className="grow">
              {/*  Page sections */}
              <h1>Hello blog</h1>
              {/* <BlogList allPosts={allPosts} /> */}
            </main>

            {/*  Site footer */}
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default Blog


// export const getStaticProps = async () => {
//   const allPosts = getAllPosts(["title", "slug", "excerpt", "author"], null, '_blog');

//   return {
//     props: { allPosts },
//   };
// };

