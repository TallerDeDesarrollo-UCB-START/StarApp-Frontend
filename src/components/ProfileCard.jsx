import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Divider,Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TabsProfile from "./TabsProfile";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "80vh",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    backgroundColor: "#6599BC",
  },
  paper: {
    marginTop: 15,
  },
}));

const ProfileCard = ({ getDataProfile }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <TabsProfile />
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6} className={classes.paper}>
            <Grid>
              <Paper>
                <Typography> Rol: {getDataProfile.rol} </Typography>
              </Paper>
            </Grid>

            <Grid className={classes.paper}>
              <Paper>
                <Typography>Descripcion:</Typography>
                {getDataProfile.descripcion_personal}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                magni, iusto reprehenderit voluptatem ut eos esse cumque amet
                totam commodi excepturi dicta dolor odio necessitatibus
                possimus. Ut culpa impedit laborum eos? Autem quis, velit quos
                praesentium dolorum amet repellat porro esse quibusdam odio a
                nihil nesciunt? Culpa est eius numquam, odio assumenda
                perspiciatis aliquam natus velit minus alias itaque quam
                repellendus autem nostrum iste sequi officia molestias, eos,
                temporibus iure libero vel optio veniam vero! Nemo veritatis ea
                quia facere dignissimos. Eveniet alias praesentium dolorum
                asperiores, cupiditate corporis similique blanditiis minima
                deleniti atque ut eos consectetur voluptatibus ex rem debitis.
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.paper}>
            <Grid>
              <Paper>
                <Typography>Datos Personales:</Typography>
                <Divider variant="middle" />
                <Typography>
                  Nombre: {getDataProfile.nombre}
                  {getDataProfile.apellido}
                </Typography>
                <Typography>Edad: </Typography>
                <Typography>Genero: {getDataProfile.genero}</Typography>
                <Typography>
                  Nivel de estudio: {getDataProfile.nivel_de_estudios}
                </Typography>
                <Typography>Carrera:{getDataProfile.carrera}</Typography>
                <Typography>Telefono:{getDataProfile.telefono}</Typography>
                <Typography>C.I.:</Typography>
                <Typography>E-mail:</Typography>
                <Typography>
                  Ciudad de residencia: {getDataProfile.ciudad_de_recidencia}
                </Typography>
                <Typography>
                  Pais de residencia:{getDataProfile.pais_de_recidencia}
                </Typography>
              </Paper>
              <Button variant="contained" style={{backgroundColor:'#d15c5a',}}>
                    Eliminar Perfil
              </Button>
            </Grid>
          </Grid>
        </Grid >
       
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default withRouter(ProfileCard);
