import React from 'react'
import { Button } from '../atoms'
import { BiCheckCircle, BiEdit,  BiShow } from 'react-icons/bi'
import { LuDelete } from 'react-icons/lu'

const CardTable = (props) => {
    const {No, NomorSurat, NamaPemohon, JenisSurat, Tanggal, ActShow, ActEdit, ActDelete, type, NamaAduan, NamaPelapor} = props

    switch (type) {
    case "Ajuan":
    return (
      <tr className='border border-[#929292] '>
        <td className='border py-3 border-[#929292] px-2'>{No}</td>
        <td className='border border-[#929292] px-2'>{NomorSurat}</td>
        <td className='border border-[#929292] px-2'>{NamaPemohon}</td>
        <td className='border border-[#929292] px-2'>{JenisSurat}</td>
        <td className='border border-[#929292] px-2'>{Tanggal}</td>
        <td className='flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2'>
          <Button type="ButtonTextIcon" className="bg-[#58b4ad] items-center text-white " onClick={ActShow} icon={<BiCheckCircle />} text="Proses" />
        </td>
      </tr>  
    );
    case "Arsip" :
    return (
      <tr className='border border-[#929292] '>
        <td className='border py-3 border-[#929292] px-2'>{No}</td>
        <td className='border border-[#929292] px-2'>{NomorSurat}</td>
        <td className='border border-[#929292] px-2'>{NamaPemohon}</td>
        <td className='border border-[#929292] px-2'>{JenisSurat}</td>
        <td className='border border-[#929292] px-2'>{Tanggal}</td>
        <td className='flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2'>
          <Button type="ButtonTextIcon" className="bg-[#58b4ad] items-center text-white " onClick={ActShow} icon={<BiCheckCircle />} text="Selesai" />
        </td>
      </tr>  
    );
    case "Pengaduan" :
    return (
      <tr className='border border-[#929292] '>
        <td className='border py-3 border-[#929292] px-2'>{No}</td>
        <td className='border border-[#929292] px-2'>{NamaAduan}</td>
        <td className='border border-[#929292] px-2'>{NamaPelapor}</td>
        <td className='border border-[#929292] px-2'>{Tanggal}</td>
        <td className='flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2'>
          <Button type="ButtonTextIcon" className="bg-[#58b4ad] items-center text-white " onClick={ActShow} icon={<BiCheckCircle />} text="Selesai" />
        </td>
      </tr>  
    );
    default:
    return (
      <tr className='border border-[#929292] '>
        <td className='border py-3 border-[#929292] px-2'>{No}</td>
        <td className='border border-[#929292] px-2'>{NomorSurat}</td>
        <td className='border border-[#929292] px-2'>{NamaPemohon}</td>
        <td className='border border-[#929292] px-2'>{JenisSurat}</td>
        <td className='border border-[#929292] px-2'>{Tanggal}</td>
        <td className='flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2'>
          <Button type="IconButton"  className="bg-[#58b4ad] items-center text-white " onClick={ActEdit} icon={<BiEdit />} />
          <Button type="IconButton" className="bg-[#4BABD6] items-center text-white " onClick={ActShow} icon={<BiShow />} />
          <Button type="IconButton" className="bg-[#FF4E4E] items-center text-white " onClick={ActDelete} icon={<LuDelete />} />        
        </td>
      </tr>
      )
    }
  
}

export default CardTable
