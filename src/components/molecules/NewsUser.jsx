import React from "react";
import news from "../../assets/news.png";
import { Link } from "react-router-dom"; // Jika menggunakan React Router

const newsData = [
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
  {
    image: news,
    title: "Judul Berita",
    date: "18 Maret 2024",
  },
];

const NewsUser = () => {
  return (
    <div className="w-full h-full flex justify-center items-center my-5">
      <div className="w-[180vh] h-full items-center flex flex-col justify-center bg-white rounded-lg border-2">
        <h1 className="font-bold text-[20px] md:text-[30px] text-center">
          Berita Terbaru
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 items-center lg:ml-20 object-contain ">
          {newsData.map((nws, index) => (
            <div
              key={index}
              className="mx-auto w-full md:w-[300px] lg:w-[400px] xl:h-[471px] p-4 hover:scale-105 transition-all cursor-pointer shadow-md">
              <Link to="/news/details">
                <img className="object-cover" src={nws.image} alt="" />
              </Link>
              <h3 className="text-[16px] font-semibold">{nws.title}</h3>
              <p className="font-medium text-gray-400">{nws.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsUser;
