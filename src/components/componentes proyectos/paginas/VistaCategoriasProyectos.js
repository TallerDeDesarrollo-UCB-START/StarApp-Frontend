// Componentes:
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import HeaderCategoriasProyectos from '../organismos/HeaderCategoriasProyectos'
import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
import ContenidoCategoriasProyectos from '../organismos/ContenidoCategoriasProyectos'
import { Container } from '@material-ui/core';
// Librerias-Paquetes:
import {useState, useEffect, useRef} from 'react'
import {useHistory} from "react-router-dom";
import redirectErrorPage from "../../../components/redirect status/RedirectErrorPage";
import SnackbarMessage from "../../../components/templates/SnackbarMessage";
import BadRequests from "../../../components/redirect status/BadRequests";
const useStyles = makeStyles(() => ({
    container: {
        width: '98%',
    },
}));

function VistaCategoriasProyectos() {
    const classes = useStyles();
    const history = useHistory();
    // Hooks:
    const [categorias, setCategorias] = useState([])
    const [lideres, setLideres] = useState([])
    const [mostrarFormCrear, setMostrarFormCrear] = useState(false)
    const mountedRef = useRef(false)
    const activeSnackbar = (message, severity, afterClose) => {
        setSnackbar({ message, severity, afterClose, active: true });
      };
      const [snackbar, setSnackbar] = React.useState({
        message: "",
        active: false,
        severity: "success",
        afterClose: () => {},
      });
    useEffect(() => {
        mountedRef.current = true
        
        const getCategorias = async () => {
            try{
                const response = await fetch(URLCategorias);
                const data = await response.json()
                mountedRef.current && setCategorias(data)
            } catch (error) {
                const message = BadRequests(404);
                activeSnackbar(
                  "No se ha podido encontrar los proyectos, "+message,
                  "error",
                  () => {});
            }
        }
        const getLideres = async ()=>{
            try{
                const lideresDelServer = await fetchLideres()
                mountedRef.current && setLideres(lideresDelServer)
                //console.log(lideresDelServer)
            } catch (error) {
                const message = BadRequests(404);
                activeSnackbar(
                  "No se ha podido encontrar los proyectos, "+message,
                  "error",
                  () => {});
            }
        }
        getCategorias()
        getLideres()

        return () => mountedRef.current = false;// Desmontar componentes evitando warnings
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
    async function fetchLideres() {
        const response = await fetch(URLLideres)
        const data = await response.json()
        let dataLider=[]
        let index=1
        for (let x of data ) {
            dataLider.push({"id":`${index}`,"nombre":`${x.nombre}`})
            index++
            
        }
        //dataLider.pop()
        //console.log(dataLider)
        return dataLider;
    }

    // Methods:
    const activarFormCrear = () => {
        setMostrarFormCrear(!mostrarFormCrear);
    }

    // Components:
    const FormularioCrear = mostrarFormCrear===true ? <FormularioCrearProyecto onCrearProy={crearProyecto} onActivarForm={activarFormCrear} mostrarFormCrear={mostrarFormCrear} lideres={lideres} categorias={categorias}/> : <></>

    return (
        <Container className={classes.container}>
            <HeaderCategoriasProyectos  onActivarForm={activarFormCrear}/>
            {FormularioCrear}
            <ContenidoCategoriasProyectos categorias={categorias}/>
            <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
        </Container>
    );
}

const url = process.env.REACT_APP_API;
const URLLideres = `${url}get_lideres`
const URLCategorias = `${url}get_categoria_proyectos`//``http://localhost:5000/get_categorias`//`
const URLCrearProy = `${url}create_proyecto`//'http://localhost:5000/create_proyecto'//

export default VistaCategoriasProyectos;