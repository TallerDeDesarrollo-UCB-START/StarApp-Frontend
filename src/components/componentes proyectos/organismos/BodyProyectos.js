// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos, onEliminarProy,  onPartiparProy, onActivarForm, onGetParticipacion}) {
    return (
        <Box className="body-container">
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} 
                    proyecto={proyecto} 
                    onEliminarProy={onEliminarProy}
                    onActivarForm={onActivarForm}
                    onPartiparProy={onPartiparProy}
                    onGetParticipacion={onGetParticipacion}/>
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
