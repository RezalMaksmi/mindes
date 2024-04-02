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
      link: "/ajuan/tambah?tipe=keterangan-penduduk",
    },
    {
      title: "Pengantar Pembuatan KTP",
      img: pembuatanKTP,
      link: "/ajuan/tambah?tipe=pengantar-pembuatan-ktp",
    },
    {
      title: "Pengantar SKCK",
      img: pengantarSKCK,
      link: "/ajuan/tambah?tipe=pengantar-skck",
    },
    {
      title: "Keterangan Kematian",
      img: keteranganKematian,
      link: "/ajuan/tambah?tipe=keterangan-kematian",
    },
    {
      title: "Keterangan Ahli Waris",
      img: keteranganAhliWaris,
      link: "/ajuan/tambah?tipe=keterangan-ahli-waris",
    },
    {
      title: "Keterangan tidak mampu",
      img: keteranganTidakMampu,
      link: "/ajuan/tambah?tipe=keterangan-tidak-mampu",
    },
  ];

  return (
    <div className={"px-32 py-8"}>
      <h1 className={"text-6xl font-bold mb-4"}>Pengajuan Surat</h1>
      <h2 className="text-2xl mb-4">Pilih surat yang ingin kamu ajukan</h2>

      <div className={"grid grid-cols-2 xl:grid-cols-3 justify-between gap-16"}>
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
