// Componentes:

// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import Banner from '../../../assets/ejemploBannerProyecto.jpeg';
import { Box } from '@material-ui/core';
import './BannerProyecto.css';

// Merce Vic
function BannerProyecto() {
    return (
        <Box className="banner-container">
            <img src={Banner} alt=" "/>
        </Box>
    );
}

export default BannerProyecto