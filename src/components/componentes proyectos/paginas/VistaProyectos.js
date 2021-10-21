// Componentes:
import ProyectosAdmins from './ProyectosAdmins'
import ProyectosVoluntarios from './ProyectosVoluntarios'
// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
// Librerias-Paquetes:
import {useState, useEffect} from 'react'


function VistaProyectos() {
    // Hooks
    const [proyectos, setProyectos] = useState([])
    const [rol, setRol] = useState('')

    useEffect(() => {
        
        const getProyectos = async () => {
            const proyectosDelServer =  await fetchProyectos()
            setProyectos(proyectosDelServer)
        }
        const asignarRol = async () => {
            const rolObtenido =  await obtenerRol()
            //console.log(rolObtenido)
            setRol(rolObtenido)
        }
        getProyectos()
        console.log("hola")
        asignarRol()
         // Set Dummy, para evitar warning de momento... (se arreglara al obtener roles del backend en otra historia)
    }, [] )

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
        return data
    }
    
    /*const obtenerProyecto = async (idProyecto) => {
        const response = await fetch(`${URLProyectos}/${idProyecto}`)
        const data = await response.json()
        setProyecto(data)
        return data;
    }*/

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
        console.log(data);
        return data;
    }

    const editarProyecto = async (proyectoEditar) => {
        const response = await fetch(
            `${URLEditarProy}/${proyectoEditar.id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(proyectoEditar)
            })
        
        const data = await response.json()
        setProyectos([...proyectos.filter((proy) => proy.id !== proyectoEditar.id), data])
    
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

    const obtenerRol = async () => {
        //debugger;
        const idAuth = sessionStorage.getItem("id");
        const response = await fetch(`${URLObtenerRol}/${idAuth}`,
        { 
            method: 'GET'
        });
        const data = await response.json();
        //console.log(data[0].rol)
        return data[0].rol;
    }
    const filtrarPorCaterogia = async(categoria) => {
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
    
    //const rol = 'admin'
    //console.log(rol)
    
//<PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
    return (
        <>
            <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                <ProyectosAdmins rol={rol}
                        proyectos={proyectos} 
                        onCrearProy={crearProyecto} 
                        onEliminarProy={eliminarProyecto} 
                        onPartiparProy={participarEnProyecto} 
                        onEditarProy={editarProyecto} 
                        onGetParticipacion={obtenerParticipacionProyecto}
                        onFiltroProy={filtrarPorCaterogia}
                        onCancelarParticipacion={cancelarParticipacionProyecto}
                        onNumeroParticipantes={obtenerNumeroParticipantes}/> 
            </PuertaPermisos>
            
            <PuertaPermisos scopes={[SCOPES.canNotCrudProyectos]}>
                <ProyectosVoluntarios rol={rol}
                        proyectos={proyectos}
                        onPartiparProy={participarEnProyecto}
                        onGetParticipacion={obtenerParticipacionProyecto}
                        onFiltroProy={filtrarPorCaterogia}
                        onCancelarParticipacion={cancelarParticipacionProyecto}
                        onNumeroParticipantes={obtenerNumeroParticipantes}/>
            </PuertaPermisos>
        </>
    );
}

const url = process.env.REACT_APP_API;
const URLParticiparProy = `${url}participate_proyecto`//`http://localhost:5000/participate_proyecto`
const URLProyectos = `${url}get_proyectos`//'http://localhost:5000/get_proyectos'
//const URLProyecto = `${url}get_proyecto`'http://localhost:5000/get_proyecto'//`${url}get_proyectos`
const URLCrearProy = `${url}create_proyecto`//'http://localhost:5000/create_proyecto'//
const URLEditarProy = `${url}update_proyecto`//'http://localhost:5000/update_proyecto'//
const URLEliminarProy = `${url}delete_proyecto`//'http://localhost:5000/delete_proyecto'//
const URLParticpaVoluntario = `${url}participate`//'http://localhost:5000/participate'//
const URLObtenerRol = `${url}get_rol` //'http://localhost:5000/get_rol/'
const URLCancelarParticipProy = `${url}cancel_participate_proyecto`//http://localhost:5000/cancel_participate_proyecto/37/sesion/24
const URLNumeroParticipantes = `${url}get_numero_participantes` //'http://localhost:5000/get_rol/'

export default VistaProyectos;