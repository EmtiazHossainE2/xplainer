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
import { BACKEND_API } from "@/src/config/backend";
import { courses } from "@/src/config/courseConstant";
import PageLayout from "@/src/layout/PageLayout";
import Image from "next/image";

const CourseDetails = ({ course }) => {
  // console.log("course", course);

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
                <PurchaseSection course={course} />
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
    </>
  );
};

export default CourseDetails;

// Get Single Course
export const getStaticPaths = async () => {
  const res = await fetch(`${BACKEND_API}/courses`);
  const courses = await res.json();

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
const course = singleCourse.result

  return { props: { course } };
};
