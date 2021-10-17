import {React, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Form, Field } from "react-final-form";
import { useMediaQuery, Button, Grid, Typography } from "@material-ui/core";
import { TextField } from "final-form-material-ui";
import { validEmail, validPassword } from "./RegEx";
//import { useHistory } from "react-router-dom";
import AxiosClient from "./AxiosClient";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide'


const useStyles = makeStyles((theme) => ({
  registerContainer: {
    margin:'150px 0',
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  smallNameContainer:{
    display: "flex",
    flexDirection: "column",
  },
  registerCard: {
    padding: "30px",
    width: "750px",
    marginRight: "80px",
    background: "#F2F2F2",
    boxShadow:
      "0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px 6px 0px 0px",
  },
  smallRegisterCard: {
    padding: "10px",
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "42px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  registerButton: {
    color: "white",
    fontWeight: "bold",
  },
  textField: {
    marginBottom: "16px",
  },
}));

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const RegisterForm = () => {
  //const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
const [transition, setTransition] = React.useState(undefined);
  const smallScreen = useMediaQuery("(min-width:420px)");
  const validate = (values) => {
    const errors = {};
    if (!validEmail.test(values.email)) {
      errors.email = "No valido";
    }
    if (!values.username) {
      errors.username = "Campo requerido";
    }
    if (!values.phone) {
      errors.phone = "Campo requerido";
    }
    if (!values.lastname) {
      errors.lastname = "Campo requerido";
    }
    if (!validPassword.test(values.password)) {
      errors.password = "Debe contener 6 caracteres y un número";
    }
    if (values.confirmPassword !== values.password || !values.confirmPassword) {
      errors.confirmPassword = "Contraseñas no coinciden";
    }
    return errors;
  };

  const handleClickOpen = (Transition,newState) => {
    setTransition(() => Transition);
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    window.location.href = `/login`;
  };
  const URL_AUTH = process.env.REACT_APP_API_AUTH
  const URL = process.env.REACT_APP_API
  const onSubmit = async (values) => {
    const bodyAuth = {
      email: values.email,
      password: values.password,
    };
    
    console.log(bodyAuth);
    AxiosClient.post(`${URL_AUTH}api/auth/signup`, bodyAuth)
      .then((response) => {
        if (response.status === 200) {
          const id_auth = response.data.id_autenticacion
          const body = {
            nombre: values.username,
            apellido: values.lastname,
            telefono: `+591 ${values.phone}`,
            id_autenticacion: parseInt(id_auth),
          };
          AxiosClient.post(`${URL}extended_form`, body)
            .then((response) => {
              if (response.status === 200) {
                activeAlertMessage("Se ha registrado el usuario correctamente.", ()=>history.push(`/login`))
              }
            })
            .catch((response) => {
              activeAlertMessage(`${response}`, ()=>window.location.reload())
            });
        }
      }) 
      .catch((response) => {
        activeAlertMessage(`El correo: ${values.email} ya ha sido registrado.`, ()=>window.location.reload())
      });
      handleClickOpen(TransitionDown,{ vertical: 'top', horizontal: 'center' });
  };

  return (
    <div className={classes.registerContainer}>
      <AlertMessage message = {alertMessage.message} handleConfirm={alertMessage.handleConfirm} active={alertMessage.active}/>
      <LogoAndSlogan/>
      <Grid>
        <div >
          <Typography variant="h3" >
            Llena tus datos
          </Typography>
        </div>
        <Card
          className={
            smallScreen ? classes.smallRegisterCard: classes.registerCard
          }
        >
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  fullWidth
                  label="Ingresa tu correo electrónico"
                  name="email"
                  type="text"
                  placeholder="ejemplo@gmail.com"
                  className={classes.textField}
                  component={TextField}
                  required
                />
                <div className={smallScreen? classes.smallNameContainer: classes.nameContainer}>
                  <Field
                    style={{ width: smallScreen? "100%":"49%" }}
                    label="Ingresa tu nombre"
                    name="username"
                    type="text"
                    placeholder="Juan"
                    className={classes.textField}
                    component={TextField}
                    required
                  />
                  <Field
                    style={{ width: smallScreen? "100%":"49%" }}
                    label="Ingresa tu apellido"
                    name="lastname"
                    type="text"
                    placeholder="Pérez"
                    className={classes.textField}
                    component={TextField}
                    required
                  />
                </div>
                <Field
                  fullWidth
                  label="Ingresa tu número de teléfono"
                  name="phone"
                  type="phone"
                  component={TextField}
                  className={classes.textField}
                />
                <Field
                  fullWidth
                  label="Ingresa tu contraseña"
                  name="password"
                  type="password"
                  className={classes.textField}
                  component={TextField}
                  required
                />
                <Field
                  fullWidth
                  label="Confirma tu contraseña"
                  name="confirmPassword"
                  type="password"
                  className={classes.textField}
                  component={TextField}
                  required
                />
                <div className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.registerButton}
                    type="submit"
                  >
                    Crear cuenta start
                  </Button>
                </div>
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                  TransitionComponent={transition}
                  key={transition ? transition.name : ''}
                >
                  <Alert onClose={handleClose} severity="success" variant="filled">
                    Su usuario fue creado correctamente!
                  </Alert>
                </Snackbar>
              </form>
            )}
          </Form>
        </Card>
      </Grid>
    </div>
  );
};

export default RegisterForm;
