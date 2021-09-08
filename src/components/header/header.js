import React from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';

const Header = () =>{
    return(
        <nav>
            <div>
                <div>
                    <img src={Logo} />
                </div>
            </div>
        </nav>
    )
}

export default Header;
