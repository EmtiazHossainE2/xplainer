import {
  CourseContent
} from "@/src/components/v1/Courses";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { LoginModal } from "@/src/components/v1/Shared/Modal";
import {
  CourseDescription,
  Faqs,
  HeroBanner,
  Instructor,
  Opportunity,
  PurchaseSection,
  Requirements,
  Reviews,
  TopCompanies,
} from "@/src/components/v3/CourseDetails";
import { BACKEND_API } from "@/src/config/backend";
import useAuthService from "@/src/hooks/auth/useAuthService";
import PageLayout from "@/src/layout/PageLayout";
import { checkout } from "@/src/utils/checkout";
import { getCoursePageInfo } from "@/src/utils/firebase";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CourseDetails = ({ course }) => {
  // console.log("course", course);
  const router = useRouter();
  const { currentUser } = useAuthService();
  const [hasCourseAccess, setHasCourseAccess] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const courseSlug = course?.slug;

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
  }, [currentUser?.uid, hasCourseAccess, courseSlug]);

  const ctaText = hasCourseAccess ? "Resume Learning" : "Buy Now ";

  // Price Check
  // const isProduction = process.env.NODE_ENV === "production";
  // const coursePrice = isProduction
  //   ? course?.priceData.live.priceId
  //   : course?.priceData.test.priceId;
  // console.log(coursePrice, "coursePrice");

  const handlePurchaseCTA = () => {
    if (hasCourseAccess) {
      router.push(router.asPath + "/introduction");
      return;
    }

    const clientReferenceId = `${currentUser?.uid}-${courseId}`;

    if (router.pathname) {
      if (currentUser?.email) {
        checkout({
          lineItems: [
            {
              // price: coursePrice,
              price: course?.priceData.live.priceId,
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
      <div>
        <CommonHead
          title={course?.title}
          description={course?.metaTitle}
          favIcon={"/favicon.ico"}
        />
        <main>
          <PageLayout>
            <div className="">
              {/* For mobile course banner image  */}
              <div className="px-5 pt-3 lg:hidden">
                <Image
                  src={course?.cover_image}
                  width={350}
                  height={195}
                  alt={course?.title}
                />
              </div>
              {/* Hero Section  */}
              <HeroBanner course={course} />
              <div className="lg:hidden">
                <PurchaseSection
                  course={course}
                  handleBuyNowClick={handlePurchaseCTA}
                  ctaText={ctaText}
                  hasCourseAccess={hasCourseAccess}
                />
              </div>

              {/* Main Content  */}
              <div className="mx-auto max-w-7xl px-5 lg:px-16">
                <div className="flex gap-8">
                  {/*******************************  Left Side  **************************** */}
                  <div className="left my-8 lg:my-12 lg:basis-8/12">
                    {/* Learning Opportunity */}
                    <Opportunity learningItems={course?.keyPoint} />

                    {/* Top companies offer this course to their employees */}
                    <TopCompanies topCompanies={course?.alumniOrgs} />

                    {/* Course Content  */}
                    <CourseContent course={`courseDetail`} />

                    {/* Requirements */}
                    <Requirements requirements={course.requiredSkills} />

                    {/* CourseDescription */}
                    <CourseDescription description={course.courseDescription} />

                    {/* Instructor */}
                    <Instructor course={course} />

                    {/* Faq  */}
                    <Faqs course={course} />

                    {/* Review  */}
                    <Reviews/>
                  </div>

                  {/************************ Right Side PurchaseSection **************************/}
                  <div className="right hidden lg:block lg:basis-4/12">
                    <PurchaseSection
                      course={course}
                      handleBuyNowClick={handlePurchaseCTA}
                      ctaText={ctaText}
                      hasCourseAccess={hasCourseAccess}
                    />
                  </div>
                </div>
              </div>
            </div>
          </PageLayout>

          {/************************ Login Modal  ************************/}
          <LoginModal
            isVisible={loginModal}
            setLoginModal={setLoginModal}
            onClose={() => setLoginModal(false)}
          />
        </main>
      </div>
    </>
  );
};

export default CourseDetails;

// Get Single Course
export const getStaticPaths = async () => {
  const res = await fetch(`${BACKEND_API}/courses`);
  const courses = await res.json();
  // console.log(courses)

  const paths = courses?.result?.map((course) => {
    return {
      params: {
        slug: `${course.slug}`,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${BACKEND_API}/courses/${params.slug}`);
  const singleCourse = await res.json();
  const course = singleCourse.result;

  return { props: { course } };
};
