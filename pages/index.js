import { Blogs, Brand, Courses, CTA, Faqs, HeroBanner, Mentors } from '@/src/components/v1/HomeContainer'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import PageLayout from '@/src/layout/PageLayout'
import { sortByDate } from '@/src/utils/date'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'


const Home = ({posts}) => {

  return (
    <>
      <CommonHead
        title={'Upskilling & Interview prep courses on product managment, engineering, design & more - Xplainerr'}
        metaDes={'Upskill and prepare for your interviews by learning all the concepts which are highly useful in your daily professional job. '}
        favIcon={'/favicon.ico'}
      />
      <main>
        <PageLayout>
          <HeroBanner />
          <Brand />
          <Courses />
          <Mentors />
          <Blogs posts={posts}/>
          <Faqs />
          <CTA />
        </PageLayout>

      </main>
    </>
  )
}

export default Home


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

