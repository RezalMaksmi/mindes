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
import { Navbar } from "./components/index";
import News from "./pages/News";

function App() {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  return (
    <BrowserRouter>
      <Navbar />

      {token ? (
        <Routes>
          <Route path="/dashboard" element={<DashboardUser />} />
          <Route path="/ajuan" element={<Pengajuan />} />
          <Route path="/aduan" element={<Pengaduan />} />
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
    </BrowserRouter>
  );
}

export default App;
