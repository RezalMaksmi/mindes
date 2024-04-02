import React from "react";
import Accordion from "./Accordion";
import vectorBenefit from "../../assets/vector-benefit.png";
import { Text } from "../atoms";

const Benefit = () => {
  return (
    <section className="h-fit py-4 bg-[#E0E9EF]">
      <Text type="subtitle" text="Benefit" />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 ">
        <img
          className="items-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto xl:mx-0 my-10 "
          src={vectorBenefit}
          alt=""
        />
        <Accordion />
      </div>
    </section>
  );
};

export default Benefit;
