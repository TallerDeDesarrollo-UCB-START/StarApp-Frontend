import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import InputTextbox from "./InputTextbox";
import { Form } from "react-final-form";
import { useMediaQuery, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { validEmail } from "./RegEx";
import AxiosClient from "./AxiosClient";
import LogoAndSlogan from "../components/LogoAndSlogan";
import LinearProgress from "@material-ui/core/LinearProgress";
import SnackbarMessage from "../components/templates/SnackbarMessage";
import LoginGoogle from "./LoginGoogle";
const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "250px 0",
  },
  smallContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "200px 0",
    marginBottom: "0",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
  },
  loginCard: {
    width: "450px",
    background: "#F2F2F2",
    boxShadow:
      "0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px 20px 20px 20px",
    paddingBottom:"20px",
  },
  respLoginCard: {
    width: "100%",
    paddingBottom:"20px",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "42px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  loginButton: {
    width: "400px",
    color: "white",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  CreateButton: {
    marginTop: "20px",
    color: "white",
    marginBottom: "10PX",
    fontWeight: "bold",
  },
}));
const LoginForm = ({ sessionData, setSessionData }) => {
  const history = useHistory();
  const classes = useStyles();
  const smallScreen = !useMediaQuery("(min-width:900px)");
  const [snackbar, setSnackbar] = useState({
    message: "",
    active: false,
    severity: "success",
    afterClose: () => {},
  });
  const [activeProgressBar, setActiveProgressBar] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (!validEmail.test(values.email)) {
      errors.email = "Correo no valido";
    }
    if (!values.email) {
      errors.email = "Campo requerido";
    }
    if (!values.password) {
      errors.password = "Campo requerido";
    }
    return errors;
  };
  const activeSnackbar = (message, severity, afterClose) => {
    setSnackbar({ message, severity, afterClose, active: true });
  };
  const URL_AUTH = process.env.REACT_APP_API_AUTH;
  const onSubmit = async (values) => {
    const body = {
      email: values.email,
      password: values.password,
      tipo:"normal",
    };
    setActiveProgressBar(true);
    await AxiosClient.post(`${URL_AUTH}api/auth/signin`, body)
      .then((response) => {
        if ((response.status = 201)) {
          const jwt = response.data.accessToken;
          const id_auth = response.data.id;
          sessionStorage.setItem("jwt", jwt);
          sessionStorage.setItem("id", id_auth);
          setActiveProgressBar(false);
          history.push(`/`);
          window.location.reload();
        }
      })
      .catch((response) => {
        setActiveProgressBar(false);
        activeSnackbar("Correo o contraseña inválidos.", "error", () => {
          window.location.reload();
        });
      });
  };

  return (
    <div className={smallScreen ? classes.smallContainer : classes.Container}>
      <LogoAndSlogan />
      <div className={classes.loginContainer}>
        <Card
          className={smallScreen ? classes.respLoginCard : classes.loginCard}
        >
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <LinearProgress
                  style={{ display: activeProgressBar ? "" : "none" }}
                />
                <InputTextbox
                  name="email"
                  type="text"
                  placeholder="Correo Electrónico"
                />
                <InputTextbox
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                <div className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.loginButton}
                    type="submit"
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.CreateButton}
                    onClick={() => history.push("/register")}
                  >
                    Crear cuenta nueva
                  </Button>
                  <LoginGoogle />
                </div>
              </form>
            )}
          </Form>
        </Card>
        <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
      </div>
    </div>
  );
};

export default LoginForm;
