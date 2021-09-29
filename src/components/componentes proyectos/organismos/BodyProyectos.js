// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function BodyProyectos({proyectos, onEliminarProy}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} proyecto={proyecto} onEliminarProy={onEliminarProy}/>
                ))
            }
        </Box>
    );
}

export default BodyProyectos
