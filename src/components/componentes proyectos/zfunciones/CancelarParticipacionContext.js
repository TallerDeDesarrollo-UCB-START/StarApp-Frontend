import React, {useContext} from 'react';

const CancelarParticipacionContext = React.createContext()

export function useCancelarParticipacion(){
    return useContext(CancelarParticipacionContext)
}

export function CancelarParticipacionProvider({children}){
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
    debugger
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
