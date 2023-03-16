import { pricingCardText } from "@/src/config/constants";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FeaturesBlocks = ({ heading  }) => {

  return (
    <section className={`relative bg-[#FEF1F0] mt-16`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
            <h3 className="text-5xl font-bold mb-4">  {heading || 'Explore new domains'}  </h3>
            <p className="text-lg">Ask any product, marketing, or growth folks; they would say that pricing and monetisation are the most exciting problem statement to work on. Learn interesting pricing models, strategies and pricing psychology hacks alongside case studies from 13+ companies.</p>
            <p className="text-[#4B5563] text-2xl font-semibold py-3">Excel your growth career and be a product leader.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {pricingCardText.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 courseCard "
                >
                  <p><BsFillCheckCircleFill size={24} className="text-[#5454d4]" /></p>
                  <p className="text-black-600 ">
                    {item.des}
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