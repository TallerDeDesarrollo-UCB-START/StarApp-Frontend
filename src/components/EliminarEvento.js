//aca viene el eliminar evento
import React from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import BadRequests from "./redirect status/BadRequests";
import SnackbarMessage from "../components/templates/SnackbarMessage";
import MyButton from "./button";

const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const EliminarEvento = (event) => {

  const [snackbar, setSnackbar] = React.useState({
    message: "",
    active: false,
    severity: "success",
    afterClose:()=>{console.log("despues del mensaje");},
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const activeSnackbar = (message, severity, afterClose) => {
    setSnackbar({ message, severity, afterClose, active: true });
  };
  const deleteEvento = async (event) => {
    let isEventError = false
    await axios.delete(urlDeploy + "/" + event.event.id)
    .catch((error) => {
      isEventError = true
      let message = BadRequests(error.response.status);
      activeSnackbar(
          "No se pudo eliminar el evento. "+message,
          "error");
    });
    if (!isEventError){
        handleClose();
        window.location.reload();
    }
  };
  return (
    <div>
      <MyButton onClick={handleClickOpen} className="delete">
        Eliminar
      </MyButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¿Está seguro de eliminar el evento {event.event.nombre_evento}?
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description" name='MensajeText'>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MyButton className="cancel" onClick={handleClose}>
            Cancelar
          </MyButton>
          <MyButton className="delete" onClick={() => deleteEvento(event)}>
            Confimar
          </MyButton>
        </DialogActions>
      </Dialog>
      <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
    </div>
  );
};

export default EliminarEvento;
