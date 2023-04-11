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
import { LoginModal } from "@/src/components/v1/Shared/Modal";
import { ALL_COURSES, DEFAULT_PRICE_LIST } from "@/src/config/constants";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { checkout } from "@/src/utils/checkout";
import { getCoursePageInfo } from "@/src/utils/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const courseSlug = ALL_COURSES.PRICING_FOR_PM;

const PricingForPM = (props) => {
  const router = useRouter();
  const { currentUser } = useAuthService();
  const [hasCourseAccess, setHasCourseAccess] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { hasCourseAccess, courseId } = await getCoursePageInfo({
        userId: currentUser?.uid,
        courseSlug,
      });
      setHasCourseAccess(hasCourseAccess);
      setCourseId(courseId);
    };

    fetchData();
  }, [currentUser?.uid, hasCourseAccess]);

  const coursePrice =
    DEFAULT_PRICE_LIST[ALL_COURSES.PRICING_FOR_PM][process.env.NEXT_PUBLIC_ENV];

  const ctaText = hasCourseAccess
    ? "Resume Learning"
    : "Start Learning Pricing";

  const handleCTAClick = () => {
    if (hasCourseAccess) {
      router.push(router.asPath + "/introduction");
      return;
    }

    const clientReferenceId = `${currentUser?.uid}-${courseId}`;

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

        {/************************ Login Modal  ************************/}
        <LoginModal
          isVisible={loginModal}
          setLoginModal={setLoginModal}
          onClose={() => setLoginModal(false)}
        />
      </main>
    </>
  );
};

export default PricingForPM;
