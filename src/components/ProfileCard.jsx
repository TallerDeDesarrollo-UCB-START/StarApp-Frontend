import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


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

const ProfileCard = (props) => {
  const classes = useStyles();
  const { getDataProfile, handleOpenprop } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <TabsProfile 
          getDataProfile={getDataProfile}
          handleOpenprop={handleOpenprop}
         />
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
                {getDataProfile.descripcion_personal ? (
                  getDataProfile.descripcion_personal
                ) : (
                  <span style={{ color: "red " }}>Sin llenar</span>
                )}
              </Paper>
            </Grid>
            <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }}>
                <Typography>Contacto de emergencia:</Typography>

                <Typography variant="body2">
                  Nombre:{" "}
                  {getDataProfile.nombre_contacto_de_emergencia ? (
                    getDataProfile.nombre_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>
                <Typography variant="body2">
                  Relacion:{" "}
                  {getDataProfile.relacion_contacto_de_emergencia ? (
                    getDataProfile.relacion_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>

                <Typography variant="body2">
                  Teléfono:{" "}
                  {getDataProfile.numero_contacto_de_emergencia ? (
                    getDataProfile.numero_contacto_de_emergencia
                  ) : (
                    <span style={{ color: "red " }}>Sin llenar</span>
                  )}
                </Typography>
              </Paper>
            </Grid>
            <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }}>
                <Typography>Intereses Generales:</Typography>
                {getDataProfile.intereses.map((interes) => (
                  <Typography key={interes} variant="body2">
                    {interes}
                  </Typography>
                ))}
              </Paper>
            </Grid>
            <Grid className={classes.paper}>
              <Paper style={{ padding: "15px" }}>
                <Typography>Cualidades:</Typography>
                {getDataProfile.cualidades.map((cualidad) => (
                  <Typography variant="body2" key={cualidad}>
                    {cualidad}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.paper}>
            <Grid>
              <Paper style={{ padding: "15px" }}>
                <Typography>Datos Personales</Typography>
                <Grid>
                  <Divider style={{ borderColor: "black" }} />
                  <Typography variant="body2">
                    Nombre: {getDataProfile.nombre} {getDataProfile.apellido}
                  </Typography>
                  <Typography variant="body2">
                    Edad:{" "}
                    {getDataProfile.fecha_de_nacimiento ? (
                      calcularEdad(
                        getDataProfile.fecha_de_nacimiento
                      ).toString() + " años"
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Genero:{" "}
                    {getDataProfile.genero ? (
                      getDataProfile.genero
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>

                  <Typography variant="body2">
                    Ocupación:{" "}
                    {getDataProfile.ocupacion ? (
                      getDataProfile.ocupacion
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Carrera:{" "}
                    {getDataProfile.carrera ? (
                      getDataProfile.carrera
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                  <Typography variant="body2">
                    Telefono:{" "}
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
                    Pais de residencia:{" "}
                    {getDataProfile.pais_de_recidencia ? (
                      getDataProfile.pais_de_recidencia
                    ) : (
                      <span style={{ color: "red " }}>Sin llenar</span>
                    )}
                  </Typography>
                </Grid>
              </Paper>
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
                <DeteleButton className={classes.paper} variant="contained">
                  Eliminar perfil
                </DeteleButton>
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
