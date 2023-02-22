import { Blogs, Brand, Courses, CTA, Faqs, HeroBanner, Mentors } from '@/src/components/v1/HomeContainer'
import Footer from '@/src/components/v1/Shared/Footer/Footer'
import Navbar from '@/src/components/v1/Shared/Navbar/Navbar'
import PageLayout from '@/src/layout/PageLayout'
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
        <PageLayout>
          <HeroBanner />
          <Brand />
          <Courses />
          <Mentors />
          <Blogs />
          <Faqs />
          <CTA />
        </PageLayout>

      </main>
    </>
  )
}

export default Home

