'use client'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import ThemeSwitch from './theme';

const HeaderMobile = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-row justify-between items-center pl-[23px] pr-6 pt-4">
      <div className="flex flex-row gap-2">
          {theme === 'dark' ? (
            <Image src="/image/vector-light.svg" alt="logo" width={42} height={31} /> 
          ) : (
            <Image src="/image/Vector.svg" alt="logo" width={42} height={31} />
          )}
        <div className="text-3xl font-semibold">RentByK</div>
      </div>
      <div className="flex flex-row gap-2">
      {theme === 'dark' ? (
        <Image src="/image/search-light.svg" width={29} height={29} alt="search" />
      ) : (
            <Image src="/image/Search.svg" width={29} height={29} alt="search" />
          )}
          {theme === 'dark' ? (
            <Image src="/image/menu-light.svg" width={29} height={29} alt="menu" />
          ) : (
        <Image src="/image/Menu.svg" width={29} height={29} alt="menu" />
          )}
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default HeaderMobile;
