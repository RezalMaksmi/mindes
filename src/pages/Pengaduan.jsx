import React from 'react'
import { AduanAdmin, AduanUser } from '../components';

const Pengaduan = () => {
    const getUserDataFromLocalStorage = () => {
        const user = localStorage.getItem("userData"); 
        return user ? JSON.parse(user) : {};
      };
     
      const { token, role } = getUserDataFromLocalStorage();
    
  return (
    role === "admin" && token ? (
            <AduanAdmin />
        ) : (
            <AduanUser />
        )
  )
}

export default Pengaduan
