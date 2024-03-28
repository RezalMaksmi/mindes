import React from "react";
import "../../src/index.css";
import background from "../assets/village-landingpage.png";
import { About, Benefit, Features } from "../components/molecules";
import { Text } from "../components/atoms";
import Team from "../components/molecules/Team";
import Artikel from "../components/molecules/Artikel";

const Home = () => {
  return (
    <section className=" mx-auto">
      <div
        className=" h-[100vh] flex flex-col justify-center md:items-start items-center bg-no-repeat lg:bg-cover lg:mt-[110px] bg-contain bg-bottom"
        style={{ backgroundImage: `URL(${background})` }}>
        <div className="ml-0 md:ml-20 md:text-start text-center">
          <Text type="title" text="Administrasi Digital Desa" />
          <h3 className="text-[10px] md:text-[20px] md:text-center font-medium z-20">
            Desa Mindes menghadirkan solusi efektifitas pelayanan <br />{" "}
            masyarakat menuju indonesia maju.
          </h3>
        </div>
      </div>
      <About />
      <Features />
      <Benefit />
      <Team />
      <Artikel />
    </section>
  );
};

export default Home;
