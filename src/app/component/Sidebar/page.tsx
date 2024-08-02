import Image from "next/image";
import MenuComponent from "../Sidebar/menu_sidebar";
export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  return (
    <>
      <div
        className="bg-[url('/background/bg-sidebar.svg')] w-[42%]
        bg-no-repeat bg-cover bg-center h-[1010px]
        flex flex-col justify-between p-[68px]"
      >
        <div className="flex gap-9 transform -translate-y-10">
          <Image src={"/icon/inta.svg"} alt="logo_web" width={32} height={32} />
          <Image src={"/icon/fb.svg"} alt="logo_web" width={32} height={32} />
          <Image src={"/icon/send.svg"} alt="logo_web" width={32} height={32} />
        </div>
        <div className="flex flex-row justify-between mt-0">
          <a href="#" className="flex items-center">
            <Image
              src={"/icon/logo.svg"}
              alt="logo_web"
              width={76.7}
              height={56.61}
            />
            <h1 className="font-semibold text-white text-6xl px-[20px]">
              RentByk
            </h1>
          </a>
          <div className="flex flex-col gap-[73px] mt-0 mr-5">
            <MenuComponent urlIcon="/icon/home.svg" titleMenu="Home" />
            <MenuComponent urlIcon="/icon/category.svg" titleMenu="Category" />
            <MenuComponent urlIcon="/icon/rent-bike.svg" titleMenu="Rent Bike" />
          </div>
        </div>
        <div
          className="cursor-pointer flex items-center gap-2 transform -rotate-90 origin-bottom-left"
        >
          <Image
            className="transform rotate-90"
            src={"/icon/arrow-down.svg"}
            alt="logo_web"
            width={35}
            height={35}
          />
          <h5 className="uppercase text-base text-[#FFFFFF]">Scroll Down</h5>
        </div>
      </div>
    </>
  );
}
