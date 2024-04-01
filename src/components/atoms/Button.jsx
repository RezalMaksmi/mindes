import React from "react";
import { LuCheckCircle, LuClock10, LuLoader2 } from "react-icons/lu";
import {  useLocation } from "react-router-dom";

const Button = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const { onClick, className, type, to, icon, text , belumDiproses, sedangDiproses, sudahDiproses} = props;
  switch (type) {
   
      case "black":
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-black border text-white`}
        >
          <span>{text}</span>
        </a>
      );
    case "IconButton":
      return <button onClick={onClick} className={`px-2 py-2 rounded-lg flex gap-2  ${className}`}>{icon}</button>;

      case "ButtonTextIcon":
        return <button onClick={onClick} className={`px-3 py-1 rounded-lg flex gap-2  ${className}`}>{icon}{text}</button>;

        case "Proccess" :
          return (
            <div className="flex flex-row h-full  gap-3  items-center  w-full">
            <button className={` ${pathname === "/ajuan"  ? 'bg-[#1C305D] text-white' : 'border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} onClick={belumDiproses} >
              <LuClock10 />
              <span className='font-semibold text-base'>
                Belum Diproses
              </span>
            </button>

            <button className={` ${pathname === "/ajuan/diproses"  ? 'bg-[#1C305D] text-white' : 'border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} onClick={sedangDiproses}  >
              <LuLoader2 />
              <span className='font-semibold text-base'>
                Sedang Diproses
              </span>
            </button>

            <button className={` ${pathname === "/ajuan/selesai"  ? 'bg-[#1C305D] text-white' : 'border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} onClick={sudahDiproses} >
              <LuCheckCircle />
              <span className='font-semibold text-base'>
                Sudah Diproses
              </span>
            </button>
          </div>
          )
    default:
      return (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-lg  font-semibold bg-white hover:bg-[#101A57] border transition-all hover:text-white text-black`}>
          <span>{text}</span>
        </a>
      );
  }
};

export default Button;
