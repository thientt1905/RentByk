import Image from "next/image";
import InforBike from "../content/inforBike";
import SwiperBike from "./swiper-bike";

export interface IMainContentProps {}

export default function MainContent(props: IMainContentProps) {
  return (
    <>
      <div className="h-full mt-10">
        <div className="flex items-center gap-14">
          <div className="flex flex-col gap-4">
          <div className="w-[550px] flex flex-col gap-12 items-center mr-12 mb-7">
            <Image
              src={"/image/logo-main-content.svg"}
              width={267.83}
              height={45.55}
              alt="logo main content"
            />
          </div> 
          </div>         
        </div>
        <SwiperBike />
        <div>
          <div className="flex justify-between mb-1 w-[677px]">
            <h3 className="font-semibold text-white text-[32px] leading-[45.65px] pt-8">Explore Bikes</h3>
            <p className="text-[20px] leading-[100px] underline" style={{ fontWeight: 600 }}>View All</p>
          </div>
          <div className="flex gap-7">
            <InforBike
              brandBike="FireFox"
              nameBike="Combat"
              typeBike="MTB"
              available="200INR"
              bike_station="Per Hour"
              urlImage="/image/bike-2.svg"
            />
            <InforBike
              brandBike="FireFox"
              nameBike="Viper"
              typeBike="MTB"
              available="200INR"
              bike_station="Per Hour"
              urlImage="/image/bike-3.svg"
            />
            <InforBike
              brandBike="Rornado"
              nameBike="Combat"
              typeBike="MTB"
              available="200INR"
              bike_station="Per Hour"
              urlImage="/image/bike-4.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
