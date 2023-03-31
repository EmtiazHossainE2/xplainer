
import {  CourseContent, TestimonialsCarousel } from '@/src/components/v1/Courses'
import { Authors, Certificate, FeaturesBlocks, HeroHome, Offer } from '@/src/components/v1/Courses/ApiForPm'
import { Brand, Faqs } from '@/src/components/v1/HomeContainer'
// import { Authors, Faqs, FeaturesBlocks, HeroBanner, HeroHome, TestimonialsCarousel } from '@/src/components/v1/Courses'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import PageLayout from '@/src/layout/PageLayout'
import { pmInterviewKeyChapters } from '@/src/config/constants'

const ApiForPm = () => {

  const handleCTAClick = () => {
    window.open('https://dipakkr.gumroad.com/l/api-for-pm')
  }

  return (
    <>
      <CommonHead
        title={
          "Master APIs for Product Management: Drive Growth and Improve User Experience"
        }
        description={`The API for Product Managers course teaches product managers about APIs and how to use them to build successful products. With practical exercises and real-world examples, you'll learn how to optimize product performance, improve user experience, and work more effectively with developers.`}
        favIcon={"/favicon.ico"}
      />
      <main className="">
        <PageLayout>
          {/* New Api For Pm Start  */}
          <HeroHome />
          <Brand />
          <FeaturesBlocks heading={"Things you'll learn"} />
          <CourseContent/>
          <Authors />
          <Offer />
          <TestimonialsCarousel />
          <Certificate />
          <Faqs />
          {/* New Api For Pm End  */}

          {/* Old V1 Api For Pm Start  */}
          {/* <HeroHome
            heading={"API Product Manager course"}
            headingColorText="#1"
            ctaText="Buy now"
            apiForPm={true}
            coursePrice="price_1MrLYXDEsxnXfJbTEtoNl1ba"
            handleCTAClick={handleCTAClick}
            coursePreviewSlug={"api-for-pm/introduction"}
          />
          <HeroBanner />
          <FeaturesBlocks
            featureBlockData={pmInterviewKeyChapters}
            heading={"What will you learn?"}
            apiForPm={true}
          />
          <TestimonialsCarousel />
          <Authors name1={"Deepak Kumar"} name2={"Venkatesh Gupta"} />
          <Faqs /> */}
          {/* Old V1 Api For Pm End */}

          {/* Cta For Api For Pm  */}
          <div className="fixed bottom-[-75px] left-0 z-10 mb-[75px] w-full md:hidden">
            <div
              onClick={handleCTAClick}
              className="flex cursor-pointer items-center justify-center bg-[#F25959] py-3 text-center text-[26px] font-bold text-white"
            >
              <button>Buy Now @ 999</button>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
}

export default ApiForPm