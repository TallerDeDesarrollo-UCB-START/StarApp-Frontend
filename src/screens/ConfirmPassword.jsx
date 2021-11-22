import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
}));

const ConfirmPassword = () => {
  return (
    <div className={classes.root}>
      <Typography
        style={{ color: "Black", marginBottom: "50px" }}
        variant="h1"
        style={{ paddingLeft: "0" }}
      >
        Se le ha enviado un correo para restablecer su contraseña.
      </Typography>
      <Button
        variant="contained"
        style={{ color: "Black", marginBottom: "20px" }}
        onClick={() => (window.location.href = "/login")}
      >
        Iniciar Sesión
      </Button>
      <Typography style={{ fontSize: "18px" }} color="textSecondary">
        Ahora que tu cuenta ha sido validada puedes iniciar sesión
      </Typography>
    </div>
  );
};

export default ConfirmPassword;
