import React, { useState } from "react";
import { Element } from "react-scroll";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about" id="">
      <div className="container-about">
        <div className="about-slider" id="aboutSlider">
          <div className="textos">
            <h2>Detrás de un gran Odontólogo hay un gran Laboratorio Dental.</h2>
            
          </div>
        </div>
        {/*<button
          className="btn-about"
          id="1"
          onClick={(e) => hadleSlider(e, !isSlider)}
        >
          1
        </button>
        <button
          className="btn-about"
          id="2"
          onClick={(e) => hadleSlider(e, !isSlider)}
        >
          2
  </button>*/}
      </div>
    </div>
  );
};


export default About;
