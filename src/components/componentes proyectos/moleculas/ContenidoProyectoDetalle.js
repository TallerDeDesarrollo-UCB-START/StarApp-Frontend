//Componentes
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import CancelarParticipacionBtn from '../atomos/CancelarParticipacionBtn';
import SnackbarMessage from '../../templates/SnackbarMessage'
// Librerias-Paquetes:
import ListaParticipantesProyecto from './ListaParticipantesProyecto';
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';
import { useState, useEffect } from "react";

function ContenidoProyectoDetalle ({proyecto, onPartiparProy, onGetParticipacion, onCancelarParticipacion}) {
    const fechaFin = proyecto.fecha_fin?proyecto.fecha_fin: "En Progreso"

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
    
    // OJO. no borrar el comentario dentro del useEffect() 
    useEffect(() => {
        activateSnackBar()
        asignarParticipacion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [participacion])
    

    // Functions:
    async function asignarParticipacion() {
        //debugger
        const participa = await onGetParticipacion(proyecto.id)
        const p = participa === true? true : false
        setParticipacion(p)
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