import React from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () =>{
    return(
        <div class="header-division">
            <div>
                <img src={Logo} />
            </div>
        </div>
    )
}

export default Header;
