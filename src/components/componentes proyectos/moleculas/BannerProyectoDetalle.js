import Banner from '../../../assets/images/event_picture.png';
import { Box } from '@material-ui/core';
import './BannerProyectoDetalle.css';


function BannerProyectoDetalle(urlImage) {
    return (
        <Box className="banner-container-detalle">
            <img className="banner-header-detalle"src={((urlImage.urlImage)? urlImage.urlImage : Banner)} alt=" "/>
        </Box>
    );
}

export default BannerProyectoDetalle