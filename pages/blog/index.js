import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PageLayout from '@/src/layout/PageLayout'
import Head from 'next/head'
import { sortByDate } from '@/src/utils/date'
import BlogList from '@/src/components/v1/Blog/BlogList'

const Blog = ({ posts }) => {
  // console.log(posts)
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

            <div className="grow">
              <BlogList posts={posts} />
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default Blog


export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('_blog'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('_blog', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
