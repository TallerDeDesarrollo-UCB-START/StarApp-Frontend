// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos, onEliminarProy, onActivarForm, obtenerProyecto}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} 
                    proyecto={proyecto} 
                    onEliminarProy={onEliminarProy}
                    onActivarForm={onActivarForm}
                    obtenerProyecto={obtenerProyecto}/>
                ))
            }
            <ProyectoVoluntario key={5} 
                    proyecto={proyecto1} 
                    onEliminarProy={onEliminarProy}
                    onActivarForm={onActivarForm}/>
        </Box>
    );
}
const proyecto1 = {
    titulo: 'a',
    descripcion: 'a',
    objetivo: 'a',
    lider: 'a'
}
export default BodyProyectos
