// Componentes:
import BodyProyectoIndividual from '../organismos/BodyProyectoIndividual'
// Librerias-Paquetes:
import {useState, useEffect} from 'react'

function VistaProyectoIndividual() {
    // Hooks
    const [proyecto, setProyecto] = useState([])
    useEffect(() => {
        const getProyecto = async () => {
        const proyectoDelServer =  await obtenerProyecto()
        setProyecto(proyectoDelServer)
        }
        getProyecto()
    })

    // HTTP requests & functions

    const obtenerProyecto = async (idProyecto) => {
        const response = await fetch(`${URLProyectos}/${idProyecto}`)
        const data = await response.json()
        setProyecto(data)
        return data;
    }
}

export default VistaProyectoIndividual;