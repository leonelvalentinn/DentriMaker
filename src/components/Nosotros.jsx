import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../assets/bruno.jpg";
import Slider2 from "../assets/slider1.jpg";
import Slider3 from "../assets/slider3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/nosotros.css";
import { useEffect, useState, useCallback } from "react";

const Nosotros = () => {
  return (
    <div>
      <div className="promo">
        <div className="title">
          <h2>Datos Dentrimaker</h2>
          <hr />
        </div>
        <section className="nosotros">
        <div className="slider-nosotros">
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
              <img src={Slider1} className="img-slider-nosotros" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} className="img-slider-nosotros" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} className="img-slider-nosotros" />
            </SwiperSlide>
          </Swiper>
        </div>
          <div className="txt-nosotros">
            <h3>Laboratorio Dental con envíos a la puerta de tu clínica o consultorio</h3>
            <h1>No sólo hacemos dientes... <br />¡Los perfeccionamos!</h1>
            <p>En DentriMaker ofrecemos servicios de calidad que ayudan en gran medida a garantizar que se cumplan sus 
              requisitos. Contamos con profesionales capacitados, que tienen los conocimientos técnicos necesarios sobre 
              el tema. Nuestro servicio al cliente se centra en encontrar soluciones a sus problemas, nuestras reseñas 
              demuestran que puede confiar en nosotros.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;
