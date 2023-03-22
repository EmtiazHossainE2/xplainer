import ContentLayout from "@/src/components/v1/Shared/ContentView/ContentLayout";
import CourseLearningView from "@/src/components/v1/Shared/ContentView/CourseLearningView";
import Footer2 from "@/src/components/v1/Shared/Footer/Footer2";
import UpgradeToPremium from "@/src/components/v1/Shared/UpgradeToPremium";
import { courseConfig } from "@/src/config/course-config";
import SidebarLayout from "@/src/layout/SidebarLayout";
import { getCourseNavigation } from "@/src/utils/helper";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const course = "api-for-pm";

const ModuleDetails = ({
  courseNavigationData,
  frontmatter,
  content,
  slug,
  chapterData,
}) => {
  const { currentUser } = useSelector((state) => state.user);
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
