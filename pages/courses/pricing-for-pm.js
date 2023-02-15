import { Authors, CtaAlternative, Faqs, FeaturesBlocks,  HeroHome, TestimonialsCarousel } from '@/src/components/v1/Courses'
import { pricingCardText } from '@/src/config/constants'
import PageLayout from '@/src/layout/PageLayout'
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
          <HeroHome
            heading={"A to Z of Pricing and Monetisation"}
            ctaText="Start Learning Pricing"
            pricing={true}
          />
          <FeaturesBlocks
            pricingCardText={pricingCardText}
            heading={"Things you'll learn"}
            pricing={true}
          />
          <TestimonialsCarousel />
          <Authors
            name1={"Deepak "}
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