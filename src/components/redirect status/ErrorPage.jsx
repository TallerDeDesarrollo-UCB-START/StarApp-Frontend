import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import routes from "../../routes/Routes";
import BadRequests from './BadRequests';

const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15%",
      fontSize:"30px"
    },  
    error_message:{
        alignSelf: "center"
    },
    link:{
        color:"rgb(35, 0, 108)",
    }
    
  }));

const ErrorPage = () => {
    const classes = useStyles();
    const history = useHistory();
    let status = parseInt(sessionStorage.getItem("statusError"));
    const errorMessage = sessionStorage.getItem("errorMessage");
    const message = BadRequests(status);
    if (isNaN(status))
        history.push(routes[0].path)
    sessionStorage.removeItem("statusError");
    sessionStorage.removeItem("errorMessage");
    return (
        <div className={classes.root}>
            <h2>OCURRIÓ ALGO INESPERADO</h2>
            <h2>{errorMessage}</h2>
            <h4 className={classes.error_message}>{message}</h4>
            <a className={classes.link} onClick={() => history.push(routes[0].path)} color="#f0f"><strong color="#f0f">VOLVER A LA PAGINA PRINCIPAL</strong></a>
        </div>
    );
}

export default ErrorPage;