import AllCourse from '@/src/components/v1/Courses/AllCourse/AllCourse'
import { Courses } from '@/src/components/v1/HomeContainer'
import CommonHead from '@/src/components/v1/Shared/CommonHead'
import PageLayout from '@/src/layout/PageLayout'
import Image from 'next/image'
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
          {/* V2 New Design  */}
          
          {/* <div className=''>
            <div className="container mx-auto px-5 lg:px-12 big:px-28 large:px-96">
              <div className='flex justify-center pt-[70px] pb-16'>
                <Image src='/images/courses/banner.png' width={1200} height={180} alt='banner' />
              </div>
              <div>
                <AllCourse />
              </div>
            </div>
          </div> */}

          {/* V1 Old Design  */}
          <div className="flex flex-col min-h-screen overflow-hidden">
            <div className="grow lg:mb-12">
              <Courses heading={'All Courses'} ctaText={'Buy Now'} />
            </div>
          </div>

        </PageLayout>
      </main>
    </>
  )
}

export default withRouter(AllCourses)
