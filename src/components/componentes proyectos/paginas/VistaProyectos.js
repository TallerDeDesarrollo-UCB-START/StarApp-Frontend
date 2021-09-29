// Componentes:
import ProyectosAdmins from './ProyectosAdmins'
import ProyectosVoluntarios from './ProyectosVoluntarios'
// Librerias-Paquetes:
import {useState, useEffect} from 'react'

// DIEGO
function VistaProyectos() {
    // Hooks
    const [proyectos, setProyectos] = useState([])

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
        console.log(data)
        setProyectos([...proyectos, data])
    
    }

    const ParticiparEnProyecto = async (id) => { 
        const idSesion = sessionStorage.getItem("id");
        await fetch(
        `${URLParticiparProy}/${id}/session/${idSesion}`,
        { 
            method: 'PUT'
        })
        console.log(`${URLParticiparProy}/${id}/session/${idSesion}`);
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
    const componenteProyectos = rol=='admin' ? <ProyectosAdmins proyectos={proyectos} onCrearProy={crearProyecto} onEliminarProy={eliminarProyecto}/> : <ProyectosVoluntarios proyectos={proyectos}/>

    return (
        <>
            {componenteProyectos}
        </>
    );
}

const url = process.env.REACT_APP_API
const URLProyectos =  `${url}get_proyectos` //'http://localhost:5000/get_proyectos'//`${url}get_proyectos`
const URLCrearProy = `${url}create_proyecto`//`${url}create_proyecto`
const URLEliminarProy = `${url}delete_proyecto`//`${url}delete_proyecto`
const URLParticiparProy = `${url}participate_proyecto`//`http://localhost:5000/participate_proyecto`

export default VistaProyectos