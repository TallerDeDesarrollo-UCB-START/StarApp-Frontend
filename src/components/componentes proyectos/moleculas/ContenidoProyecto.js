// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';
import EtiquetaParticipacion from '../atomos/EtiquetaParticipacion';

// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';
import { useState} from "react";

function ContenidoProyecto({proyecto, onEliminarProy, onActivarForm, onPartiparProy, onGetParticipacion}) {
    // States:
    const [participacion, setParticipacion] = useState(false)
    /*useEffect(() =>{
        onGetParticipacion(proyecto.id).then(participa => {
            setParticipacion(participa)
            })
    })*/
    async function asignarParticipacion() {
            //debugger
        /*onGetParticipacion(proyecto.id).then(participa => {
        setParticipacion(participa)
        })*/
        const participa = await onGetParticipacion(proyecto.id)
        //console.log(participa)
        setParticipacion(participa)  // Sale un warning de props mal pasadas al momento de hacer este set.
        return participa
    }
    const tagParticipacion = participacion === true?
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
                <ParticiparEnProyectoBtn proyecto={proyecto} 
                                        onPartiparProy={onPartiparProy} 
                                        onGetParticipacion={onGetParticipacion}
                                        onAsignarParticipacion={asignarParticipacion}/>
                <EditarProyectoBtn  onActivarForm={onActivarForm} proyecto={proyecto}/>
                <EliminarProjectoBtn proyecto={proyecto} onEliminarProy={onEliminarProy}/>
            </div>
        </Box>
    );
}

export default ContenidoProyecto