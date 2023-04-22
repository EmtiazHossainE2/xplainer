const { default: SidebarLayout } = require("@/src/layout/SidebarLayout")
const { default: Footer2 } = require("../Footer/Footer")
const { default: UpgradeToPremium } = require("../UpgradeToPremium")
const { default: ContentLayout } = require("./ContentLayout")
const CourseLearningView = ({courseNavigationData, course, slug, hasAccess, isFreeChapter, frontmatter, content}) => {

    const shouldUnlock = hasAccess || isFreeChapter;

    return (
        <div>
        <SidebarLayout posts={courseNavigationData} course={course} slug={slug}>
          {shouldUnlock ? (
            <div className="p-4">
              <div>
                <h1 className="post-heading pb-3">{frontmatter?.title}</h1>
                <hr className="pb-3" />
              </div>
              <div className="blog__content text-align-justify mb-5">
                <ContentLayout content={content} />
              </div>
            </div>
          ) : (
            <>
              <UpgradeToPremium posts={courseNavigationData} course={course} />
            </>
          )}
          <Footer2 />
        </SidebarLayout>
      </div>
    )
}

export default CourseLearningView;