import React, { useState } from "react";
import { Element } from "react-scroll";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about" id="">
      <div className="container-about">
        <div className="about-slider" id="aboutSlider">
          <div className="textos">
            <h2>¿Qué es un Laboratorio Dental Digital?</h2>
            <span>
              Un <strong>laboratorio dental</strong> es donde se elaboran las piezas y prótesis dentales. En el pasado estas piezas se elaboraban a mano. Gracias al desarrollo tecnológico ahora los laboratorios dentales cuentan con tecnología digital, esta es denominada CAD/CAM, y los hace más eficaces y modernos.  
            </span>
            <span>
              Con la tecnología CAD/CAM, los profesionales dentales ofrecen a sus pacientes un servicio de alta calidad. Además, con la adaptación a esta tecnología, la odontología ha dado un gran paso, ya que la elaboración de las prótesis dentales es mucho más rápida y eficaz.
            </span>
            <h2 className="h2-2">La Tecnología CAD/CAM y el Taller Dental</h2>
            <span>
              El <strong>taller dental</strong> ahora es digital con la tecnología CAD/CAM, esta permite que los procedimientos sean mucho más precisos al momento de elaborar las restauraciones dentales. Con este el técnico dental puede hacer pilares para implantes, carillas, coronas de cerámica fresada y puentes. 
            </span>
            <span>
              En el laboratorio dental Dentrimaker se fabrican todas las restauraciones dentales en una computadora. Por medio de un escáner óptico se capta la imagen de las piezas dentales del paciente. Seguidamente, esa imagen 3D es la que se utiliza para poder diseñar la prótesis dental de manera que se vea natural.
            </span>
            <span>
              Una vez hecho el diseño, con el software CAD, las piezas se deben fresar y personalizar para lograr una apariencia natural. Además, es muy importante que se ajusten perfectamente al paciente. Luego de esto, las piezas son sometidas a altas temperaturas para pulirlas y dar por terminada su elaboración.
            </span>
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
