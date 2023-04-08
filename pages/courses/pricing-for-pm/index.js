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

import { getCoursePageInfo } from "@/pages/api/firebase";
import { FeaturesBlocks } from "@/src/components/v1/Courses/ApiForPm";
import { ALL_COURSES, DEFAULT_PRICE_LIST } from "@/src/config/constants";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { useRouter } from "next/router";
import { checkout } from "@/src/utils/checkout";

const PricingForPM = (props) => {
  const router = useRouter();
  const { currentUser } = useAuthService();

  const {hasCourseAccess, currentCourseData} = props;
  const courseSlug = currentCourseData.slug;

  const coursePrice =
    DEFAULT_PRICE_LIST[ALL_COURSES.PRICING_FOR_PM][process.env.NEXT_PUBLIC_ENV];

  const ctaText = hasCourseAccess ? "Resume Learning" : "Start Learning Pricing";


  const handleCTAClick = () => {

    if (hasCourseAccess) {
      router.push(router.asPath + "/introduction");
      return;
    }

    const clientReferenceId = `${currentUser.uid}-${props.courseId}`;

    if (router.pathname === "/courses/pricing-for-pm") {
      if (currentUser?.email) {
        checkout({
          lineItems: [
            {
              price: coursePrice,
              quantity: 1,
            },
          ],
          customerEmail: currentUser.email,
          clientReferenceId: clientReferenceId,
          courseRoute: router.asPath,
        });
      } else {
        return setLoginModal(true);
      }
    }
  };

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
            ctaText={ctaText}
            pricing={true}
            coursePrice={coursePrice}
            handleCTAClick={handleCTAClick}
            coursePreviewSlug={"pricing-for-pm/introduction"}
            hasCourseAccess={hasCourseAccess}
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

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const courseSlug = resolvedUrl
    .split("/")
    .filter((i) => i)
    .pop()
    .split("?")[0];

  const { hasCourseAccess, currentCourseData, courseId } =
    await getCoursePageInfo({
      req,
      courseSlug,
    });

  return {
    props: {
      currentCourseData,
      hasCourseAccess,
      courseId,
    },
  };
};
