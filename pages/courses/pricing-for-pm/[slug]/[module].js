import ContentLayout from "@/src/components/v1/Shared/ContentView/ContentLayout";
import Footer2 from "@/src/components/v1/Shared/Footer/Footer2";
import SidebarLayout from "@/src/layout/SidebarLayout";
import { getCourseNavigation } from "@/src/utils/helper";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const ModuleDetails = ({ posts, frontmatter, content }) => {
  return (
    <div>
      <SidebarLayout posts={posts} course="pricing-for-pm">
        <div>
          <h1 className="post-heading pb-3">{frontmatter?.title}</h1>
          <hr className="pb-3" />
        </div>
        <div className="blog__content text-align-justify mb-5">
          <ContentLayout content={content} />
        </div>
        <Footer2 />
      </SidebarLayout>
    </div>
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
  const courseNavItems = getCourseNavigation({courseName : courseName})


  // Step 1 - Check if slug is a folder 
  const markdownWithMeta = fs.readFileSync(
    path.join('_pricing-for-pm', slug, module + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta);
  
  const result = await serialize(content);


  return {
    props: {
      frontmatter,
      slug,
      posts: courseNavItems,
      content :result,
      courseNavigationData : courseNavItems,
      },
  }
}
