// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React from "react";
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy, onAsignarSnackbarStatus, onAsignarParticipacion}) {

    // States
    //const [snackbar, setSnackbar] = React.useState(false)

    /*useEffect(function () {
        onAsignarParticipacion()
    }, [snackbar, participacion])*/


    const onClick = async (event) => {
        //debugger
        const participarResponse = await onPartiparProy(proyecto.id)
        //console.log(participarResponse)
        if(participarResponse){
            
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion exitosa", true, true);
        }else{
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion fallida", true, false);
        }
    }

    return (
        <div>
            <div id={proyecto.id}>
                <ParticipateButton variant="contained"
                onClick={onClick}
                >
                    Unirme
                </ParticipateButton>
            </div>
        </div>
    );
}

const ParticipateButton = withStyles((theme) => ({
    root: {
        color: "#FFFFFF",
        backgroundColor: "#269BD5",
        height: 51,
        width: 119,
    },
}))(Button);

export default ParticiparEnProyectoBtn