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
    }, [] )

    // HTTP requests & functions
    async function fetchProyectos() {
        const response = await fetch(URLProyectos)
        const data = await response.json()
        return data;
    }

    const crearProyecto = async (proyecto) => {
        const response = await fetch(
            URLProyectos,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(proyecto)
            })
        const data = await response.json()
    
        setProyectos([...proyectos, data])
        /* Without using an API backend:
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task } //object with id and the rest of task fields
        setTasks([...tasks, newTask])*/
    }
    
    const rol = 'admin'
    const componenteProyectos = rol=='admin' ? <ProyectosAdmins proyectos={proyectos} onCrearProy={crearProyecto}/> : <ProyectosVoluntarios proyectos={proyectos}/>

    return (
        <>
            {componenteProyectos}
        </>
    );
}

const url = process.env.REACT_APP_API
const URLProyectos = 'http://localhost:5000/get_proyectos'//`${url}get_proyectos`


export default VistaProyectos