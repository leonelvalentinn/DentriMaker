import React from "react";
import facebook from "../assets/facebook.png";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <footer id="ubicacion">
        <div className="mapa">
          <div className="container-mapa">
            <div className="item-mapa">
              <h2>Ubicación</h2>
              <h3>
                Benito Juárez 56, Colonia el molino, Tezonco, 09960 Ciudad de México, CDMX 
              </h3>
              <a
                href="https://api.whatsapp.com/send?phone=525619107396"
                target="_blank"
                className="btn-rosa"
              >
                Contacto
              </a>
            </div>
            <div className="item-mapa">
            <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15062.308445805369!2d-99.067128!3d19.300748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02521bfbc501%3A0xb6cf806028882542!2sBenito%20Ju%C3%A1rez%2056%2C%20El%20Rosario%2C%20Iztapalapa%2C%2009960%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1700783768778!5m2!1ses-419!2sus" 
          width="600" 
          height="450" 
          style={{ border: 0 }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
            </div>
          </div>
        </div>
        <div className="lab">
          <h4>LABORATORIO DENTAL CDMX BENITO JUÁREZ</h4>
          <h2>Usa tu tiempo para atender a tus pacientes y no para lidiar con tu Laboratorio Dental.</h2>
        </div>
        <div className="footer-1">
          <div className="item-footer-footer-1">
            <h4>LABORATORIO DENTAL A LA PUERTA DE TU CONSULTORIO</h4>
            <h1>Recolecciones a domicilio sin costo extra.</h1>
            <a href="tel:5619107396" target="_blank">
              Contáctanos
            </a>
          </div>
        </div>
        <div className="footer-footer">
          <div className="item-footer-footer">
            <a href="https://www.facebook.com/DentriMaker" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <p>© 2023 Todos los derechos reservados Dentrimaker.</p>
            <p>Desarrollado por Agencia de Marketing Dentarios © 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
