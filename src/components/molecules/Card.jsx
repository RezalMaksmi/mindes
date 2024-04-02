import React from "react";

const Card = ({ image, title, description, onClick }) => {
  return (
    <div className={`flex flex-row md:flex-col justify-center gap-5 items-center shadow-md rounded-lg hover:scale-105 hover:shadow-xl transition-all p-5 ${onClick ? 'cursor-pointer': null}`}
    onClick={onClick ?? null}>
      <img
        className="w-[105px] h-[100px] md:w-[200px] md:h-[200px] object-contain"
        src={image}
        alt=""
      />
      <div className="text-left md:text-center my-auto">
        <h3 className="font-semibold text-2xl mb-4">{title}</h3>
        <p className="font-medium text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
