
const FeaturesBlocks = ({ heading, featureBlockData, showDescription = true, }) => {
  
  return (
    <section className="relative">

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
            <h3 className="h3 mb-4">  {heading || 'Explore new domains'}  </h3>
            {showDescription &&
              <p className="text-xl text-gray-600">
                Learn the what, why and how of APIs and terms like - request, response, endpoints, query parameters, error codes, Oauth, webhooks etc in depth.
              </p>
            }
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {featureBlockData.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ background: item.color }}
                  className="relative cursor-pointer  hover:-translate-y-1 transition duration-700 ease-out flex flex-col text-center items-center mt-2 border p-12 bg-white rounded shadow-xl"
                >
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-black-600 text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBlocks