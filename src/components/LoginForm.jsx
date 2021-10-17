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
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

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
function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }
  
const LoginForm = ({sessionData, setSessionData}) => {
    const history = useHistory()
    const classes = useStyles()
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;
    const [transition, setTransition] = React.useState(undefined);

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
    const handleClickOpen = (Transition,newState) => {
        setTransition(() => Transition);
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
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
                handleClickOpen(TransitionDown,{ vertical: 'top', horizontal: 'center' });
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
                                    <Snackbar
                                        anchorOrigin={{ vertical, horizontal }}
                                        open={open}
                                        autoHideDuration={3000}
                                        onClose={handleClose}
                                        TransitionComponent={transition}
                                        key={transition ? transition.name : ''}
                                    >
                                        <Alert onClose={handleClose} severity="error" variant="filled">
                                            Credenciales incorrectos, intente de nuevo!
                                        </Alert>
                                    </Snackbar>
                                </div>                                
                            </form>
                        )}
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default LoginForm
