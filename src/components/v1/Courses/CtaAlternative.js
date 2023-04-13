
const CtaAlternative = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-gray-900 rounded py-10 px-8 md:py-10 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h4 text-white">Want a free chapter of API e-book? </h3>
                <p className="text-[#e1e1e1] mt-2">What&apos;s stopping you to crack technical rounds of product management interviews with ease?</p>
              </div>

              {/* CTA button */}
              <div>
                <button  className="btn text-white bg-primary hover:bg-primary_bold"> Get free chapter </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CtaAlternative