// Componentes:

// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import Banner from '../../../assets/generic_picture.png';
import { Box } from '@material-ui/core';
import './BannerProyecto.css';

// Merce Vic
function BannerProyecto() {
    return (
        <Box className="banner-container">
            <img className="banner-header"src={Banner} alt=" "/>
        </Box>
    );
}

export default BannerProyecto