// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyectoNormal from '../moleculas/ContenidoProyectoNormal'
import './ProyectoVoluntario.css';

// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function ProyectoVoluntarioNormal({proyecto, onEliminarProy}) {
    return (
        <Box className="proyect-container">
            <BannerProyecto />
            <ContenidoProyectoNormal proyecto={proyecto}/>
        </Box>
    );
}

export default ProyectoVoluntarioNormal