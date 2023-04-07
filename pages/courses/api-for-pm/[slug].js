import CourseLearningView from "@/src/components/v1/Shared/ContentView/CourseLearningView";
import { courseConfig } from "@/src/config/course-config";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { getCourseNavigation } from "@/src/utils/helper";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { useEffect, useState } from "react";

const course = "api-for-pm";

const ModuleDetails = ({
  courseNavigationData,
  frontmatter,
  content,
  slug,
  chapterData,
}) => {
  const {currentUser, purchasedCourses} = useAuthService();
  const [isPaid, setCourseUnlock] = useState(false);
  const { isFreeChapter } = chapterData;

  useEffect(() => {
    const isCourseAvailable = purchasedCourses?.some(
      (item) => item.permalink === course
    );
    const isUserLoggedIn = Boolean(currentUser?.email);

    if (isCourseAvailable && isUserLoggedIn) {
      setCourseUnlock(true);
    }

  }, [purchasedCourses, currentUser?.email, isFreeChapter, slug]);

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
  let files = fs.readdirSync(path.join("_api-for-pm"));

  const unsupportedFileList = ["assets", ".DS_Store"];
  files = files.filter((item) => !unsupportedFileList.includes(item));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const courseName = "_api-for-pm";
  const courseNavItems = getCourseNavigation({ courseName: courseName });

  const markdownWithMeta = fs.readFileSync(
    path.join(courseName, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const result = await serialize(content);
  const isFreeChapter =
    (courseConfig["api-for-pm"] && courseConfig[course].includes(slug)) ||
    false;

  return {
    props: {
      frontmatter,
      slug,
      content: result,
      courseNavigationData: courseNavItems,
      chapterData: {
        isFreeChapter,
      },
    },
  };
};
