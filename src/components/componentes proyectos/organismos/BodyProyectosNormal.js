// Componentes:
import ProyectoVoluntarioNormal from '../moleculas/ProyectoVoluntarioNormal'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectosNormal({proyectos,  onPartiparProy}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntarioNormal key={proyecto.id} proyecto={proyecto} onPartiparProy={onPartiparProy}/>
                ))
            }
        </Box>
    );
}

export default BodyProyectosNormal