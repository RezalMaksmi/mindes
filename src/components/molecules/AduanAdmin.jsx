import React, { useState } from "react";
// import { Button, CardTable, Input, ShowCard } from '../../components';
import { BiPrinter, BiSearch } from "react-icons/bi";
import { dataLaporan } from "../../data";
import ReactPaginate from "react-paginate";
import { Button, Input } from "../atoms";
import CardTable from "./CardTable";

const AduanAdmin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [openActiveTest, setOpenActiveTest] = React.useState(false);
  const [showTable, setShowTable] = React.useState(10);
  const [status, setStatus] = React.useState("");

  const perPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : showTable;
  const pageCount = Math.ceil(dataLaporan.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = dataLaporan.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="pl-[80px] w-full h-auto  flex justify-center ">
      <div className="bg-[#fff] mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        {/* <ShowCard type="ShowData"  opens={openDetail} close={()=> setOpenDetail(false)} id="" /> */}
        <div className="w-auto h-[55px] px-10 pt-3 flex flex-row justify-between">
          <div className="flex gap-2 max-w-2xl w-full pr-10">
            <Input typeInput="Search" placeholder="Search..." />
            <Button
              type="ButtonTextIcon"
              className="bg-[#a0a0a0] items-center text-white "
              text="Cari"
              icon={<BiSearch className="text-2xl" />}
            />
          </div>

          <div className=" flex flex-row gap-4 ">
            <label>
              <select
                className="w-[100px] px-2 py-2 focus:outline-none border rounded-md"
                name="selectedJenisPeserta"
                onChange={(e) => setShowTable(e.target.value)}
              >
                <option value={10}>Show 10</option>
                <option value={30}>Show 30</option>
                <option value={dataLaporan.length}>Show All</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mr-5">
          <div className=" w-full h-[70vh] mt-3 overflow-scroll pl-10 overflow-x-auto flex flex-col justify-between scrollbar-thin overflow-y-scroll ">
            <table className="table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
              <thead className="bg-[#E26848] text-white h-11 sticky top-0 border border-[#929292]">
                <tr className="w-full border border-[#929292]">
                  <th className="border border-[#929292]">No</th>
                  <th className="border border-[#929292]">Nama Aduan</th>
                  <th className="border border-[#929292]">Pelapor</th>
                  <th className="border border-[#929292]">tanggal diajukan</th>
                  <th className="border border-[#929292] md:w-[150px] w-[60px]">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentPageData.map((item, i) => {
                  return (
                    <CardTable
                      key={i}
                      No={i + 1}
                      NamaAduan={item.nama_aduan}
                      NamaPelapor={item.nama_pelapor}
                      Tanggal={item.tanggal_ajuan}
                      type="Pengaduan"
                    />
                  );
                })}
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
              activeClassName={
                "active bg-[#4BABD6] border-none text-white_color"
              }
              className="flex justify-center space-x-5 mt-0 flex-wrap w-full"
              previousClassName="flex justify-center items-center w-auto px-4 h-[35px] rounded-xl font-semibold text-text_color border-2 border-gray_color"
              nextClassName="border-2 border-gray_color border-gray-500 flex justify-center items-center w-auto px-4 h-[35px] rounded-xl font-semibold text-text_color"
              pageClassName="border-2 border-gray_color flex justify-center items-center w-[35px] h-[35px] rounded-full font-semibold text-text-black mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AduanAdmin;
