import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo-noBG-dentrimaker.png";
import Menu from "../assets/menu.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);

  return (
    <>
      <header>
        {/*<div className="header-top">
          <div className="item-header-top">
            <p>Teléfono</p>
            <a href="tel:5619107396" target="_blank">
              5619107396
            </a>
          </div>
          <div className="item-header-top whatsapp">
            <p>Whatsapp</p>
            <a
              href="https://api.whatsapp.com/send?phone=525619107396"
              target="_blank"
            >
              +525619107396
            </a>
          </div>
          <div className="urgencias item-header-top">
            <div className="btn-urgencias">
              <a
                href="https://api.whatsapp.com/send?phone=525619107396"
                target="_blank"
              >
                Urgencias Dentales
              </a>
            </div>
          </div>
        </div>*/}
        <div className="menu">
          <div className="container-menu">
            <a className="container-logo" href="/">
              <img src={Logo} alt="" />
              <h2>Dentrimaker</h2>
            </a>
            <nav className={`menu-nav ${openMenu ? "openMenu" : ""}`}>
              <Link
                to="inicio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Inicio
              </Link>
              <Link
                to="servicio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Servicios
              </Link>
              <Link
                to="servicios"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Prótesis Dentales
              </Link>
              <Link
                to="nosotros"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Promociones
              </Link>
              <Link
                to="ubicacion"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Contacto
              </Link>
            </nav>
            <div className="btn-menu" onClick={() => isOpenMenu(!openMenu)}>
              <img src={Menu} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
