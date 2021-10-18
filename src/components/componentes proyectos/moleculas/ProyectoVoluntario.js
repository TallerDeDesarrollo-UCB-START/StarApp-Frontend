// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'
import './ProyectoVoluntario.css';

// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// Diego
function ProyectoVoluntario({proyecto, rol, onEliminarProy, onActivarForm, onPartiparProy, onGetParticipacion}) {
    return (
        <Box className="proyect-container">
            <BannerProyecto />
            <ContenidoProyecto rol={rol}
                            proyecto={proyecto} 
                            onEliminarProy={onEliminarProy} 
                            onActivarForm={onActivarForm}
                            onPartiparProy={onPartiparProy}
                            onGetParticipacion={onGetParticipacion}/>
        </Box>
    );
}

export default ProyectoVoluntario