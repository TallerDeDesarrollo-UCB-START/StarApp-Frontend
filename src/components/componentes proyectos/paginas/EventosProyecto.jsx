import React, { useState, useEffect } from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ResumedCardEvento from "../../Home/ResumedCardEvento";
import SnackbarMessage from "../../../components/templates/SnackbarMessage";
import BadRequests from "../../../components/redirect status/BadRequests";
import MyButton from "../../button";

const useStyles = makeStyles((theme) => ({
  root_container: {
    margin: "40px 10px",
  },
  resp_root_container: {
    margin: "10px 15px",
  },
  containerEvents: {
    margin: "20px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "30px 30px",
  },
  noEvents: {
    margin: "200px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resp_noevents_message: {
    fontSize: "16px",
  },
}));

const EventosProyecto = ({ id, title }) => {
  const smallScreen = !useMediaQuery("(min-width:500px)");
  const [events, setEvents] = useState([]);
  const classes = useStyles();
  const baseURL = `${process.env.REACT_APP_API}eventos_de_proyecto/${id.titulo}`;
  
  const activeSnackbar = (message, severity, afterClose) => {
    setSnackbar({ message, severity, afterClose, active: true });
  };
  const [snackbar, setSnackbar] = React.useState({
    message: "",
    active: false,
    severity: "success",
    afterClose:()=>{console.log("despues del mensaje");},
  });
  useEffect(
    () =>
    
      axios
        .get(baseURL)
        .then((response) => {
          var resp = response.data;
          console.log(resp);
          setEvents(resp);
        })
        .catch((error) => {
          const message = BadRequests(error.response.status);
          activeSnackbar(
            "No se enviarón los eventos de proyecto. "+message,
            "error"
          );
        }),
    [baseURL]
  );
  return (
    <div
      className={
        smallScreen ? classes.resp_root_container : classes.root_container
      }
    >
      {title ? (
        <Typography variant="h2" component="h2" gutterBottom>
          Tus Próximos Eventos
        </Typography>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
      {events.length ? (
        <div
          className={classes.containerEvents}
          style={smallScreen ? { gap: "10px" } : {}}
        >
          {events.map((event) => (
            <ResumedCardEvento event={event} enlisted={true} key={event.id} />
          ))}
        </div>
      ) : (
        <div className={classes.noEvents}>
          <Typography
            color="textSecondary"
            className={
              smallScreen
                ? classes.resp_noevents_message
                : classes.noevents_message
            }
          >
            Aún no te has registrado a ningún evento. Una vez te hayas
            registrado a alguno de nuestros eventos, aparecerán en tu página de
            inicio.
          </Typography>
          <MyButton
            className="default"
            onClick={() => (window.location.href = "/eventos")}>
              Explorar eventos
          </MyButton>
        </div>
      )}
      <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
    </div>
  );
};

export default EventosProyecto;