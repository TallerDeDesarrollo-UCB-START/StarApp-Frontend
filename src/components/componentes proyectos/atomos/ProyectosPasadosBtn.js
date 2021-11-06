import React from 'react'
//import { Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
    linkpasados: {
        color: "#8B8B8B",
    },
    "&:hover": {
        backgroundColor: "#269BD5",
    },
});

function ProyectosPasadosBtn() {
    // Estilos
    const classes = useStyles()
    // Componente
    const botonLink = <Link to="../projects?tipoestado=Pasados" className={classes.linkpasados}>
                            Proyectos Pasados
                        </Link>
    // Mostrar o no componente
    let tipoEstado = useQuery().get("tipoestado"); 
    const boton = tipoEstado && tipoEstado==="Pasados"? "" : botonLink
    
    return (
        <>
        {boton}
        </>
    )
}

export default ProyectosPasadosBtn

/*
<ProyectosPasadosButton variant="contained"
                                onClick={() => console.log('pasados')}>
                Proyectos Pasados
            </ProyectosPasadosButton>


            const ProyectosPasadosButton = withStyles((theme) => ({
    root: {
        backgroundColor: "#ED2020",
        minWidth: "15%",
        color: "#FFFFFF",
        "&:hover": {
            backgroundColor: "#a90e0e",
        },
    },
}))(Button);
*/