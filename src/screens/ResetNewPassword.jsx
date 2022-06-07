import React from "react";
import { makeStyles, Typography, TextField } from "@material-ui/core";
import axios from "axios";
import SnackbarMessage from "../components/templates/SnackbarMessage";
import { useHistory } from "react-router-dom";
import RedirectErrorPage from "../components/redirect status/RedirectErrorPage";
import MyButton from "../components/button";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
}));

export const ResetNewPassword = () => {
  const history = useHistory();
  const classes = useStyles();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [snackbar, setSnackbar] = React.useState({
    message: "",
    active: false,
    severity: "success",
    afterClose:()=>{console.log("despues del mensaje");},
  });
  const sendPassword = () => {
    const URL_API = process.env.REACT_APP_API_AUTH
    const body = { password }
    const getIdFromURL = (thisUrl) =>{
        var id_ = thisUrl.substring(thisUrl.indexOf("/") + 1)
        id_ = thisUrl.split("/").pop()
        return id_
    }
    axios
      .put(`${URL_API}api/recover/${getIdFromURL(window.location.href)}`, body)
      .then((response) => {
        if (response.status === 200) {
          activeSnackbar(
            "Se ha establecido la nueva contraseña",
            "success",
            () => {window.location.href = "/login"}
          );
        }
      })
      .catch((error) => {
        if (error.message == "Network Error"){
          RedirectErrorPage(500,history,"Hubo un error en la conexión con los datos.")
          return;
        }
        activeSnackbar(
          "Se ha producido un error",
          "error");
      });
  };
  const activeSnackbar = (message, severity, afterClose) => {
    setSnackbar({ message, severity, afterClose, active: true });
  };
  return (
    <div className={classes.root}>
      <Typography
        style={{ color: "Black", marginBottom: "25px", paddingLeft: "0", textAlign: "center",}}
        variant="h1"
      >
        Ingrese la nueva contraseña.
      </Typography>
      <TextField
        placeholder="Nueva Contraseña"
        name="password"
        type="password"
        value={password}
        variant="outlined"
        color="primary"
        onChange={(event) => setPassword(event.target.value)}
        style={{ width: "300px", marginBottom:"25px"}}
      />
      <TextField
        error={password!==confirmPassword}
        placeholder="Confirmar Contraseña"
        name="confirm password"
        type="password"
        value={confirmPassword}
        variant="outlined"
        color="primary"
        onChange={(event) => setConfirmPassword(event.target.value)}
        style={{ width: "300px" }}
      />
      <MyButton className="default" onClick={() => sendPassword()} disabled={password!==confirmPassword || password===""}>
        Confirmar
      </MyButton>
      <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
    </div>
  );
};
