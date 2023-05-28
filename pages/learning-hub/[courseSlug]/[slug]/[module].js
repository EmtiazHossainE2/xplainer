import CourseLearningView from "@/src/components/v1/Shared/ContentView/CourseLearningView";
import { allCourses } from "@/src/config/constants";
import { courseConfig, publishedCoursesSlug } from "@/src/config/course-config";
import { getCourseNavigation } from "@/src/utils/helper";
import { all } from "axios";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CourseModuleChildPage = ({
  courseNavigationData,
  frontmatter,
  content,
  slug,
  chapterData,
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const course = "pricing-for-pm";

  const { courses: availCourses } = useSelector((state) => state.course);
  const [isPaid, setCourseUnlock] = useState(false);
  const { isFreeChapter } = chapterData;

  useEffect(() => {
    const isCourseAvailable = availCourses?.some(
      (item) => item.slug === course
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
      hasAccess={isPaid}
      frontmatter={frontmatter}
      content={content}
      slug={slug}
      isFreeChapter={isFreeChapter}
    />
  );
};

export default CourseModuleChildPage;

export const getStaticPaths = async () => {

    const courseSlugs = publishedCoursesSlug; 
    const unsupportedFileList = ["assets", ".DS_Store"];
  
    // get list of paths in both courses
    let allSlugs = {};
    const allModules = {};
    courseSlugs.forEach((courseSlug) => {
      const coursePath = path.join(`_${courseSlug}`);
      const courseFiles = fs.readdirSync(coursePath);
      const folders = courseFiles.filter(file => fs.statSync(coursePath + '/' + file).isDirectory() && !unsupportedFileList.includes(file));

      allModules[courseSlug] = {};

      if(folders.length > 0){
        return folders.forEach((folder) => {
          const modulePath = path.join(`_${courseSlug}`, folder);
          const files = fs.readdirSync(modulePath);

        if(files.length > 0){     
            allModules[courseSlug][folder] = files;
         }        
        }) 
      }    
    })



    let paths = [];

    Object.keys(allModules).forEach((courseSlug) => {
        Object.keys(allModules[courseSlug]).forEach((module) => {
            const moduleFiles = allModules[courseSlug][module].map((filename) => ({
            params: {
                slug: module,
                module: filename.replace(".md", ""),
                courseSlug: courseSlug,
            },
            }));
            paths = paths.concat(moduleFiles);
        })
    });
  
  
    console.log(paths, 'paths');
    
    // // get list of paths in both courses and join in single array
    // let paths = [];
    // courseSlugs.forEach((courseSlug) => {
    //   const courseFiles = allSlugs[courseSlug].map((filename) => ({
    //     params: {
    //       slug: filename.replace(".md", ""),
    //       courseSlug: courseSlug,
    //     },
    //   }));
    //   paths = paths.concat(courseFiles);
    // })
  
    return {
      paths : paths,
      fallback: false,
    };
  };


export const getStaticProps = async ({ params: {slug, module, courseSlug } }) => {
  const courseName = `_${courseSlug}`;
  const courseNavItems = getCourseNavigation({ courseName: courseName });
  // Step 1 - Check if slug is a folder
  const markdownWithMeta = fs.readFileSync(
    path.join(courseName, slug, module + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const result = await serialize(content);

  const moduleSlug = `${slug}/${module}`;

  const isFreeChapter =
    (courseConfig[courseSlug] &&
      courseConfig[courseSlug].includes(slug)) ||
    false;

  return {
    props: {
      frontmatter,
      courseSlug,
      slug: moduleSlug,
      content: result,
      courseNavigationData: courseNavItems,
      chapterData: {
        isFreeChapter,
      },
    },
  };
};
