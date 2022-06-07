import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import MyButton from '../../button';


function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function EliminarProjectoBtn({proyecto, onEliminarProy}) {
  const [transition, setTransition] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);//Dialog
  const [state, setState] = React.useState({
    openSnakbar: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, openSnakbar } = state;
  const handleClickOpenSnakbar = (Transition,newState) => {
      setTransition(() => Transition);
      setState({ openSnakbar: true, ...newState });
  };

  const handleCloseSnakbar = () => {
      setState({ ...state, openSnakbar: false });
      window.location.reload();
      
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  var peticionDelete=()=>{
    onEliminarProy(proyecto.id);
    handleClickOpenSnakbar( TransitionDown,{ vertical: 'top', horizontal: 'center' })
    window.history.back()
    window.history.back()
    //se hace el doble back para que vaya a la lista de categorias, no se hace solo 1 ya que no se refresca la pagina y sigue el proyecto eliminado.
    //se puede revisar y mejorar de alguna manera para que retorne a la lsita de proyectos de la categoria y muestre la pagina con los proyectos refrescados
  }

    return (
      <div>
        <MyButton
          className="delete"
          onClick={handleClickOpen}>
            Eliminar
        </MyButton>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Eliminar Proyecto"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              ¿Está seguro que desea eliminar el proyecto? <br/>
                No podra ver el proyecto de nuevo
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <MyButton className="cancel" onClick={handleClose}>
                Cancelar
            </MyButton>
            <MyButton
              className="delete"
              onClick={peticionDelete}>
                Eliminar 
            </MyButton>
            
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openSnakbar}
                autoHideDuration={1000}
                onClose={handleCloseSnakbar}
                TransitionComponent={transition}
                key={transition ? transition.name : ''}
            >
            <Alert onClose={handleCloseSnakbar} severity="success" variant="filled">
                Se eliminó el proyecto!
            </Alert>
            </Snackbar>
            </DialogActions>
          </Dialog>
      </div>
    )
}

export default EliminarProjectoBtn