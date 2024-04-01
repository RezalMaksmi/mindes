
import React, { useState } from 'react';
import { Input } from '../atoms'
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const AddAduanUser = () => {
    const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    console.log('File dropped:', file);
    // Do something with the dropped file, e.g., upload it
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log('File selected:', file);
  };

  return (
    <div className="pl-[80px] w-full h-auto  flex justify-center ">
      <div className="bg-[#fff] mx-auto flex gap-4 flex-col w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 px-10">
        <div className="w-auto h-[55px] gap-2 pt-8  flex flex-row justify-start items-center cursor-pointer"
        onClick={()=> navigate("/aduan") }
        >
            <ArrowLeft className='text-base'/>
          <h2 className='text-xl font-semibold'>kembali</h2>
        </div>

        <div className="grid lg:col-span-3 col-span-3 rounded-xl pt-1 w-auto p-0 gap-5 items-start  content-start">

          <div className="grid lg:row-span-2 col-span-3 rounded-xl  h-auto w-auto lg:p-6 p-3 gap-7 border-2 border-[#C1C1C1] items-start  content-start">
            <div className="flex w-full justify-center  h-10 auto-cols-min	">
              <h2 className='text-2xl font-bold'>Buat Pengaduan</h2>
            </div>

            <div className="flex flex-row justify-between gap-8 w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <span className='min-w-max'>Judul Pengaduan</span>
                  <Input  placeholder="Masukkan Judul pengaduan" className="max-w-[500px] w-full"  />
                </div>
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <span className='min-w-max'>Tanggal Kejadian</span>
                  <Input type="date" className="max-w-[500px] w-full" />
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-full h-full">
                  <span className='min-w-max'>Deskripsi Kejadian</span>
                  <Input typeInput="InputMessage" placeholder="Masukkan Deskripsi kejadian" className="max-w-[600px] w-full h-full" />
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center justify-between w-full">
                <div className="flex flex-row gap-4 items-start justify-between w-full"
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <span className='min-w-max'>Tambah Gambar</span >
                  {
                  dragging ? 
                    <div className="dragging w-full">Drop here</div> 
                  : 
                  <div className="dropzone ">
                    <h1 className='text-base font-bold'>Seret dan tempel gambar yang ingin diunggah disini</h1>
                    <span className='text-base '>File yang didukung: JPG,PNG.</span>
                    <input type="file" onChange={handleFileSelect} style={{ display: 'none' }} />
                    <button
                    className='px-5 py-2 mt-3 rounded-md border border-gray-400' 
                    onClick={() => document.querySelector('input[type=file]').click()}>Pilih Gambar</button>
                  </div>
                  }
                </div>
              </div>
            </div>
            
              <div className="flex justify-end">
                <button className='px-3 py-2 rounded-md bg-[#1C305D] w-max text-white'>Tambah Berita</button>
              </div>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddAduanUser
