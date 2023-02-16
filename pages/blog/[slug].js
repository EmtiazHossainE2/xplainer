import PageLayout from "@/src/layout/PageLayout"
import Head from "next/head"

const PostDetails = () => {
  return (
    <>
      <Head>
        <title>X Plainer | Post Details </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayout>
          <div>
            Post details 
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default PostDetails