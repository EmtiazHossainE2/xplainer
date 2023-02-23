import CommonHead from "@/src/components/v1/Shared/CommonHead"
import PageLayout from "@/src/layout/PageLayout"

const Error = () => {
  return (
    <>
      <CommonHead
        title={'XPlainerr | Coming Soon'}
        metaDes={'description'}
        favIcon={'/favicon.ico'}
      />
      <PageLayout>
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold">Coming Soon ...</h2>
        </div>
      </PageLayout>
    </>
  )
}

export default Error