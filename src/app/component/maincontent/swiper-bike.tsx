"use client"
import Image from 'next/image';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../style/css-bullet.css";

const  SwiperBike = () => {
  const pagination = {
    clickable: true,
    el: '.custom-swiper-pagination',
    bulletClass: 'custom-swiper-pagination-bullet',
    bulletActiveClass: 'custom-swiper-pagination-bullet-active',
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`
    },
  }
  return (
    <div className="swiper-container ml-10">
      <Swiper
        pagination={pagination}
        spaceBetween={57.37}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
      >
        <SwiperSlide>  
          <Image
            src={"/image/bike-1.svg"}
            width={483.77}
            height={377.14}
            alt="first bike"
          />
        </SwiperSlide>
        <SwiperSlide> 
          <Image
            src={"/image/bike-2.svg"}
            width={483.77}
            height={377.14}
            alt="first bike"
          />
        </SwiperSlide>
        <SwiperSlide> 
          <Image
            src={"/image/bike-3.svg"}
            width={483.77}
            height={377.14}
            alt="first bike"
          />
        </SwiperSlide>
        <SwiperSlide> 
          <Image
            src={"/image/bike-4.svg"}
            width={483.77}
            height={377.14}
            alt="first bike"
          />
        </SwiperSlide>
      </Swiper>
      <div className="custom-swiper-pagination"></div>
    </div>
  );
};

export default SwiperBike;
