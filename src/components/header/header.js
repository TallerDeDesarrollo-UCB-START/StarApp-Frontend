import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo,png';
import './header.css';

const Header = () =>{
    return(
        <nav>
            <div>
                <div>
                    <Logo></Logo>
                </div>
            </div>
        </nav>
    )
}