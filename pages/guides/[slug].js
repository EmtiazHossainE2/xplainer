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

const CourseDetails = () => {
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
                {/* Hero Section  */}
                <HeroBanner course={course} />

                {/* Main Content  */}
                <div className="mx-auto max-w-7xl px-16">
                  <div className="flex gap-8">
                    {/*******************************  Left Side  **************************** */}
                    <div className="left my-12 basis-8/12">
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
                    <div className="right basis-4/12">
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
