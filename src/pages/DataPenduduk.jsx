import React, {useState} from 'react'
import { Button, CardTable, Input, NavTop, ShowCard } from '../components';
import { BiSearch, BiSliderAlt, BiSolidUserPlus } from "react-icons/bi";
import { Data } from "../data";
import ReactPaginate from 'react-paginate';


const DataPenduduk = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [addData, setAddData] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [openActiveTest, setOpenActiveTest] = React.useState(false);
  const [showTable, setShowTable] = React.useState(10);

  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : showTable;
  const pageCount = Math.ceil(Data.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = Data.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleAddData = () => {
    setAddData(true);
  };
  const handleEdit = () => {
    setOpenEdit(true);
  };
  const handleOpenDetail = () => {
    setOpenDetail(false)
  };

  const handleOpenActiveTest = () => {
    setOpenActiveTest(true)
  };
  
 
  return (
    <div className="pl-[80px] w-full h-auto  flex justify-center ">
      <div className=" bg-white mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        <ShowCard type="AddData" opens={addData} close={()=> setAddData(false)} />
        {/* <ShowCard type="ShowData"  opens={openDetail} close={()=> setOpenDetail(false)} id={openDataId} />
        <ShowCard type="ActiveTest"  opens={openActiveTest} close={()=> setOpenActiveTest(false)} id={openDataId} /> */}
        <div className="w-auto h-[55px] px-10 pt-3 flex flex-row justify-between">
          <div className="flex gap-2 max-w-2xl w-full">
            <Button type="ButtonTextIcon" className="bg-[#FF4E4E] items-center text-white " text="tambah" onClick={handleAddData} icon={<BiSolidUserPlus  className='text-2xl' />} />
            <Input typeInput="Search" placeholder="Search..." />
            <Button type="ButtonTextIcon" className="bg-[#a0a0a0] items-center text-white " text="Cari" icon={<BiSearch className='text-2xl' />} />
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
                  <th className='border border-[#929292]'>Nama</th>
                  <th className='border border-[#929292]'>Agama</th>
                  <th className='border border-[#929292]'>Jenis Kelamin</th>
                  <th className='border border-[#929292]'>Tempat tanggal Lahir</th>
                  <th className='border border-[#929292]'>Alamat</th>
                  <th className='border border-[#929292] md:w-[150px] w-[60px]'>Action</th>
                </tr>
              </thead>
             
              <tbody >
                {
                  currentPageData.map((item, i) => {
                    return (
                    <CardTable 
                        key={i}
                        No={i+1}
                        NomorSurat={item.no_kk}
                        NamaPemohon={item.nama}
                        JenisKelamin={item.gender}
                        Agama={item.agama}
                        Tanggal={item.tanggal}
                        Alamat={item.alamat}
                        ActShow={()=>handleOpenDetail(item.id)}
                        ActEdit={()=>handleEdit(item.no)}
                        ActActiveTest={()=> handleOpenActiveTest(i+1)}
                    />);
                  })
                }
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

export default DataPenduduk
