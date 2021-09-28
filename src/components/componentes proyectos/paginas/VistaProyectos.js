// Componentes:
import ProyectosAdmins from './ProyectosAdmins'
import ProyectosVoluntarios from './ProyectosVoluntarios'
// Librerias-Paquetes:
import {useState, useEffect} from 'react'


function VistaProyectos() {
    // Hooks
    const [proyectos, setProyectos] = useState([])
    const [proyecto, setProyecto] = useState({})

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
    
    const obtenerProyecto = async (idProyecto) => {
        const response = await fetch(`${URLProyectos}/${idProyecto}`)
        const data = await response.json()
        setProyecto(data)
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
        //https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array
        //const proyectos2 = [...proyectos]
        setProyectos([...proyectos, data])
    
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
    const componenteProyectos = rol=='admin' ? <ProyectosAdmins 
                                                proyectos={proyectos} 
                                                onCrearProy={crearProyecto}
                                                onEliminarProy={eliminarProyecto} 
                                                onEditarProy={editarProyecto} 
                                                obtenerProyecto={obtenerProyecto} 
                                                proyecto={proyecto}/> 
                                                : 
                                                <ProyectosVoluntarios proyectos={proyectos}/>

    return (
        <>
            {componenteProyectos}
        </>
    );
}

const url = process.env.REACT_APP_API
const URLProyectos = `${url}get_proyectos` //'http://localhost:5000/get_proyectos'
const URLProyecto = `${url}get_proyecto` //'http://localhost:5000/get_proyecto'
const URLCrearProy = `${url}create_proyecto` //'http://localhost:5000/create_proyecto'
const URLEditarProy = `${url}edit_proyecto` //'http://localhost:5000/edit_proyecto'
const URLEliminarProy = `${url}delete_proyecto`//'http://localhost:5000/delete_proyecto'

export default VistaProyectos