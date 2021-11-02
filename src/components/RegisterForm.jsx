import {React, useState} from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { Form, Field } from "react-final-form"
import { useMediaQuery, Button, Grid, Typography, Input, InputLabel } from "@material-ui/core"
import { TextField } from "final-form-material-ui"
import { validEmail, validPassword } from "./RegEx"
import { useHistory } from "react-router-dom"
import AxiosClient from "./AxiosClient"
import LogoAndSlogan from '../components/LogoAndSlogan'
import MaskedInput from 'react-text-mask'
import SnackbarMessage from '../components/templates/SnackbarMessage'
import LinearProgress from '@material-ui/core/LinearProgress'

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
}))
const RegisterForm = () => {
  const history = useHistory()
  const classes = useStyles()
  const [activeProgressBar, setActiveProgressBar] = useState(false)
  const smallScreen = !useMediaQuery("(min-width:811px)")
  const [phoneValue, setPhoneValue] = useState("591")
  const [snackbar, setSnackbar] = useState({
    message:"",
    active:false,
    severity:"success",
    afterClose:()=>{},
  })
  const validate = (values) => {
    const errors = {}
    if (!validEmail.test(values.email)) {
      errors.email = "No valido"
    }
    if (!values.username) {
      errors.username = "Campo requerido"
    }
    if (!values.lastname) {
      errors.lastname = "Campo requerido"
    }
    if (!validPassword.test(values.password)) {
      errors.password = "Debe contener 6 caracteres y un número"
    }
    if (values.confirmPassword !== values.password || !values.confirmPassword) {
      errors.confirmPassword = "Contraseñas no coinciden"
    }
    return errors
  }
  const URL_AUTH = process.env.REACT_APP_API_AUTH
  const URL = process.env.REACT_APP_API
  const onSubmit = async (values) => {
    setActiveProgressBar(true)
    const bodyAuth = {
      email: values.email,
      password: values.password,
      tipo:"normal",
    }
    AxiosClient.post(`${URL_AUTH}api/auth/signup`, bodyAuth)
      .then((response) => {
        if (response.status === 200) {
          const id_auth = response.data.id_autenticacion
          const body = {
            nombre: values.username,
            apellido: values.lastname,
            telefono: phoneValue,
            foto_url: "https://i.pinimg.com/originals/14/a8/cd/14a8cd8c46df11082f60ae15b97f47ff.jpg",
            id_autenticacion: parseInt(id_auth),
          }
          AxiosClient.post(`${URL}extended_form`, body)
            .then((response) => {
              if (response.status === 201) {
                setActiveProgressBar(false)
                activeSnackbar("Se ha registrado el usuario correctamente.", "success", ()=>{history.push(`/login`)})
              }
            })
            .catch((response) => {
              setActiveProgressBar(false)
              activeSnackbar(`${response}`, "error", ()=>{window.location.reload()})
            })
        }
      }) 
      .catch((response) => {
        setActiveProgressBar(false)
        activeSnackbar(`El correo: ${values.email} ya ha sido registrado.`, "error", ()=>{window.location.reload()})
      })
  }
  const activeSnackbar = (message, severity, afterClose)=>{
    setSnackbar({message, severity, afterClose, active:true})
  }
  const handleChangePhone = (event)=>{
    setPhoneValue(event.target.value)
  }
  return (
    <div className={classes.registerContainer}>
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
                <LinearProgress style={{display:(activeProgressBar)?"":"none"}}/>
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
                <div style={{display:'flex',justifyContent: "space-between",marginBottom:'10px'}}>
                  <InputLabel htmlFor="phone-input" style={{width:'30%', marginTop:'10px'}}>Número de celular:</InputLabel>
                  <Input
                    style={{width:'65%'}}
                    value={phoneValue}
                    onChange={handleChangePhone}
                    name="phone"
                    id="phone-input"
                    inputComponent={TextMaskCustom}
                  />
                </div>
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
      <SnackbarMessage snackbar={snackbar} setActive={setSnackbar}/>
    </div>
  )
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={['(','+', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/,/\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

export default RegisterForm

