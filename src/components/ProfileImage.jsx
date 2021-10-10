import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PerfilDefault from "../images/PerfilDefault.jpg";
import { Chip, Grid, Box, Switch, FormControlLabel } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  large: {
    marginTop: "30px",
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

export default function ProfileImage({ getDataProfile }) {
  const classes = useStyles();

  const [state, setState] = React.useState(true);

  const handleChange = () => {
    setState((stat) => !stat);
  };

  return (
    <Grid>
      <Avatar
        alt="Imagen de Perfil"
        src={PerfilDefault}
        className={classes.large}
      />
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
                  onChange={handleChange}
                  color="primary"
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
