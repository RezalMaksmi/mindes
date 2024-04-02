import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DashboardUser,
  Home,
  Login,
  Pengaduan,
  Pengajuan,
  Arsip,
  DataPenduduk,
} from "./pages";

import News from "./pages/News";
import { AddAduanUser, AduanUser, Footer, Navbar } from "./components";

function App() {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  return (
    <BrowserRouter>
      <Navbar />

      {token && role ? (
        <Routes>
          <Route path="/" element={<DashboardUser />} />
          <Route path="/ajuan" element={<Pengajuan />} />
          <Route path="/aduan" element={<Pengaduan />} />
          <Route path="/aduan/tambah" element={<AddAduanUser />} />
          <Route path="/arsip" element={<Arsip />} />
          <Route path="/data" element={<DataPenduduk />} />
          <Route path="/news" element={<News />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
