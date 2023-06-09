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
    <div className="bg-[#F9FAFB] mb-12 lg:mb-0 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="">

          <SectionHeading heading={"Our Mentors"} description={"Learn from the industry best"}/>

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