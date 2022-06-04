import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AxiosClient from "./AxiosClient";
import SnackbarMessage from "./templates/SnackbarMessage"
import BadRequests from './redirect status/BadRequests';
import MyButton from '../shared/components/Button';
const urlBase = process.env.REACT_APP_API

export default function PhoneDialog({user}) {
  const [open, setOpen] = React.useState(false);
  const [NuevoTelefono, setTelefono]= React.useState("");
  const [snackbar, setSnackbar] = React.useState({
    message:"",
    active:false,
    severity:"success",
    afterClose:()=>{},
})
  React.useEffect(()=>{
    AxiosClient.get(`${urlBase}extended_form/${user}`)
      .then((response) => {
        if (response.status === 200)
            if (response.data.data.telefono === null || response.data.data.telefono === "")
            {
                handleClickOpen();
            }
        })
      .catch((response) => { 
        let message = BadRequests(response.status);
        activeSnackbar("No se ha registrado el número de teléfono, "+message, "error", ()=>{})
      });
  },[user])
  const activeSnackbar = (message, severity, afterClose)=>{
    setSnackbar({message, severity, afterClose, active:true})
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    let to_send= {
        telefono: NuevoTelefono,
    };
    AxiosClient.put(`${urlBase}extended_form/${user}`, to_send)
      .then((response) => {
        if (response.status === 202)
            activeSnackbar("Se ha registrado el número de teléfono", "success", ()=>{})
        })
      .catch((error) => { 
        let message = BadRequests(error.response.status);
        activeSnackbar("No se ha registrado el número de teléfono, "+message, "error", ()=>{})
      });
  };

  return (
    <div>
      <Dialog disableEscapeKeyDown="true" onBackdropClick="false" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Completa tus Datos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor agrega tu número de teléfono para continuar con la navegación
          </DialogContentText>
          <TextField
            value = {NuevoTelefono}
            onChange = {(event)=>{setTelefono(event.target.value)}}
            autoFocus
            margin="dense"
            id="telefono"
            label="Numero de Contacto"
            type="text"
            placeholder="(+591) ********"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <MyButton onClick={handleClose} className="default">
            Registrar
          </MyButton>
        </DialogActions>
      </Dialog>
      <SnackbarMessage snackbar={snackbar} setActive={setSnackbar}/>
      
    </div>
  );
}
