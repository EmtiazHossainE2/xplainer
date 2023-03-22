import CourseLearningView from "@/src/components/v1/Shared/ContentView/CourseLearningView";
import { courseConfig } from "@/src/config/course-config";
import { getCourseNavigation } from "@/src/utils/helper";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ModuleDetails = ({ courseNavigationData, frontmatter, content, slug, chapterData }) => {
  const { currentUser } = useSelector((state) => state.user);
  const course = "pricing-for-pm";

  const { courses: availCourses } = useSelector((state) => state.course);
  const [isPaid, setCourseUnlock] = useState(false);
  const { isFreeChapter } = chapterData;

  useEffect(() => {
    const isCourseAvailable = availCourses?.some(
      (item) => item.permalink === course
    );
    const isUserLoggedIn = Boolean(currentUser?.email);

    if (isCourseAvailable && isUserLoggedIn) {
      setCourseUnlock(true);
    }

  }, [availCourses, currentUser?.email, isFreeChapter, slug]);

  return (
    <CourseLearningView
      course={course}
      courseNavigationData={courseNavigationData}
      isPaid={isPaid}
      frontmatter={frontmatter}
      content={content}
      slug={slug}
      isFreeChapter={isFreeChapter}
    />
  );
};

export default ModuleDetails;

export const getStaticPaths = async () => {
  const allModules = [
    "pricing-model",
    "pricing-psychology",
    "pricing-strategy",
  ];

  let allPaths = [];

  allModules.map((module, index) => {
    const modulePath = path.join("_pricing-for-pm", module);
    const files = fs.readdirSync(modulePath);
    const paths = files.map((filename) => ({
      params: {
        slug: module, // use path.basename to retrieve the value of [slug] from the path
        module: filename.replace(".md", ""),
      },
    }));

    paths.map((item) => allPaths.push(item));
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params: { slug, module } }) => {

  const courseName = '_pricing-for-pm';
  const courseNavItems = getCourseNavigation({ courseName: courseName })


  // Step 1 - Check if slug is a folder 
  const markdownWithMeta = fs.readFileSync(
    path.join('_pricing-for-pm', slug, module + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const result = await serialize(content);

  const courseSlug = `${slug}/${module}`;

  const isFreeChapter =
    (courseConfig["pricing-for-pm"] && courseConfig["pricing-for-pm"].includes(slug)) ||
    false;

  return {
    props: {
      frontmatter,
      slug : courseSlug,
      content: result,
      courseNavigationData: courseNavItems,
      chapterData: {
        isFreeChapter,
      },
    },
  }
}
