
import { Authors, CtaAlternative, Faqs, FeaturesBlocks, HeroBanner, HeroHome, TestimonialsCarousel } from '@/src/components/v1/Courses'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import { pmInterviewKeyChapters } from '@/src/config/constants'
import PageLayout from '@/src/layout/PageLayout'

const ApiForPm = () => {

  const handleCTAClick = () => {
    window.open('https://dipakkr.gumroad.com/l/api-for-pm')
  }

  return (
    <>
      <CommonHead
        title={'Master APIs for Product Management: Drive Growth and Improve User Experience'}
        description={`The API for Product Managers course teaches product managers about APIs and how to use them to build successful products. With practical exercises and real-world examples, you'll learn how to optimize product performance, improve user experience, and work more effectively with developers.`}
        favIcon={'/favicon.ico'}
      />
      <main>
        <PageLayout>
          <HeroHome
            heading={"API Product Manager course"}
            headingColorText="#1"
            ctaText="Buy now"
            apiForPm={true}
            handleCTAClick={handleCTAClick}
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