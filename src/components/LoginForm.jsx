import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import LogoStart from '../images/logoStart.png'
import InputTextbox from './InputTextbox'
import { Form } from "react-final-form"
import {useMediaQuery, Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { validEmail} from './RegEx'
import AxiosClient from './AxiosClient'
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

    Container : {
        display: 'flex',
        paddingBottom: '5%'
    },
    loginContainer : {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        marginRight: '2%'
    },
    logoContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : {
        width: '70%',
        height: '40%',
    },
    loginCard : {
        width: '450px',
        height: '364px',
        background: '#F2F2F2',
        boxShadow: '0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '20px 20px 20px 20px',
    },
    respLoginCard : {
        width: '100%',
        height: '484px',
    },
    buttonContainer :{
        width: '100%',
        marginTop:'42px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    loginButton : {
        width: '400px',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: "10px",
    },
    CreateButton : {
        marginTop: '20px',
        color: 'white',
        marginBottom: '10PX',
        fontWeight: 'bold',

    },
})
)
const OkButton = withStyles((theme) => ({
    root: {
      marginRight: "auto",
      marginLeft: "auto",
    },
    }))(Button);
const LoginForm = ({sessionData, setSessionData}) => {
    const history = useHistory()
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const smallScreen = useMediaQuery('(min-width:420px)')
    const validate = values => {
        const errors = {}
        if(!validEmail.test(values.email)){
            errors.email = "Correo no valido"
        }
        if(!values.email){
           errors.email = "Campo requerido"
        }
        if(!values.password){
            errors.password = "Campo requerido"
        }
        return errors
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        history.push(`/login`)
    };
    const URL_AUTH = process.env.REACT_APP_API_AUTH
    const URL_API = process.env.REACT_APP_API
    const onSubmit = async values => {
        const body = {
            email: values.email,
            password: values.password
        }
        return AxiosClient.post(`${URL_AUTH}api/auth/signin`, body)
            .then(response => {
                if ((response.status = 201)) {
                    console.log("logged")
                    const jwt = response.data.accessToken
                    const id_auth = response.data.id
                    console.log(response)
                    sessionStorage.setItem("jwt", jwt)
                    sessionStorage.setItem("id", id_auth)
                    AxiosClient.get(`${URL_API}extended_form/${id_auth}`)
                        .then(response => {
                            console.log(response.data.data)
                            setSessionData({role: response.data.data.rol, id: id_auth})
                        })
                        .catch((response)=>{
                            console.log(response.status)
                            alert('Inicio de sesión fallido')
                            window.location.reload()
                        })
                    history.push(`/`)
                }
            })
            .catch((response) => {
                console.log(response.status)
                handleClickOpen();
            })
    }
    return (
        <div className={classes.Container}>
            <div className = {classes.logoContainer}>
                <img src={LogoStart} alt="logo Start" className = {classes.logo} />
                <Typography> Incubadora de proyectos sociales y ambientales </Typography>
            </div>

            <div className = {classes.loginContainer}>
                <Card className = {(smallScreen)?classes.loginCard:classes.respLoginCard}>
                    <Form onSubmit={onSubmit} validate={validate} >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <InputTextbox name="email" type="text" placeholder = "Correo Electrónico"/>
                                <InputTextbox name="password" type = "password" placeholder = "Contraseña"/>
                                <div className = {classes.buttonContainer}>
                                    <Button variant="contained" color="primary" className = {classes.loginButton} type = "submit">
                                        Iniciar Sesión
                                    </Button>
                                    <Button variant="contained" color="secondary" className = {classes.CreateButton} onClick = {()=> history.push("/register")}>
                                        Crear cuenta nueva
                                    </Button>
                                </div>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                <DialogTitle id="alert-dialog-title">
                                Credenciales incorrectos, porfavor intenta de nuevo!
                                </DialogTitle>
                                <DialogContent>
                                </DialogContent>
                                <DialogActions>
                                    <OkButton variant="contained" color="primary" onClick={handleClose} autoFocus>
                                        Ok  
                                    </OkButton>
                                </DialogActions>
                                </Dialog>
                            </form>
                        )}
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default LoginForm
