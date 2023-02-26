import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog, index }) => {
  // console.log(blog)

  const tag = blog?.frontmatter?.tags;

  return (
    <div className=" p-2 rounded-[5px] blog ">
      <div className="w-full">
        <Link href={`/blog/${blog.slug}`}>
          <Image
            src={blog?.frontmatter?.cover_image}
            className="blog-cover-image"
            alt={blog.frontmatter.title}
            width="362"
            height="180"
          />
        </Link>
      </div>

      <div className="card-bottom">
        <div className="p-2">
          <ul className="flex flex-wrap text-xs font-medium -m-1">
            {tag && (
              <li className="m-1">
                <a
                  className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                  href="P#0"
                >
                  {tag}{" "}
                </a>
              </li>
            )}

            <li className="m-1">
              <a
                className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out"
                href="#0"
              >
                Intermediate
              </a>
            </li>
            <li className="m-1">
              {/* <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span> */}
            </li>
          </ul>
        </div>
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-md text-justify xl:text-md font-semibold pb-3">
            {blog.frontmatter.title}
          </h3>
        </Link>
        <p className="text-sm text-[#202020BF]">
          {blog.frontmatter.metaDescription.slice(0, 80) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Blog;
