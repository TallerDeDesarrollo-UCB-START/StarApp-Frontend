// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'
import './ProyectoVoluntario.css';

// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// Diego
function ProyectoVoluntario({proyecto}) {
    return (
        <Box class="box-container">
            <BannerProyecto />
            <ContenidoProyecto proyecto={proyecto}/>
        </Box>
    );
}

export default ProyectoVoluntario