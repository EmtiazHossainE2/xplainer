import CommonHead from "@/src/components/v1/Shared/CommonHead";
import {
  CourseIncludes,
  HeroBanner,
  Opportunity,
  PurchaseSection,
} from "@/src/components/v3/CourseDetails";
import { learningItems } from "@/src/config/constants";
import PageLayout from "@/src/layout/PageLayout";
import bannerImg from '/public/images/courses/v3/react.svg'

const CourseDetails = () => {
  const courseTitle = "The Complete 2023 Web Development Bootcamp";
  const priceData = {
    amount: 999,
    currency: "INR",
  };
  return (
    <>
      <CommonHead
        title={"Course Detail - Xplainerr"}
        description={
          "Upskill and prepare for your interviews by learning all the concepts which are highly useful in your daily professional job. "
        }
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <div className="">
            {/* Hero Section  */}
            <HeroBanner
              courseTitle={courseTitle}
              description={`Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript,Node, React, MongoDB, Web3 and DApps`}
              author={`Dr. Angela Yu`}
            />

            {/* Main Content  */}
            <div className="mx-auto max-w-7xl px-16">
              <div className="flex gap-8">
                {/* Left Side  */}
                <div className="left basis-8/12">
                  <Opportunity learningItems={learningItems} />
                  <CourseIncludes />
                </div>
                {/* Right Side  */}
                <div className="right basis-4/12">
                  <PurchaseSection
                    bannerImg={bannerImg}
                    courseTitle={courseTitle}
                    priceData={priceData}
                  />
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default CourseDetails;
