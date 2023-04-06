import {
  Authors,
  CourseContent,
  CtaAlternative,
  Faqs,
  HeroHome,
  TestimonialsCarousel
} from "@/src/components/v1/Courses";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

import { FeaturesBlocks } from "@/src/components/v1/Courses/ApiForPm";

const PricingForPM = () => {
  const handleCTAClick = () => {
    window.open("https://dipakkr.gumroad.com/l/pricingforpm");
  };

  const courseSlug = "pricing-for-pm";
  

  return (
    <>
      <CommonHead
        title={
          "Pricing and Monetization: Unlock Business Success with in-depth strategies to master for Product Managers, Marketers, and Growth Managers"
        }
        description={`Unlock the power of pricing and monetization with our in-depth course designed for Product Managers, Marketers, and Growth Managers. Learn the latest strategies, techniques, and tools to drive business success and revenue growth`}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <HeroHome
            heading={"A to Z of Pricing and Monetisation"}
            ctaText="Start Learning Pricing"
            pricing={true}
            coursePrice="price_1MrM9yDEsxnXfJbTYoVy9Bs0"
            handleCTAClick={handleCTAClick}
            coursePreviewSlug={"pricing-for-pm/introduction"}
          />

          <FeaturesBlocks heading={"Things you'll learn"} course={courseSlug} />

          <CourseContent />

          <TestimonialsCarousel />
          <Authors name1={"Deepak Kumar"} name2={"Venkatesh Gupta"} />
          <Faqs />
          <CtaAlternative />
        </PageLayout>
      </main>
    </>
  );
};

export default PricingForPM;
