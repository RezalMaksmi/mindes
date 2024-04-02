import React, { useState } from 'react'
import { BiLoaderCircle } from 'react-icons/bi';
import { LuCheckCircle, LuClock, LuClock10, LuLoader2 } from 'react-icons/lu'
import CardTable from './CardTable';
import { Data, DataProses, DataSelesai } from '../../data';
import { useNavigate } from 'react-router';

const DashboardHomeUser = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('belum');
  const [currentPage, setCurrentPage] = useState(0);
  const [showTable, setShowTable] = React.useState(5);

  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : showTable;
  const pageCount = Math.ceil(Data.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = Data.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  let content;

  switch (selectedMenu) {
    case 'belum':
      content = currentPageData.map((item, i) => {
          return (
            <CardTable 
              key={i}
              No={i+1}
              NamaPemohon={item.nama}
              JenisSurat={item.jenis_surat}
              Tanggal={item.tanggal}
              ActShow={()=>setSelectedMenu('proses')}
              type="Ajuan"
            />);
          });
      break;
    case 'proses':
      content = DataProses.map((item, i) => {
        return (
        <CardTable 
        key={i}
            No={i+1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow={()=>setSelectedMenu('selesai')}
            type="Diproses"
        />);
      });
      break;
    case 'selesai':
      content = DataSelesai.map((item, i) => {
        return (
        <CardTable 
        key={i}
            No={i+1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow=""
            type="Selesai"
        />);
      });
      break;
    default:
      content = currentPageData.map((item, i) => {
        return (
        <CardTable 
        key={i}
            No={i+1}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow=""
            type="Ajuan"
        />);
      });
  }
  return (
    <div className=' px-4 pt-4'>
      <div className="grid grid-cols-3 lg:gap-6 gap-3">
        {/* top info */}
        <div className="grid lg:col-span-2 col-span-3 rounded-xl bg-white w-auto lg:p-6 p-3 gap-4 border-2 border-[#C1C1C1]">
          <div className="flex w-full justify-between ">
            <h2 className='text-2xl font-bold'>Jumlah Pengajuan</h2>
            <a href="/">Lihat semua</a>
          </div>
          <div className="grid grid-cols-3  gap-3  ">
            
            <div className="border rounded-xl lg:p-6 p-3 grid col-span-1 lg:gap-1 gap-0 text-white bg-[#5452B3]">
              <LuClock className='lg:text-xl text-xs font-bold' />
              <h1 className='lg:text-4xl text-3xl font-bold'>10</h1>
              <span className='lg:text-xl text-xs font-semibold '>Menunggu</span>
            </div>

            <div className="border rounded-xl lg:p-6 p-3 grid col-span-1 lg:gap-1 gap-0 text-white bg-[#5F82E8] ">
              <BiLoaderCircle className='lg:text-xl text-xs font-bold' />
              <h1 className='lg:text-4xl text-3xl font-bold'>15</h1>
              <span className='lg:text-xl text-xs font-semibold '>Diproses</span>
            </div>

            <div className="border rounded-xl lg:p-6 p-3 grid col-span-1 lg:gap-1 gap-0 text-white bg-[#ED619D] ">
              <LuCheckCircle className='lg:text-xl text-xs font-bold' />
              <h1 className='lg:text-4xl text-3xl font-bold'>100</h1>
              <span className='lg:text-xl text-xs font-semibold '>Selesai</span>
            </div>
          </div>
        </div>
        <div className="grid lg:col-span-1 col-span-3 rounded-xl bg-[#E0E9EF] w-auto lg:p-6 p-3 gap-4 border-[#C1C1C1] ">
          <div className="flex justify-between w-full">
          <h2 className='text-2xl font-bold'>Jumlah Aduan</h2>
            <a href="/">Lihat semua</a>
          </div>
          <div className="grid grid-cols-3  gap-3">
            
            <div className="border-[#C1C1C1] rounded-xl lg:p-6 p-3 grid col-span-3 lg:gap-1 gap-0 bg-white">
              <LuClock className='lg:text-xl text-xs font-bold' />
              <h1 className='lg:text-4xl text-3xl font-bold'>10</h1>
              <span className='lg:text-xl text-xs font-semibold '>Aduan</span>
            </div>

          </div>
        </div>
      {/* / top info / */}

      <div className="grid lg:col-span-2 col-span-3 rounded-xl  w-auto p-0 gap-5 items-start  content-start">
          
          <div className="flex flex-row h-full  gap-3  items-center  w-full">
            <button className={` py-2 ${selectedMenu === "belum"  ? 'bg-[#1C305D] text-white' : 'border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} 
            onClick={() => handleMenuClick('belum')}>
              <LuClock10 />
              <span className='font-semibold text-base'>
                Belum Diproses
              </span>
            </button>

            <button className={` py-2 ${selectedMenu === "proses"  ? 'bg-[#1C305D] text-white' : 'border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} 
            onClick={() => handleMenuClick('proses')}>
              <LuLoader2 />
              <span className='font-semibold text-base'>
                Sedang Diproses
              </span>
            </button>

            <button className={` py-2 ${selectedMenu === "selesai"  ? 'bg-[#1C305D] text-white' : 'border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} 
            onClick={() => handleMenuClick('selesai')}>
              <LuCheckCircle />
              <span className='font-semibold text-base'>
                Sudah Diproses
              </span>
            </button>
          </div>

          <div className="grid lg:col-span-2 col-span-3 rounded-xl  h-auto w-auto lg:p-6 p-3 gap-1 border-2 border-[#C1C1C1] items-start  content-start">
            <div className="flex w-full justify-between  h-10 auto-cols-min	">
              <h2 className='text-2xl font-bold'>Pengajuan Belum Diproses Terbaru</h2>
              <a href="/">Latest</a>
            </div>
            <table className="w-full h-auto mt-3  table-auto	">
              <thead className='bg-[#E26848] text-white w-full top-0 border border-[#929292]'>
                <tr className='w-full border h-11 border-[#ffffff]'>
                  <th className='border border-[#ffffff]'>Nomor</th>
                  <th className='border border-[#ffffff]'>Nama Pemohon</th>
                  <th className='border border-[#ffffff]'>Jenis Surat</th>
                  <th className='border border-[#ffffff]'>Tanggal Diajukan</th>
                </tr>
              </thead>
              <tbody >
              {/* <tr className='border border-[#929292] '>
                <td className='border py-3 border-[#929292] px-2 text-center'>1</td>
                <td className='border border-[#929292] px-2'>Ananda Amananta</td>
                <td className='border border-[#929292] px-2'>SKTM</td>
                <td className='border border-[#929292] px-2'>25 Agustus 2024</td>
                <td className='border border-[#929292] px-2'>
                  <button className='px-2 py-1 rounded-md bg-[#4BABD6] text-white flex flex-row gap-1 justify-center items-center mx-auto'>
                    <BiShow />
                    <span>Lihat</span>
                  </button>
                  </td>
              </tr> 
              <tr className='border border-[#929292] '>
                <td className='border py-3 border-[#929292] px-2 text-center'>2</td>
                <td className='border border-[#929292] px-2'>Ananda Amananta</td>
                <td className='border border-[#929292] px-2'>SKTM</td>
                <td className='border border-[#929292] px-2'>25 Agustus 2024</td>
                <td className='border border-[#929292] px-2'>
                  <button className='px-2 py-1 rounded-md bg-[#4BABD6] text-white flex flex-row gap-1 justify-center items-center mx-auto'>
                    <BiShow />
                    <span>Lihat</span>
                  </button>
                  </td>
              </tr>  */}
              {content}
              </tbody>
            </table> 
            <div className="flex w-full justify-between items-center h-10 auto-cols-min	mt-5">
              <span >Showing 1 to 10 of 1 entries</span>
              <div className="flex gap-3">
                <span className="border-2 border-[#929292] rounded-md px-3 py-1">{"< Prev"}</span>
                <span className="border-2 border-[#929292] rounded-md px-3 py-1">{"Next >"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:col-span-1 col-span-3 rounded-xl bg-[#ffffff] w-auto lg:p-6 p-3 gap-4 border-2 border-[#C1C1C1] ">
          <div className="flex justify-between w-full">
          <h2 className='text-2xl font-bold'>Berita</h2>
            <a href="/">Lihat semua</a>
          </div>
          <div className="grid grid-cols-3  gap-3">
            
            <div className="border-[#C1C1C1] rounded-xl grid col-span-3 lg:gap-1 gap-0 bg-white">
              <div className="w-full h-[400px] bg-slate-500 rounded-lg overflow-hidden">
                <img className='w-full h-full object-cover' src="https://infoblitar.com/wp-content/uploads/2018/09/Bersih-Desa-Ngoran-768x1024.jpg" alt="wayang kulit" />
              </div>
              <h2 className='text-xl font-bold'>Pagelaran wayang kulit dalam rangka bersih desa</h2>
              <span className='text-base mt-1'>hadirilah bersama keluarga anda ikut serta dalam acara bersih desa ngoran...</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default DashboardHomeUser;
