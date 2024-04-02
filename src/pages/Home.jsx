import React from "react";
import "../../src/index.css";
import background from "../assets/village-landingpage.png";
import {
  About,
  Artikel,
  Benefit,
  Contact,
  Features,
  Team,
} from "../components/molecules";
import { Text } from "../components/atoms";
import DashboardUser from "./DashboardUser";

const Home = () => {
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : {};
  };

  const { token, role } = getUserDataFromLocalStorage();

  return role && token ? (
    <DashboardUser />
  ) : (
    <section className=" mx-auto" id="home">
      <div
        className="w-full h-[100vh] flex flex-col justify-center md:items-start  bg-no-repeat lg:bg-cover lg:mt-[110px] mt-[50px] bg-contain bg-bottom"
        style={{ backgroundImage: `URL(${background})` }}
      >
        <div className="container mx-auto lg:pl-24 pl-0 mt-[-200px]">
          <Text
            type="title"
            className="w-full text-center mx-auto lg:mx-0"
            text="Administrasi Digital Desa"
          />
          <h3 className="text-[10px] md:text-[20px] lg:text-start text-center font-medium z-20">
            Desa Mindes menghadirkan solusi efektifitas pelayanan <br />
            masyarakat menuju indonesia maju.
          </h3>
        </div>
      </div>
      <About id="about" />
      <Features id="fitur" />
      <Benefit />
      <Team />
      <Artikel id="artikel" />
      <Contact id="contact" />
    </section>
  );
};

export default Home;
