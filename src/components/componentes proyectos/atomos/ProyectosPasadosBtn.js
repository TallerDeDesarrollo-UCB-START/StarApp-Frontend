import React from 'react'
//import { Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    linkpasados: {
        color: "#8B8B8B",
    },
    "&:hover": {
        backgroundColor: "#269BD5",
    },
});

function ProyectosPasadosBtn() {
    const classes = useStyles()
    return (
        <Link to="../projects?tipoestado=Pasados" className={classes.linkpasados}>
            Proyectos Pasados
        </Link>
        
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