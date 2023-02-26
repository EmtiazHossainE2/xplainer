import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PageLayout from '@/src/layout/PageLayout'
import { sortByDate } from '@/src/utils/date'
import BlogList from '@/src/components/v1/Blog/BlogList'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import { Courses } from '@/src/components/v1/HomeContainer'

const Blog = ({ posts }) => {
  // console.log(posts)
  return (
    <>
      <CommonHead
        title={'Xplainerr - Courses'}
        description={'description'}
        favIcon={'/favicon.ico'}
      />
      <main>
        <PageLayout>
          <div className="flex flex-col min-h-screen overflow-hidden">

            <div className="grow">
            <Courses heading={'All Courses'} />
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

