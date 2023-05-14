import BlogListView from "@/src/components/v1/Blog/BlogListView";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import { sortByDate } from "@/src/utils/date";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const Blog = ({ posts }) => {
  // console.log(posts)
  return (
    <>
      <CommonHead
        title={"Xplainerr - Blog"}
        description={"Read free articles on tech, design, marketing, product management, and more at xplainerr blog"}
        ogTitle={"Xplainerr - Blog"}
        ogImage={"https://ik.imagekit.io/zwxa4kttt/home/xplainerr-home.jpg"}
        ogUrl={"https://xplainerr.com/blog"}
      />
      <main>
        <PageLayout>
          <div className="flex min-h-screen flex-col overflow-hidden">
            <div className="grow">
              <BlogListView posts={posts} disableHeader={true} />
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default Blog;

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

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};
