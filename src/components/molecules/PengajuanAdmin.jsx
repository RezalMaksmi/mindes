import React, {useState} from 'react'
import { BiSearch} from "react-icons/bi";
import { Data, DataSelesai, DataProses } from "../../data";
import ReactPaginate from 'react-paginate';
import { LuCheckCircle, LuClock10, LuLoader2 } from 'react-icons/lu';
import { Button, Input } from '../atoms';
import CardTable from './CardTable';


const DashboardPengajuanAdmin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showTable, setShowTable] = React.useState(10);

  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : showTable;
  const pageCount = Math.ceil(Data.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = Data.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [selectedMenu, setSelectedMenu] = useState('belum');

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
              NomorSurat={item.nomor}
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
            NomorSurat={item.nomor}
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
            NomorSurat={item.nomor}
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
            NomorSurat={item.nomor}
            NamaPemohon={item.nama}
            JenisSurat={item.jenis_surat}
            Tanggal={item.tanggal}
            ActShow=""
            type="Ajuan"
        />);
      });
  }
 
 console.log(selectedMenu)
  return (
    <div className="pl-[80px] w-full h-auto  flex justify-center ">
      <div className="bg-[#fff] mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        {/* <ShowCard type="ShowData"  opens={openDetail} close={()=> setOpenDetail(false)} id="" /> */}
        <div className="w-auto h-[55px] px-10 pt-3 flex flex-row justify-between">
          <div className="flex gap-2 max-w-2xl w-full pr-10">
            <Input typeInput="Search" placeholder="Search..." />
            <Button type="ButtonTextIcon" className="bg-[#a0a0a0] items-center text-white " text="Cari" icon={<BiSearch className='text-2xl' />} />
          </div>
          <div className="flex flex-row h-full  gap-3  items-center  w-full">
            <button className={` ${selectedMenu === "belum"  ? 'bg-[#1C305D] text-white' : 'border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} 
            onClick={() => handleMenuClick('belum')}>
              <LuClock10 />
              <span className='font-semibold text-base'>
                Belum Diproses
              </span>
            </button>

            <button className={` ${selectedMenu === "proses"  ? 'bg-[#1C305D] text-white' : 'border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} 
            onClick={() => handleMenuClick('proses')}>
              <LuLoader2 />
              <span className='font-semibold text-base'>
                Sedang Diproses
              </span>
            </button>

            <button className={` ${selectedMenu === "selesai"  ? 'bg-[#1C305D] text-white' : 'border-2 border-[#1C305D] bg-[#fff] text-[#1C305D]'} gap-1 rounded-full px-4 h-full flex flex-row items-center `} 
            onClick={() => handleMenuClick('selesai')}>
              <LuCheckCircle />
              <span className='font-semibold text-base'>
                Sudah Diproses
              </span>
            </button>
          </div>


          <div className=" flex flex-row gap-4 ">
            <label >
              <select className='w-[100px] px-2 py-2 focus:outline-none border rounded-md' name="selectedJenisPeserta" 
              onChange={e => setShowTable(e.target.value)}>
                <option value={10}>Show 10</option>
                <option value={30}>Show 30</option>
                <option value={Data.length}>Show All</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mr-5">
          <div className=" w-full h-[70vh] mt-3 overflow-scroll pl-10 overflow-x-auto flex flex-col justify-between scrollbar-thin overflow-y-scroll ">
              <table className="table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
              <thead className='bg-[#E26848] text-white h-11 sticky top-0 border border-[#929292]'>
                <tr className='w-full border border-[#929292]'>
                  <th className='border border-[#929292]'>No</th>
                  <th className='border border-[#929292]'>Nomor dan tanggal surat</th>
                  <th className='border border-[#929292]'>nama pemohon</th>
                  <th className='border border-[#929292]'>Jenis surat</th>
                  <th className='border border-[#929292]'>tanggal diajukan</th>
                  <th className='border border-[#929292] md:w-[150px] w-[60px]'>Action</th>
                </tr>
              </thead>
             
              <tbody >
              {content}
              </tbody>
          
            </table>  
          </div>
        </div>
          <div className="flex justify-between items-center px-10">
            <span className="pt-2">Showing 1 to 10 of 1 entries</span>
            <div className="flex gap-3 pt-3">
              <ReactPaginate
                previousLabel={"< Prev"}
                nextLabel={"Next >"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={0}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active bg-[#4BABD6] border-none text-white_color"}
                className="flex justify-center space-x-5 mt-0 flex-wrap w-full"
                previousClassName="flex justify-center items-center w-auto px-4 h-[35px] rounded-xl font-semibold text-text_color border-2 border-gray_color"
                nextClassName="border-2 border-gray_color border-gray-500 flex justify-center items-center w-auto px-4 h-[35px] rounded-xl font-semibold text-text_color"
                pageClassName="border-2 border-gray_color flex justify-center items-center w-[35px] h-[35px] rounded-full font-semibold text-text-black mb-4"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default DashboardPengajuanAdmin

