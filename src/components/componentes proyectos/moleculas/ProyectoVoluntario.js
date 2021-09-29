// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'
import './ProyectoVoluntario.css';

// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function ProyectoVoluntario({proyecto, onEliminarProy}) {
    return (
        <Box className="proyect-container">
            <BannerProyecto />
            <ContenidoProyecto proyecto={proyecto} onEliminarProy={onEliminarProy}/>
        </Box>
    );
}

export default ProyectoVoluntario