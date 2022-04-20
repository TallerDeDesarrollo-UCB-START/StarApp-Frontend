import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Insignia from "./Insignia";

const useStyles = makeStyles((theme) => ({
  styleGrid: {
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
  },
}));

const url = process.env.REACT_APP_API;
const baseURL = `${url}insignias`;
const api = axios.create({
  baseURL: baseURL,
});
function ListaInsignias() {
  const classes = useStyles();
  const [insignias, setInsignias] = useState([]);
  const [insigniasOfUser, setInsigniasUser] = useState([]);
  const obtenerInsigniasUsuario = async () => {
    const idSesion = sessionStorage.getItem("id");
    try{
      let dataUsuario = await api
        .get(`${baseURL}/${idSesion}`)
        .then((dataUsuario) => dataUsuario);
      setInsigniasUser(dataUsuario.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const obtenerInsignias = async () => {
    try{
      let dataLocal = await api.get(`${baseURL}`).then((data) => data);
      setInsignias(dataLocal.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerInsignias();
    obtenerInsigniasUsuario();
  }, []);

  return (
    <Grid
      className={classes.styleGrid}
      justifyContent="space-around"
      container
      spacing={3}
    >
      <Insignia insignias={insignias} insigniasOfUser={insigniasOfUser} />
    </Grid>
  );
}

export default ListaInsignias;
