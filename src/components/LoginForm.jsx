import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputTextbox from "./InputTextbox";
import { Form } from "react-final-form";
import { useMediaQuery, Button, Typography, Grid } from "@material-ui/core";
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
    margin: "100px 0",
    marginBottom: "0",
  },
  loginContainer: {
    width: "400px",
    color: "white",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  loginCard: {
    width: "450px",
    height: "364px",
    background: "#F2F2F2",
    boxShadow:
      "0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px 20px 20px 20px",
    paddingBottom: "20px",
  },
  respLoginCard: {
    width: "100%",
    height: "484px",
    paddingBottom: "20px",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "20px",
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
}));
const LoginForm = ({ sessionData, setSessionData }) => {
  const history = useHistory();
  const classes = useStyles();
  const [validateButton, setValidateButton] = useState(false);
  const smallScreen = !useMediaQuery("(min-width:900px)");
  const [snackbar, setSnackbar] = useState({
    message: "",
    active: false,
    severity: "success",
    afterClose: () => {},
  });
  const [activeProgressBar, setActiveProgressBar] = useState(false);
  const validate = (values) => {
    setValidateButton(false);
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
    if (!errors.email && !errors.password) {
      setValidateButton(true);
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
      tipo: "normal",
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
        <Grid className={classes.loginContainer}>
          <Form onSubmit={onSubmit} validate={validate}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Typography style={{ marginLeft: "30px", fontWeight: "bold" }}>
                  Inicia Sesión
                </Typography>
                <LinearProgress
                  style={{ display: activeProgressBar ? "" : "none" }}
                />
                <InputTextbox name="email" type="text" placeholder="Correo *" />
                <InputTextbox
                  name="password"
                  type="password"
                  placeholder="Contraseña *"
                />
                  <Button
                    style={{
                      marginLeft: "34px",
                      width: "83%",
                      marginTop: "20px",
                    }}
                    variant="contained"
                    color="primary"
                    className={classes.loginButton}
                    type="submit"
                    disabled={validateButton ? false : true}
                  >
                    Iniciar Sesión
                  </Button>
                <div className={classes.buttonContainer}>
                  <LoginGoogle />
                </div>
              </form>
            )}
          </Form>
        </Grid>
        <SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
      </div>
    </div>
  );
};

export default LoginForm;
