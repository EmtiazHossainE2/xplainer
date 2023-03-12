import { Courses } from '@/src/components/v1/HomeContainer'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import PageLayout from '@/src/layout/PageLayout'
import { withRouter } from 'next/router'

const AllCourses = () => {
  return (
    <>
      <CommonHead
        title={'Xplainerr - Courses'}
        description={'description'}
        favIcon={'/favicon.ico'}
      />
      <main>
        <PageLayout>
          <div className="flex flex-col min-h-screen overflow-hidden">

            <div className="grow">
            <Courses heading={'All Courses'} ctaText={'Buy Now'} />
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default withRouter(AllCourses)
