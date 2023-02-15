
import { Authors, CtaAlternative, Faqs, FeaturesBlocks, HeroBanner, HeroHome, TestimonialsCarousel } from '@/src/components/v1/Courses'
import { pmInterviewKeyChapters } from '@/src/config/constants'
import PageLayout from '@/src/layout/PageLayout'
import Head from 'next/head'
import React from 'react'

const ApiForPm = () => {
  return (
    <>
      <Head>
        <title>XPlainerr | Api For Pm </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayout>
          <HeroHome
            heading={"API Product Manager course"}
            headingColorText="#1"
            ctaText="Buy now"
            apiForPm={true}
          />
          <HeroBanner />
          <FeaturesBlocks
            featureBlockData={pmInterviewKeyChapters}
            heading={"What will you learn?"}
            apiForPm={true}
          />
          <TestimonialsCarousel />
          <Authors
            name1={"Deepak Kumar"}
            name2={"Venkatesh Gupta"}
          />
          <Faqs />
          <CtaAlternative />
        </PageLayout>
      </main>
    </>
  )
}

export default ApiForPm