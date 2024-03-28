import React from "react";
import background from "../../assets/village-landingpage.png";

const TitleLandingPage = () => {
  return (
    <section className=" mx-auto">
      <div className="h-[100vh] flex flex-col justify-center md:items-start items-center bg-no-repeat lg:bg-cover bg-contain bg-bottom" style={{backgroundImage: `URL(${background})`}}>
        <div className="ml-0 md:ml-20 md:text-start text-center">
          <h1 className="text-[25px] xl:text-[48px] font-bold z-20 text-transparent bg-clip-text bg-gradient-to-r w-max from-[#1C305D] to-[#E26848]">
            Administrasi Digital Desa
          </h1>
          <h3 className="text-[10px] font-medium z-20">
            Desa Mindes menghadirkan solusi efektifitas pelayanan <br />{" "}
            masyarakat menuju indonesia maju.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TitleLandingPage;
