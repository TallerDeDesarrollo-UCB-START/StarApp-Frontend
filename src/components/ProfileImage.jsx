import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PerfilDefault from "../images/PerfilDefault.jpg";
import {
  Chip,
  Grid,
  Box,
  Switch,
  FormControlLabel,
  Badge,
} from "@material-ui/core/";
import axios from "axios";
import { configOptions } from "final-form";

const useStyles = makeStyles((theme) => ({
  large: {
    marginTop: "5px",
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
  },
  switchStyle: {
    marginRight: "10%",
  },
  chipStyle: {
    marginRight: "28%",
  },
}));

const url = process.env.REACT_APP_API;
const baseURL = `${url}extended_form/`;

//const baseURL = "http://localhost:5000/extended_form/";

export default function ProfileImage({ getDataProfile, setDataProfile }) {
  const classes = useStyles();

  var peticionPut = (disponibilidad) => {
    axios
      .put(baseURL + getDataProfile.id_usuario, disponibilidad)
      .catch((error) => {
        alert(error.message);
      });
  };
  function sendAvailable() {
    var stateAvailable = getDataProfile.estado_de_disponibilidad;
    if (stateAvailable === "disponible") {
      stateAvailable = "no disponible";
    } else {
      stateAvailable = "disponible";
    }
    setDataProfile({
      ...getDataProfile,
      estado_de_disponibilidad: stateAvailable,
    });
    const disponibilidad = {
      estado_de_disponibilidad: stateAvailable,
    };
    peticionPut(disponibilidad);
  }

  const handleChange = () => {};

  return (
    <Grid>
      <div className={classes.large}>
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={getDataProfile.estado_de_disponibilidad ? "" : ""}
          color={
            getDataProfile.estado_de_disponibilidad === "disponible"
              ? "secondary"
              : "primary"
          }
        >
          <Avatar
            alt="Imagen de Perfil"
            src={PerfilDefault}
            className={classes.large}
          />
        </Badge>
      </div>
      <Box textAlign="center">
        <Grid>
          <Typography variant="h6">
            {getDataProfile.nombre} {getDataProfile.apellido}
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Grid container justifyContent="center">
            <Chip label={getDataProfile.rol} color="secondary" />
          </Grid>
          <Grid
            className={classes.switchStyle}
            container
            justifyContent="flex-end"
          >
            <FormControlLabel
              control={
                <Switch
                  checked={
                    getDataProfile.estado_de_disponibilidad === "disponible"
                  }
                  onClick={sendAvailable}
                  onChange={handleChange}
                  color="secondary"
                />
              }
              label={`${
                getDataProfile.estado_de_disponibilidad === "disponible"
                  ? "Estoy disponible"
                  : "No disponible"
              }`}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
