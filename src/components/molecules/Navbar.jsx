// import React from 'react'
import React from "react";
import logo from "../../assets/Logo_Mindes.png"
import { Link,  useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className=" px-5 fixed top-5 w-full flex justify-center">
    <section className=" rounded-full bg-white shadow border w-full">
      <div className="  w-full h-full mx-auto px-10 lg:px-24 py-2 lg:py-3 flex justify-between relative items-center ">
        <div className="h-9 my-2">
          <img src={logo} alt="" className="h-full" />
        </div>
        <ul
            className={`${
              active
                ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2"
                : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2"
            } `}
          >
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="/" className={pathname === "/" ? "borderr_active " : "w-full max-[1000px]:px-3"}>
                Tentang
              </Link>
            </li>
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="fitur" className={pathname === "/fitur" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
                Fitur
              </Link>
            </li>
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="artikel" className={pathname === "/artikel" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
                Artikel
              </Link>
            </li>
            <li className="h-full flex justify-center items-center borderr ">
              <Link to="kontak" className={pathname === "/kontak" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
                Kontak
              </Link>
            </li>
        </ul>
        <div className="hidden  max-[1000px]:contents w-[20px] h-[20px]" onClick={() => setActive(!active)}>
          {active ? <>=</> : <>+</>}
        </div>
       
     </div>
    
    </section>
    </div>
  )
}

export default Navbar;
