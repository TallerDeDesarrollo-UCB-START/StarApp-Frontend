import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Divider, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";

import { withRouter } from "react-router";

const DeteleButton = withStyles((theme) => ({
    root: {
      backgroundColor: "#ED2020",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#a90e0e",
      },
    },
  }))(Button);

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

  function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
  
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
  
    return edad;
  }
  const DatosPersonales = (props) => {
    const classes = useStyles();
    const { getDataProfile, handleOpenprop } = props;
    return (
        <div>
          
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={6} className={classes.paper}>
                <Grid>
                  <Paper style={{ padding: "15px" }}>
                    <Typography variant="h6">Datos Personales</Typography>
                    <Grid>
                      <Divider style={{ borderColor: "black" }} />
                      <Typography>
                        Nombre: {getDataProfile.nombre} {getDataProfile.apellido}
                      </Typography>
                      <Typography>
                        Edad: {calcularEdad(getDataProfile.fecha_de_nacimiento)}{" "}
                        años
                      </Typography>
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
                </Grid>
                <Grid className={classes.paper}>
                  <Paper style={{ padding: "15px" }}>
                    <Typography variant="h6">Contacto de emergencia:</Typography>
                    <Divider style={{ borderColor: "black" }} />
                    <Typography>
                      Nombre: {getDataProfile.nombre_contacto_de_emergencia}
                    </Typography>
                    <Typography>
                      Relacion: {getDataProfile.relacion_contacto_de_emergencia}
                    </Typography>
                    <Typography>
                      Teléfono: {getDataProfile.numero_contacto_de_emergencia}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.paper}>
                
                <Grid>
                  <Paper style={{ padding: "15px" }}>
                    <Typography>Descripcion:</Typography>
                    {getDataProfile.descripcion_personal}
                  </Paper>
                </Grid>
                <Grid className={classes.paper}>  
                    <Paper style={{ padding: "15px" }}>
                    <Typography variant="h6">Aptitudes tecnicas:</Typography>
                    <Divider style={{ borderColor: "black" }} />
                    {getDataProfile.intereses.map(i=> <li key={Math.random().toString(36).substr(2, 9)}> {i}</li>)}
                    
                  </Paper>
                </Grid>
                <Grid className={classes.paper}>  
                    <Paper style={{ padding: "15px" }}>
                    <Typography variant="h6">Intereses Generales:</Typography>
                    <Divider style={{ borderColor: "black" }} />
                    {getDataProfile.intereses.map(i=> <li key={Math.random().toString(36).substr(2, 9)}> {i}</li>)}
                  </Paper>
                </Grid>      
                  <Grid container justifyContent="space-between">
                    <Button
                      type="button"
                      className={classes.paper}
                      onClick={handleOpenprop}
                      variant="contained"
                      color="primary"
                    >
                      Editar Perfil
                    </Button>
                    <DeteleButton className={classes.paper} variant="contained">
                      Eliminar perfil
                    </DeteleButton>
                  </Grid>
                
              </Grid>
            </Grid>
          
          <CardActions></CardActions>
        </div>
      );
  }
  export default withRouter(DatosPersonales);