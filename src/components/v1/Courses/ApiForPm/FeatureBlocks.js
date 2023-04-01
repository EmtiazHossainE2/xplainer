import { pricingCardText } from "@/src/config/constants";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FeaturesBlocks = ({ heading, course  }) => {

  return (
    <section className={`relative bg-[#FEF1F0] mt-16`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
            <h3 className="text-[#101828DE] text-2xl leading-4 lg:text-4xl font-bold mb-4">  {heading || 'Explore new domains'}  </h3>
            <p className="text-sm lg:text-lg ">As Product Managers, it is often not easy to understand technology and for those getting started it might even be a little over whelming. If not anything you should at least be really comfortable with the world of APIs.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {pricingCardText[course] && pricingCardText[course].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 courseCard "
                >
                  <p><BsFillCheckCircleFill size={24} className="text-[#5454d4]" /></p>
                  <p className="text-[#475467] ">
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