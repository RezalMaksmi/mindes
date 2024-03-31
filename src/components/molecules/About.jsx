import React from "react";
import vector from "../../assets/vector-about.png";
import { LuCheckCircle } from "react-icons/lu";


const About = () => {
  return (
    <section className="bg-[#101A57] h-full">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-orange-500 text-[16px] md:text-[24px] font-medium">
          Tentang
        </h1>
        <h2 className="text-white text-[24px] md:text-[48px] font-medium">
          Administrasi Digital Desa
        </h2>
        <div className="container flex flex-col md:flex-row mx-24 gap-[100px] pt-14 ">
          <img
            className="items-center mx-auto w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] my-auto"
            src={vector}
            alt=""
          />
          <ul className="flex flex-col gap-10 ">
            <li className="text-left text-[14px] lg:text-[25px] text-white flex flex-row gap-5 items-center">
              <LuCheckCircle className="w-24" />
              MINDES adalah Pelayanan Administrasi Desa akan membuat pengguna
              menikmati layanan administrasi <br />
              pembuatan dokumen secara online yang Mempermudah Masyarakat dalam
              pembuatan administrasi.
            </li>
            <li className="text-left text-[14px] lg:text-[25px] text-white flex flex-row gap-5 items-center">
              <LuCheckCircle className="w-24" />
              Desa Mindes menghadirkan solusi efektifitas pelayanan masyarakat
              menuju indonesia maju digital.
            </li>
            <li className="text-left text-[14px] lg:text-[25px] text-white flex flex-row gap-5 items-center">
              <LuCheckCircle className="w-24" />
              Desa Mindes menghadirkan solusi efektifitas pelayanan masyarakat
              menuju indonesia maju digital.
            </li>
          </ul>
        </div>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-full my-10">
          Selengkapnya
        </button>
      </div>
    </section>
  );
};

export default About;
