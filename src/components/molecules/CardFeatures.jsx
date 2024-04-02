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
    <section className="grid grid-cols-1 lg:grid-cols-[repeat(3,_300px)] gap-5 my-10 justify-center px-8">
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
