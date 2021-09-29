// Componentes:
import ProyectoVoluntarioNormal from '../moleculas/ProyectoVoluntarioNormal'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function BodyProyectosNormal({proyectos}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntarioNormal key={proyecto.id} proyecto={proyecto}/>
                ))
            }
        </Box>
    );
}

export default BodyProyectosNormal