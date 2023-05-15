import BlogGridView from "@/src/components/v1/Blog/BlogGridView";
import {
  Brand,
  Courses,
  Faqs,
  HeroBanner,
  Mentors,
} from "@/src/components/v1/HomeContainer";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { BACKEND_API } from "@/src/config/backend";
import PageLayout from "@/src/layout/PageLayout";
import { sortByDate } from "@/src/utils/date";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const Home = ({ posts, courses }) => {
  return (
    <>
      <CommonHead
        title={
          "Upskilling & Interview prep courses on product management, engineering, design & more - Xplainerr"
        }
        description={
          "Upskill and prepare for your interviews by learning all the concepts which are highly useful in your daily professional job. "
        }
        favIcon={"/favicon.ico"}
        ogTitle={'Xplainerr - Accelerate your tech, design, marketing career with microlearning courses'}
        ogUrl={`https://xplainerr.com`}
      />
      <main>
        <PageLayout>
          <HeroBanner />
          <Brand disableHeader={true} />
          <Courses ctaText={"View course detail"} courses={courses} />
          <Mentors />

          <BlogGridView posts={posts} disableHeader="true" />

          <div className="hidden lg:block">
            <Faqs />
          </div>
          {/* <CTA /> */}
        </PageLayout>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("_blog"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("_blog", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // Course 
  const res = await fetch(`${BACKEND_API}/courses/published`);
  const data = await res.json();

  return {
    props: {
      posts: posts.sort(sortByDate),
      courses: data.result,
    },
  };
};


