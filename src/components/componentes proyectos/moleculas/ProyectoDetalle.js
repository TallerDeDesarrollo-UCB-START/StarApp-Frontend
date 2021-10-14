// Componentes:
// Librerias-Paquetes:
import './ProyectoDetalle.css';
import '../moleculas/BannerProyectoDetalle'
import { Box } from '@material-ui/core';
import BannerProyectoDetalle from '../moleculas/BannerProyectoDetalle';
import ContenidoProyecto from './ContenidoProyecto';

function ProyectoDetalle({proyecto}) {
    
    return (
        <Box className="proyect-detail-container">
            <BannerProyectoDetalle />
            <ContenidoProyecto proyecto={proyecto}/>
        </Box>
    );
}


export default ProyectoDetalle