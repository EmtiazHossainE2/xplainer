import CommonHead from "@/src/components/v1/Shared/CommonHead"

const Error = () => {
  return (
    <>
      <CommonHead
        title={'XPlainerr | Comming Soon'}
        metaDes={'description'}
        favIcon={'/favicon.ico'}
      />
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold">Coming Soon ...</h2>
      </div>
    </>
  )
}

export default Error