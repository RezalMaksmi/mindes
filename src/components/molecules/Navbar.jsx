// import React from 'react'
import React from "react";
import logo from "../../assets/Logo_Mindes.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { LuAlignRight } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { NavTop } from "../atoms";
import NavbarDashboard from "./NavbarDashboard";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();


  const loginUser = () => {
    navigate("/login");
}

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData"); 
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();
  
  return (
<>
    {
    role && token ? (
      <>
        <div className="w-full">
          <NavTop />
        </div>
        <NavbarDashboard />
      </>
    ) : (
      <div className="  lg:px-10 px-3 fixed top-5 w-full flex justify-center z-50">
        <section className="container rounded-full bg-white shadow border w-full ">
          <div className="  w-full h-full mx-auto px-8 lg:px-24 py-1 lg:py-3 flex justify-between relative items-center ">
            <div className="h-9 my-2 flex justify-center items-center">
              <img src={logo} alt="" className="lg:h-full h-[60%]" />
            </div>
            <ul
              className={`${
                active
                  ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2 items-center"
                  : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2 items-center"
              } `}>
              
             { pathname === "/login" ? (
                <li className="h-full flex justify-center items-center hover:text-orange-500 hover:scale-105 transition-all ">
                <Link
                  to="/"
                  className={
                    pathname === "#about"
                      ? "text-orange-500 "
                      : "w-full max-[1000px]:px-3 "
                  }>
                  Home
                </Link>
              </li>
              ):(
              <>
              <li className="h-full flex justify-center items-center hover:text-orange-500 hover:scale-105 transition-all ">
                <a
                  href="#about"
                  className={
                    pathname === "#about"
                      ? "text-orange-500 "
                      : "w-full max-[1000px]:px-3 "
                  }>
                  Tentang
                </a>
              </li>
              <li className="h-full flex justify-center items-center  hover:text-orange-500 hover:scale-105 transition-all ">
                <a
                  href="#fitur"
                  className={
                    pathname === "#fitur"
                      ? "text-orange-500"
                      : "w-full max-[1000px]:px-3 "
                  }>
                  Fitur
                </a>
              </li>
              <li className="h-full flex justify-center items-center  hover:text-orange-500 hover:scale-105 transition-all ">
                <a
                  href="#artikel"
                  className={
                    pathname === "#artikel"
                      ? "text-orange-500"
                      : "w-full max-[1000px]:px-3"
                  }>
                  Artikel
                </a>
              </li>
              <li className="h-full flex justify-center items-center  hover:text-orange-500 hover:scale-105 transition-all ">
                <a
                  href="#kontak"
                  className={
                    pathname === "#kontak"
                      ? "text-orange-500"
                      : "w-full max-[1000px]:px-3"
                  }>
                  Kontak
                </a>
              </li>
              </>
              )
            }
              <Link 
                to="login"
                className={
                  pathname === "/user-login"
                    ? "boderr-active"
                    : "bg-orange-500 text-white px-4 py-1 rounded-full hover:scale-105 transition-all w-[75px] text-center"
                }
                onClick={loginUser}
                >
                Login
              </Link>
            </ul>

            <div
              className="hidden  max-[1000px]:contents w-[20px] h-[20px]"
              onClick={() => setActive(!active)}>
              {active ? <LuX /> : <LuAlignRight />}
            </div>
          </div>
        </section>
      </div>
      )
    }
    </>
  );
};

export default Navbar;
