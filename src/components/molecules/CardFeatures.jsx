import React from "react";
import vectorDadm from "../../assets/vector-dadm.png";
import vectorNews from "../../assets/vector-news.png";
import vectorlivereport from "../..//assets/vector-liverp.png";
import Card from "./Card";

const featuresData = [
  {
    image: vectorDadm,
    title: "Digital Administrasi",
    description:
      "masyarakat dapat lebih mudah dalam pembuatan system surat administrasi kependudukan",
  },
  {
    image: vectorNews,
    title: "Berita",
    description:
      "masyarakat dapat lebih mudah dalam pembuatan system surat administrasi kependudukan",
  },
  {
    image: vectorlivereport,
    title: "Live Report",
    description:
      "masyarakat dapat lebih mudah dalam pembuatan system surat administrasi kependudukan",
  },
];

const CardFeatures = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-5 items-center mx-auto lg:mx-[50px] my-10">
      {featuresData.map((items, index) => (
        <Card
          key={index}
          image={items.image}
          title={items.title}
          description={items.description}
        />
      ))}
    </section>
  );
};

export default CardFeatures;
