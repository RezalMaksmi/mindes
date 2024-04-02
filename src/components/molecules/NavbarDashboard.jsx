import React, {  useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { LuAlignRight,LuFileArchive,LuFileInput,LuLogOut,LuMailQuestion,LuMessageSquarePlus,LuX } from "react-icons/lu";
import {  BiChat, BiFile, BiHomeAlt, BiInfinite, BiMessage, BiMessageAltDetail, BiMessageAltDots, BiMessageDetail, BiMessageRounded, BiNews, } from "react-icons/bi";


const NavbarDashboard = () => {
    const [isHome, setIsHome] = useState(false);
    const [isShowData, setIsShowData] = useState(false);
    const [isShowArsip, setIsShowArsip] = useState(false);
    const [isShowAduan, setIsShowAduan] = useState(false);
    const [isShowAjuan, setIsShowAjuan] = useState(false);
    const [isShowNews, setIsShowNews] = useState(false);
    const [isShowLogout,setIsShownLogout] = useState(false);
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
      navigate("/")
      window.location.reload(false);
    };
  
   
    
  return (

    role === "user" && token ? (
        <div className={`px-3  left-0 top-0 bottom-0  w-20  bg-[#E3F1FF] transition-all z-20 fixed ${active ? `w-[180px]` : ``}`} >
            <div className="text-[#1283B6] text-2xl h-[80px] rounded-sm w-full flex justify-center items-center" onClick={() => setActive(!active)}>
              {active ? <LuX />  : <LuAlignRight />}
            </div>
            <div className="flex flex-col justify-between h-[85%] text-[#1283B6]  ">
              <div className="flex flex-col gap-3 ">
              <Link to={"/"} className={`${pathname === "/" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isHome ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsHome(true)}
                onMouseLeave={() => setIsHome(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <BiHomeAlt className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <div >
                        Home
                    </div>
                </Link>

                <Link to={"ajuan"} className={`${pathname === "/ajuan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowAjuan ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowAjuan(true)}
                onMouseLeave={() => setIsShowAjuan(false)}
                >
                    <div className="w-max ml-3  flex justify-center items-center">
                        <BiFile className="text-3xl w-[35px] h-[35px] " />
                    </div>
                    <div>
                        Ajuan
                    </div>
                </Link>

                <Link to={"aduan"} className={`${pathname === "/aduan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowAduan ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowAduan(true)}
                onMouseLeave={() => setIsShowAduan(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <LuMessageSquarePlus className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <span >
                        Aduan
                    </span>
                </Link>
              </div>

              <div className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowLogout ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`} onClick={handleLogout}
                onMouseEnter={() => setIsShownLogout(true)}
                onMouseLeave={() => setIsShownLogout(false)}
                >
                  <div className="w-max ml-3 flex justify-center items-center">
                    <LuLogOut className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <span>
                        Log Out
                    </span>
                </div>
            </div>
          </div>
    ) : (
        <div className={`px-3  left-0 top-0 bottom-0  w-20  bg-[#E3F1FF] transition-all z-20 fixed ${active ? `w-[220px]` : ``}`} >
            <div className="text-[#1283B6] text-2xl h-[80px] rounded-sm w-full flex justify-center items-center" onClick={() => setActive(!active)}>
              {active ? <LuX />  : <LuAlignRight />}
            </div>
            <div className="flex flex-col justify-between h-[85%] text-[#1283B6]  ">
              <div className="flex flex-col gap-3 ">
              <Link to={"/"} className={`${pathname === "/" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isHome ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsHome(true)}
                onMouseLeave={() => setIsHome(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <BiHomeAlt className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <div >
                        Home
                    </div>
                </Link>

                <Link to={"data"} className={`${pathname === "/data" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowData ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowData(true)}
                onMouseLeave={() => setIsShowData(false)}
                >
                    <div className="w-max ml-3  flex justify-center items-center">
                        <BiFile className="text-3xl w-[35px] h-[35px] " />
                    </div>
                    <div>
                        Data Penduduk
                    </div>
                </Link>
                
                <Link to={"ajuan"} className={`${pathname === "/ajuan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowAjuan ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowAjuan(true)}
                onMouseLeave={() => setIsShowAjuan(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <LuFileInput className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <span >
                        Surat Masuk
                    </span>
                </Link>

                <Link to={"arsip"} className={`${pathname === "/arsip" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowArsip ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowArsip(true)}
                onMouseLeave={() => setIsShowArsip(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <LuFileArchive className=" w-[35px] h-[35px] " />
                  </div>
                  <span >
                        Arsip Surat
                    </span>
                </Link>


                <Link to={"news"} className={`${pathname === "/news" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowNews ? `py-[11px] overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowNews(true)}
                onMouseLeave={() => setIsShowNews(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <BiNews className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <span >
                        Tambah Berita
                    </span>
                </Link>

                <Link to={"aduan"} className={`${pathname === "/aduan" ? "bg-[#1283B6] text-[#fff] rounded-lg" : "" } w-full h-[55px] flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowAduan ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShowAduan(true)}
                onMouseLeave={() => setIsShowAduan(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <BiMessageAltDetail className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <span >
                        Pengaduan
                    </span>
                </Link>
              </div>

              <div className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isShowLogout ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`} onClick={handleLogout}
                onMouseEnter={() => setIsShownLogout(true)}
                onMouseLeave={() => setIsShownLogout(false)}
                >
                  <div className="w-max ml-3 flex justify-center items-center">
                    <LuLogOut className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <span>
                        Log Out
                    </span>
                </div>
            </div>
          </div>
          )
  )
}

export default NavbarDashboard
