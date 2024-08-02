import Sidebar from "@/app/component/Sidebar/page";
import Content from "@/app/component/content/content";
import BannerMobile from "./component/mobile/banner-mobile";
import HeaderMobile from "./component/mobile/header";
import FixedIconBar from "./component/mobile/position";
import SwiperBikesMobile from "./component/mobile/slider";
import SwiperCompetition from "./component/mobile/slidercpt";

export default function Home() {
  return (
    <div>
      <div className="hidden sm:flex justify-between w-full min-h-screen bg-neutral-800 text-white ">
        <Sidebar />
        <Content />
      </div>
      <div className="relative flex flex-col gap-7 sm:hidden max-w-[430px]">
        <HeaderMobile/>
        {/* <div className="absolute top-6 right-0">
          </div>         */}
          <BannerMobile/>
        <SwiperBikesMobile/>        
        <SwiperCompetition/>
        <FixedIconBar/>
      </div>
    </div>
  );
}
