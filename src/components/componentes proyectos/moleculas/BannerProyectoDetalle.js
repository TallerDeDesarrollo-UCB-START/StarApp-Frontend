import Banner from '../../../assets/generic_picture.png';
import { Box } from '@material-ui/core';
import './BannerProyectoDetalle.css';


function BannerProyectoDetalle() {
    return (
        <Box className="banner-container-detalle">
            <img className="banner-header-detalle"src={Banner} alt=" "/>
            {/*agregar estilos de imagen*/ }
        </Box>
    );
}

export default BannerProyectoDetalle