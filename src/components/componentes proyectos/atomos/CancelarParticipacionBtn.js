// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React, {useEffect} from "react";
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';


// Merce Vic
function CancelarParticipacionBtn( {proyecto,  onCancelarParticipacion, onGetParticipacion, onAsignarParticipacion}) {

    // States
    const [open, setOpen] = React.useState(false);

    useEffect(function () {
        onGetParticipacion(proyecto.id).then(state => 
            {
                //debugger
                if(!state) {
                if(document.getElementById(proyecto.id)){
                    //document.getElementById(proyecto.id).classList.add('button-hide');
                }
                onAsignarParticipacion() 
            }}
            
        );
        
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClick = (event) => {
        onCancelarParticipacion(proyecto.id); 
        //document.getElementById(proyecto.id).classList.add('button-hide'); 
        onAsignarParticipacion();
        handleClickOpen();
    }

    return (
        <div>
            <div id={proyecto.id}>
                <ParticipateButton variant="contained" color="secondary"
                onClick={onClick}
                >
                    Cancelar Participacion
                </ParticipateButton>
            </div>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                Se cancelo la participacion con exito
            </DialogTitle>
            <DialogContent>
            </DialogContent>
            <DialogActions>
                <OkButton variant="contained" color="primary" onClick={handleClose} autoFocus>
                    Ok  
                </OkButton>
            </DialogActions>
        </Dialog>
        </div>
    );
}

const ParticipateButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
      backgroundColor: "black",
    },
  }))(Button);

const OkButton = withStyles((theme) => ({
root: {
    marginRight: "auto",
    marginLeft: "auto",
},
}))(Button);

export default CancelarParticipacionBtn