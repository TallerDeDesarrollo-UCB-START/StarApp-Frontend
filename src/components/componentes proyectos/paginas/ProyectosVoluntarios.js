// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectos from '../organismos/BodyProyectos'
// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import {useState, useEffect} from 'react'

// DIEGO
function ProyectosVoluntarios() {
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
    
    return (
        <Container>
            <HeaderProyectos />
            <BodyProyectos proyectos={proyectos}/>
        </Container>
    );
}

const url = process.env.REACT_APP_API
const URLProyectos = `${url}get_proyectos`

export default ProyectosVoluntarios