// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';
import ListaParticipantesProyecto from './ListaParticipantesProyecto';

// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

// Merce y Vic
function ContenidoProyecto({proyecto, onEliminarProy, onActivarForm, onPartiparProy}) {
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
                <EliminarProjectoBtn proyecto={proyecto} onEliminarProy={onEliminarProy}/>
            </div>
            <ListaParticipantesProyecto proyectoId={proyecto.id}/>
        </Box>
    );
}

export default ContenidoProyecto