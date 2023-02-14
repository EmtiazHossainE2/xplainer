

const HeroBanner = () => {
  return (
    <section>
      <div className=" mx-auto mt-1">
        <div style={{ background: "#030a21" }} className="text-white border-t border-gray-200">


          {/* Items */}
          <div className="max-w-sm pb-12 mx-auto grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-5xl pt-8 md:pt-12">


            {/* 1st item */}
            <div className="text-center">
              <div className="h3 mb-1">10+ </div>
              <div className="text-gray-400"> Chapters covering API basics - request, response, endpoints, types of API etc.</div>
            </div>

            {/* 2nd item */}
            <div className="text-center">
              <div className="h3 mb-1">4.8/5 </div>
              <div className="text-gray-400">Average rating shared by user. Also, ranked #1 on Product Hunt</div>
            </div>

            {/* 3rd item */}
            <div className="text-center">
              <div className="h3 mb-1">7300+</div>
              <div className="text-gray-400"> Product Managers have up-skilled through this course
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner