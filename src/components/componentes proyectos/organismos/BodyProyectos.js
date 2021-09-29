// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos, onEliminarProy,  onPartiparProy}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} proyecto={proyecto} onEliminarProy={onEliminarProy} onPartiparProy={onPartiparProy}/>
                ))
            }
        </Box>
    );
}

export default BodyProyectos
