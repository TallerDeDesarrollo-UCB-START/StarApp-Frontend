import React, { useState, useEffect } from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventCard from "../../components/eventCard";
import axios from "axios";
import SnackbarMessage from "../../components/templates/SnackbarMessage";
import RedirectErrorPage from "../../components/redirect status/RedirectErrorPage";
import { useHistory } from "react-router-dom";
import MyButton from "../../components/button";

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
const resizeCSSOfContainer = (smallScreen, classes)=>{
  if (smallScreen)
  {
    return classes.resp_noevents_message;
  }
  else{
    return classes.noevents_message;
  }
}
const resizeCSSOfDescriptionProyects = (smallScreen, classes)=>{
  if (smallScreen)
  {
    return classes.resp_no_events;
  }
  else{
    return classes.no_events;
  }
}
const EventosProximos = ({ id, title }) => {
  const [snackbar, setSnackbar] = React.useState({
    message: "",
    active: false,
    severity: "success",
    afterClose:()=>{console.log("despues del mensaje");},
  });
  const history = useHistory();
  const smallScreen = !useMediaQuery("(min-width:500px)");
  const [events, setEvents] = useState([]);
  const classes = useStyles();
  const baseURL = `${process.env.REACT_APP_API}sesion/${id}/get_my_eventos`;

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
      {events.length ? (
        <div
          className={classes.container_events}
          style={smallScreen ? { gap: "10px" } : {}}
        >
          {events.map((event) => (
            <EventCard event={event}/>
          ))}
        </div>
      ) : (
        <div className={resizeCSSOfDescriptionProyects(smallScreen,classes)}>
          <Typography
            color="textSecondary"
            className={
              resizeCSSOfContainer(smallScreen, classes)
            }
          >
            Aún no te has registrado a ningún evento. Una vez te hayas registrado a alguno de nuestros eventos, aparecerán en tu página de inicio.
          
          </Typography>
          <MyButton className="default" onClick={() => (window.location.href = "/eventos")}>
            Explorar Eventos
          </MyButton>
          <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
        </div>
      )}
    </div>
  );
};

export default EventosProximos;
