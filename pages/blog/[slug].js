import PageLayout from "@/src/layout/PageLayout"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from "next/image"
import { marked } from "marked"
import CommonHead from "@/src/components/v1/Shared/CommonHead"

const PostDetails = ({ frontmatter, content, }) => {

  // console.log(frontmatter.title)


  return (
    <>
      <CommonHead
        title={`${frontmatter?.title} - Blog | Xplainerr.com`}
        description={'description'}
        favIcon={'/favicon.ico'}
      />
      <main>
        <PageLayout>
          <div className="max-w-4xl container mx-auto px-5 my-2 ">
            <div className="pt-12 pb-12 md:pt-10 md:pb-20 ">

              <h1 className='post-heading '>{frontmatter?.title}</h1>
              <hr />
              <div className='pb-4 pt-4 italic text-gray-500'>{frontmatter?.date} * 7</div>


              {/* <div className="flex items-center gap-2 pt-5 ">
                <Image className="m-0 rounded-full" src={frontmatter.author_image} width="40" height="40" alt={frontmatter.author} />
                <p className="text-gray-600 font-semibold">{frontmatter.author}</p>
              </div> */}


              <div className='blog__content '>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
              </div>

            </div>
          </div>
          
        </PageLayout>
      </main>
    </>
  )
}

export default PostDetails


export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_blog'))

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
  const markdownWithMeta = fs.readFileSync(
    path.join('_blog', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}