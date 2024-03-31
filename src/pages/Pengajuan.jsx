import React from 'react'
import { PengajuanAdmin, PengajuanUser } from '../components';

const Pengajuan = () => {
    const getUserDataFromLocalStorage = () => {
        const user = localStorage.getItem("userData"); 
        return user ? JSON.parse(user) : {};
      };
     
      const { token, role } = getUserDataFromLocalStorage();
    
  return (
    role === "admin" && token ? (
            <PengajuanAdmin />
        ) : (
            <PengajuanUser />
        )
  )
}

export default Pengajuan
