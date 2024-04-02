import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LuAlignRight,
  LuFileArchive,
  LuFileInput,
  LuLogOut,
  LuMailQuestion,
  LuMessageSquarePlus,
  LuX,
} from "react-icons/lu";
import {
  BiChat,
  BiFile,
  BiHomeAlt,
  BiInfinite,
  BiMessage,
  BiMessageAltDetail,
  BiMessageAltDots,
  BiMessageDetail,
  BiMessageRounded,
  BiNews,
} from "react-icons/bi";

const NavbarDashboard = () => {
  const [isHome, setIsHome] = useState(false);
  const [isShowData, setIsShowData] = useState(false);
  const [isShowArsip, setIsShowArsip] = useState(false);
  const [isShowAduan, setIsShowAduan] = useState(false);
  const [isShowAjuan, setIsShowAjuan] = useState(false);
  const [isShowNews, setIsShowNews] = useState(false);
  const [isShowLogout, setIsShownLogout] = useState(false);
  const [active, setActive] = React.useState(false);

  let navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };

  const { token, role } = getUserDataFromLocalStorage();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
    window.location.reload(false);
  };

  return role === "user" && token ? (
    <div
      className={`px-3 md:left-0 md:right-0 left-3 right-3  md:top-0  md:bottom-0 bottom-3 w-20 bg-[#E3F1FF] md:rounded-none rounded-md transition-all z-20 fixed ${
        active ? `md:w-[180px] w-auto` : `md:w-20 w-auto`
      }`}
    >
      <div
        className="text-[#1283B6] text-2xl h-[80px] rounded-sm w-full md:flex hidden justify-center items-center "
        onClick={() => setActive(!active)}
      >
        {active ? <LuX /> : <LuAlignRight />}
      </div>
      <div className="flex md:flex-col flex-row justify-between h-[85%] text-[#1283B6]  md:py-0 py-2">
        <div className="flex md:flex-col flex-row gap-3 justify-between w-full ">
          <Link
            to={"/"}
            className={`${
              pathname === "/" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full md:py-2 py-0 flex md:justify-start justify-center items-center flex-row gap-4 overflow-hidden ${
              isHome
                ? `md:overflow-visible md:w-max w-auto text-white bg-[#1283B6]  rounded-lg pr-4`
                : `overflow-hidden pr-4`
            }`}
            onMouseEnter={() => setIsHome(true)}
            onMouseLeave={() => setIsHome(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <BiHomeAlt className="md:text-3xl text-2xl md:w-[35px] md:h-[35px] " />
            </div>
            <div className="md:flex hidden">Home</div>
          </Link>

          <Link
            to={"ajuan"}
            className={`${
              pathname === "/ajuan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full md:py-2 py-0 flex md:justify-start justify-center items-center flex-row gap-4 overflow-hidden ${
              isShowAjuan
                ? `md:overflow-visible md:w-max w-auto text-white bg-[#1283B6] rounded-lg pr-4 `
                : `overflow-hidden pr-4`
            }`}
            onMouseEnter={() => setIsShowAjuan(true)}
            onMouseLeave={() => setIsShowAjuan(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <BiFile className="md:text-3xl text-2xl md:w-[35px] md:h-[35px] " />
            </div>
            <div className="md:flex hidden">Ajuan</div>
          </Link>

          <Link
            to={"aduan"}
            className={`${
              pathname === "/aduan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full md:py-2 py-0 flex md:justify-start justify-center items-center flex-row gap-4 overflow-hidden ${
              isShowAduan
                ? `md:overflow-visible md:w-max w-auto text-white bg-[#1283B6] rounded-lg pr-4 `
                : `overflow-hidden pr-4`
            }`}
            onMouseEnter={() => setIsShowAduan(true)}
            onMouseLeave={() => setIsShowAduan(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <LuMessageSquarePlus className="md:text-3xl text-2xl md:w-[35px] md:h-[35px] " />
            </div>
            <span className="md:flex hidden">Aduan</span>
          </Link>
        </div>

        <div
          className={`md:w-full w-max py-2 flex md:justify-start justify-center  items-center flex-row gap-4 overflow-hidden ${
            isShowLogout
              ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
              : `overflow-hidden pr-5`
          }`}
          onClick={handleLogout}
          onMouseEnter={() => setIsShownLogout(true)}
          onMouseLeave={() => setIsShownLogout(false)}
        >
          <div className="md:w-max md:ml-3 ml-3 mx-0 flex justify-center items-center w-[85px] h-[35px] text-center">
            <LuLogOut className="md:text-3xl text-2xl mx-auto " />
          </div>
          <span className="md:flex hidden">Log Out</span>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`px-3  left-0 top-0 bottom-0  w-20  bg-[#E3F1FF] transition-all z-20 fixed ${
        active ? `w-[220px]` : ``
      }`}
    >
      <div
        className="text-[#1283B6] text-2xl h-[80px] rounded-sm w-full flex justify-center items-center"
        onClick={() => setActive(!active)}
      >
        {active ? <LuX /> : <LuAlignRight />}
      </div>
      <div className="flex flex-col justify-between h-[85%] text-[#1283B6]  ">
        <div className="flex flex-col gap-3 ">
          <Link
            to={"/"}
            className={`${
              pathname === "/" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${
              isHome
                ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                : `overflow-hidden`
            }`}
            onMouseEnter={() => setIsHome(true)}
            onMouseLeave={() => setIsHome(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <BiHomeAlt className="text-3xl w-[35px] h-[35px] " />
            </div>
            <div>Home</div>
          </Link>

          <Link
            to={"data"}
            className={`${
              pathname === "/data" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${
              isShowData
                ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                : `overflow-hidden`
            }`}
            onMouseEnter={() => setIsShowData(true)}
            onMouseLeave={() => setIsShowData(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <BiFile className="text-3xl w-[35px] h-[35px] " />
            </div>
            <div>Data Penduduk</div>
          </Link>

          <Link
            to={"ajuan"}
            className={`${
              pathname === "/ajuan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${
              isShowAjuan
                ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                : `overflow-hidden`
            }`}
            onMouseEnter={() => setIsShowAjuan(true)}
            onMouseLeave={() => setIsShowAjuan(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <LuFileInput className="text-3xl w-[35px] h-[35px] " />
            </div>
            <span>Surat Masuk</span>
          </Link>

          <Link
            to={"arsip"}
            className={`${
              pathname === "/arsip" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${
              isShowArsip
                ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                : `overflow-hidden`
            }`}
            onMouseEnter={() => setIsShowArsip(true)}
            onMouseLeave={() => setIsShowArsip(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <LuFileArchive className=" w-[35px] h-[35px] " />
            </div>
            <span>Arsip Surat</span>
          </Link>

          <Link
            to={"news"}
            className={`${
              pathname === "/news" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${
              isShowNews
                ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                : `overflow-hidden`
            }`}
            onMouseEnter={() => setIsShowNews(true)}
            onMouseLeave={() => setIsShowNews(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <BiNews className="text-3xl w-[35px] h-[35px] " />
            </div>
            <span>Tambah Berita</span>
          </Link>

          <Link
            to={"aduan"}
            className={`${
              pathname === "/aduan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : ""
            } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${
              isShowAduan
                ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
                : `overflow-hidden`
            }`}
            onMouseEnter={() => setIsShowAduan(true)}
            onMouseLeave={() => setIsShowAduan(false)}
          >
            <div className="w-max ml-3  flex justify-center items-center">
              <BiMessageAltDetail className="text-3xl w-[35px] h-[35px] " />
            </div>
            <span>Pengaduan</span>
          </Link>
        </div>

        <div
          className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${
            isShowLogout
              ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 `
              : `overflow-hidden`
          }`}
          onClick={handleLogout}
          onMouseEnter={() => setIsShownLogout(true)}
          onMouseLeave={() => setIsShownLogout(false)}
        >
          <div className="w-max ml-3 flex justify-center items-center">
            <LuLogOut className="text-3xl w-[35px] h-[35px] " />
          </div>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
