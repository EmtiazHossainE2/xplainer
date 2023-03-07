import ContentLayout from '@/src/components/v1/Shared/ContentView/ContentLayout'
import Footer2 from '@/src/components/v1/Shared/Footer/Footer2'
import SidebarLayout from '@/src/layout/SidebarLayout'
import { getCourseNavigation } from '@/src/utils/helper'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

const ModuleDetails = ({ posts,frontmatter, content, }) => {
  return (
    <div>
      <SidebarLayout posts={posts} course='api-for-pm'>
        <div >
          <h1 className='post-heading pb-3'>{frontmatter?.title}</h1>
          <hr className='pb-3'/>
        </div>
        <div className='blog__content text-align-justify mb-5'>
        

          <ContentLayout content={content} /> 



        </div>
        <Footer2 />
      </SidebarLayout>
      
    </div>
  )
}

export default ModuleDetails



export const getStaticPaths = async () => {
  let files = fs.readdirSync(path.join('_api-for-pm'))

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

  const courseName = '_api-for-pm'; 
  const courseNavItems = getCourseNavigation({ courseName: courseName });

  const markdownWithMeta = fs.readFileSync(
    path.join(courseName, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const result = await serialize(content);

  
  return {
    props: {
      frontmatter,
      slug,
      posts: courseNavItems,
      content : result,
      courseNavigationData : courseNavItems
    },
  }
}
