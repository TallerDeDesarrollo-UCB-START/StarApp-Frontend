// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn';
import EditarProyectoBtn from '../atomos/EditarProyectoBtn';
import EtiquetaParticipacion from '../atomos/EtiquetaParticipacion';
//import CancelarParticipacionBtn from '../atomos/CancelarParticipacionBtn';
import SnackbarMessage from '../../templates/SnackbarMessage';
import VerProyectoBtn from '../atomos/VerProyectoBtn';
// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
// Librerias-Paquetes:
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';
import { useState, useEffect, useRef } from "react";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

function ContenidoProyecto({proyecto, /*rol,*/ onActivarForm, onPartiparProy, onGetParticipacion, onCancelarParticipacion, onNumeroParticipantes}) {

    // States:
    const [snackbar, setSnackbar] = useState({
        message:"",
        active:false,
        severity:"success",
        afterClose:()=>{console.log("despues del mensaje");},
    })
    const [snackbarStatus, setSnackbarStatus] = useState({
        message: "",
        active: false,
        status: true,

    })
    const [participacion, setParticipacion] = useState(false)
    const [actualizar, setActualizar] = useState(false)
    const mountedRef = useRef(false)
    
    function avisoAccion() {
        setActualizar(!actualizar)
    }

    // OJO. no borrar el comentario dentro del useEffect() 
    useEffect(() => {
        mountedRef.current = true
        
        const colocarParticipacion = async () => {
            const participa = await asignarParticipacion()
            mountedRef.current && setParticipacion(participa)
            
        }
        activateSnackBar()
        colocarParticipacion()
        //getNumberParticipants()
        return () => {
            mountedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [participacion, actualizar])
    
    // Functions:
    async function asignarParticipacion() {
        const participa = await onGetParticipacion(proyecto.id)
        const p = participa === true? true : false
        return p
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
        let activar = snackbarStatus.active
        let estado = snackbarStatus.status
        let mensaje = snackbarStatus.message
        if(activar){
            if(estado){
                activeSnackbar(mensaje, "success");
            } else{
                activeSnackbar(mensaje, "error");
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
                                                    onAvisoAccion={avisoAccion}
                                                    />
                            : ''
    /*const botonCancelarParticipacion = participacion === true?
                            <CancelarParticipacionBtn proyecto={proyecto} 
                                                    onCancelarParticipacion={onCancelarParticipacion} 
                                                    onGetParticipacion={onGetParticipacion}
                                                    onAsignarParticipacion={asignarParticipacion}
                                                    onAsignarSnackbarStatus={asignarSnackbarStatus}
                                                    onAvisoAccion={avisoAccion}
                                                    />
                            : ''*/
    const botonEditarProyecto = <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                                    <EditarProyectoBtn  onActivarForm={onActivarForm}
                                                        proyecto={proyecto}/>
                                </PuertaPermisos>

    function content (){
        try{
            var resp="";
            var cont=true;
            var i=0;
            for(i=0; i < 100 && cont; i++){
                if(proyecto.descripcion[i]!==undefined){
                    resp += proyecto.descripcion[i];
                }else {
                    cont=false;
                }
            }
            if(i >= 85) {
                resp += '...';
            }
            
            return resp;
        }catch(error)
        {
            console.log(error);
            throw error;
        }
    }

    function title (){
        
        var resp="";
        var cont=true;
        var i=0;
        for( i=0; i < 35 && cont; i++){
            if(proyecto.titulo){
                if(proyecto.titulo[i]){
                    resp += proyecto.titulo[i];
                }else {
                    cont=false;
                }
            }
            
        }

        if(i >= 29) {
            resp += '...';
        }
        return resp;
    }
    
    return (
        <Box >
            <CardContent className="card-container-box">
                <Typography gutterBottom className="content-title">
                    {title()}
                </Typography>
                <Typography className="content-description" color="textSecondary" component="p">
                    {content()}
                </Typography>
            </CardContent>
            <CardActions className="card-action-box">
                {botonParticiparProyecto}
                <VerProyectoBtn proyecto={proyecto}/>
                {botonEditarProyecto}
                
            </CardActions>
            {tagParticipacion}
            <SnackbarMessage snackbar={snackbar} setActive={setSnackbar}/>
        </Box>
    );
}

export default ContenidoProyecto