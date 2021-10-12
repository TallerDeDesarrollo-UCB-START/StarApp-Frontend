// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';

// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';


function ContenidoProyecto({proyecto, onEliminarProy}) {
    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>

            <div className="button-container">
                <div className="space-button"></div>
                <EditarProyectoBtn/>
                <EliminarProjectoBtn proyecto={proyecto} onEliminarProy={onEliminarProy}/>
            </div>
        </Box>
    );
}

export default ContenidoProyecto