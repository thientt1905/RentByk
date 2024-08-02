"use client"
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../style/css-bullet.css";

const SwiperCompetition = () => {
  return (
    <div className="w-full pl-[23px]">
      <div className="pl-2 mb-[25px]">
        <h3 className="font-semibold text-2xl">Join the competition</h3>
      </div>
      <div className="w-full px-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>  
            <div className="text-center">
              <Image
                src={"/image/competition-1.svg"}
                width={207}
                height={300}
                alt="first cpt"
              />
              <p className="mt-2">Competition 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="text-center">
              <Image
                src={"/image/competition-2.svg"}
                width={207}
                height={300}
                alt="second cpt"
              />
              <p className="mt-2">Competition 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="text-center">
              <Image
                src={"/image/competition-3.svg"}
                width={207}
                height={300}
                alt="third cpt"
              />    
              <p className="mt-2">Competition 3</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperCompetition;
