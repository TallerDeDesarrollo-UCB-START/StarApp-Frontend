// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';
import VerProyectoBtn from '../atomos/VerProyectoBtn';  

// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

// Merce y Vic
function ContenidoProyecto({proyecto, onEliminarProy, onActivarForm, onPartiparProy, onGetParticipacion}) {
    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>

            <div className="button-container">
                <div className="space-button"></div>
                <ParticiparEnProyectoBtn proyecto={proyecto} onPartiparProy={onPartiparProy}/>
                <EditarProyectoBtn  onActivarForm={onActivarForm} proyecto={proyecto}/>
                <VerProyectoBtn/>
                <EditarProyectoBtn/>
                <EliminarProjectoBtn proyecto={proyecto} onEliminarProy={onEliminarProy}/>
            </div>
        </Box>
    );
}

export default ContenidoProyecto