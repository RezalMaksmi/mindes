import React from "react";
import news from "../../assets/news.png";

const NewsDetailsUser = () => {
  return (
    <section className="">
      <div className="flex flex-col w-fit justify-center items-center ml-24 my-10 border-2 h-full p-2 rounded-md">
        <img
          className="object-cover w-full max-w-full max-h-[500px] rounded-md"
          src={news}
          alt=""
        />
        <div className="flex flex-col text-left gap-5">
          <h1 className="font-semibold text-[20px] md:text-[32px]">
            Pagelaran Wayang Kulit dalam rangka Bersih Desa
          </h1>
          <p className="text-[14px] md:text-[20px] font-medium text-gray-500">
            18 Maret 2024
          </p>
          <p className="text-[14px] md:text-[20px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            nesciunt dolorem distinctio quibusdam ut in repellendus libero
            quidem. Unde officiis odit earum illum veritatis officia quos ipsam
            quia ullam repellat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nisi nesciunt dolorem distinctio quibusdam ut in
            repellendus libero quidem. Unde officiis odit earum illum veritatis
            officia quos ipsam quia ullam repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem quis temporibus voluptas
            praesentium tempore blanditiis molestiae neque mollitia! Odio ad
            numquam quas, molestiae dignissimos doloremque neque natus. Dolor,
            laudantium vero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailsUser;
