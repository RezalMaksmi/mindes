import React from "react";
import CardArticles from "./CardArticles";
import articles from "../../assets/articles-img.png";

const articlesData = [
  {
    image: articles,
    title: "Pintu Digital Masuk Desa",
    desc: "masyarakat dapat lebih mudah dalam pembuatan system surat administrasi kependudukan...",
  },
  {
    image: articles,
    title: "Pintu Digital Masuk Desa",
    desc: "masyarakat dapat lebih mudah dalam pembuatan system surat administrasi kependudukan...",
  },
  {
    image: articles,
    title: "Pintu Digital Masuk Desa",
    desc: "masyarakat dapat lebih mudah dalam pembuatan system surat administrasi kependudukan...",
  },
];

const Artikel = () => {
  return (
    <section className="h-full bg-[#E0E9EF] py-10" id="artikel">
      <div className="text-center">
        <h1 className="font-bold text-[30px] md:text-[48px] text-[#101A57]">Artikel MINDES</h1>
        <h3 className="font-medium text-[12px] md:text-[20px] text-[#101A57]">
          Baca artikel MINDES seputar teknologi masa kini.
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center my-10 gap-5 lg:gap-10 text-[#101A57] ">
        {articlesData.map((article, index) => (
          <CardArticles
            image={article.image}
            title={article.title}
            description={article.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Artikel;
