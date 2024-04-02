import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Input } from "../atoms";

const AddAjuanUser = () => {
  const acceptedTypes = [
    {
      query: "keterangan-penduduk",
      name: "Keterangan Penduduk",
    },
    {
      query: "pengantar-pembuatan-ktp",
      name: "Pengantar Pembuatan KTP",
    },
    {
      query: "pengantar-skck",
      name: "Pengantar SKCK",
    },
    {
      query: "keterangan-kematian",
      name: "Keterangan Kematian",
    },
    {
      query: "keterangan-ahli-waris",
      name: "Keterangan Ahli Waris",
    },
    {
      query: "keterangan-tidak-mampu",
      name: "Keterangan Tidak Mampu",
    },
  ];

  const navigate = useNavigate();

  const location = useLocation();
  const searchQueryParams = new URLSearchParams(location.search);
  const tipeQuery = searchQueryParams.get("tipe");

  const tipe = acceptedTypes.find((tipe) => tipe.query === tipeQuery);

  useEffect(() => {
    if (!tipe) {
      navigate("/ajuan");
    }
  }, []);

  switch (tipe.name) {
    case "Keterangan Penduduk":
      return (
        <div className="p-4 border mx-24 my-6 rounded-md">
          <h1 className="font-bold text-4xl">Buat Pengajuan Surat {tipe.name}</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-6 grid gap-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Nama</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">NIK</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Lahir</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Kelamin</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alamat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Pekerjaan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Surat</span>
              <Input
                placeholder=""
                className="max-w-[2/3] w-full"
                value={tipe.name}
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Surat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alasan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <input
              type="submit"
              value="Tambah"
              className="bg-blue-800 text-white rounded-md px-4 py-2 w-fit"
            />
          </form>
        </div>
      );

    case "Pengantar Pembuatan KTP":
      return (
        <div className="p-4 border mx-24 my-6 rounded-md">
          <h1 className="font-bold text-4xl">Buat Pengajuan {tipe.name}</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-6 grid gap-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Nama</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Kelamin</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Lahir</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alamat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Pekerjaan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Surat</span>
              <Input
                placeholder=""
                className="max-w-[2/3] w-full"
                value={tipe.name}
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Surat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alasan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <input
              type="submit"
              value="Tambah"
              className="bg-blue-800 text-white rounded-md px-4 py-2 w-fit"
            />
          </form>
        </div>
      );

    case "Pengantar SKCK":
      return (
        <div className="p-4 border mx-24 my-6 rounded-md">
          <h1 className="font-bold text-4xl">Buat Pengajuan Surat {tipe.name}</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-6 grid gap-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Nama</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">NIK</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Lahir</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Kelamin</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alamat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Pekerjaan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Surat</span>
              <Input
                placeholder=""
                className="max-w-[2/3] w-full"
                value={tipe.name}
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Surat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alasan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <input
              type="submit"
              value="Tambah"
              className="bg-blue-800 text-white rounded-md px-4 py-2 w-fit"
            />
          </form>
        </div>
      );

    case "Keterangan Kematian":
      return (
        <div className="p-4 border mx-24 my-6 rounded-md">
          <h1 className="font-bold text-4xl">Buat Pengajuan Surat {tipe.name}</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-6 grid gap-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Nama</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">NIK</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tempat / Tanggal Lahir</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Kelamin</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alamat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Pekerjaan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Surat</span>
              <Input
                placeholder=""
                className="max-w-[2/3] w-full"
                value={tipe.name}
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Surat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alasan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <p className="text-gray-500">Meninggal Dunia Pada</p>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Hari / Tanggal</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Waktu</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tempat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Di Makamkan di</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <input
              type="submit"
              value="Tambah"
              className="bg-blue-800 text-white rounded-md px-4 py-2 w-fit"
            />
          </form>
        </div>
      );
    case "Keterangan Ahli Waris":
      return (
        <div className="p-4 border mx-24 my-6 rounded-md">
          <h1 className="font-bold text-4xl">Buat Pengajuan Surat {tipe.name}</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-6 grid gap-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Nama</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">NIK</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Lahir</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Kelamin</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alamat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Pekerjaan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Surat</span>
              <Input
                placeholder=""
                className="max-w-[2/3] w-full"
                value={tipe.name}
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Surat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alasan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <input
              type="submit"
              value="Tambah"
              className="bg-blue-800 text-white rounded-md px-4 py-2 w-fit"
            />
          </form>
        </div>
      );
    case "Keterangan Tidak Mampu":
      return (
        <div className="p-4 border mx-24 my-6 rounded-md">
          <h1 className="font-bold text-4xl">Buat Pengajuan Surat {tipe.name}</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-6 grid gap-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Nama</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">NIK</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tempat / Tanggal Lahir</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Kelamin</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alamat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Pekerjaan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Jenis Surat</span>
              <Input
                placeholder=""
                className="max-w-[2/3] w-full"
                value={tipe.name}
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Tanggal Surat</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <span className="w-1/3">Alasan</span>
              <Input placeholder="" className="max-w-[2/3] w-full" />
            </div>

            <input
              type="submit"
              value="Tambah"
              className="bg-blue-800 text-white rounded-md px-4 py-2 w-fit"
            />
          </form>
        </div>
      );
    default:
      break;
  }
};

export default AddAjuanUser;
