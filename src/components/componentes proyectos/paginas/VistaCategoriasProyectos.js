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
        /*const response = await fetch(
            URLCrearProy,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(nuevoProyecto)
            })
        const data = await response.json()
        setProyectos([...proyectos, data])
        setActualizar(!actualizar)*/
    
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

export default VistaCategoriasProyectos;

/*
const categorias2 = [
    {
        id: 1,
        tipo: 'ambiental',
        imagen: 'https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc='
    },
    {
        id: 2,
        tipo: 'social',
        imagen: 'https://media.istockphoto.com/photos/life-is-amazing-when-you-have-the-greatest-friends-around-picture-id648817898?b=1&k=20&m=648817898&s=170667a&w=0&h=9OGTLvfpfy4Ce4BM__-yDb9RlErBGJRMv7irZMhFLfY='
    },
    {
        id: 3,
        tipo: 'animalista',
        imagen: 'https://media.istockphoto.com/photos/female-veterinarian-holding-a-little-dog-in-her-arms-picture-id1280869192?b=1&k=20&m=1280869192&s=170667a&w=0&h=Fhsw2VrPIhhmKz1gSAjqS7lH_s0KNUSVO9-Obi7CFJE='
    },
]
*/