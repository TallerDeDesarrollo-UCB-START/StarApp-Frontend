import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import LogoStart from '../images/logoStart.png'
import InputTextbox from './InputTextbox'
import { Form } from "react-final-form"
import {useMediaQuery, Button, Link} from '@material-ui/core'
//import { validEmail} from './RegEx'
import AxiosClient from './AxiosClient'

const useStyles = makeStyles(theme => ({
    loginContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
    },
    logoContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : {
        width: '35%',
        marginTop: '30px',
    },
    loginCard : {
        width: '550px',
        height: '484px',
        background: '#FFFFFF',
        boxShadow: '0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px 6px 0px 0px',
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
        color: 'white',
        fontWeight: 'bold',
    },
})
)

const LoginForm = () => {
    const classes = useStyles()
    const smallScreen = useMediaQuery('(min-width:420px)')
    const validate = values => {
        const errors = {}
        // if(!validEmail.test(values.email)){
        //     errors.email = "Correo no valido"
        // }
        if(!values.username){
            errors.username = "Campo requerido"
        }
        if(!values.password){
            errors.password = "Campo requerido"
        }
        return errors
    }
    const URL = process.env.REACT_APP_API_AUTH
    const onSubmit = async values => {
        return AxiosClient.post(`${URL}api/auth/signin`, values)
            .then(response => {
                if ((response.status = 201)) {
                    console.log("logged")
                    console.log(response.data)
                }
            })
            .catch((response) => {
                console.log(response.status)
            })
        //alert('*inicio de sesión*')
    }
    return (
        <div className = {classes.loginContainer}>
            <Card className = {(smallScreen)?classes.loginCard:classes.respLoginCard}>
                <div className = {classes.logoContainer}>
                    <img src={LogoStart} alt="logo Start" className = {classes.logo}/>
                </div>
                <Form onSubmit={onSubmit} validate={validate} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <InputTextbox title = "Nombre de usuario" name="username" type="text" placeholder = "Juan Casas"/>
                            <InputTextbox title = "Contraseña" name="password" type = "password"/>
                            <div className = {classes.buttonContainer}>
                                <Button variant="contained" color="secondary" className = {classes.loginButton} type = "submit">
                                    Iniciar Sesión
                                </Button>
                                <Link href="#" onClick={()=>{}} style={{marginTop:'10px'}}>
                                    ¿Has olvidado tu contraseña?
                                </Link>
                            </div>
                        </form>
                    )}
                </Form>
            </Card>
        </div>
    )
}

export default LoginForm
