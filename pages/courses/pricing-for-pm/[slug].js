import SidebarLayout from '@/src/layout/SidebarLayout'
import { getCourseNavigation } from '@/src/utils/helper'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from "marked"
import path from 'path'

const ModuleDetails = ({ posts,frontmatter, content, }) => {
  return (
    <div>
      <SidebarLayout posts={posts} course='pricing-for-pm'>
        <div >
          <h1 className='post-heading pb-3'>{frontmatter?.title}</h1>
          <hr className='pb-3'/>
        </div>
        <div className='blog__content text-align-justify'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </SidebarLayout>
    </div>
  )
}

export default ModuleDetails



export const getStaticPaths = async () => {
  let files = fs.readdirSync(path.join('_pricing-for-pm'))
  const unsupportedFileList = ['assets', '.DS_Store'];
  files = files.filter(item => !unsupportedFileList.includes(item))


  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {

  const courseName = '_pricing-for-pm';
  const courseNavItems = getCourseNavigation({courseName : courseName})

  // Step 1 - Check if slug is a folder 
  const markdownWithMeta = fs.readFileSync(
    path.join('_pricing-for-pm', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)


  return {
    props: {
      frontmatter,
      slug,
      posts: courseNavItems,
      content,
      courseNavigationData : courseNavItems,
      },
  }
}
