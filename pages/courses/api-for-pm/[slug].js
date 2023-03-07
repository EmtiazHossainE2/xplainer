import SidebarLayout from '@/src/layout/SidebarLayout'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from "marked"
import path from 'path'

const ModuleDetails = ({ posts,frontmatter, content, }) => {
  return (
    <div>
      <SidebarLayout posts={posts} course='api-for-pm'>
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

  const filterChapters = ['index.md', 'assets'];
  const courseNav = fs.readdirSync(path.join('_api-for-pm'));
  const courseNavigationData = courseNav.filter(item => !filterChapters.includes(item));

  const markdownWithMeta = fs.readFileSync(
    path.join('_api-for-pm', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  const files = fs.readdirSync(path.join('_api-for-pm'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta2 = fs.readFileSync(
      path.join('_api-for-pm', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta2)

    return {
      slug,
      frontmatter,
    }
  })
  // console.log(posts)

  return {
    props: {
      frontmatter,
      slug,
      posts: posts,
      content,
      courseNavigationData
    },
  }
}
