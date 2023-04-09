import { getCoursePageInfo } from "@/pages/api/firebase";
import {
  Authors as Authors2,
  CourseContent,
  CtaAlternative,
  TestimonialsCarousel,
} from "@/src/components/v1/Courses";
import { FeaturesBlocks, HeroHome } from "@/src/components/v1/Courses/ApiForPm";
import { Faqs } from "@/src/components/v1/HomeContainer";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { LoginModal } from "@/src/components/v1/Shared/Modal";
import { ALL_COURSES, DEFAULT_PRICE_LIST } from "@/src/config/constants";
import useAuthService from "@/src/hooks/auth/useAuthService";
import PageLayout from "@/src/layout/PageLayout";
import { getAuthUserFromCookie } from "@/src/lib/auth";
import { checkout } from "@/src/utils/checkout";
import { useRouter } from "next/router";
import { useState } from "react";

const ApiForPMCoursePage = (props) => {
  const router = useRouter();
  const { currentUser } = useAuthService();
  const [loginModal, setLoginModal] = useState(false);
  const { hasCourseAccess } = props;

  const coursePrice =
    DEFAULT_PRICE_LIST[ALL_COURSES.API_FOR_PM][process.env.NEXT_PUBLIC_ENV];

  const courseSlug = "api-for-pm";

  const ctaText = hasCourseAccess ? "Resume learning" : "Enroll now";

  const handleCTAClick = () => {
    if (hasCourseAccess) {
      router.push(router.asPath + "/introduction");
      return;
    }

    const clientReferenceId = `${currentUser.uid}-${props.courseId}`;

    if (router.pathname === "/courses/api-for-pm") {
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
        title={"Master APIs for Product Management"}
        description={`The most comprehensive course that demystifies APIs and API products tailored for Product Managers`}
      />
      <PageLayout>
        <HeroHome
          course={courseSlug}
          ctaText={ctaText}
          handleCTAClick={handleCTAClick}
          coursePreviewSlug={"api-for-pm/introduction"}
          hasCourseAccess={hasCourseAccess}
        />

        <FeaturesBlocks heading={"Things you'll learn"} course={courseSlug} />
        {/* <Offer /> */}
        <CourseContent />

        <Authors2 />

        <TestimonialsCarousel />
        {/* <Certificate /> */}
        <Faqs />
        <CtaAlternative />

        <div className="fixed bottom-[-75px] left-0 z-10 mb-[75px] w-full md:hidden">
          <div
            onClick={handleCTAClick}
            className="flex cursor-pointer items-center justify-center bg-[#F25959] py-3 text-center text-[26px] font-bold text-white"
          >
            <button>Buy Now @ 999</button>
          </div>
        </div>
      </PageLayout>

      {/************************ Login Modal  ************************/}
      <LoginModal
        isVisible={loginModal}
        setLoginModal={setLoginModal}
        onClose={() => setLoginModal(false)}
      />
    </>
  );
};

export default ApiForPMCoursePage;

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const courseSlug = resolvedUrl
    .split("/")
    .filter((i) => i)
    .pop()
    .split("?")[0];

  const user = getAuthUserFromCookie(req);

  const { hasCourseAccess, courseId } = await getCoursePageInfo({
    user,
    courseSlug,
  });

  return {
    props: {
      hasCourseAccess,
      courseId,
    },
  };
};
