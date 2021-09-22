// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn'
// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

// Merce y Vic
function ContenidoProyecto({proyecto}) {
    return (
        <Box class="content-container">
            
                <h3>Proyecto: {proyecto.titulo}</h3>
                <p> Objetivo: {proyecto.objetivo}</p>
                <p> Descripción: {proyecto.descripcion}</p>
                <p> Lider: {proyecto.lider}</p>
            
            <div class="button-container">
                <ParticiparEnProyectoBtn/>
            </div>
        </Box>
    );
}

export default ContenidoProyecto