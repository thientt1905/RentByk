"use client"
import { useTheme } from 'next-themes'; // Added import for useTheme
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'tailwindcss/tailwind.css';

const FixedIconBar = () => {
  const [selectedIcon, setSelectedIcon] = useState('home');
  const { theme } = useTheme(); // Retrieved current theme using useTheme

  const icons = [
    { id: 'home', src: '/icon/home.svg', alt: 'icon 1', width: 27.52, height: 27.52 },
    { id: 'category', src: '/icon/category.svg', alt: 'icon 2', width: 30, height: 30 },
    { id: 'rent-bike', src: '/icon/rent-bike.svg', alt: 'icon 3', width: 30, height: 30 },
    { id: 'user', src: '/icon/user.svg', alt: 'icon 4', width: 27.52, height: 27.52 }
  ];

  const handleIconClick = (iconId: string) => {
    setSelectedIcon(iconId);
  };

  return (
    <div className={`sticky bottom-0 left-0 right-0 ${theme === 'dark' ? 'bg-[#252525]' : 'bg-[#059E3C]'} flex justify-around py-2 z-20 h-[65px] w-[430px]`}> 
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`relative flex justify-center items-center p-2 rounded-full ${selectedIcon === icon.id ? (theme === 'dark' ? 'bg-[#059E3C]' : 'bg-black') : ''}`} 
          onClick={() => handleIconClick(icon.id)}
        >
          {selectedIcon === icon.id && (
            <div className={`absolute inset-0 rounded-lg ${theme === 'dark' ? 'bg-[#059E3C]' : 'bg-black'} z-10`}></div> 
          )}
          <Image
            src={icon.src}
            width={icon.width}
            height={icon.height}
            alt={icon.alt}
            className={`relative z-20 ${selectedIcon === icon.id ? 'text-white' : 'text-black'}`}
          />
        </div>
      ))}
    </div>
  );
}

export default FixedIconBar;
