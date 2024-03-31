import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div>
      <div className="flex flex-row md:flex-col justify-center gap-5 items-center shadow-md rounded-lg  hover:scale-105 hover:shadow-xl transition-all p-5 w-full  h-fit md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[350px]">
        <img
          className="w-[105px] h-[100px] md:w-[200px] md:h-[200px] object-contain"
          src={image}
          alt=""
        />
        <div className="text-left md:text-center my-auto">
          <h3 className="font-semibold  text-[16px] lg:text-[20px]">{title}</h3>
          <p className="font-medium text-[11px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;