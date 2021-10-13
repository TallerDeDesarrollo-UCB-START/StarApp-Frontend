// Componentes:
import ProyectosAdmins from './ProyectosAdmins'
import ProyectosVoluntarios from './ProyectosVoluntarios'
// Librerias-Paquetes:
import {useState, useEffect} from 'react'

function VistaProyectos() {
    // Hooks
    const [proyectos, setProyectos] = useState([])
    //const [proyecto, setProyecto] = useState({})

    useEffect(() => {
        const getProyectos = async () => {
        const proyectosDelServer =  await fetchProyectos()
        setProyectos(proyectosDelServer)
        }
        getProyectos()
    }, [proyectos.length] )

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
        const idSesion = sessionStorage.getItem("id");
        await fetch(
        `${URLParticiparProy}/${id}/sesion/${idSesion}`,
        { 
            method: 'PUT'
        })
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
        await fetch(
        `${URLEliminarProy}/${id}`,
        { 
            method: 'DELETE'
        })
    
        setProyectos(proyectos.filter((proy) => proy.id !== id));
    }
    
    const rol = 'admin'
    const componenteProyectos = rol=='admin' ? <ProyectosAdmins proyectos={proyectos} onCrearProy={crearProyecto} 
        onEliminarProy={eliminarProyecto} onPartiparProy={participarEnProyecto} onEditarProy={editarProyecto} 
        onGetParticipacion={obtenerParticipacionProyecto}/> : <ProyectosVoluntarios proyectos={proyectos}/>

    return (
        <>
            {componenteProyectos}
        </>
    );
}

const url = process.env.REACT_APP_API
const URLParticiparProy = `${url}participate_proyecto`//`http://localhost:5000/participate_proyecto`
const URLProyectos = `${url}get_proyectos`//'http://localhost:5000/get_proyectos'//`${url}get_proyectos`
const URLProyecto = `${url}get_proyecto`//'http://localhost:5000/get_proyecto'//`${url}get_proyectos`
const URLCrearProy = `${url}create_proyecto`//'http://localhost:5000/create_proyecto'//`${url}create_proyecto`
const URLEditarProy = `${url}update_proyecto`//'http://localhost:5000/update_proyecto'//`${url}edit_proyecto`
const URLEliminarProy = `${url}delete_proyecto`//'http://localhost:5000/delete_proyecto'//`${url}delete_proyecto`
const URLParticpaVoluntario = `${url}participate`//'http://localhost:5000/participate'//`${url}participate`

export default VistaProyectos