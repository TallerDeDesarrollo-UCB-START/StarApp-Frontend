import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Divider, Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TabsProfile from "./TabsProfile";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
    backgroundColor: "#AAB6C5",
    margin: "3% 10% 5% 10%",
  },
  paper: {
    marginTop: 20,
  },
}));

const ProfileCard = ({ getDataProfile }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <TabsProfile />
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={6} className={classes.paper}>
            <Grid>
              <Paper style={{ padding: "15px" }}>
                <Typography> Rol: {getDataProfile.rol} </Typography>
              </Paper>
            </Grid>
            <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }}>
                <Typography>Descripcion:</Typography>
                {getDataProfile.descripcion_personal}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.paper}>
            <Grid>
              <Paper style={{ padding: "15px" }}>
                <Typography variant="h6">Datos Personales</Typography>
                <Grid>
                  <Divider style={{ borderColor: "black" }} />
                  <Typography>
                    Nombre: {getDataProfile.nombre} {getDataProfile.apellido}
                  </Typography>
                  <Typography>Edad: {getDataProfile.fecha_de_nacimiento}</Typography>
                  <Typography>Genero: {getDataProfile.genero}</Typography>
                  <Typography>
                    Nivel de estudio: {getDataProfile.nivel_de_estudios}
                  </Typography>
                  <Typography>Carrera: {getDataProfile.carrera}</Typography>
                  <Typography>Telefono: {getDataProfile.telefono}</Typography>
                  <Typography>
                    Ciudad de residencia: {getDataProfile.ciudad_de_recidencia}
                  </Typography>
                  <Typography>
                    Pais de residencia: {getDataProfile.pais_de_recidencia}
                  </Typography>
                </Grid>
              </Paper>
              <Grid container justifyContent="flex-end">
                <Button
                  className={classes.paper}
                  variant="contained"
                  style={{ backgroundColor: "#ED2020", color: "#FFFFFF" }}
                >
                  Eliminar perfil
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default withRouter(ProfileCard);
