import React, { useState } from "react";

import { BiPlus, BiShow } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";

const AduanUser = () => {
  const navigate = useNavigate();

  const handleAddAduan = () => {
    navigate("/aduan/tambah");
  };
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  return (
    <div
      className={` ${
        role === "user" && token ? "md:pl-[80px] pl-0" : "pl-[80px] "
      } w-full h-auto  flex justify-center `}
    >
      <div className=" bg-white mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        <div className=" px-4 pt-4 ">
          <div className="grid grid-cols-3 lg:gap-6 gap-3">
            {/* top info */}
            <div className="grid lg:col-span-3 col-span-3 rounded-xl bg-[#E0E9EF] w-auto lg:p-6 p-3 gap-4 border-[#C1C1C1] ">
              <div className="flex justify-between w-full">
                <h2 className="text-2xl font-bold">Jumlah Aduan</h2>
                <a href="/">Lihat semua</a>
              </div>
              <div className="grid grid-cols-3  gap-3">
                <div className="border-[#C1C1C1] rounded-xl lg:p-6 p-3 grid col-span-3 lg:gap-1 gap-0 bg-white">
                  <LuClock className="lg:text-xl text-xs font-bold" />
                  <h1 className="lg:text-4xl text-3xl font-bold">10</h1>
                  <span className="lg:text-xl text-xs font-semibold ">
                    Aduan
                  </span>
                </div>
              </div>
            </div>
            {/* / top info / */}

            <div className="grid col-span-3 rounded-xl  h-auto w-full overflow-scroll lg:p-6 md:p-3 p-2 gap-1 border-2 border-[#C1C1C1] items-start  content-start">
              <div className="flex w-full justify-between  h-10 auto-cols-min">
                <h2 className="md:text-2xl text-xl font-bold">
                  Daftar Pengaduan
                </h2>
                <a href="/">Latest</a>
              </div>
              <Button
                type="ButtonTextIcon"
                className="bg-[#41AC2F] items-center text-white w-max h-[40px]"
                onClick={handleAddAduan}
                text="Tambah"
                icon={<BiPlus className="text-2xl" />}
              />

              <table className="w-full h-auto mt-3 table-auto">
                <thead className="bg-[#E26848] text-white w-full top-0 border border-[#929292]">
                  <tr className="w-full border h-11 border-[#ffffff] md:text-base text-sm">
                    <th className="border border-[#ffffff]">Nomor</th>
                    <th className="border border-[#ffffff]">Nama Pemohon</th>
                    <th className="border border-[#ffffff]">Jenis Surat</th>
                    <th className="border border-[#ffffff]">
                      Tanggal Diajukan
                    </th>
                    <th className="border border-[#ffffff]">Tombol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-[#929292] md:text-base text-sm">
                    <td className="border py-3 border-[#929292] px-2 text-center">
                      1
                    </td>
                    <td className="border border-[#929292] px-2">
                      Ananda Amananta
                    </td>
                    <td className="border border-[#929292] px-2">SKTM</td>
                    <td className="border border-[#929292] px-2">
                      25 Agustus 2024
                    </td>
                    <td className="border border-[#929292] px-2">
                      <button className="px-2 py-1 rounded-md bg-[#4BABD6] text-white flex flex-row gap-1 justify-center items-center mx-auto">
                        <BiShow />
                        <span>Lihat</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border border-[#929292] ">
                    <td className="border py-3 border-[#929292] px-2 text-center">
                      2
                    </td>
                    <td className="border border-[#929292] px-2">
                      Ananda Amananta
                    </td>
                    <td className="border border-[#929292] px-2">SKTM</td>
                    <td className="border border-[#929292] px-2">
                      25 Agustus 2024
                    </td>
                    <td className="border border-[#929292] px-2">
                      <button className="px-2 py-1 rounded-md bg-[#4BABD6] text-white flex flex-row gap-1 justify-center items-center mx-auto">
                        <BiShow />
                        <span>Lihat</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex w-full justify-between items-center h-10 auto-cols-min	mt-5">
                <span className="text-base ">Showing 10 entries</span>
                <div className="flex md:gap-3 gap-1">
                  <span className="md:border-2 border border-[#929292] rounded-md md:px-3 px-1 py-1">
                    {"< Prev"}
                  </span>
                  <span className="md:border-2 border border-[#929292] rounded-md md:px-3 px-1 py-1">
                    {"Next >"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AduanUser;
