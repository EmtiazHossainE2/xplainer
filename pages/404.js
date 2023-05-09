import CommonHead from "@/src/components/v1/Shared/CommonHead"
import PageLayout from "@/src/layout/PageLayout"
import Link from "next/link"

const Error = () => {
  return (
    <>
      <CommonHead
        title={'XPlainerr | Coming Soon'}
        description={'description'}
        favIcon={'/favicon.ico'}
      />
      <PageLayout>
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold"> 404 ! Not Found  </h2>
          <h2 className="text-xl text-blue-600 cursor-pointer font-bold mt-6">  Back to <Link href={'/'}> Home </Link></h2>

        </div>
      </PageLayout>
    </>
  )
}

export default Error