import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import LogoStart from "../images/logoStart.png";
import { Form, Field } from "react-final-form";
import { useMediaQuery, Button, Grid, Typography } from "@material-ui/core";
import { TextField } from "final-form-material-ui";
import { validEmail, validPassword } from "./RegEx";
import { useHistory } from "react-router-dom";
import AxiosClient from "./AxiosClient";

const useStyles = makeStyles((theme) => ({
  registerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "500px",
    height: "200px",
    marginTop: "5px",
  },
  registerCard: {
    padding: "30px",
    width: "750px",
    height: "500px",
    marginRight: "80px",
    background: "#F2F2F2",
    boxShadow:
      "0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px 6px 0px 0px",
  },
  respregisterCard: {
    width: "100%",
    height: "484px",
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

const RegisterForm = () => {
  const history = useHistory();
  const classes = useStyles();
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
  const URL = process.env.REACT_APP_API_AUTH;
  const onSubmit = async (values) => {
    const body = {
      username: `${values.username} ${values.lastname}`,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };
    console.log(body);
    return AxiosClient.post(`${URL}api/auth/signup`, body)
      .then((response) => {
        if (response.status === 200) {
          history.push(`/login`);
        } else {
          alert("Registro fallido");
          history.push(`/register`);
        }
      })
      .catch((response) => {
        console.log(response.status);
      });
  };
  return (
    <div className={classes.registerContainer}>
      <div className={classes.logoContainer}>
        <img src={LogoStart} alt="logo Start" className={classes.logo} />
        <Typography variant="h2" style={{ marginRight: "" }}>
          Incubadora de proyectos sociales y ambientales
        </Typography>
      </div>
      <Grid>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h3" style={{ marginRight: "80px" }}>
            Formulario de registro
          </Typography>
        </div>
        <Card
          className={
            smallScreen ? classes.registerCard : classes.respregisterCard
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
                <div className={classes.nameContainer}>
                  <Field
                    style={{ width: "49%" }}
                    label="Ingresa tu nombre"
                    name="username"
                    type="text"
                    placeholder="Juan"
                    className={classes.textField}
                    component={TextField}
                    required
                  />
                  <Field
                    style={{ width: "49%" }}
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
              </form>
            )}
          </Form>
        </Card>
      </Grid>
    </div>
  );
};

export default RegisterForm;
