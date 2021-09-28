// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';

// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

// Merce y Vic
function ContenidoProyecto({proyecto, onEliminarProy, onActivarForm, obtenerProyecto}) {
    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>

            <div className="button-container">
                <div className="space-button"></div>
                <ParticiparEnProyectoBtn/>
                <EditarProyectoBtn  onActivarForm={onActivarForm} obtenerProyecto={obtenerProyecto}/>
                <EliminarProjectoBtn proyecto={proyecto}/>
            </div>
        </Box>
    );
}

export default ContenidoProyecto