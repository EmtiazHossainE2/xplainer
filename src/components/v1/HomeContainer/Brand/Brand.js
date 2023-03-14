import { topCompanies } from "@/src/config/constants";
import Image from "next/image"
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = () => {
  return (
    <div className='container mx-auto py-6 px-5 lg:px-20'>
      <div className="flex flex-col justify-center items-center pt-12">
        {/* <h2 className="customTitle xl:pt-16 ">Learners From Top Companies </h2> */}
        <div className="mt-4"> </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          freeMode={false}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {topCompanies.map((item, index) => (
            <SwiperSlide
              key={index}
            >
              <Image
                src={`/images/brand/${item.logo}`}
                alt="Top companies logo"
                style={{ width: "48px", height: '47px' }}
                width={48}
                height={47}
                priority
              />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Brand