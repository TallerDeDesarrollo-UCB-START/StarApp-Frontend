import React, {useContext, useState, useEffect, useRef} from 'react';

const CancelarParticipacionContext = React.createContext()

export function useCancelarParticipacion(){
    return useContext(CancelarParticipacionContext)
}

export function CancelarParticipacionProvider({children, proyecto}){
    // Funcionalidad:
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
    const [actualizar, setActualizar] = useState(false)
    const mountedRef = useRef(false)
    function avisoAccion() {
        setActualizar(!actualizar)
    }
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
    async function asignarParticipacion() {
        //debugger
        const participa = await obtenerParticipacionProyecto(proyecto.id)
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
    return (
        <CancelarParticipacionContext.Provider value={METODOS}>
            {children}
        </CancelarParticipacionContext.Provider>
    )
}

// Endpoints:
const cancelarParticipacionProyecto = async (id) => {
    const idSesion = sessionStorage.getItem("id");
    const response = await fetch(
        `${URLCancelarParticipProy}/${id}/sesion/${idSesion}`,
        { 
            method: 'DELETE'
        })
    const data = await response.json()
    return data
}
const obtenerParticipacionProyecto = async (idProyecto) => {
    const idSesion = sessionStorage.getItem("id");
    const response = await fetch(`${URLParticpaVoluntario}/${idProyecto}/sesion/${idSesion}`,
    { 
        method: 'GET'
    });
    const data = await response.json();
    return data;
}

// Urls
const url = process.env.REACT_APP_API;
const URLCancelarParticipProy = `${url}cancel_participate_proyecto`//http://localhost:5000/cancel_participate_proyecto/37/sesion/24
const URLParticpaVoluntario = `${url}participate`//'http://localhost:5000/participate'//


// Lista Endpoints:
const METODOS = [
    {
        cancelarParticipacionProyecto: cancelarParticipacionProyecto
    },
    {
        obtenerParticipacionProyecto: obtenerParticipacionProyecto
    },
    /*{
        participacion: participacion
    }*/
]
