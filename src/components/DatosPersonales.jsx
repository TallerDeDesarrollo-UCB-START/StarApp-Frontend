import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import { useMediaQuery, Typography, Divider, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import DialogConfirm from "./DialogConfirm"

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
    smallGrid: {
      background: "transparent",
      boxShadow: "none"
    }
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
    const smallScreen = !useMediaQuery("(min-width:811px)")
    const classes = useStyles();
    const { getDataProfile, handleOpenprop } = props;
    return (
        <div>
          <Grid container item xs={12} spacing={1}>
            
          <Grid item xs={12} md={6} className={classes.paper}>
            <Grid>
              <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""} >
                <Typography>Datos Personales</Typography>
                <Grid>
                  <Divider style={{ borderColor: "black" }} />
                  <Typography variant="body2">
                    Nombre: {smallScreen? <br></br>: ""} {getDataProfile.nombre} {getDataProfile.apellido} 
                  </Typography>
                  <Typography variant="body2">
                    Edad:{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.fecha_de_nacimiento ? (
                      calcularEdad(
                        getDataProfile.fecha_de_nacimiento
                      ).toString() + " años"
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Genero:{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.genero ? (
                      getDataProfile.genero
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>

                  <Typography variant="body2">
                    Ocupación:{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.ocupacion ? (
                      getDataProfile.ocupacion
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Carrera:{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.carrera ? (
                      getDataProfile.carrera
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Telefono:{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.telefono ? (
                      getDataProfile.telefono
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Ciudad de residencia:{" "}
                    {getDataProfile.ciudad_de_recidencia ? (
                      getDataProfile.ciudad_de_recidencia
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Pais de residencia:{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.pais_de_recidencia ? (
                      getDataProfile.pais_de_recidencia
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                </Grid>
                
              </Paper>
              <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                <Typography>Contacto de emergencia:</Typography>
                <Divider style={{ borderColor: "black"}} />
                <Typography variant="body2">
                  Nombre:{" "} {smallScreen? <br></br>: ""}
                  {getDataProfile.nombre_contacto_de_emergencia ? (
                    getDataProfile.nombre_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>
                <Typography variant="body2">
                  Relacion:{" "} {smallScreen? <br></br>: ""}
                  {getDataProfile.relacion_contacto_de_emergencia ? (
                    getDataProfile.relacion_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>

                <Typography variant="body2">
                  Teléfono:{" "} {smallScreen? <br></br>: ""}
                  {getDataProfile.numero_contacto_de_emergencia ? (
                    getDataProfile.numero_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>
              </Paper>
              <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                <Typography>Descripcion:</Typography>
                <Divider style={{ borderColor: "black" }} />
                {getDataProfile.descripcion_personal ? (
                  getDataProfile.descripcion_personal
                ) : (
                  <span style={{ color: "red " }}>Sin llenar</span>
                )}
              </Paper>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.paper}>
              {/* <Grid>
                <Paper style={{ padding: "15px" }}>
                  <Typography> Rol: {getDataProfile.rol} </Typography>
                </Paper>
              </Grid> */}            
              <Grid>
                <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                  <Typography>Intereses Generales:</Typography>
                  <Divider style={{ borderColor: "black" }} />
                  {getDataProfile.intereses.map((interes) => (
                    <li key={interes} variant="body2">
                      {interes}
                    </li>
                  ))}
                </Paper>
              </Grid>
              <Grid className={classes.paper}>
                <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                  <Typography>Cualidades:</Typography>
                  <Divider style={{ borderColor: "black" }} />
                  {getDataProfile.cualidades.map((cualidad) => (
                    <li variant="body2" key={cualidad}>
                      {cualidad}
                    </li>
                  ))}
                </Paper>
              </Grid>
              <Grid className={classes.paper}>
                <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                  <Typography>Aptitudes Tecnicas:</Typography>
                  <Divider style={{ borderColor: "black" }} />
                  {getDataProfile.aptitudes_tecnicas.map((aptitud) => (
                    <li variant="body2" key={aptitud}>
                      {aptitud}
                    </li>
                  ))}
                </Paper>
              </Grid>
              <Grid container justifyContent="space-evenly">
                <Button
                  type="button"
                  className={classes.paper}
                  onClick={handleOpenprop}
                  variant="contained"
                  color="primary"
                >
                  Editar Perfil
                </Button>
                {/* <DeleteButton className={classes.paper} variant="contained">
                  Eliminar perfil
                </DeleteButton> */}
                <DialogConfirm/>
              </Grid>
            </Grid>
        </Grid>
          
          <CardActions></CardActions>
        </div>
      );
  }

  export default withRouter(DatosPersonales);