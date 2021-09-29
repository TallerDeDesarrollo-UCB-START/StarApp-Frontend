// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos, onEliminarProy, onActivarForm}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} 
                    proyecto={proyecto} 
                    onEliminarProy={onEliminarProy}
                    onActivarForm={onActivarForm}/>
                ))
            }
            {/*<ProyectoVoluntario key={5} 
                    proyecto={proyecto1} 
                    onEliminarProy={onEliminarProy}
        onActivarForm={onActivarForm}/>*/}
        </Box>
    );
}

export default BodyProyectos
