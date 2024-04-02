import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { LuCheckCircle, LuClock, LuClock10, LuLoader2 } from "react-icons/lu";
import CardTable from "./CardTable";
import { Data, DataProses, DataSelesai } from "../../data";
import { useNavigate } from "react-router";

const DashboardHomeUser = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("belum");
  const [status, setStatus] = useState("belum");
  const [currentPage, setCurrentPage] = useState(0);
  const [showTable, setShowTable] = React.useState(5);

  const perPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 7 : showTable;
  const pageCount = Math.ceil(Data.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = Data.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    if (menu === "selesai") {
      setStatus("Sudah");
    } else if (menu === "proses") {
      setStatus("Sedang");
    } else {
      setStatus("Belum");
    }
  };

  let content;

  switch (selectedMenu) {
    case "belum":
      content = currentPageData.map((item, i) => {
        return (
          <CardTable
            key={i}
            No={i + 1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow={() => setSelectedMenu("proses")}
            type="Ajuan"
          />
        );
      });
      break;
    case "proses":
      content = DataProses.map((item, i) => {
        return (
          <CardTable
            key={i}
            No={i + 1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow={() => setSelectedMenu("selesai")}
            type="Diproses"
          />
        );
      });
      break;
    case "selesai":
      content = DataSelesai.map((item, i) => {
        return (
          <CardTable
            key={i}
            No={i + 1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow=""
            type="Selesai"
          />
        );
      });
      break;
    default:
      content = currentPageData.map((item, i) => {
        return (
          <CardTable
            key={i}
            No={i + 1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow=""
            type="Ajuan"
          />
        );
      });
  }
  return (
    <div className=" px-4 pt-4">
      <div className="grid grid-cols-3 lg:gap-6 gap-3">
        {/* top info */}
        <div className="grid lg:col-span-2 col-span-3 rounded-xl bg-white w-auto lg:p-6 p-3 gap-4 border-2 border-[#C1C1C1]">
          <div className="flex w-full justify-between ">
            <h2 className="md:text-2xl text-xl font-bold">Jumlah Pengajuan</h2>
            <a href="/">Lihat semua</a>
          </div>
          <div className="grid grid-cols-3  gap-3  ">
            <div className="border rounded-xl lg:p-6 p-3 grid col-span-1 lg:gap-1 gap-0 text-white bg-[#5452B3]">
              <LuClock className="lg:text-xl text-xs font-bold" />
              <h1 className="lg:text-4xl text-3xl font-bold">10</h1>
              <span className="lg:text-xl text-xs font-semibold ">
                Menunggu
              </span>
            </div>

            <div className="border rounded-xl lg:p-6 p-3 grid col-span-1 lg:gap-1 gap-0 text-white bg-[#5F82E8] ">
              <BiLoaderCircle className="lg:text-xl text-xs font-bold" />
              <h1 className="lg:text-4xl text-3xl font-bold">15</h1>
              <span className="lg:text-xl text-xs font-semibold ">
                Diproses
              </span>
            </div>

            <div className="border rounded-xl lg:p-6 p-3 grid col-span-1 lg:gap-1 gap-0 text-white bg-[#ED619D] ">
              <LuCheckCircle className="lg:text-xl text-xs font-bold" />
              <h1 className="lg:text-4xl text-3xl font-bold">100</h1>
              <span className="lg:text-xl text-xs font-semibold ">Selesai</span>
            </div>
          </div>
        </div>
        <div className="grid lg:col-span-1 col-span-3 rounded-xl bg-[#E0E9EF] w-auto lg:p-6 p-3 gap-4 border-[#C1C1C1] ">
          <div className="flex justify-between w-full">
            <h2 className="md:text-2xl text-xl font-bold">Jumlah Aduan</h2>
            <a href="/">Lihat semua</a>
          </div>
          <div className="grid grid-cols-3  gap-3">
            <div className="border-[#C1C1C1] rounded-xl lg:p-6 p-3 grid col-span-3 lg:gap-1 gap-0 bg-white">
              <LuClock className="lg:text-xl text-xs font-bold" />
              <h1 className="lg:text-4xl text-3xl font-bold">10</h1>
              <span className="lg:text-xl text-xs font-semibold ">Aduan</span>
            </div>
          </div>
        </div>
        {/* / top info / */}

        <div className="grid lg:col-span-2 col-span-3 rounded-xl  w-full p-0 gap-5 items-start  content-start ">
          <div className="flex col-span-3  flex-row h-full  gap-3 md:mt-0 mt-1 items-center w-full overflow-scroll no-scrollbar">
            <button
              className={` py-2 ${
                selectedMenu === "belum"
                  ? "bg-[#1C305D] text-white"
                  : "border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]"
              } gap-1 rounded-full px-4 h-full flex flex-row items-center `}
              onClick={() => handleMenuClick("belum")}
            >
              <LuClock10 />
              <span className="font-semibold text-base w-max">
                Belum Diproses
              </span>
            </button>

            <button
              className={` py-2 ${
                selectedMenu === "proses"
                  ? "bg-[#1C305D] text-white"
                  : "border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]"
              } gap-1 rounded-full px-4 h-full flex flex-row items-center `}
              onClick={() => handleMenuClick("proses")}
            >
              <LuLoader2 />
              <span className="font-semibold text-base w-max">
                Sedang Diproses
              </span>
            </button>

            <button
              className={` py-2 ${
                selectedMenu === "selesai"
                  ? "bg-[#1C305D] text-white"
                  : "border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]"
              } gap-1 rounded-full px-4 h-full flex flex-row items-center `}
              onClick={() => handleMenuClick("selesai")}
            >
              <LuCheckCircle />
              <span className="font-semibold text-base w-max">
                Sudah Diproses
              </span>
            </button>
          </div>

          <div className="grid lg:col-span-3 col-span-3 rounded-xl  h-auto w-full lg:p-6 md:p-3 p-2 gap-1 border-2 border-[#C1C1C1] items-start  content-start">
            <div className="flex w-full justify-between  h-10 auto-cols-min	items-center">
              <h2 className="md:text-2xl text-xl font-bold">
                Pengajuan {status} di Proses
              </h2>
              <a href="/">Latest</a>
            </div>
            <table className="w-full h-auto mt-3  table-auto	">
              <thead className="bg-[#E26848] text-white w-full top-0 border border-[#929292]">
                <tr className="w-full border h-11 border-[#ffffff]">
                  <th className="border border-[#ffffff] md:text-base text-sm">
                    Nomor
                  </th>
                  <th className="border border-[#ffffff] md:text-base text-sm">
                    Nama Pemohon
                  </th>
                  <th className="border border-[#ffffff] md:text-base text-sm">
                    Jenis Surat
                  </th>
                  <th className="border border-[#ffffff] md:text-base text-sm">
                    Tanggal Diajukan
                  </th>
                </tr>
              </thead>
              <tbody className="md:text-base text-sm">{content}</tbody>
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
        <div className="grid lg:col-span-1 col-span-3 rounded-xl bg-[#ffffff] w-auto lg:p-6 p-3 gap-4 border-2 border-[#C1C1C1] ">
          <div className="flex justify-between w-full">
            <h2 className="md:text-2xl text-xl font-bold">Berita</h2>
            <button onClick={() => navigate("/news")}>Lihat semua</button>
          </div>
          <div className="grid grid-cols-3  gap-3">
            <div className="border-[#C1C1C1] rounded-xl grid col-span-3 lg:gap-1 gap-0 bg-white">
              <div className="flex flex-col">
                <div className="w-full h-[400px] bg-slate-500 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://infoblitar.com/wp-content/uploads/2018/09/Bersih-Desa-Ngoran-768x1024.jpg"
                    alt="wayang kulit"
                  />
                </div>
                <h2 className="md:text-xl text-base font-semibold">
                  Pagelaran wayang kulit dalam rangka bersih desa
                </h2>
                <span className="md:text-base text-sm mt-1">
                  hadirilah bersama keluarga anda ikut serta dalam acara bersih
                  desa ngoran...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomeUser;
