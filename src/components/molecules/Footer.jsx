import ListFooterNav from "./ListFooterNav";
import Logo from "../../assets/Logo_Mindes.png";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../../assets/icons/SosialLinkIcon";

const Footer = () => {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  return token && role ? (
    <footer className="bg-[#ffffff] w-full py-3 md:border border-0 mt-3 md:mb-0 mb-20">
      <div className="text-center">&copy; 2024 MINDES All rights reserved.</div>
    </footer>
  ) : (
    <footer className="bg-[#101A57] w-full ">
      <section className="text-white container bg-[#101A57] px-4 py-5  mx-auto md:px-20">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <img src={Logo} alt="" />

              <p className="leading-relaxed mt-2 text-[15px]">
                A modal dialog that interrupts the user with important content
                and expects a response.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-2">
                <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                    <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110 cursor-pointer">
                      <a href="/">
                        <Facebook />
                      </a>
                    </li>

                    <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110 cursor-pointer">
                      <a href="/">
                        <Twitter />
                      </a>
                    </li>

                    <li className="w-10 h-10 border rounded-full flex items-center justify-center  hover:bg-blue-500 transition-all hover:scale-110 cursor-pointer">
                      <a href="/">
                        <Instagram />
                      </a>
                    </li>

                    <li className="w-10 h-10 border rounded-full flex items-center justify-center  hover:bg-blue-500 transition-all hover:scale-110 cursor-pointer">
                      <a href="/">
                        <LinkedIn />
                      </a>
                    </li>
                    <li className="w-10 h-10 border rounded-full flex items-center justify-center  hover:bg-blue-500 transition-all hover:scale-110 cursor-pointer">
                      <a href="/">
                        <Youtube />
                      </a>
                    </li>
                  </ul>
                </div>
              </label>
              <div className=" flex items-center rounded-md p-1 max-w-56"></div>
            </form>
          </div>
          <ListFooterNav />
        </div>

        <div className="text-center mt-10">
          &copy; 2024 MINDES All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
