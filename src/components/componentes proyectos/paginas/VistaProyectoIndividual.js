// Componentes:
import BodyProyectoIndividual from './BodyProyectoIndividual'
// Librerias-Paquetes:
import {useState, useEffect} from 'react'

function VistaProyectoIndividual() {
    // Hooks
    const [proyecto, setProyecto] = useState([])
    useEffect(() => {
        const obtenerProyecto = async () => {
        const proyectosDelServer =  await obtenerProyecto()
        setProyectos(proyectosDelServer)
        }
        getProyectos()
    }, [proyectos.length] )

    // HTTP requests & functions

    const obtenerProyecto = async (idProyecto) => {
        const response = await fetch(`${URLProyectos}/${idProyecto}`)
        const data = await response.json()
        setProyecto(data)
        return data;
    }
}

export default VistaProyectoIndividual;