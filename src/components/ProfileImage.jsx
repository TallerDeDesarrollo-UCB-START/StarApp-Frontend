import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PerfilDefault from "../images/PerfilDefault.jpg";
import { Chip, Grid, Box } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  large: {
    marginTop: "30px",
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
  },
  contentCenter: {},
}));

export default function ProfileImage({ getDataProfile }) {
  const classes = useStyles();

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
        <Chip label={getDataProfile.rol} color="secondary" />
      </Box>
    </Grid>
  );
}
