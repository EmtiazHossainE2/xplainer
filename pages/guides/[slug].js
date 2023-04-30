import { CourseContent } from "@/src/components/v1/Courses";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import {
  CourseDescription,
  HeroBanner,
  Instructor,
  Opportunity,
  PurchaseSection,
  Requirements,
  TopCompanies,
} from "@/src/components/v3/CourseDetails";
import { courses } from "@/src/config/courseConstant";
import PageLayout from "@/src/layout/PageLayout";
import { checkout } from "@/src/utils/checkout";
import Image from "next/image";

const CourseDetails = () => {

  const handlePurchaseCTA = () => {
    console.log('fsd')
    checkout({
      lineItems: [
        {
          price:'price_1Ms0b3SBqetirFH0Nt5qV6aQ', // make it dynamic
          quantity: 1,
        },
      ],
      customerEmail: 'deepak@gmail.com',
      clientReferenceId: 'deepak-123',
      courseRoute: '/courses/api-for-pm',
    });
  }

  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <CommonHead
            title={course.title}
            description={
              "Upskill and prepare for your interviews by learning all the concepts which are highly useful in your daily professional job. "
            }
            favIcon={"/favicon.ico"}
          />
          <main>
            <PageLayout>
              <div className="" key={index}>
                {/* For mobile course banner image  */}
                <div className="lg:hidden px-5 pt-3">
                  <Image
                    src={course.image}
                    width={350}
                    height={195}
                    alt={course.title}
                  />
                </div>
                {/* Hero Section  */}
                <HeroBanner course={course} />
                <div className="lg:hidden">
                  <PurchaseSection course={course} handleBuyNowClick={handlePurchaseCTA} />
                </div>

                {/* Main Content  */}
                <div className="mx-auto max-w-7xl px-5 lg:px-16">
                  <div className="flex gap-8">
                    {/*******************************  Left Side  **************************** */}
                    <div className="left my-8 lg:my-12 lg:basis-8/12">
                      {/* Learning Opportunity */}
                      <Opportunity learningItems={course.willLearn} />

                      {/* Top companies offer this course to their employees */}
                      <TopCompanies topCompanies={course?.topCompanies} />

                      {/* Course Content  */}
                      <CourseContent course={`courseDetail`} />

                      {/* Requirements */}
                      <Requirements requirements={course.requirements} />

                      {/* CourseDescription */}
                      <CourseDescription description={course.description} />

                      {/* Instructor */}
                      <Instructor instructor={course?.instructorInfo} />
                    </div>

                    {/************************ Right Side PurchaseSection **************************/}
                    <div className="right hidden lg:block lg:basis-4/12">
                      <PurchaseSection course={course} />
                    </div>
                  </div>
                </div>
              </div>
            </PageLayout>
          </main>
        </div>
      ))}
    </>
  );
};

export default CourseDetails;
