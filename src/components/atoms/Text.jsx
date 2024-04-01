import React from "react";

const Text = ({ text, type, className }) => {
  switch (type) {
    case "title":
      return (
    
          <h1 className={`text-[25px]  xl:text-[48px] font-bold z-20 text-transparent bg-clip-text bg-gradient-to-r w-max from-[#1C305D] to-[#E26848] ${className}`}>
            {text}
          </h1>
   
      );

    case "subtitle" :
      return (
        <div className="mx-auto my-10">
          <h1 className="text-[25px] mx-auto xl:text-[48px] font-bold z-20 text-transparent bg-clip-text bg-gradient-to-r w-max from-[#1C305D] to-[#E26848]">
            {text}
          </h1>
        </div>
      );
    
    default:
  }
};
export default Text;
