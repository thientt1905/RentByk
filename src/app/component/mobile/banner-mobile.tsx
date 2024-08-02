import Image from "next/image"

const BannerMobile = () => {
    return (
        <div className="flex justify-center items-start pl-[23px] pr-[26px]">
            <div className="relative bg-[#059E3C] w-[379px] h-[184px] rounded-lg pt-[24px] pb-[25px]">
                <div className="relative flex">
                    <Image src={"/image/bikebg.svg"} alt="logo" width={122} height={135} />
                </div>
                <div className="absolute top-0 right-0 text-right pt-[18px] pr-[11px]">
                    <h1 className="text-white font-normal text-3xl">Bikes for Rent</h1>
                    <p className="text-white text-xl pt-[15px] pb-[6px]">Book your nearest <br/> Bikes today</p>
                    <button className="px-4 py-2 bg-[#252525] text-white rounded-lg text-[14px] leading-[16.8px] w-[131px] h-[33px]">
                        Get started <span>&rarr;</span>
                        </button>
                </div>
            </div>            
        </div>
    )
}

export default BannerMobile
