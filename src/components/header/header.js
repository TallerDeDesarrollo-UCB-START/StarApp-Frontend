import React from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () =>{
    return(
        <div class="header-division">
            <div class="header-logo">
                <div>
                    <img src={Logo} />
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
            </div>
        </div>
    )
}

export default Header;
