import PageLayout from "@/src/layout/PageLayout"
import Head from "next/head"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from "next/image"
import { marked } from "marked"

const PostDetails = ({ frontmatter, content, }) => {

  // console.log(frontmatter.title)


  return (
    <>
      <Head>
        <title>{`X Plainer | Blog | ${frontmatter?.title}`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayout>
          <div className="max-w-3xl container mx-auto px-5 my-2 shadow-md">
            <div className="pt-12 pb-12 md:pt-10 md:pb-20 prose prose-base prose-slate parsedown">

              <div className=''>Posted on {frontmatter?.date}</div>
              <h1 className='m-0'>{frontmatter?.title}</h1>

              <div className="flex items-center gap-5 ">
                <Image className="m-0" src={frontmatter.author_image} width="40" height="40" alt={frontmatter.author} />
                <p className="text-gray-600 font-semibold">{frontmatter.author}</p>
              </div>

              <Image className="m-0" src={frontmatter?.cover_image} alt={frontmatter?.title} width={500} height={400} style={{ height: '100%', width: '100%' }} />

              <div className=' '>
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