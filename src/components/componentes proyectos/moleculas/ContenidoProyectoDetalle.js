// Librerias-Paquetes:
import ListaParticipantesProyecto from './ListaParticipantesProyecto';
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';

function ContenidoProyectoDetalle ({proyecto}) {
    const fechaFin = proyecto.fecha_fin?proyecto.fecha_fin: "En Progreso"
    return (
        <Box className="content-container">
            <b>
                <h1 className="card-title">{proyecto.titulo}</h1>
            </b>
            <p className="card-text">
                <b>Fecha de Inicio:</b> {proyecto.fecha_inicio}
            </p>
            <p>
                <b>Fecha de Fin:</b> {fechaFin}
            </p>
            <p className="card-text">
                <b>Descripción:</b> {proyecto.descripcion}
            </p>
            <p className="card-text">
                <b>Objetivo:</b> {proyecto.objetivo}
            </p>
            <p className="card-text">
                <b>Líder:</b> {proyecto.lider}
            </p>
            <p className="card-text">
                <b>Categoría:</b> {proyecto.categoria}
            </p>
            <ListaParticipantesProyecto proyectoId={proyecto.id}/>
        </Box>
    );
    
}
 
export default ContenidoProyectoDetalle

/*<p className="card-text">
<b>Información Adicional:</b>
</p>

<p className="card-text">
<b>Líder:</b> {proyecto.lider}
</p>*/