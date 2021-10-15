// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';
import EtiquetaParticipacion from '../atomos/EtiquetaParticipacion';

// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';


function ContenidoProyecto({proyecto, onEliminarProy, onActivarForm, onPartiparProy, onGetParticipacion}) {
    const participa =  true//onGetParticipacion().then(participacion => participacion)
    //console.log
    const tagParticipacion = participa === true?
                            <EtiquetaParticipacion/> : ''
    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>

            <div className="button-container">
                <div className="space-button"></div>
                {tagParticipacion}
                <ParticiparEnProyectoBtn proyecto={proyecto} onPartiparProy={onPartiparProy} onGetParticipacion={onGetParticipacion}/>
                <EditarProyectoBtn  onActivarForm={onActivarForm} proyecto={proyecto}/>
                <EliminarProjectoBtn proyecto={proyecto} onEliminarProy={onEliminarProy}/>
            </div>
        </Box>
    );
}

export default ContenidoProyecto