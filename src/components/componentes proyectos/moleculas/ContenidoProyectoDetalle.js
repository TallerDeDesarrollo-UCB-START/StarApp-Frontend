// Librerias-Paquetes:
import ListaParticipantesProyecto from './ListaParticipantesProyecto';
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

function ContenidoProyecto({proyecto}) {
    const fechaFin = proyecto.fecha_fin?proyecto.fecha_fin: "En Progreso"
    /*const fechaInicio=proyecto.fecha_inicio
    fechaInicio.substr(0, 10)*/
    return (
        <Box className="content-container">
            <b>
                <h4 className="card-title">{proyecto.titulo}</h4>
            </b>
            <p className="card-text">
                <b>Objetivo:</b> {proyecto.objetivo}
            </p>
            <p className="card-text">
                <b>Descripción:</b> {proyecto.descripcion}
            </p>
            <p className="card-text">
                <b>Lider:</b> {proyecto.lider}
            </p>
            <p className="card-text">
                <b>Categoría:</b> {proyecto.categoria}
            </p>
            <p className="card-text">
                <b>Fecha de Inicio:</b> {proyecto.fecha_inicio}
            </p>
            <p className="card-text">
                <b>Fecha de Fin:</b> {fechaFin}
            </p>
            <ListaParticipantesProyecto proyectoId={proyecto.id}/>
        </Box>
    );
    
}
 
export default ContenidoProyecto