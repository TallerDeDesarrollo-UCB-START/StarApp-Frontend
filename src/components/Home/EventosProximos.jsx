import React, { useState, useEffect } from "react";
import { Typography, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import CardEvento from './CardEvento'
import ResumedCardEvento from "./ResumedCardEvento";
import axios from "axios";
import BadRequests from "../../components/redirect status/BadRequests";
import SnackbarMessage from "../../components/templates/SnackbarMessage";
import RedirectErrorPage from "../redirect status/RedirectErrorPage";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root_container: {
    margin: "40px 10px",
  },
  resp_root_container: {
    margin: "10px 15px",
  },
  container_events: {
    margin: "20px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "30px 30px",
  },
  no_events: {
    margin: "200px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resp_noevents_message: {
    fontSize: "16px",
  },
  resp_no_events:{
    margin: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const EventosProximos = ({ id, title }) => {
  const [snackbar, setSnackbar] = React.useState({
    message: "",
    active: false,
    severity: "success",
    afterClose: () => {},
  });
  const activeSnackbar = (message, severity, afterClose) => {
    setSnackbar({ message, severity, afterClose, active: true });
  };
  const history = useHistory();
  const smallScreen = !useMediaQuery("(min-width:500px)");
  const [events, setEvents] = useState([]);
  const classes = useStyles();
  const baseURL = `${process.env.REACT_APP_API}sesion/${id}/get_my_eventos`;
  console.log("efafwafadaf")
  console.log(baseURL)
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
          console.log(error.response);
          if (error.message == "Network Error"){
            RedirectErrorPage(500,history,"Hubo un error en la conexión con los datos.")
            return;
          }
          console.log(error);
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
          className={classes.container_events}
          style={smallScreen ? { gap: "10px" } : {}}
        >
          {events.map((event) => (
            <ResumedCardEvento event={event} enlisted={true} key={event.id} />
          ))}
        </div>
      ) : (
        <div className={`${smallScreen? classes.resp_no_events : classes.no_events}`}>
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
          <Button
            onClick={() => (window.location.href = "/eventos")}
            variant="contained"
            color="primary"
            style={{ margin: "20px 0" }}
          >
            Explorar eventos
          </Button>
          <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
        </div>
      )}
    </div>
  );
};

export default EventosProximos;
