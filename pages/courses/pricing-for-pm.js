import { Authors, CtaAlternative, Faqs, FeaturesBlocks, HeroBanner, HeroHome, TestimonialsCarousel } from '@/components/v1/Courses'
import { pmInterviewKeyChapters } from '@/config/constants'
import PageLayout from '@/layout/PageLayout'
import Head from 'next/head'
import React from 'react'

const ApiForPm = () => {
  return (
    <>
      <Head>
        <title>XPlainerr | Pricing For Pm </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayout>
          <HeroHome />
          <HeroBanner />
          <FeaturesBlocks
            featureBlockData={pmInterviewKeyChapters}
            heading={"What will you learn?"}
          />
          <TestimonialsCarousel />
          <Authors
            name1={"Deep"}
            name2={"Venky"}
          />
          <Faqs />
          <CtaAlternative />
        </PageLayout>
      </main>
    </>
  )
}

export default ApiForPm