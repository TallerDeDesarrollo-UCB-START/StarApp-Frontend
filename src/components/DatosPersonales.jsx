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

    },
    greyColor: {
      color: "#5F5F5F"
    },
    blackColor: {
      color: "black"
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
                <Typography><strong className={classes.blackColor}>Datos Personales:</strong></Typography>
                <Grid>
                  <Divider style={{ borderColor: "black" }} />
                  <Typography variant="body2" className={classes.greyColor}>
                    <strong className={classes.blackColor}> Nombre:</strong> {smallScreen? <br></br>: ""} {getDataProfile.nombre} {getDataProfile.apellido} 
                  </Typography>
                  <Typography variant="body2"  className={classes.greyColor}>
                   <strong className={classes.blackColor}> Edad:</strong>{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.fecha_de_nacimiento ? (
                      calcularEdad(
                        getDataProfile.fecha_de_nacimiento
                      ).toString() + " años"
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2" className={classes.greyColor}>
                   <strong className={classes.blackColor}> Genero:</strong>{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.genero ? (
                      getDataProfile.genero
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>

                  <Typography variant="body2" className={classes.greyColor}>
                  <strong className={classes.blackColor}>  Ocupación:</strong>{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.ocupacion ? (
                      getDataProfile.ocupacion
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2" className={classes.greyColor}>
                   <strong className={classes.blackColor}> Carrera:</strong>{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.carrera ? (
                      getDataProfile.carrera
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2" className={classes.greyColor}>
                   <strong className={classes.blackColor}> Telefono:</strong>{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.telefono ? (
                      getDataProfile.telefono
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2" className={classes.greyColor}>
                   <strong className={classes.blackColor}> Ciudad de residencia:</strong>{" "} {smallScreen? <br></br>: ""}
                    {getDataProfile.ciudad_de_recidencia ? (
                      getDataProfile.ciudad_de_recidencia
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2" className={classes.greyColor}>
                   <strong className={classes.blackColor}> Pais de residencia:</strong>{" "} {smallScreen? <br></br>: ""}
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
                <Typography><strong className={classes.blackColor}> Contacto de emergencia:</strong></Typography>
                <Divider style={{ borderColor: "black"}} />
                <Typography variant="body2"  className={classes.greyColor}>
                 <strong className={classes.blackColor}> Nombre:</strong>{" "} {smallScreen? <br></br>: ""}
                  {getDataProfile.nombre_contacto_de_emergencia ? (
                    getDataProfile.nombre_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>
                <Typography variant="body2"  className={classes.greyColor}>
                <strong className={classes.blackColor}> Relacion:</strong>{" "} {smallScreen? <br></br>: ""}
                  {getDataProfile.relacion_contacto_de_emergencia ? (
                    getDataProfile.relacion_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>

                <Typography variant="body2"  className={classes.greyColor}>
                 <strong className={classes.blackColor}> Teléfono:</strong>{" "} {smallScreen? <br></br>: ""}
                  {getDataProfile.numero_contacto_de_emergencia ? (
                    getDataProfile.numero_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>
              </Paper>
              <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                <Typography><strong className={classes.blackColor}>Descripcion:</strong></Typography>
                <Divider style={{ borderColor: "black" }} />
                {getDataProfile.descripcion_personal ? (
                <span  className={classes.greyColor}>  {getDataProfile.descripcion_personal} </span>
                ) : (
                  <span style={{ color: "red " }} >Sin llenar</span>
                )}
              </Paper>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.paper}>
              <Grid>
                <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                  <Typography ><strong className={classes.blackColor}>Intereses Generales:</strong></Typography>
                  <Divider style={{ borderColor: "black" }} />
                  {getDataProfile.intereses.map((interes) => (
                    <li key={interes} variant="body2"  className={classes.greyColor}>
                      {interes}
                    </li>
                  ))}
                </Paper>
              </Grid>
              <Grid className={classes.paper}>
                <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                  <Typography><strong className={classes.blackColor}>Cualidades:</strong></Typography>
                  <Divider style={{ borderColor: "black" }} />
                  {getDataProfile.cualidades.map((cualidad) => (
                    <li variant="body2" key={cualidad}  className={classes.greyColor}>
                      {cualidad}
                    </li>
                  ))}
                </Paper>
              </Grid>
              <Grid className={classes.paper}>
                <Paper style={{ padding: "15px" }} className= {smallScreen? classes.smallGrid: ""}>
                  <Typography><strong className={classes.blackColor}>Aptitudes Tecnicas:</strong></Typography>
                  <Divider style={{ borderColor: "black" }} />
                  {getDataProfile.aptitudes_tecnicas.map((aptitud) => (
                    <li variant="body2" key={aptitud}  className={classes.greyColor}>
                      {aptitud}
                    </li>
                  ))}
                </Paper>
              </Grid>
              <Grid container justifyContent="space-evenly" >
                {smallScreen? " ": <Button
                  type="button"
                  className={classes.paper}
                  onClick={handleOpenprop}
                  variant="contained"
                  color="primary"
                >
                  {smallScreen? "Editar": "Editar Perfil"} 
                </Button>}
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