// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EliminarProjectoBtn from '../atomos/EliminarProjectoBtn';
import EtiquetaParticipacion from '../atomos/EtiquetaParticipacion';
import VerProyectoBtn from '../atomos/VerProyectoBtn';
import CancelarParticipacionBtn from '../atomos/CancelarParticipacionBtn';
import SnackbarMessage from '../../templates/SnackbarMessage'
// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';
import { useState, useEffect } from "react";

function ContenidoProyecto({proyecto, /*rol,*/ onEliminarProy, onActivarForm, onPartiparProy, onGetParticipacion, onCancelarParticipacion, onNumeroParticipantes}) {

    // States:
    const [snackbar, setSnackbar] = useState({
        message:"",
        active:false,
        severity:"success",
        afterClose:()=>{},
    })
    const [snackbarStatus, setSnackbarStatus] = useState({
        message: "",
        active: false,
        status: true,

    })
    const [participacion, setParticipacion] = useState(false)
    const [numberParticipants, setNumber] = useState(0)
    
    // OJO. no borrar el comentario dentro del useEffect() 
    useEffect(() => {
        activateSnackBar()
        asignarParticipacion()
        getNumberParticipants()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [participacion])
    

    // Functions:
    async function asignarParticipacion() {
        //debugger
        const participa = await onGetParticipacion(proyecto.id)
        const p = participa === true? true : false
        setParticipacion(p)
    }

    async function getNumberParticipants() {
        const numberParticipants = await onNumeroParticipantes(proyecto.id);
        setNumber(numberParticipants);
    }

    function asignarSnackbarStatus(message, active, status){
        setSnackbarStatus({
            message: message,
            active: active,
            status: status
        })
    }
    const activeSnackbar = (message, severity, afterClose)=>{
        setSnackbar({message, severity, afterClose, active:true})
    }
    const activateSnackBar = () => {
        //debugger
        let activar = snackbarStatus.active
        let estado = snackbarStatus.status
        let mensaje = snackbarStatus.message
        if(activar){
            if(estado){
                //debugger
                activeSnackbar(mensaje, "success", ()=>{})
            } else{
                activeSnackbar(mensaje, "error", ()=>{})
            }
        }else{
            //activeSnackbar("snackBarStatus.message", "error", ()=>{})
        }
        asignarSnackbarStatus(mensaje, false, estado); // reset para que no reaparezca indebidamente
    }

    // Components:
    const tagParticipacion = participacion === true?
                            <EtiquetaParticipacion/> : ''
    const botonParticiparProyecto = participacion === false?
                            <ParticiparEnProyectoBtn proyecto={proyecto} 
                                                    onPartiparProy={onPartiparProy} 
                                                    onGetParticipacion={onGetParticipacion}
                                                    onAsignarParticipacion={asignarParticipacion}
                                                    onAsignarSnackbarStatus={asignarSnackbarStatus}
                                                    />
                            : ''
    const botonCancelarParticipacion = participacion === true?
                            <CancelarParticipacionBtn proyecto={proyecto} 
                                                    onCancelarParticipacion={onCancelarParticipacion} 
                                                    onGetParticipacion={onGetParticipacion}
                                                    onAsignarParticipacion={asignarParticipacion}
                                                    onAsignarSnackbarStatus={asignarSnackbarStatus}
                                                    />
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
            
            <p> <b>Proyecto:</b> {proyecto.titulo}</p>
            <p> <b>Objetivo:</b> {proyecto.objetivo}</p>
            <p> <b>Descripción:</b> {proyecto.descripcion}</p>
            <p> <b>Lider:</b> {proyecto.lider}</p>
            <p> <b>Número de Participantes:</b> {numberParticipants.count}</p>

            <div className="button-container">
                <VerProyectoBtn proyecto={proyecto}/>
                <div className="space-button"></div>
                {tagParticipacion}
                {botonParticiparProyecto}
                {botonCancelarParticipacion}
                {botonEditarProyecto}
                {botonEliminarProyecto}
            </div>

            <SnackbarMessage snackbar={snackbar} setActive={setSnackbar}/>
        </Box>
    );
}

export default ContenidoProyecto