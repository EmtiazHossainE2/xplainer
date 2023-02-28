import { mentors } from "@/src/config/constants";
import Mentor from "./Mentor";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionHeading from "../../Shared/sectionHeading";

const Mentors = () => {


  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="">

          <SectionHeading heading={"Our Mentors"}/>
          {/* <h2 className="text-center text-3xl lg:text-[34px] font-bold">Our Mentors </h2> */}
          <p className="text-[#515151] text-center text-[16px] md:text-xl font-medium pt-[2px] pb-8 ">Learn from the industry best</p>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            freeMode={false}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode,Pagination]}
            className="mySwiper"
          >
            <div className="max-w-sm mx-auto md:max-w-none">
              {mentors.map((mentor, index) => (
                <SwiperSlide key={index}>
                  <Mentor key={index} mentor={mentor} />
                </SwiperSlide>
              ))}
            </div>

          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Mentors