import React from 'react';
import Logo from '../../assets/logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Header = () =>{
    return(
        <header class="header-division">
            <div class="header-logo">
                <div>
                    <img src={Logo} alt=" "/>
                </div>
            </div>
            <div class="header-menu">
                <div class="header-menu-option">
                    <span>Home</span>
                </div>
                <div class="header-menu-option">
                    <span>Proyectos</span>
                </div>
                <div class="header-menu-option">
                    <span>Eventos</span>
                </div>
                <div class="header-menu-option">
                    <span>Perfil</span>
                </div>
                <div class="header-menu-option-icon icons">
                    <FontAwesomeIcon icon={faFacebook}/>
                </div>
                <div class="header-menu-option-icon icons">
                    <FontAwesomeIcon icon={faTwitter}/>
                </div>
                <div class="header-menu-option-icon icons">
                    <FontAwesomeIcon icon={faInstagram}/>
                </div>
                
            </div>
        </header>
    )
}

export default Header;
