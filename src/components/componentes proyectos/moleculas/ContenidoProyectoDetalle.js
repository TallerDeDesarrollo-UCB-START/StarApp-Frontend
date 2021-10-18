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
            <p> Categoría: {proyecto.categoria}</p>
            <p> Fecha de Inicio: {proyecto.fecha_inicio}</p>
            <p> Fecha de Fin: Proyecto en curso</p>
        </Box>
    );
}
 
export default ContenidoProyecto