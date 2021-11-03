// Componentes:
import ProyectosAdmins from './ProyectosAdmins'
import ProyectosVoluntarios from './ProyectosVoluntarios'
// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
// Librerias-Paquetes:
import {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function VistaProyectos() {
    // Hooks
    const [proyectos, setProyectos] = useState([])
    const [actualizar, setActualizar] = useState(false)
    let categoria = useQuery().get("categoria");

    //console.log(categoria)
    useEffect(() => {
        
        const getProyectos = async () => {
            const proyectosDelServer =  await fetchProyectos()
            setProyectos(proyectosDelServer)
        }

        const getProyectosFiltro = async () => {
            await filtrarPorCategoria(categoria)
        }

        categoria? getProyectosFiltro() : getProyectos()
    }, [actualizar, categoria] )

    // HTTP requests & functions
    async function fetchProyectos() {
        const response = await fetch(URLProyectos)
        const data = await response.json()
        return data;
    }

    const crearProyecto = async (nuevoProyecto) => {
        const response = await fetch(
            URLCrearProy,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(nuevoProyecto)
            })
        const data = await response.json()
        setProyectos([...proyectos, data])
        setActualizar(!actualizar)
    
    }

    const participarEnProyecto = async (id) => { 
        //debugger
        const idSesion = sessionStorage.getItem("id");
        const response = await fetch(
        `${URLParticiparProy}/${id}/sesion/${idSesion}`,
        { 
            method: 'PUT'
        })
        const data = await response.json()
        setActualizar(!actualizar)
        return data
    }

    const cancelarParticipacionProyecto = async (id) => { 
        //debugger
        const idSesion = sessionStorage.getItem("id");
        const response = await fetch(
            `${URLCancelarParticipProy}/${id}/sesion/${idSesion}`,
            { 
                method: 'DELETE'
            })
        const data = await response.json()
        setActualizar(!actualizar)
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

    const obtenerNumeroParticipantes = async (idProyecto) => {
        const response = await fetch(`${URLNumeroParticipantes}/${idProyecto}`,
        { 
            method: 'GET'
        });
        const data = await response.json();
        return data;
    }

    const editarProyecto = async (proyectoEditar) => {
        //debugger
        const response = await fetch(
            `${URLEditarProy}/${proyectoEditar.id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(proyectoEditar)
            })
        const data = await response.json()
        
        setProyectos([...proyectos.filter((proy) => proy.id !== proyectoEditar.id), data])
        setActualizar(!actualizar)
    }
        
    const eliminarProyecto = async (id) => { 
        //debugger
        await fetch(
        `${URLEliminarProy}/${id}`,
        { 
            method: 'DELETE'
        })
    
        setProyectos(proyectos.filter((proy) => proy.id !== id));
    }

    const filtrarPorCategoria = async(categoria) => {
        const response= await fetch(
            `${URLProyectos}/${categoria}`,
            {
                method: 'GET'
            }
        )
        const data = await response.json();
        //setProyectos(proyectos.filter((proy) => proy.categoria == categoria));
        setProyectos(data)
    }
    
    return (
        <>
            <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                <ProyectosAdmins rol={"core team"}
                        proyectos={proyectos} 
                        onCrearProy={crearProyecto} 
                        onEliminarProy={eliminarProyecto} 
                        onPartiparProy={participarEnProyecto} 
                        onEditarProy={editarProyecto} 
                        onGetParticipacion={obtenerParticipacionProyecto}
                        onCancelarParticipacion={cancelarParticipacionProyecto}
                        onNumeroParticipantes={obtenerNumeroParticipantes}
                        tituloHeader={categoria}/> 
            </PuertaPermisos>
            
            <PuertaPermisos scopes={[SCOPES.canNotCrudProyectos]}>
                <ProyectosVoluntarios rol={"core team"}
                        proyectos={proyectos}
                        onPartiparProy={participarEnProyecto}
                        onGetParticipacion={obtenerParticipacionProyecto}
                        onCancelarParticipacion={cancelarParticipacionProyecto}
                        onNumeroParticipantes={obtenerNumeroParticipantes}
                        tituloHeader={categoria}/>
            </PuertaPermisos>
        </>
    );
}

const url = process.env.REACT_APP_API;
const URLParticiparProy = `${url}participate_proyecto`//`http://localhost:5000/participate_proyecto`
const URLProyectos = `${url}get_proyectos`//'http://localhost:5000/get_proyectos'
const URLCrearProy = `${url}create_proyecto`//'http://localhost:5000/create_proyecto'//
const URLEditarProy = `${url}update_proyecto`//'http://localhost:5000/update_proyecto'//
const URLEliminarProy = `${url}delete_proyecto`//'http://localhost:5000/delete_proyecto'//
const URLParticpaVoluntario = `${url}participate`//'http://localhost:5000/participate'//
const URLCancelarParticipProy = `${url}cancel_participate_proyecto`//http://localhost:5000/cancel_participate_proyecto/37/sesion/24
const URLNumeroParticipantes = `${url}get_numero_participantes` //'http://localhost:5000/get_rol/'

export default VistaProyectos;