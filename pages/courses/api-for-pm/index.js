import {
  CourseContent,
  CtaAlternative,
  TestimonialsCarousel,
} from "@/src/components/v1/Courses";
import {
  Authors,
  FeaturesBlocks,
  HeroHome,
  Offer,
} from "@/src/components/v1/Courses/ApiForPm";

import {Authors as Authors2} from "@/src/components/v1/Courses";

import { Brand, Faqs } from "@/src/components/v1/HomeContainer";
// import { Authors, Faqs, FeaturesBlocks, HeroBanner, HeroHome, TestimonialsCarousel } from '@/src/components/v1/Courses'
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { LoginModal } from "@/src/components/v1/Shared/Modal";
import { ALL_COURSES, DEFAULT_PRICE_LIST } from "@/src/config/constants";
import PageLayout from "@/src/layout/PageLayout";
import { checkout } from "@/src/utils/checkout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const ApiForPm = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  const [loginModal, setLoginModal] = useState(false);

  const coursePrice =
    DEFAULT_PRICE_LIST[ALL_COURSES.API_FOR_PM][process.env.NEXT_PUBLIC_ENV];
  const courseSlug = ALL_COURSES.API_FOR_PM; // to be loaded from router

  const handleCTAClick = () => {
    if (router.pathname === "/courses/api-for-pm") {
      if (currentUser?.email) {
        checkout({
          lineItems: [
            {
              price: coursePrice,
              quantity: 1,
            },
          ],
        });
      } else {
        return setLoginModal(true);
      }
    }
  };

  return (
    <>
      <CommonHead
        title={"Master APIs for Product Management"}
        description={`The most comprehensive course that demystifies APIs and API products tailored for Product Managers`}
      />
      <main className="">
        <PageLayout>
          {/* New Api For Pm Start  */}
          <HeroHome
            course={courseSlug}
            ctaText="Enroll now"
            handleCTAClick={handleCTAClick}
            coursePreviewSlug={"api-for-pm/introduction"}
          />
          
          <FeaturesBlocks heading={"Things you'll learn"} course={courseSlug} />
          {/* <Offer /> */}
          <CourseContent />

          <Authors2/>

          <TestimonialsCarousel />
          {/* <Certificate /> */}
          <Faqs />
          <CtaAlternative />
          {/* New Api For Pm End  */}

          {/* Cta  Api For Pm  */}
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

      {/************************ Login Modal  ************************/}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </>
  );
};

export default ApiForPm;
