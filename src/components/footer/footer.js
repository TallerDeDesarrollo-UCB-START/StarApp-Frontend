import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
    return(
        <footer class="footer-section">
            <div class="footer-divicion">
            <div class="footer-section-option footer-text">
                <div>
                    <span>Cochabamba - Bolivia</span>
                </div>
                <div>
                    <span>Av. America entre pando y potosi</span>
                </div>
                <div>
                    <span>HORARIO</span>
                </div>
            </div>
            <div class="footer-section-option-center">
                <div>
                    <span>START AMERICAS TOGETHER </span>
                </div>
            </div>
            <div class="footer-section-option-icon icons">
                <FontAwesomeIcon icon={faFacebook}/>
            </div>
            <div class="footer-section-option-icon icons">
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
            <div class="footer-section-option-icon icons">
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
