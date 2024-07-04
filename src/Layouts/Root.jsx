import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';


const Root = () => {
    return (
        <div>
     <div className="bg-[#F1FAFF] py-[40px] ">
         <Navbar />
     </div>
     <div className='bg-[#F1FAFF] h-screen w-full '>
         
     <svg
  width="926"
  height="1213"
  viewBox="0 0 926 1213"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_f_27_357)">
    <circle cx="35" cy="409" r="304" fill="#020043" fillOpacity="0.3" />
  </g>
  <g clipPath="url(#clip0_27_357)">
    <g style={{ mixBlendMode: "color-burn" }}>
      <path d="M926 100.64H803.12V215.32H926V100.64Z" fill="#C1D5DE" />
      <path d="M926 215.32H803.12V330H926V215.32Z" fill="#C7DBE5" />
      <path d="M926 444.64H803.12V559.32H926V444.64Z" fill="#E2F5FF" />
      <path d="M803.12 -14H680.28V100.64H803.12V-14Z" fill="#F1FAFF" />
      <path d="M803.12 100.64H680.28V215.32H803.12V100.64Z" fill="#DEF4FF" />
      <path d="M803.12 330H680.28V444.64H803.12V330Z" fill="#C7DBE5" />
      <path d="M803.12 444.64H680.28V559.32H803.12V444.64Z" fill="#DEF4FF" />
      <path d="M803.12 559.32H680.28V674H803.12V559.32Z" fill="#E8F7FF" />
      <path d="M680.28 -14H557.44V100.64H680.28V-14Z" fill="#F6FCFF" />
      <path d="M680.28 100.64H557.44V215.32H680.28V100.64Z" fill="#E3F6FF" />
      <path d="M680.28 215.32H557.44V330H680.28V215.32Z" fill="#D7ECF7" />
      <path d="M680.28 330H557.44V444.64H680.28V330Z" fill="#E3F6FF" />
      <path d="M680.28 444.64H557.44V559.32H680.28V444.64Z" fill="#EAF8FF" />
      <path d="M680.28 559.32H557.44V674H680.28V559.32Z" fill="#EDF9FF" />
      <path d="M557.44 100.64H434.56V215.32H557.44V100.64Z" fill="#E1F5FF" />
      <path d="M557.44 215.32H434.56V330H557.44V215.32Z" fill="#B9CCD5" />
      <path d="M557.44 330H434.56V444.64H557.44V330Z" fill="#D9EFFA" />
      <path d="M557.44 559.32H434.56V674H557.44V559.32Z" fill="#E8F7FF" />
      <path d="M434.56 -14H311.72V100.64H434.56V-14Z" fill="#F5FCFF" />
      <path d="M434.56 100.64H311.72V215.32H434.56V100.64Z" fill="#EAF8FF" />
      <path d="M434.56 330H311.72V444.64H434.56V330Z" fill="#C4D7E1" />
      <path d="M434.56 444.64H311.72V559.32H434.56V444.64Z" fill="#DEF4FF" />
      <path d="M311.72 -14H188.88V100.64H311.72V-14Z" fill="#F6FCFF" />
      <path d="M311.72 100.64H188.88V215.32H311.72V100.64Z" fill="#E9F8FF" />
      <path d="M311.72 215.32H188.88V330H311.72V215.32Z" fill="#CFE4EE" />
      <path d="M311.72 330H188.88V444.64H311.72V330Z" fill="#C7DBE5" />
      <path d="M311.72 444.64H188.88V559.32H311.72V444.64Z" fill="#D7ECF7" />
      <path d="M311.72 559.32H188.88V674H311.72V559.32Z" fill="#E5F6FF" />
      <path d="M188.88 100.64H66V215.32H188.88V100.64Z" fill="#E5F6FF" />
      <path d="M188.88 215.32H66V330H188.88V215.32Z" fill="#C7DBE5" />
      <path d="M188.88 444.64H66V559.32H188.88V444.64Z" fill="#C9DDE7" />
      <path d="M188.88 559.32H66V674H188.88V559.32Z" fill="#E1F5FF" />
      <path d="M66.0002 -14H-56.8398V100.64H66.0002V-14Z" fill="#F1FAFF" />
      <path d="M66.0002 100.64H-56.8398V215.32H66.0002V100.64Z" fill="#E1F5FF" />
      <path d="M66.0002 215.32H-56.8398V330H66.0002V215.32Z" fill="#C1D5DE" />
      <path d="M66.0002 330H-56.8398V444.64H66.0002V330Z" fill="#DDF3FD" />
      <path d="M66.0002 444.64H-56.8398V559.32H66.0002V444.64Z" fill="#C1D5DE" />
    </g>
  </g>
  <defs>
    <filter
      id="filter0_f_27_357"
      x="-769"
      y="-395"
      width="1608"
      height="1608"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_27_357" />
    </filter>
    <clipPath id="clip0_27_357">
      <rect width="1720" height="688" fill="white" transform="translate(-794 -14)" />
    </clipPath>
  </defs>
      </svg>

     </div>
     <div className=' bg-red-300 w-full '>
         <Outlet />
     </div>
 </div>
    );
};

export default Root;