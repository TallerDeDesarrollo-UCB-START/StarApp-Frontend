// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

function ContenidoProyecto({proyecto}) {
    const fechaFin = proyecto.fecha_fin?proyecto.fechaFin: "En Progreso"
    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>
            <p> Categoría: {proyecto.categoria}</p>
            <p> Fecha de Inicio: {proyecto.fecha_inicio}</p>
            <p> Fecha de Fin: {fechaFin}</p>
        </Box>
    );
}
 
export default ContenidoProyecto