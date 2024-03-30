import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardUser, Home } from "./pages";
import { Navbar, PengajuanUser } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardUser />} />
        <Route path="/dashboard/ajuan" element={<PengajuanUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
