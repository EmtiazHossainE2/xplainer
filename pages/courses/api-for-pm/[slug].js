import ContentLayout from '@/src/components/v1/Shared/ContentView/ContentLayout'
import Footer2 from '@/src/components/v1/Shared/Footer/Footer2'
import UpgradeToPremium from '@/src/components/v1/Shared/UpgradeToPremium'
import { courseConfig } from '@/src/config/course-config'
import SidebarLayout from '@/src/layout/SidebarLayout'
import { getCourseNavigation } from '@/src/utils/helper'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { useSelector } from 'react-redux'

const ModuleDetails = ({ courseNavigationData,frontmatter, content, slug }) => {
  const { currentUser } = useSelector((state) => state.user);
  const course = 'api-for-pm'

  const isFreeChapter = courseConfig[course] && courseConfig[course].includes(slug);

  return (
    <div>
      <SidebarLayout posts={courseNavigationData} course={course} slug={slug}>
        {currentUser?.email || isFreeChapter ? (
          <>
            <div>
              <h1 className="post-heading pb-3">{frontmatter?.title}</h1>
              <hr className="pb-3" />
            </div>
            <div className="blog__content text-align-justify mb-5">
              <ContentLayout content={content} />
            </div>
          </>
        ) : (
          <>
            <UpgradeToPremium posts={courseNavigationData} course={course} />
          </>
        )}
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
      content : result,
      courseNavigationData : courseNavItems
    },
  }
}
