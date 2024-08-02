import Image from "next/image";

export interface IInforBikeProps {
  brandBike: string;
  nameBike: string;
  typeBike: string;
  available: string;
  bike_station: string;
  urlImage: string;
}

export default function InforBike(props: IInforBikeProps) {
    return (
      <>
        <div className="w-[180px] h-[252px] sm:w-[207px] sm:h-[300px] border border-1 rounded-lg px-[13.5px] pt-[11px] pb-[12px]">
          <div className="flex justify-between">
            <p className="text-[12.39px] leading-[14.87px] sm:text-[15px] sm:leading-[18px] font-bold color-[#595959]">{props.brandBike}</p>
            <p className="text-[14.87px] leading-[17.84px] color-[#575757] sm:text-[17.7px] sm:leading-[21.23px]">{props.nameBike}</p>
          </div>
          <div className="sm:h-[165px]">
            <p className="text-[7.43px] leading-[11.15px] font-light sm:text-[8.85px] sm:leading-[13.27px] uppercase text-right sm:mb-3">
              {props.typeBike}
            </p>
            <Image
              src={props.urlImage}
              width={180}
              height={140}
              alt="bike bike"
              className="w-[151px] h-[118px] sm:w-[180px] sm:h-[140px] "
            />
          </div>
          <div className="flex justify-between items-center mt-[12.39px] sm:mt-2 color-[#595959]">
            <span className="text-[8.67px] leading-[10.41px] sm:text-[10.02px] sm:leading-[12.02px]">
              <p>Available at</p>
              <p>Bike Station</p>
            </span>
            <span className="text-right font-light h-[35px]">  
              <p className="text-[18.99px] leading-[28.49px] sm:text-[22.61px] sm:leading-[27.13px]" style={{ fontWeight: 500 }}>{props.available}</p>
              <p className="text-[7.43px] leading-[11.15px] sm:text-[8.85px] sm:leading-[10.62px] -mt-2 sm:mt-[0.2px]">
                {props.bike_station}
              </p>
            </span>
          </div>
          <button className="flex justify-center items-center bg-gradient-to-r from-green-400 to-green-600
           py-1 px-4 rounded-lg mt-[7.88px] sm:mt-[10px] w-full sm:bg-[#059E3C] sm:bg-none sm:w-[179.91px] sm:h-[28.8px]">
            <p className="text-sm sm:text-[14.59px] sm:leading-[17.49px] text-white">Book Your Cycle</p>
            <div className="ml-2 sm:hidden">
            <Image
            src="/icon/next.svg"
            width={3.72}
            height={7.43}
            alt="next"
            />
            </div>
            </button>
        </div>
      </>
    );
  }
