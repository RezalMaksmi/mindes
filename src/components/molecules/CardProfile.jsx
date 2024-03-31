import React from "react";

const CardProfile = ({ image, name, role }) => {
  return (
    <section className="flex justify-center items-center ">
      <div className="bg-[#E0E9EF] mx-auto rounded-[30px] rounded-b-[30px] border-2 transition-all w-[200px] h-[210px] lg:w-[244px] md:h-[265px]">
        <img
          className="w-[196] h-[149] md:w-[244px] md:h-[185px]  rounded-t-[30px] rounded-br-[50px] object-cover"
          src={image}
          alt=""
        />
        <div className="text-left ml-5 md:ml-0 md:text-center  ">
          <h3 className="text-[#101A57] text-[20] md:text-[24px] font-semibold">
            {name}
          </h3>
          <p className="text-[12px] md:text-[16px] font-semibold">{role}</p>
        </div>
      </div>
    </section>
  );
};

export default CardProfile;
