"use client"
import { useTheme } from 'next-themes';
import * as React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import InforBike from "../content/inforBike";
import "../style/css-bullet.css";

const SwiperBikesMobile: React.FC = () => {
  const { theme } = useTheme();

  return ( 
      <div className="w-full pl-[23px]">
        <div className="mb-[25px]">
          <h3 className="text-2xl font-semibold">Explore Bikes</h3>
        </div>
        <div className="w-full">
        <Swiper
        spaceBetween={10}
        slidesPerView={2.2}
        
      >
        <SwiperSlide>
          <div className={`rounded-lg ${theme === 'dark' ? 'bg-[dark]' : 'bg-[#D7D7D7]'}`}>  
        <InforBike
            brandBike="FireFox"
            nameBike="Combat"
            typeBike="MTB"
            available="200INR"
            bike_station="Per Hour"
            urlImage="/image/bike-2.svg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`rounded-lg ${theme === 'dark' ? 'bg-[dark]' : 'bg-[#D7D7D7]'}`}>  
        <InforBike
            brandBike="FireFox"
            nameBike="Viper"
            typeBike="MTB"
            available="200INR"
            bike_station="Per Hour"
            urlImage="/image/bike-3.svg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`rounded-lg ${theme === 'dark' ? 'bg-[dark]' : 'bg-[#D7D7D7]'}`}>  
        <InforBike
            brandBike="Rornado"
            nameBike="Combat"
            typeBike="MTB"
            available="200INR"
            bike_station="Per Hour"
            urlImage="/image/bike-4.svg"
          />
          </div>
        </SwiperSlide>
        </Swiper> 
        </div>
      </div>
  );
};

export default SwiperBikesMobile;
