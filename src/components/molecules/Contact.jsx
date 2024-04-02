import React from "react";
import { Button, Input, Text } from "../atoms";
import { MapPin } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="h-auto  flex flex-col justify-center pb-10" id="kontak">
      <Text type="subtitle" text="Hubungi Kami" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-auto px-3 ">
        <form action="" className="bg-[#E0E9EF] rounded-lg md:w-fit w-full ">
          <h3 className="text-center font-semibold text-[24px] py-2 text-[#101A57]">
            Hubungi Kami
          </h3>
          <div className=" flex flex-col gap-5 px-3 py-3 justify-center items-center">
            <Input
              type="text"
              placeholder="Masukkan Nama anda"
              className="bg-white w-full md:w-[500px] rounded-md p-2"
            />
            <Input
              placeholder="Masukkan Email anda"
              className="bg-white w-full md:w-[500px] rounded-md p-2"
            />
            <textarea typeInput="InputMessage" className="h-[30vh] p-3 w-full md:w-[500px] rounded-md border border-gray-300 placeholder-gray-400 text-darkgray focus:outline-none" placeholder="Masukkan Pesan Anda" />
            <Button type="iconButton" text="Kirim" />
          </div>
        </form>
        <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
          <div className="md:w-[500px] w-full h-[220px] rounded-md bg-[#E0E9EF] p-3 flex flex-col gap-5 items-left justify-center ">
            <p className="flex gap-5 text-[#101A57] font-medium">
              <MapPin />
              Jl. Sebuah Alamat Gg. XI No. 2
            </p>
            <p className="flex gap-5 text-[#101A57] font-medium">
              <PhoneCall />
              0821-2938-9278
            </p>
            <p className="flex gap-5 text-[#101A57] font-medium">
              <Mail />
              contact@mindes.com
            </p>
          </div>
          <div className="md:w-[500px] w-full h-[240px] rounded-md bg-[#E0E9EF] pt-3 px-5 ">
            <h3 className="text-left font-semibold text-[24px] py-2 text-[#101A57]">
              Dapatkan INFO !
            </h3>
            <p className="text-[#101A57] font-medium">
              Dapatkan terus informasi terbaru dari kami, <br />
              silahkan berlangganan !
            </p>
            <div className="flex gap-2 mt-3 items-center justify-center ">
              <Input
                placeholder="Masukkan Email anda"
                className="bg-white w-[200px] md:w-[500px] rounded-md p-2"
              />
              <Button type="iconButton" text="Kirim" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
