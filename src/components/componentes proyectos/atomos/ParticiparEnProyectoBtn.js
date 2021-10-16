// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React, {useEffect} from "react";
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';


// Merce Vic
function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy, onGetParticipacion}) {

    // States
    const [open, setOpen] = React.useState(false);

    useEffect(function () {
        onGetParticipacion(proyecto.id).then(state => 
            {if(state) {
                document.getElementById(proyecto.id).classList.add('button-hide');
            }}
        );
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClick = (event) => {
        onPartiparProy(proyecto.id); 
        document.getElementById(proyecto.id).classList.add('button-hide'); 
        handleClickOpen();
    }

    return (
        <div>
            <div id={proyecto.id}>
                <ParticipateButton variant="contained" color="secondary"
                onClick={onClick}
                >
                    Participar
                </ParticipateButton>
            </div>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                Se registro la participacion con exito
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
    },
  }))(Button);

const OkButton = withStyles((theme) => ({
root: {
    marginRight: "auto",
    marginLeft: "auto",
},
}))(Button);

export default ParticiparEnProyectoBtn