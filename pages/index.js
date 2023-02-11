import { Blogs, Brand, Courses, CTA, Faqs, HeroBanner } from '@/components/v1/HomeContainer'
import Footer from '@/components/v1/Shared/Footer/Footer'
import Navbar from '@/components/v1/Shared/Navbar/Navbar'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <>
      <Head>
        <title>XPlainerr </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-[#EAF3FF]">
          <Navbar />
          <HeroBanner />
          <Brand />
        </div>
        <Courses />
        <Blogs />
        <Faqs />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

export default Home

