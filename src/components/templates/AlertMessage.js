import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
//Importar al componente todos estos elementos
import { withStyles } from "@material-ui/core/styles";

function AlertDialog() {
  //copiar este state al archivo
  const [open, setOpen] = React.useState(false);

  //Copiar estas funciones
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //El boton es un ejemplo, no se debe copiar
  //Para ver un ejemplo de uso ver el archivo ParticiparEnProyectoBtn en 'componentes proyectos/atomos'
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          Aqui va el mensaje del pop up
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

//Copiar estilos del boton OK

const OkButton = withStyles((theme) => ({
    root: {
      marginRight: "auto",
      marginLeft: "auto",
    },
  }))(Button);

export default AlertDialog
