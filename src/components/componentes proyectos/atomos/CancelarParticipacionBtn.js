// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React from "react";
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


// Merce Vic
function CancelarParticipacionBtn( {proyecto, onCancelarParticipacion, onAsignarSnackbarStatus, onAsignarParticipacion, onAvisoAccion}) {

    // States
    //const [snackbar, setSnackbar] = React.useState()
    /*useEffect(function () {
        onAsignarParticipacion()
    }, [snackbar, participacion])*/

    const onClick = async (event) => {
        //debugger
        const cancelResponse = await onCancelarParticipacion(proyecto.id);
        //console.log(cancelResponse)
        if(cancelResponse){
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion cancelada", true, true);
            onAvisoAccion()
        }else{
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion no cancelada", true, false);
            onAvisoAccion()
        }
    }

    return (
                <CancelParticipationButton variant="contained" color="primary"
                onClick={onClick}
                >
                    Unirme
                </CancelParticipationButton>
    );
}

const CancelParticipationButton = withStyles((theme) => ({
    root: {
        backgroundColor: "#a8a8a8",
        fontSize: "16px",
        color: "white",
        "&:hover": {
            backgroundColor: "#818181",
        },
        height: "51px",
        minWidth: "119px",
    },
    
}))(Button);

export default CancelarParticipacionBtn