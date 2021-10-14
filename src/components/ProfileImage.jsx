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
//const baseURL = `${url}extended_form`;
const baseURL = "http://localhost:5000/extended_form/";

export default function ProfileImage({ getDataProfile }) {
  const classes = useStyles();

  const [state, setState] = React.useState(getDataProfile.estado_de_disponibilidad==="disponible");

  var peticionPatch = (disponibilidad) => {
    axios
      .patch(baseURL + "update_availability/" + getDataProfile.id_usuario, disponibilidad)
      .catch((error) => {
        alert(error.message);
      });
  };
  function sendAvailable() {
    const disponibilidad = {  
      estado_de_disponibilidad: getDataProfile.estado_de_disponibilidad,
    };
    peticionPatch(disponibilidad);
  }

  const handleChange = () => {
    setState((stat) => !stat);
  };

  return (
    <Grid>
      <div className={classes.large}>
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={getDataProfile.estado_de_disponibilidad==="disponible"}
          color={state ? "secondary" : "primary"}
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
          <Grid
            className={classes.switchStyle}
            container
            justifyContent="flex-end"
          >
            <Chip
              className={classes.chipStyle}
              label={getDataProfile.rol}
              color="secondary"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state}
                  onClick={sendAvailable}
                  onChange={handleChange}
                  color="secondary"
                />
              }
              label={`${state ? "Estoy disponible" : "No disponible"}`}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
