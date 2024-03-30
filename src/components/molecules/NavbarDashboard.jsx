import React, {  useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { LuAlignRight,LuLogOut,LuX } from "react-icons/lu";
import { BiSolidBookBookmark, BiSolidSelectMultiple, BiSolidUserDetail, BiSolidUserPlus, BiSpreadsheet } from "react-icons/bi";


const NavbarDashboard = () => {

    const [active, setActive] = React.useState(false);

    let navigate = useNavigate(); 
    const location = useLocation();
    const { pathname } = location;
  
  console.log(pathname)
    const getUserDataFromLocalStorage = () => {
      const user = localStorage.getItem("userData"); 
      return user ? JSON.parse(user) : {};
    };
   
    const { token, role } = getUserDataFromLocalStorage();
    
    const handleLogout = () => {
      localStorage.removeItem("userData");
      navigate("/login")
    };
  
    console.log(localStorage)
  
  
    const [isHome, setIsHome] = useState(false);
    const [isShownAduan, setIsShownAduan] = useState(false);
    const [isShownAjuan, setIsShownAjuan] = useState(false);
    
  return (
  
      <div className={`px-3  left-0 top-0 bottom-0  w-20  bg-[#E3F1FF] transition-all z-20 fixed ${active ? `w-[180px]` : ``}`} >
            <div className="text-[#1283B6] text-2xl h-[80px] rounded-sm w-full flex justify-center items-center" onClick={() => setActive(!active)}>
              {active ? <LuX />  : <LuAlignRight />}
            </div>
            <div className="flex flex-col justify-between h-[85%] text-[#1283B6]  ">
              <div className="flex flex-col gap-3 ">
              <div className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isHome ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsHome(true)}
                onMouseLeave={() => setIsHome(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <BiSolidUserDetail className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <Link to="" className={pathname === "/" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
                        Home
                    </Link>
                </div>

                <div className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isShownAjuan ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShownAjuan(true)}
                onMouseLeave={() => setIsShownAjuan(false)}
                >
                    <div className="w-max ml-3  flex justify-center items-center">
                        <BiSolidSelectMultiple className="text-3xl w-[35px] h-[35px] " />
                    </div>
                    <Link to="ajuan" className={pathname === "/ajuan" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
                        Ajuan
                    </Link>
                </div>

                <div className={`w-full py-2 flex justify-start items-center flex-row gap-4 overflow-hidden ${isShownAduan ? `overflow-visible w-max text-white bg-[#1283B6] rounded-lg pr-5 ` : `overflow-hidden`}`}
                onMouseEnter={() => setIsShownAduan(true)}
                onMouseLeave={() => setIsShownAduan(false)}
                >
                  <div className="w-max ml-3  flex justify-center items-center">
                    <BiSpreadsheet className="text-3xl w-[35px] h-[35px] " />
                  </div>
                  <Link to="aduan" className={pathname === "/aduan" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
                        Aduan
                    </Link>
                </div>
              </div>
              <LuLogOut  className="text-3xl w-[30px] h-[30px]  ml-3" onClick={handleLogout} />
            </div>
          </div>
 
  )
}

export default NavbarDashboard
