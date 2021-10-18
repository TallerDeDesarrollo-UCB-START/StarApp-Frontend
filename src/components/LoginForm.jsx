import {React, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
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
        justifyContent: 'center',
        alignItems: 'center',
        margin:'250px 0',
    },
    smallContainer:{
        isplay: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'200px 0',
        marginBottom: '0',
    },
    loginContainer : {
        display: 'flex',
        justifyContent: 'center',
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
    const [alertMessage, setAlertMessage] = useState({active: false, message:"", handleConfirm:()=>{}})
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
        window.location.reload();
    };
    const URL_AUTH = process.env.REACT_APP_API_AUTH
    const onSubmit = async values => {
        const body = {
            email: values.email,
            password: values.password
        }
        setActiveProgressBar(true)
        return AxiosClient.post(`${URL_AUTH}api/auth/signin`, body)
            .then(response => {
                if ((response.status = 201)) {
                    const jwt = response.data.accessToken
                    const id_auth = response.data.id
                    sessionStorage.setItem("jwt", jwt)
                    sessionStorage.setItem("id", id_auth)
                    setActiveProgressBar(false)
                    history.push(`/`)
                    window.location.reload()
                }
            })
            .catch((response) => {
                console.log(response.status)
                handleClickOpen(TransitionDown,{ vertical: 'top', horizontal: 'center' });
            })
    }
    const activeAlertMessage = (message, handleConfirm)=>{
        setAlertMessage({active:true,message, handleConfirm})
      }
    return (
        <div className={smallScreen?classes.smallContainer:classes.Container}>
            <AlertMessage message = {alertMessage.message} handleConfirm={alertMessage.handleConfirm} active={alertMessage.active}/>
            <LogoAndSlogan/>
            <div className = {classes.loginContainer}>
                <Card className = {(smallScreen)?classes.respLoginCard:classes.loginCard}>
                    <Form onSubmit={onSubmit} validate={validate} >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <LinearProgress style={{display:(activeProgressBar)?"":"none"}}/>
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
