import React from "react";
import "../styles/barra.css";
const BarraContact = () => {
  return (
    <div className="barra-contact">
      <div className="container-contact">
        <div className="item-contact">
          <h3>Contacto</h3>
          <p>Cotiza ahora.</p>
          <a
            href="https://api.whatsapp.com/send?phone=525619107396"
            target="_blank"
            className="btn-rosa"
          >
            Cotizar
          </a>
        </div>
        <div className="item-contact">
          <h3>Nuestros horarios</h3>
          <div className="sub-item-contact">
            <p>Lunes a Viernes </p>
            <p>10:00 am a 8:00 pm</p>
            <p>Sábado </p>
            <p>10:00 am a 2:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BarraContact;
