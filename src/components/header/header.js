import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const Header = () => {
  return (
    <header className="header-division">
      <div className="header-logo">
        <div>
          <img src={Logo} alt=" " />
        </div>
      </div>
      <div className="header-menu">
        <div className="header-menu-option">
          <span>Home</span>
        </div>
        <div className="header-menu-option">
          <span>Proyectos</span>
        </div>
        <div className="header-menu-option">
          <Link to="/eventos">Eventos</Link>
        </div>
        <div className="header-menu-option">
          <span>Perfil</span>
        </div>
        <div className="header-menu-option-icon icons">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="header-menu-option-icon icons">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="header-menu-option-icon icons">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </header>
  );
};


export default Header;
