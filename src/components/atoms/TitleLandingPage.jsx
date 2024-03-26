import React from "react";
import background from "../../assets/village-landingpage.png";

const TitleLandingPage = () => {
  return (
    <section className="container">
      <div className=" h-[100vh] flex flex-col justify-center ">
        <div className="items-center text-center ">
          <h1 className="text-[25px] font-bold z-20">
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
