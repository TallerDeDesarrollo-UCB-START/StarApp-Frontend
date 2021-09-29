// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'
import './ProyectoVoluntario.css';

// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// Diego
function ProyectoVoluntario({proyecto, onEliminarProy,  onPartiparProy}) {
    return (
        <Box className="proyect-container">
            <BannerProyecto />
            <ContenidoProyecto proyecto={proyecto} onEliminarProy={onEliminarProy} onPartiparProy={onPartiparProy}/>
        </Box>
    );
}

export default ProyectoVoluntario