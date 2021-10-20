// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React from "react";
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


// Merce Vic
function CancelarParticipacionBtn( {proyecto, onCancelarParticipacion, onAsignarSnackbarStatus, onAsignarParticipacion}) {

    // States
    //const [snackbar, setSnackbar] = React.useState()
    /*useEffect(function () {
        onAsignarParticipacion()
    }, [snackbar, participacion])*/

    const onClick = async (event) => {
        const cancelResponse = await onCancelarParticipacion(proyecto.id);
        console.log(cancelResponse)
        if(cancelResponse){
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion cancelada", true, true);
        }else{
            onAsignarSnackbarStatus("Participacion no cancelada", true, false);
        }
    }

    return (
        <div>
            <div id={proyecto.id}>
                <CancelParticipationButton variant="contained" color="primary"
                onClick={onClick}
                >
                    No participar
                </CancelParticipationButton>
            </div>
        </div>
    );
}

const CancelParticipationButton = withStyles((theme) => ({
    root: {
        backgroundColor: "#a8a8a8",
        whiteSpace: 'nowrap',
        color: "white",
        "&:hover": {
            backgroundColor: "#818181",
        },
    },
    
}))(Button);

export default CancelarParticipacionBtn