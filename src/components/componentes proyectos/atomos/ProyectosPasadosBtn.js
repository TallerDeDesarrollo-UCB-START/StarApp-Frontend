import React from 'react'
import { Button } from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function ProyectosPasadosBtn() {
    return (
        <Link to="../">
            <ProyectosPasadosButton variant="contained"
                                onClick={() => console.log('pasados')}>
                Proyectos Pasados
            </ProyectosPasadosButton>
        </Link>
        
    )
}
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
export default ProyectosPasadosBtn
