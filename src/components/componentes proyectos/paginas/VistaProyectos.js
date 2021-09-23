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
    
    const rol = 'admin'
    const componenteProyectos = rol=='admin' ? <ProyectosAdmins proyectos={proyectos}/> : <ProyectosVoluntarios proyectos={proyectos}/>

    return (
        <>
            {componenteProyectos}
        </>
    );
}

const url = process.env.REACT_APP_API
const URLProyectos = `${url}get_proyectos`


export default VistaProyectos