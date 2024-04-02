import React from "react";
import keteranganPenduduk from "../../assets/card-keterangan-penduduk.png";
import pembuatanKTP from "../../assets/card-pengantar-pembuatan-ktp.png";
import pengantarSKCK from "../../assets/card-pengantar-skck.png";
import keteranganTidakMampu from "../../assets/card-keterangan-tidak-mampu.png";
import keteranganKematian from "../../assets/card-keterangan-kematian.png";
import keteranganAhliWaris from "../../assets/card-keterangan-ahli-waris.png";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const DashboardPengajuanUser = () => {
  const navigate = useNavigate();
  const pengajuanCardData = [
    {
      title: "Keterangan Penduduk",
      img: keteranganPenduduk,
      link: "/ajuan/",
    },
    {
      title: "Pengantar Pembuatan KTP",
      img: pembuatanKTP,
      link: "/ajuan/",
    },
    {
      title: "Pengantar SKCK",
      img: pengantarSKCK,
      link: "/ajuan/",
    },
    {
      title: "Keterangan Kematian",
      img: keteranganKematian,
      link: "/ajuan/",
    },
    {
      title: "Keterangan Ahli Waris",
      img: keteranganAhliWaris,
      link: "/ajuan/",
    },
    {
      title: "Keterangan tidak mampu",
      img: keteranganTidakMampu,
      link: "/ajuan/",
    },
  ];

  return (
    <div className={"md:px-32 px-5 py-8"}>
      <h1 className={"md:text-5xl text-2xl font-bold md:mb-4 mb-1"}>
        Pengajuan Surat
      </h1>
      <h2 className="md:text-2xl text-base mb-4">
        Pilih surat yang ingin kamu ajukan
      </h2>

      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2  justify-between md:gap-16 gap-5"
        }
      >
        {pengajuanCardData.map((item, index) => (
          <Card
            key={index}
            image={item.img}
            title={item.title}
            onClick={
              item.link
                ? () => {
                    navigate(item.link);
                  }
                : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPengajuanUser;
