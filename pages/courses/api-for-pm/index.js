
import { Authors, CourseContent, TestimonialsCarousel } from '@/src/components/v1/Courses'
import { Certificate, FeaturesBlocks, HeroHome, Offer } from '@/src/components/v1/Courses/ApiForPm'
import { Brand, Faqs } from '@/src/components/v1/HomeContainer'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
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
          <HeroHome />
          <Brand />
          <FeaturesBlocks heading={"Things you'll learn"} />
          <CourseContent/>
          <Authors />
          <Offer />
          <TestimonialsCarousel />
          <Certificate />
          <Faqs />
        </PageLayout>
      </main>
    </>
  )
}

export default ApiForPm