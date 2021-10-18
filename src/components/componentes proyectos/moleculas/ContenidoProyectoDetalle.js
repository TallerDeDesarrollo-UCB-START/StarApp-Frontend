// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

function ContenidoProyecto({proyecto}) {
    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>
            <p> Fecha de Inicio: 20/10/2021</p>
            <p> Fecha de Fin: Proyecto en curso</p>
        </Box>
    );
}
 
export default ContenidoProyecto