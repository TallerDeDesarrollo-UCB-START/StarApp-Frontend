// Componentes:
import { makeStyles } from '@material-ui/core/styles';
import HeaderCategoriasProyectos from '../organismos/HeaderCategoriasProyectos'
import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
import ContenidoCategoriasProyectos from '../organismos/ContenidoCategoriasProyectos'
import { Container } from '@material-ui/core';
// Permisos/Roles: 
// Librerias-Paquetes:
import {useState, useEffect} from 'react'

const useStyles = makeStyles(() => ({
    container: {
        width: '98%',
    },
}));

function VistaCategoriasProyectos() {
    const classes = useStyles();

    // Hooks:
    const [categorias, setCategorias] = useState([])
    const [mostrarFormCrear, setMostrarFormCrear] = useState(false)
    
    useEffect(() => {
        
        const getCategorias = async () => {
            const response = await fetch(URLCategorias)
            const data = await response.json()
            setCategorias(data)
        }
        getCategorias()
    }, [] )

    // Endpoint fetch
    const crearProyecto = async (nuevoProyecto) => {
        await fetch(
            URLCrearProy,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(nuevoProyecto)
            })
    }

    // Methods:
    const activarFormCrear = () => {
        setMostrarFormCrear(!mostrarFormCrear);
    }

    // Components:
    const FormularioCrear = mostrarFormCrear===true ? <FormularioCrearProyecto onCrearProy={crearProyecto} onActivarForm={activarFormCrear} mostrarFormCrear={mostrarFormCrear}/> : <></>

    return (
        <Container className={classes.container}>
            <HeaderCategoriasProyectos  onActivarForm={activarFormCrear}/>
            {FormularioCrear}
            <ContenidoCategoriasProyectos categorias={categorias}/>
        </Container>
    );
}

const url = process.env.REACT_APP_API;
const URLCategorias = `${url}get_categoria_proyectos`//``http://localhost:5000/get_categorias`//`
const URLCrearProy = `${url}create_proyecto`//'http://localhost:5000/create_proyecto'//

export default VistaCategoriasProyectos;