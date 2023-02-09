import Footer from '@/components/v1/Shared/Footer/Footer'
import Navbar from '@/components/v1/Shared/Navbar/Navbar'
import Head from 'next/head'

const Blog = () => {
  return (
    <>
      <Head>
        <title>X Plainer | Blog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h2 className='text-center text-3xl text-red-500'>Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti!</p>
        <Footer />
      </main>
    </>
  )
}

export default Blog

