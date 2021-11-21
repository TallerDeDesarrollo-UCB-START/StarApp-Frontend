import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useMediaQuery, Typography } from "@material-ui/core";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Insignia from "./Insignia";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
  },
  containerSearchField: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  smallContainerSearchField: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  containerTable: {
    height: 400,
    width: "100%",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: "30000",
  color: theme.palette.text.secondary,
}));

const url = process.env.REACT_APP_API;
const baseURL = `${url}insignias`;
const api = axios.create({
  baseURL: baseURL,
});
function ListaInsignias() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [dataUsuario, setDataUsuario] = useState([]);
  //const [originalData, setOriginalData] = useState([])
  const smallScreen = useMediaQuery("(min-width:700px)");
  const obtenerInsigniasUsuario = async () => {
    const idSesion = sessionStorage.getItem("id");
    let dataUsuario = await api
      .get(`${baseURL}/${idSesion}`)
      .then((dataUsuario) => dataUsuario);
    setDataUsuario(dataUsuario);
    console.log(data);
    //console.log(dataUsuario.data);
  };
  const obtenerInsignias = async () => {
    let dataLocal = await api.get(`${baseURL}`).then((data) => data);
    console.log(dataLocal.data);
    setData(dataLocal);
    // console.log(data.data);
  };

  useEffect(() => {
    obtenerInsignias();
    obtenerInsigniasUsuario();
  }, []);

  return (
    <Box>
      {/* <Grid>{data.data.map((insignia) => insignia.insignia)} */}
      <Grid></Grid>
    </Box>
  );
}

export default ListaInsignias;
