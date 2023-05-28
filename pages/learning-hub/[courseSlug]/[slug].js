import CourseLearningView from "@/src/components/v1/Shared/ContentView/CourseLearningView";
import { allCourse, allCourses } from "@/src/config/constants";
import { courseConfig, publishedCoursesSlug } from "@/src/config/course-config";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { getCourseNavigation } from "@/src/utils/helper";
import { all } from "axios";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { useEffect, useState } from "react";

const CourseModulePage = ({
  courseNavigationData,
  frontmatter,
  content,
  slug,
  chapterData,
  courseSlug : course
}) => {
  const { currentUser, purchasedCourses } = useAuthService();
  const [hasAccess, setCourseUnlock] = useState(false);
  const { isFreeChapter } = chapterData;

  useEffect(() => {
    const isCourseAvailable = purchasedCourses?.some(
      (item) => item.slug === course
    );
    const isUserLoggedIn = Boolean(currentUser?.email);

    console.log(isCourseAvailable, purchasedCourses, 'DATA');

    if (isCourseAvailable && isUserLoggedIn) {
      setCourseUnlock(true);
    }
  }, [purchasedCourses, currentUser?.email, isFreeChapter, slug]);

  return (
    <CourseLearningView
      course={course}
      courseNavigationData={courseNavigationData}
      hasAccess={hasAccess}
      frontmatter={frontmatter}
      content={content}
      slug={slug}
      isFreeChapter={isFreeChapter}
    />
  );
};

export default CourseModulePage;

export const getStaticPaths = async () => {

  const courseSlugs = publishedCoursesSlug; 
  const unsupportedFileList = ["assets", ".DS_Store"];

  // get list of paths in both courses
  let allSlugs = {};
  courseSlugs.forEach((courseSlug) => {
    const coursePath = path.join(`_${courseSlug}`);
    const courseFiles = fs.readdirSync(coursePath);
    allSlugs[courseSlug] = courseFiles;
  })

  // get list of paths in both courses
  courseSlugs.forEach((courseSlug) => {
    let files = allSlugs[courseSlug].filter((item) => !unsupportedFileList.includes(item));
    allSlugs[courseSlug] = files;
  });


  // get list of paths in both courses and join in single array
  let paths = [];
  courseSlugs.forEach((courseSlug) => {
    const courseFiles = allSlugs[courseSlug].map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
        courseSlug: courseSlug,
      },
    }));
    paths = paths.concat(courseFiles);
  })

  return {
    paths : paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: {courseSlug,  slug } }) => {
  const courseName = `_${courseSlug}`;
  const courseNavItems = getCourseNavigation({ courseName: courseName });

  const markdownWithMeta = fs.readFileSync(
    path.join(courseName, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const result = await serialize(content);
  const isFreeChapter =
    (courseConfig[courseSlug] && courseConfig[courseSlug].includes(slug)) ||
    false;

  return {
    props: {
      frontmatter,
      slug,
      courseSlug,
      content: result,
      courseNavigationData: courseNavItems,
      chapterData: {
        isFreeChapter,
      },
    },
  };
};
