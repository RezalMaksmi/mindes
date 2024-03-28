import React from "react";

const Text = ({ text, type }) => {
  switch (type) {
    case "title":
      return (
        <div className="mx-auto">
          <h1 className="text-[25px] mx-auto xl:text-[48px] font-bold z-20 text-transparent bg-clip-text bg-gradient-to-r w-max from-[#1C305D] to-[#E26848]">
            {text}
          </h1>
        </div>
      );
    default:
  }
};
export default Text;
