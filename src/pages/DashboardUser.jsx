import React, {useState, useEffect} from 'react'
import { HomeAdmin, HomeUser } from '../components'

const DashboardUser = () => {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData"); 
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();



  return (
    <div className="pl-[80px] w-full h-auto  flex justify-center ">
      <div className=" bg-white mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        {
          role === "admin" && token ? (
            <HomeAdmin />
            ) :(
            <HomeUser />
          )
        }
       

      </div>
    </div>
  )
}

export default DashboardUser
