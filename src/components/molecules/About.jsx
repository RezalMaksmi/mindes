import React from "react";
import vector from "../../assets/vector-about.png";
import { LuCheckCircle } from "react-icons/lu";

const About = () => {
  return (
    <section className="bg-[#101A57] h-full" id="about">
      <div className="flex flex-col justify-center items-center text-center py-10">
        <h1 className="text-orange-500 text-[16px] md:text-[24px] font-medium">
          Tentang
        </h1>
        <h2 className="text-white text-[24px] md:text-[48px] font-medium">
          Administrasi Digital Desa
        </h2>
        <div className="container flex flex-col md:flex-row mx-24 gap-[100px] pt-14 ">
          <img
            className="items-center mx-auto w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] my-auto object-contain "
            src={vector}
            alt=""
          />
          <div className="flex flex-col gap-10 max-w-[900px] w-full  items-start px-3">
            <div className="text-left text-[14px] lg:text-[20px] text-white flex flex-row lg:gap-5 gap-2 items-center justify-start">
              <LuCheckCircle className="max-w-10 w-full lg:h-10 h-7" />
              <span className="max-w-[800px] w-auto">
                MINDES adalah Pelayanan Administrasi Desa akan membuat pengguna
                menikmati layanan administrasi pembuatan dokumen secara online
                yang Mempermudah Masyarakat dalam pembuatan administrasi.
              </span>
            </div>
            <div className="text-left text-[14px] lg:text-[20px] text-white flex flex-row lg:gap-5 gap-2 items-center justify-start">
              <LuCheckCircle className="max-w-10 w-full lg:h-10 h-7" />
              <span className="max-w-[800px] w-auto">
                Desa Mindes menghadirkan solusi efektifitas pelayanan masyarakat
                menuju indonesia maju digital.
              </span>
            </div>
            <div className="text-left text-[14px] lg:text-[20px] text-white flex flex-row lg:gap-5 gap-2  justify-start items-center ">
              <LuCheckCircle className="max-w-10 w-full lg:h-10 h-7" />
              <span className="max-w-[800px] w-auto">
                Desa Mindes menghadirkan solusi efektifitas pelayanan masyarakat
                menuju indonesia maju digital.
              </span>
            </div>
          </div>
        </div>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-full my-10">
          Selengkapnya
        </button>
      </div>
    </section>
  );
};

export default About;
