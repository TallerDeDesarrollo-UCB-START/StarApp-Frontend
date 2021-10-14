import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { makeStyles, withStyles} from "@material-ui/core/styles";

function AlertDialog({message}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          {message}
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

const OkButton = withStyles((theme) => ({
    root: {
      marginRight: "auto",
      marginLeft: "auto",
    },
  }))(Button);

export default AlertDialog
