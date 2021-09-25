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
const URLCrearProy = 'http://localhost:5000/create_proyecto'//`${url}create_proyecto`

export default VistaProyectos