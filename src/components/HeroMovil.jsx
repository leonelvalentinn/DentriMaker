import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Slider1 from "../assets/bg-movil.jpg";
import Slider2 from "../assets/bg-movil-2.jpg";
import "../styles/heromovil.css";

const HeroMovil = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} className="img-slider" />
          <div className="texto-hero">
            <div className="container-texto-hero">
              <h2>Laboratorio Dental en CDMX</h2> <br />
              <p>Laboratorio Dental con envíos a domicilio en toda la ciudad. Cotiza tus trabajos.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="img-slider" />
          <div className="texto-hero">
            <div className="container-texto-hero">
              <h2>Laboratorio Dental en CDMX</h2> <br />
              <p>Laboratorio Dental con envíos a domicilio en toda la ciudad. Cotiza tus trabajos.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroMovil;
