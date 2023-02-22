import { topCompanies } from "@/src/config/constants";
import Image from "next/image"
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = () => {
  return (
    <div className='container mx-auto py-4 px-6 md:px-32'>
      <div className="flex flex-col justify-center items-center">
        <h2 className="customTitle">Learners From Top Companies </h2>
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
              slidesPerView: 8,
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
                style={{ width: "70px", height: '70px' }}
                width={70}
                height={70}
                priority
              />

            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className='py-8 flex flex-wrap justify-center items-center gap-10'>
          <div>
            <Image
              src="/images/brand/brand1.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand2.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand3.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand4.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand5.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand6.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand7.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
          <div>
            <Image
              src="/images/brand/brand8.png"
              alt=""
              width={100}
              height={80}
              priority
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Brand