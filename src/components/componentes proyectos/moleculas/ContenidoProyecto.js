// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';
import EtiquetaParticipacion from '../atomos/EtiquetaParticipacion';
import VerProyectoBtn from '../atomos/VerProyectoBtn';

// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';
import { useState } from "react";

function ContenidoProyecto({proyecto, /*rol,*/ onEliminarProy, onActivarForm, onPartiparProy, onGetParticipacion}) {
    // States:
    const [participacion, setParticipacion] = useState(false)
    /*useEffect(() => {
        asignarParticipacion() 
        // No use este useEffect,
        // porque por algun motivo no se activa igual al useEffect de ParticiparEnProyectoBtn
    })*/

    // Functions:
    async function asignarParticipacion() {
        const participa = await onGetParticipacion(proyecto.id)
        const p = participa === true? true : false
        setParticipacion(p)
    }
    // Components:
    const tagParticipacion = participacion === true?
                            <EtiquetaParticipacion/> : ''
    const botonParticiparProyecto = participacion === false?
                            <ParticiparEnProyectoBtn proyecto={proyecto} 
                            onPartiparProy={onPartiparProy} 
                            onGetParticipacion={onGetParticipacion}
                            onAsignarParticipacion={asignarParticipacion}/>
                            : ''
    const botonEditarProyecto = <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                                    <EditarProyectoBtn  onActivarForm={onActivarForm}
                                                proyecto={proyecto}/>
                                </PuertaPermisos>
    const botonEliminarProyecto = <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                                        <EliminarProjectoBtn proyecto={proyecto}
                                                            onEliminarProy={onEliminarProy}/>
                                    </PuertaPermisos>

    return (
        <Box className="content-container">
            
            <p>Proyecto: {proyecto.titulo}</p>
            <p> Objetivo: {proyecto.objetivo}</p>
            <p> Descripción: {proyecto.descripcion}</p>
            <p> Lider: {proyecto.lider}</p>

            <div className="button-container">
                <div className="space-button"></div>
                <VerProyectoBtn proyecto={proyecto}/>
                {tagParticipacion}
                {botonParticiparProyecto}
                {botonEditarProyecto}
                {botonEliminarProyecto}
                
                
            </div>
        </Box>
    );
}

export default ContenidoProyecto