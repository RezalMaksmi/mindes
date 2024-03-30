import React from 'react'
import NavTop from '../components/atoms/NavTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeUser, NavbarDashboard, PengajuanUser } from '../components'

const DashboardUser = () => {
  return (
    <div className="pl-[80px] w-full h-screen  flex justify-center ">
      <div className=" bg-white mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        <NavTop />
        <NavbarDashboard />

            <Routes>
                <Route path="/" element={<HomeUser />} />
                <Route path="/dashboard/ajuan" element={<PengajuanUser />} />
            </Routes>
      

      </div>
    </div>
  )
}

export default DashboardUser
