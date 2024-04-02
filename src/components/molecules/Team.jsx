import React from "react";
import Text from "../atoms/Text";
import CardProfile from "../molecules/CardProfile";
import hustler from "../../assets/profileTeam/profile-hasyim.png";
import hipster from "../../assets/profileTeam/profile-aura.png";
import hacker1 from "../../assets/profileTeam/profile-rizqi.png";
import hacker2 from "../../assets/profileTeam/profile-rezal.png";
import hacker3 from "../../assets/profileTeam/profile-rezal.png";
// Import Swiper styles
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const dataProfile = [
  {
    image: hustler,
    name: "Hasyim",
    role: "Hustler",
  },
  {
    image: hipster,
    name: "Aura",
    role: "Hipster",
  },
  {
    image: hacker1,
    name: "Rizqi",
    role: "Hacker",
  },
  {
    image: hacker2,
    name: "Rezal",
    role: "Hacker",
  },
  {
    image: hacker3,
    name: "Frans",
    role: "Hacker",
  },
];

const Team = () => {
  return (
    <section className="h-full pb-20 flex flex-col justify-center items-center bg-[#fff]">
      <Text  type="subtitle" text="Team" />

      <div className="container items-center px-3">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper ">
          {dataProfile.map((prf, index) => (
            <SwiperSlide key={index}>
              <CardProfile image={prf.image} name={prf.name} role={prf.role} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
